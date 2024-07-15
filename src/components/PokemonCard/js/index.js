export const addZeros = (numberPokemon) => {
    let newNumberPokemon = numberPokemon;

    while(newNumberPokemon.length < 4) {
        newNumberPokemon = "0".concat(newNumberPokemon);
    };
    
    return "#" + newNumberPokemon;
}