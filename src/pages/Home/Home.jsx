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
        const pokemonEntered = target.value.toLowerCase();
        setInputPokemon(pokemonEntered);
    };

    const searchPokemon = (event) => {
        event.preventDefault();
        if(inputPokemon === "") {
            console.log(inputPokemon)
            setTotalPokemonList(totalPokemonData);
            return;
        }

        const leakedPokemon = totalPokemonData?.filter(pokemonData => pokemonData.name.includes(inputPokemon));
        setTotalPokemonList(leakedPokemon);
    };

    const showAllPokemon = () => {
        setTotalPokemonList(totalPokemonData);
    };

    useEffect(() => {
        if(totalPokemonData) {
            setTotalPokemonList(totalPokemonData)
        };
    }, [totalPokemonData]);

    return (
        <>
            <h1 className={styles.title}>POKÉDEX</h1>
            <div className={styles.boxOptions}>
                <PokemonFinder handleInputPokemon={handleInputPokemon} searchPokemon={searchPokemon} />
                <button className={styles.buttonShowAllPokemon} onClick={showAllPokemon}>Mostrar todos los pokemon</button>
            </div>
            {
                totalPokemonList && <PokemonList totalPokemonList={totalPokemonList} />
            }
            <Outlet />
        </>
    );
};