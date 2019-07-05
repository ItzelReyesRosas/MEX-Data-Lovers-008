const pokemonData = POKEMON.pokemon
//console.log(pokemonData)

window.onload = () => {

const allData = pokemonData.forEach( (poke) => {
  var elementJoinData =  document.createElement("div");
  var pokeArray = [poke.name,"img",poke.type];

for (var index = 0; index < pokeArray.length; index++) {
  
        if (pokeArray[index]==="img"){
                  
          var pokeElement = document.createElement("img");
          pokeElement.setAttribute("src", poke.img);
          pokeElement.setAttribute("class","pokeImg" )
        }else {
          var pokeElement = document.createElement("p");
          pokeElement.setAttribute("class", "pokeName");
        }  
          let pokeContent = document.createTextNode(pokeArray[index]);
          pokeElement.appendChild(pokeContent);
          elementJoinData.appendChild(pokeElement);
          document.getElementById("showPokemons")
                                  .appendChild(elementJoinData);
}


});
}


const createNodes = (place) => {
 /* console.log("holi nodos");
  console.log(place[0]);
  console.log(place.length);*/
  let keyExtraction = Object.keys(place[0])
  let valueExtraction = Object.values(place[0])
  var searchPokemonCard = document.createElement("div");

  for (let i = 0; i < keyExtraction.length; i++) {
  //console.log(classExtraction[i]);
                  if (keyExtraction[i]==="img") {
                    //console.log(classExtraction[i]);   
                    var element = document.createElement("img"); 
                    element.setAttribute("src",valueExtraction[i]);
                    element.setAttribute("class", keyExtraction[i]+ "en");

                  } else {
                    //console.log("holi else");  
                    var element = document.createElement("p");
                    element.setAttribute("class",keyExtraction[i]);
                  }         
         
         let content = document.createTextNode(keyExtraction[i]    +  ": "  +
                                                    valueExtraction[i]);          
          element.appendChild(content); 
          searchPokemonCard.appendChild(element);

          document.getElementById("showFilteredPokemon").appendChild(searchPokemonCard);           
  }

}


const showPokemonFiltered = () => {
      let searchedPokemon = document.getElementById("pokemonName").value;
      //console.log(searchedPokemon);       
      let searchedPokemonConverted = searchedPokemon[0]               .toUpperCase() +
                                     searchedPokemon.slice(1)         .toLowerCase()
      //console.log(searchedPokemonConverted)    
      var filteredPokemon = pokemonData
                                    .filter(      (filtered) => {
                                                                return filtered.name === searchedPokemonConverted;
                                                                })      
      //console.log(filteredPokemon[0].egg);  
      event.preventDefault();       
      createNodes(filteredPokemon);    
// console.log(filteredPokemon); 
    
}

const filtrarPokemon =document.getElementById("searchPokemon");
filtrarPokemon.addEventListener("click",showPokemonFiltered);


document.body.appendChild(elementJoinData);
