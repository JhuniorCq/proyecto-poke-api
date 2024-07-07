import { Link } from "react-router-dom";
import { URL_POKEMON } from "../../constants";
import { useGet } from "../hooks/useGet";
import { addZeros } from "./js";
import styles from "./PokemonCard.module.css";

export const PokemonCard = ({ namePokemon }) => {
    
    const { responseGet: pokemonData, loadingGet, errorGet } = useGet(`${URL_POKEMON}/${namePokemon}`);

    // responseGet salía como [] porque es su valor inicial hasta que la petición get a la PokeAPI me retorne otro valor (cuando retorna otro valor es cuando automáticametne deja de ser [] y ya es un ARRAY LLENO)
    // Creo que con el pokemonData.length === 0 me ahorro el hecho de estar usando el Operador "?" cuando use las propieades de un Objeto
    if(!pokemonData || pokemonData.length === 0 ) return console.log("pokemonData es un falsy o es un Array vacío");
    
    const imagePokemon = pokemonData?.sprites?.other["official-artwork"]?.front_default;
    const typesPokemon = pokemonData.types;
    const idPokemon = pokemonData?.id;
    const numberPokemon = addZeros(idPokemon.toString());

    return (
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