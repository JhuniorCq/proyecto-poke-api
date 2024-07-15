import { FaSearch } from "react-icons/fa";
import styles from "./PokemonFinder.module.css";

export const PokemonFinder = ({ handleInputPokemon, searchPokemon }) => {
    return (
        <div className={styles.boxPokemonFinder}>
            <label htmlFor="searchPokemon">Nombre del Pokemón</label>
            <form className={styles.pokemonFinder} onSubmit={searchPokemon}>
                <input onChange={handleInputPokemon} id="searchPokemon" name="searchPokemon" type="text" />
                <button>
                    <FaSearch className={styles.iconSearch} />
                </button>
            </form>
        </div>
    );
};