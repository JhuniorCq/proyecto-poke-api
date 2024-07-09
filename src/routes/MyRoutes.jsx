import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { PokemonDetails } from "../pages/PokemonDetails/PokemonDetails";


export const MyRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<Home />}>
                <Route path="/pokemon/:id" element={<PokemonDetails />} />
            </Route>
            <Route path="/*" element={<div>Error 404</div>} />
        </Routes>
    );
};