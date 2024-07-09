import { useContext, useEffect, useState } from "react";
import { PokemonFinder } from "../../components/PokemonFinder/PokemonFinder";
import { PokemonList } from "../../components/PokemonList/PokemonList";
import { TotalPokemonContext } from "../../context/TotalPokemonContext/TotalPokemonContext";
import { Outlet } from "react-router-dom";
import styles from "./Home.module.css";

export const Home = () => {
    
    const { totalPokemonData, loadingGet, errorGet } = useContext(TotalPokemonContext);
    
    const [inputPokemon, setInputPokemon] = useState("");

    const [totalPokemonList, setTotalPokemonList] = useState(totalPokemonData);

    const handleInputPokemon = ({ target }) => {
        setInputPokemon(target.value);
    };

    const searchPokemon = () => {
        if(inputPokemon === "") {
            setTotalPokemonList(totalPokemonData);
            return;
        }

        const leakedPokemon = totalPokemonData?.filter(pokemonData => pokemonData.name.includes(inputPokemon));
        setTotalPokemonList(leakedPokemon);
    };

    useEffect(() => {
        if(totalPokemonData) {
            setTotalPokemonList(totalPokemonData)
        };
    }, [totalPokemonData]);

    return (
        <>
            <h1 className={styles.title}>POKÉDEX</h1>
            <PokemonFinder handleInputPokemon={handleInputPokemon} searchPokemon={searchPokemon} />
            {
                totalPokemonList && <PokemonList totalPokemonList={totalPokemonList} />
            }
            <Outlet />
        </>
    );
};