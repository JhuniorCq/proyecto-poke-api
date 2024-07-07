import { PokemonCard } from "../PokemonCard/PokemonCard";
import styles from "./PokemonList.module.css"
import { useState } from "react";
import { AMOUNT_POKEMON_SHOW, URL_POKEMON } from "../../constants";
import { useGet } from "../hooks/useGet";

export const PokemonList = () => {

    // const AMOUNT_POKEMON_SHOW = 20;

    // Ya lo seeee, en cada click se le sumará MÁS 20 a la prop "index + 1"
    const [quantityIncrease, setQuantityIncrease] = useState(0);

    const showNextSheet = () => {
        setQuantityIncrease(quantityIncrease + AMOUNT_POKEMON_SHOW);
    };

    const showPreviousSheet = () => {
        if(quantityIncrease >= AMOUNT_POKEMON_SHOW) setQuantityIncrease(quantityIncrease - AMOUNT_POKEMON_SHOW);
    }

    // Creo que incluso acá NO es necesario llamar a la API, porque solo la uso para ITERAR el MAP X veces
    const { responseGet, loadingGet, errorGet } = useGet(`${URL_POKEMON}?limit=${AMOUNT_POKEMON_SHOW}&offset=${quantityIncrease}`);
    const pokemonData = responseGet.results;

    // const pokemonList = Array(AMOUNT_POKEMON_SHOW).fill(null);
    return (
        loadingGet ? <div>Cargando ...</div>: (
            <>
                <div className={styles.boxButtons}>
                    {
                        quantityIncrease > 0 && (<button onClick={showPreviousSheet}>Anterior</button>)
                    }
                    <button onClick={showNextSheet}>Siguiente</button>
                </div>
                <div className={styles.boxPokemonlist}>
                    {
                        pokemonData && pokemonData.map((pokemon, index) => {
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