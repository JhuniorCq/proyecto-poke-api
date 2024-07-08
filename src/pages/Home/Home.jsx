import { useContext, useEffect, useState } from "react";
import { PokemonFinder } from "../../components/PokemonFinder/PokemonFinder";
import { PokemonList } from "../../components/PokemonList/PokemonList";
import { TOTAL_AMOUNT_POKEMON, URL_POKEMON } from "../../constants";
import { useGet } from "../../components/hooks/useGet";
import { TotalPokemonContext } from "../../context/TotalPokemonContext/TotalPokemonContext";


export const Home = () => {
    
    const { totalPokemonData, loadingGet, errorGet } = useContext(TotalPokemonContext);
    
    const [inputPokemon, setInputPokemon] = useState(null);

    const [totalPokemonList, setTotalPokemonList] = useState(totalPokemonData);

    const handleInputPokemon = ({ target }) => {
        if(!target.value) return;

        console.log(target.value);
        setInputPokemon(target.value);
    };

    const searchPokemon = () => {
        if(inputPokemon) {
            const leakedPokemon = totalPokemonData?.filter(pokemonData => pokemonData.name.includes(inputPokemon));
            setTotalPokemonList(leakedPokemon);
        } else {
            alert("El input está vacío");
        }
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

    // useEffect(() => {
    //     console.log(totalPokemonList, "totalPokemonList");
    // }, [totalPokemonList]);

    return (
        <>
            <h1>POKÉDEX</h1>
            <PokemonFinder handleInputPokemon={handleInputPokemon} searchPokemon={searchPokemon} />
            {
                totalPokemonList && <PokemonList totalPokemonList={totalPokemonList} />
            }
            {
                // totalPokemonList && console.log(totalPokemonList)
            }
            {/* <PokemonList /> */}
        </>
    );
};