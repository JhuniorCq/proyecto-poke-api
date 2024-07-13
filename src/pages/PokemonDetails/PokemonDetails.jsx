import { useLocation, useNavigate, useParams } from "react-router-dom";
import styles from "./PokemonDetails.module.css";
import { useEffect, useRef, useState } from "react";
import { addZeros } from "../../components/PokemonCard/js";
import { StatsPokemon } from "../../components/StatsPokemon/StatsPokemon";
import { PokemonType } from "../../components/PokemonType/PokemonType";

export const PokemonDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    state: { pokemonData },
  } = useLocation();
  const [classBoxDetails, setClassBoxDetails] = useState(
    styles.boxPokemonDetails
  );
  // const { responseGet: evolutionsPokemon, loadingGet: loadingEvolutions, errorGet } = useGet(`${URL_EVOLUTIONS}/${id}`);

  const imagePokemon = pokemonData.sprites.other["official-artwork"].front_default;
  const typesPokemon = pokemonData.types;
  const numberPokemon = addZeros(id);
  const namePokemon = pokemonData.name;

  const nameStats = pokemonData.stats.map((stat) => stat.stat.name);
  const valueStats = pokemonData.stats.map((stat) => stat.base_stat);
  const graphConfigurationStats = {
    graphicData: {
      label: "Stats",
      data: valueStats,
      fill: true,
      backgroundColor: "rgba(0, 255, 255, .4)",
    },
    options: {
      responsive: true,
      scales: {
        x: {
          ticks: { color: "rgb(0, 0, 0)" },
        },
        y: {
          min: 0,
          max: 255,
        },
      },
    },
  };

  const removeBoxPokemonDetails = () => {
    setClassBoxDetails(styles.boxPokemonDetails);
    setTimeout(() => {
      navigate("/");
    }, 500);
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
            <button
              className={styles.buttonCloseDetails}
              onClick={removeBoxPokemonDetails}
            >
              ❌
            </button>
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

// Para las estadisticas, cada rectangulito puede valer 17, así hago 15 rectangulitos para que sean 255 puntos que es el máximo
