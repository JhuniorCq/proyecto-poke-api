import { useContext, useEffect, useState } from "react";
import { PokemonFinder } from "../../components/PokemonFinder/PokemonFinder";
import { PokemonList } from "../../components/PokemonList/PokemonList";
import { TotalPokemonContext } from "../../context/TotalPokemonContext/TotalPokemonContext";
import { Outlet } from "react-router-dom";
import { Loader } from "../../components/Loader/Loader";
import styles from "./Home.module.css";

export const Home = () => {
  const { totalPokemonData, loadingGet, errorGet } =
    useContext(TotalPokemonContext);

  const [inputPokemon, setInputPokemon] = useState("");

  const [totalPokemonList, setTotalPokemonList] = useState(totalPokemonData);

  const [minimumRange, setMinimunRange] = useState(0);

  const updateMinimunRange = (value) => {
    setMinimunRange(value);
  };

  const handleInputPokemon = ({ target }) => {
    const pokemonEntered = target.value.toLowerCase();
    setInputPokemon(pokemonEntered);
  };

  const searchPokemon = (event) => {
    event.preventDefault();
    if (inputPokemon === "") {
      setTotalPokemonList(totalPokemonData);
      return;
    }

    const leakedPokemon = totalPokemonData?.filter((pokemonData) =>
      pokemonData.name.includes(inputPokemon)
    );
    setTotalPokemonList(leakedPokemon);
  };

  const showAllPokemon = () => {
    setTotalPokemonList(totalPokemonData);
    setMinimunRange(0);
  };

  useEffect(() => {
    if (totalPokemonData) {
      setTotalPokemonList(totalPokemonData);
    }
  }, [totalPokemonData]);

  return loadingGet ? (
    <Loader />
  ) : (
    <>
      <div className={styles.boxOptions}>
        <PokemonFinder
          handleInputPokemon={handleInputPokemon}
          searchPokemon={searchPokemon}
        />
        <button
          className={styles.buttonShowAllPokemon}
          onClick={showAllPokemon}
        >
          Volver a la lista inicial
        </button>
      </div>
      {totalPokemonList && (
        <PokemonList
          totalPokemonList={totalPokemonList}
          minimumRange={minimumRange}
          setMinimunRange={updateMinimunRange}
        />
      )}
      <Outlet />
    </>
  );
};
