import { TOTAL_AMOUNT_POKEMON, URL_POKEMON } from "../../constants";
import { useGet } from "../../hooks/useGet";
import { TotalPokemonContext } from "./TotalPokemonContext";

export const TotalPokemonProvider = ({ children }) => {
    const { responseGet, loadingGet, errorGet } = useGet(`${URL_POKEMON}?limit=${TOTAL_AMOUNT_POKEMON}&offset=0`);
    const totalPokemonData = responseGet.results;

    return (
        <TotalPokemonContext.Provider value={{totalPokemonData, loadingGet, errorGet}}>
            {children}
        </TotalPokemonContext.Provider>
    );
};