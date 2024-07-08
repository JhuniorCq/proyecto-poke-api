import styles from "./PokemonFindes.module.css";
import { FaSearch } from "react-icons/fa";

export const PokemonFinder = ({ handleInputPokemon, searchPokemon }) => {
    return (
        <div className={styles.boxPokemonFinder}>
            <label htmlFor="searchPokemon">Nombre del Pokemón</label>
            <div className={styles.pokemonFinder}>
                <input onChange={handleInputPokemon} id="searchPokemon" name="searchPokemon" type="text" />
                <button onClick={searchPokemon}>
                    <FaSearch />
                </button>
            </div>
        </div>
    );
};