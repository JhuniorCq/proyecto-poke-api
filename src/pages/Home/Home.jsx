import { useContext, useEffect, useState } from "react";
import { PokemonFinder } from "../../components/PokemonFinder/PokemonFinder";
import { PokemonList } from "../../components/PokemonList/PokemonList";
import { TOTAL_AMOUNT_POKEMON, URL_POKEMON } from "../../constants";
import { useGet } from "../../components/hooks/useGet";
import { TotalPokemonContext } from "../../context/TotalPokemonContext/TotalPokemonContext";


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

    // useEffect(() => {
    //     if(inputPokemon) {
    //         const leakedPokemon = totalPokemonData?.filter(pokemonData => pokemonData.name.includes(inputPokemon));
    //         setTotalPokemonList(leakedPokemon);
    //     }
    // }, [inputPokemon]);

    useEffect(() => {
        if(totalPokemonData) {
            setTotalPokemonList(totalPokemonData)
            // console.log(totalPokemonList)
        };
    }, [totalPokemonData]);

    return (
        <>
            <h1>POKÉDEX</h1>
            <PokemonFinder handleInputPokemon={handleInputPokemon} searchPokemon={searchPokemon} />
            {
                totalPokemonList && <PokemonList totalPokemonList={totalPokemonList} />
            }
        </>
    );
};