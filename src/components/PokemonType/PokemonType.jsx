import styles from "./PokemonType.module.css";

export const PokemonType = ({ className, typeName }) => {
    return (
        <div className={`${styles.typePokemon} ${className}`}>
            {typeName}
        </div>
    )
};