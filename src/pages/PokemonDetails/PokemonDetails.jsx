import { Link, useLocation, useParams } from "react-router-dom";
import styles from "./PokemonDetails.module.css";
import { useEffect, useRef, useState } from "react";

export const PokemonDetails = () => {
    const { id } = useParams();

    const [classBoxDetails, setClassBoxDetails] = useState(styles.boxPokemonDetails);

    // Cada vez que se acceda a PokemonDetails se ejecutará este useEffect -> Esto es así porque al presiona el Botón CERRAR nos estamos REDIRIGIENDO a otra Ruta, por lo que "PokemonDetails" se DESMONTARÁ -> Entonces cuando se vuelva a RENDERIZAR "PokemonDetails" será como si fuera PRIMERA RENDERIZACIÓN (aunque en realidad sí lo es cada que se acceda él)

    useEffect(() => {
        setClassBoxDetails(`${styles.boxPokemonDetails} ${styles.showBoxPokemonDetails}`)
    }, []);

    const removeBoxPokemonDetails = () => {
        setTimeout(() => {
            setClassBoxDetails(styles.boxPokemonDetails);
        }, 1000);
    }

    return (
        <div className={classBoxDetails}>
            Detalles del Pokemon {id}
            <Link to="/" onClick={removeBoxPokemonDetails}>CERRAR</Link>
        </div>
    )
};