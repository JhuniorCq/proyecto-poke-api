import { PokemonCard } from "../PokemonCard/PokemonCard";
import styles from "./PokemonList.module.css"
import { useEffect, useState } from "react";
import { AMOUNT_POKEMON_SHOW, URL_POKEMON } from "../../constants";
import { useGet } from "../hooks/useGet";

export const PokemonList = ({ totalPokemonList }) => {
    
    const [minimumRange, setMinimunRange] = useState(0);

    const showNextSheet = () => {
        setMinimunRange(minimumRange + AMOUNT_POKEMON_SHOW);
    };

    const showPreviousSheet = () => {
        if(minimumRange >= AMOUNT_POKEMON_SHOW) setMinimunRange(minimumRange - AMOUNT_POKEMON_SHOW);
    }

    // const { responseGet, loadingGet, errorGet } = useGet(`${URL_POKEMON}?limit=${AMOUNT_POKEMON_SHOW}&offset=${minimumRange}`);
    // const pokemonData = responseGet.results;

    // Para el buscador sería usar URL_POKEMON con el limit en 1025 y offset en 0, para que así me dé a todos los pokemon y ya ahí recién podré FILTRAR a los pokemon

    // console.log(totalPokemonList, "totalPokemonList")
    const [pokemonData, setPokemonData] = useState(null);

    useEffect(() => {
        const pokemonDataList = totalPokemonList.slice(minimumRange, AMOUNT_POKEMON_SHOW + minimumRange);
        // console.log(pokemonDataList)
        setPokemonData(pokemonDataList);
    }, [minimumRange, totalPokemonList]);

    // useEffect(() => {
    //     setPokemonData(totalPokemonList);
    // }, [totalPokemonList]);

    return (
        false ? <div>Cargando ...</div>: (
            <>
                <div className={styles.boxButtons}>
                    {
                        minimumRange > 0 && (<button onClick={showPreviousSheet}>Anterior</button>)
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