const pokemonDataType = POKEMON.pokemon

//SELCT FILTER BY TYPE

var showFilteredByType = () => {


const PokemonType = pokemonData.forEach( (pokemon) => {
  var pokeArray3 = pokemon.type;
  //console.log(pokeArray3[0]);

  for (var i = 0; i < pokeArray3.length; i++) {
 
   switch (pokeArray3[i]) {
    
        case  "Grass" :
            //console.log("holi switch"+pokemon.id+ "<br>");
            
        break;
        case "Poison":
            //console.log("veneno "+pokemon.id+ "<br>");

        break;


    default:
        //console.log("no "+pokemon.id+ "<br>");
         break;     
    }
    
 
} 
} )

}


const createOptionNodes = () => {
  
  
  var elementJoinSelectors = document.createElement("select");
  
  elementJoinSelectors.setAttribute("class","selector");

let typesArray = ["Tipo de Pokémon",
                  "Grass",
                  "Psychic",
                  "Water",
                  "Ghost",                  
                  "Ground",
                  "Rock",
                  "Hada",
                  "Volador",
                  "Dragon",
                  "Insecto",
                  "Fuego",
                  "Eléctrico",
                  "Hielo",
                  "Veneno",
                  "Acero",
                  "Normal",
                  "Siniestro"]




for (var i = 0; i < typesArray.length; i++) {
  var elementOption = document.createElement("option");
  elementOption.setAttribute("value",typesArray[i]);
  var contentOption = document.createTextNode(typesArray[i]);
  elementOption.appendChild(contentOption);
  elementJoinSelectors.appendChild(elementOption);
  
}
document.getElementById("mainForm").appendChild(elementJoinSelectors);

//console.log(valueTypeExtraction);


var filtringPokemonByType = document.querySelector(".selector");
console.log(filtringPokemonByType);


filtringPokemonByType.addEventListener("click",showFilteredByType);

}



createOptionNodes()

