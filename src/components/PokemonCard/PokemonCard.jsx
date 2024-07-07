import { Link } from "react-router-dom";
import { URL_POKEMON } from "../../constants";
import { useGet } from "../hooks/useGet";
import { addZeros } from "./js";
import styles from "./PokemonCard.module.css";

export const PokemonCard = ({ id }) => {
    
    const { responseGet: pokemonData, loadingGet, errorGet } = useGet(`${URL_POKEMON}/${id}`);

    // console.log(pokemonData);
    
    const namePokemon = pokemonData.name;
    const imagePokemon = pokemonData?.sprites?.other["official-artwork"]?.front_default;
    const typesPokemon = pokemonData.types;
    const numberPokemon = addZeros(id.toString());

    return (
        // <div>Pokemon</div>
        <Link className={styles.pokemonCard}>
            {
                loadingGet ? <div>Cargando ...</div>: (
                    <>
                        <div className={styles.boxImagePokemon}>
                            <img src={imagePokemon} alt={namePokemon} className={styles.imagePokemon} />
                        </div>
                        <div className={styles.boxNamePokemon}>
                            <p>{numberPokemon}</p>
                            <h2>{namePokemon}</h2>
                        </div>
                        <div className={styles.boxTypesPokemon}>
                            {
                                typesPokemon && typesPokemon.map((typePokemon, index) => (
                                    <div key={index} className={`${styles.typePokemon} ${typePokemon.type.name}Color`}>
                                        {typePokemon.type.name}
                                    </div>
                                ))
                            }
                        </div>
                    </>
                )
            }
        </Link>
    );
};