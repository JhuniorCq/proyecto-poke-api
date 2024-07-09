import { PokemonCard } from "../PokemonCard/PokemonCard";
import styles from "./PokemonList.module.css"
import { useEffect, useRef, useState } from "react";
import { AMOUNT_POKEMON_SHOW } from "../../constants";

export const PokemonList = ({ totalPokemonList }) => {
    
    const [minimumRange, setMinimunRange] = useState(0);
    // Usaré useRef, porque me permite CREAR un valor que NO se RE-DEFINIRÁ en cada Renderizado, y que cuando cambie NO genere un RENDERIZADO
    let remainingPokemonQuantity = useRef(totalPokemonList.length - AMOUNT_POKEMON_SHOW);

    const showNextSheet = () => {
        if(remainingPokemonQuantity.current <= 0) return;
        
        // Con esto me aseguro de que si ya NO hay pokemons para mostrar -> ya NO se pasará a la siguiente página
        remainingPokemonQuantity.current = remainingPokemonQuantity.current - AMOUNT_POKEMON_SHOW;
        console.log(remainingPokemonQuantity)
        setMinimunRange(minimumRange + AMOUNT_POKEMON_SHOW);
    };

    const showPreviousSheet = () => {
        remainingPokemonQuantity.current = remainingPokemonQuantity.current + AMOUNT_POKEMON_SHOW;
        if(minimumRange < AMOUNT_POKEMON_SHOW) return;
        setMinimunRange(minimumRange - AMOUNT_POKEMON_SHOW)
    }

    const [pokemonSlice, setPokemonSlice] = useState(null);
    
    useEffect(() => {
        const newPokemonSlice = totalPokemonList.slice(minimumRange, AMOUNT_POKEMON_SHOW + minimumRange);
        setPokemonSlice(newPokemonSlice);
    }, [minimumRange, totalPokemonList]);

    // Esto es para cada vez que se tenga un nuevo FILTRADO de Pokemons
    useEffect(() => {
        setMinimunRange(0);
        // Lo inicializo restándole 20 porque YA se están mostrando 20
        remainingPokemonQuantity.current = totalPokemonList.length - AMOUNT_POKEMON_SHOW;
    }, [totalPokemonList]);

    return (
        false ? <div>Cargando ...</div>: (
            <>
                <div className={styles.boxButtons}>
                    {
                        minimumRange > 0 && (<button onClick={showPreviousSheet}>Anterior</button>)
                    }
                    {
                        remainingPokemonQuantity.current > 0 && <button onClick={showNextSheet}>Siguiente</button>
                    }
                </div>
                <div className={styles.boxPokemonlist}>
                    {
                        pokemonSlice && pokemonSlice.map((pokemon, index) => {
                            return (
                                <PokemonCard 
                                key={index}
                                namePokemon={pokemon.name}
                            />
                            )
                        })
                    }
                </div>
            </>
        )
    );
};

// HAY 1025 POKEMON en TOTAL