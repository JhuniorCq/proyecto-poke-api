import { URL_TYPES_POKEMON } from "../../../constants";
import { useGet } from "../../hooks/useGet";

// Esto no se está usando aún
export const getAllTypesPokemon = () => {
    const { responseGet: { results } } = useGet(URL_TYPES_POKEMON);
    const listTypesPokemon = results?.map(item => {
        return {
            type: item.name
        }
    });

    return listTypesPokemon;
};

export const assignColorType = (typeName) => {

    if(typeName === "normal") return "colorTypeNormal";
    else if(typeName === "fighting") return "colorTypeFighting";
    else if(typeName === "flying") return "colorTypeFlying";
    else if(typeName === "poison") return "colorTypePoison";
    else if(typeName === "ground") return "colorTypeGround";
    else if(typeName === "rock") return "colorTypeRock";
    else if(typeName === "bug") return "colorTypeBug";
    else if(typeName === "ghost") return "colorTypeGhost";
    else if(typeName === "steel") return "colorTypeSteel";
    else if(typeName === "fire") return "colorTypeFire";
    else if(typeName === "water") return "colorTypeWater";
    else if(typeName === "grass") return "colorTypeGrass";
    else if(typeName === "electric") return "colorTypeElectric";
    else if(typeName === "psychic") return "colorTypePsychic";
    else if(typeName === "ice") return "colorTypeIce";
    else if(typeName === "dragon") return "colorTypeDragon";
    else if(typeName === "dark") return "colorTypeDark";
    else if(typeName === "fairy") return "colorTypeFairy";
    else if(typeName === "stellar") return "";
    else if(typeName === "unknown") return "";
}

export const addZeros = (numberPokemon) => {
    let newNumberPokemon = numberPokemon;

    while(newNumberPokemon.length < 4) {
        newNumberPokemon = "0".concat(newNumberPokemon);
    };
    
    return "#" + newNumberPokemon;
}