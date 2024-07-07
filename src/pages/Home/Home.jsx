import { PokemonList } from "../../components/PokemonList/PokemonList";


export const Home = () => {


    return (
        <>
            <h1>POKÉDEX</h1>

            <form>
                <label htmlFor="searchPokemon">Buscar</label>
                <input id="searchPokemon" name="searchPokemon" type="text" />
            </form>

            <div>
                <button>Retroceder</button> | <button>Avanzar</button>
            </div>

            <PokemonList />
        </>
    );
};