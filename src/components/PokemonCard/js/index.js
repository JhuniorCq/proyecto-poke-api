import { URL_TYPES_POKEMON } from "../../../constants";
import { useGet } from "../../../hooks/useGet";

// Esto no se está usando aún
export const getAllTypesPokemon = () => {
    const { responseGet: { results } } = useGet(URL_TYPES_POKEMON);
    const listTypesPokemon = results?.map(item => {
        return {
            type: item.name
        }
    });

    return listTypesPokemon;
};

export const addZeros = (numberPokemon) => {
    let newNumberPokemon = numberPokemon;

    while(newNumberPokemon.length < 4) {
        newNumberPokemon = "0".concat(newNumberPokemon);
    };
    
    return "#" + newNumberPokemon;
}