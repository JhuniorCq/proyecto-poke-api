import { PokemonCard } from "../PokemonCard/PokemonCard";
import styles from "./PokemonList.module.css"
import { useEffect, useState } from "react";
import { URL_POKEMON } from "../../constants";
import { useGet } from "../hooks/useGet";

export const PokemonList = () => {

    // Creo que incluso acá NO es necesario llamar a la API, porque solo la uso para ITERAR el MAP X veces
    // const { responseGet, loadingGet, errorGet } = useGet(URL_POKEMON);
    // const { results: pokemonList } = responseGet;
    const pokemonList = Array(20).fill(null);
    return (
        <div className={styles.boxPokemonlist}>
            {
                // loadingGet ? <div>Cargando ...</div>: (
                    pokemonList && pokemonList.map((_, index) => {
                        return (
                            <PokemonCard 
                            key={index}
                            id={index + 1}
                        />
                        )
                    })
                // )
            }
        </div>
    );
};