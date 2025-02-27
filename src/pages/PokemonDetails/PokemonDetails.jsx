import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { addZeros } from "../../components/PokemonCard/js";
import { StatsPokemon } from "../../components/StatsPokemon/StatsPokemon";
import { PokemonType } from "../../components/PokemonType/PokemonType";
import { AiFillCloseSquare } from "react-icons/ai";
import styles from "./PokemonDetails.module.css";

export const PokemonDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { state: { pokemonData } } = useLocation();
  const [classBoxDetails, setClassBoxDetails] = useState(styles.boxPokemonDetails);

  const imagePokemon = pokemonData.sprites.other["official-artwork"].front_default;
  const typesPokemon = pokemonData.types;
  const numberPokemon = addZeros(id);
  const namePokemon = pokemonData.name;

  const nameStats = pokemonData.stats.map((stat) => {
    return stat.stat.name[0].toUpperCase() + stat.stat.name.slice(1);
  });
  
  const valueStats = pokemonData.stats.map((stat) => stat.base_stat);
  const graphConfigurationStats = {
    graphicData: {
      data: valueStats,
      fill: true,
      backgroundColor: "rgba(224, 15, 15, 0.4)",
    },
    options: {
      responsive: true,
      scales: {
        x: {
          ticks: { color: "rgba(255, 255, 255, .8)" },
          grid: { color: "rgba(255, 255, 255, .2)" }
        },
        y: {
          min: 0,
          max: 255,
          ticks: { color: "rgba(255, 255, 255, .8)" },
          grid: { color: "rgba(255, 255, 255, .2)" }
        },
      },
      plugins: {
        legend: {
          display: false
        }
      }
    },
  };

  const removeBoxPokemonDetails = () => {
    setClassBoxDetails(styles.boxPokemonDetails);
    setTimeout(() => {
      navigate("/");
    }, 400);
  };

  // Cada vez que se acceda a PokemonDetails se ejecutará este useEffect -> Esto es así porque al presiona el Botón CERRAR nos estamos REDIRIGIENDO a otra Ruta, por lo que "PokemonDetails" se DESMONTARÁ -> Entonces cuando se vuelva a RENDERIZAR "PokemonDetails" será como si fuera PRIMERA RENDERIZACIÓN (aunque en realidad sí lo es cada que se acceda él)
  useEffect(() => {
    setClassBoxDetails(
      `${styles.boxPokemonDetails} ${styles.showBoxPokemonDetails}`
    );
  }, []);

  return (
    <div className={styles.backgroundPokemonDetails}>
      <div className={classBoxDetails}>
        <div className={styles.boxRowOne}>
          <div className={styles.boxLeftRowOne}>
            <p className={styles.numberPokemon}>{numberPokemon}</p>
            <h2 className={styles.namePokemon}>{namePokemon}</h2>
          </div>
          <div className={styles.boxRightRowOne}>
            <AiFillCloseSquare
              className={styles.buttonCloseDetails}
              onClick={removeBoxPokemonDetails}
            />
          </div>
        </div>

        <div className={styles.boxImagePokemon}>
          <img src={imagePokemon} alt={namePokemon} />
        </div>

        <div className={styles.boxTypesPokemon}>
          {typesPokemon &&
            typesPokemon.map((typePokemon, index) => (
              <PokemonType
                key={index}
                className={`${typePokemon.type.name}Color`}
                typeName={typePokemon.type.name}
              />
            ))}
        </div>

        <StatsPokemon
          graphConfigurationStats={graphConfigurationStats}
          nameStats={nameStats}
          valueStats={valueStats}
        />
      </div>
    </div>
  );
};
