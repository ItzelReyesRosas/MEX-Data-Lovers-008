const pokemonData = POKEMON.pokemon

console.log("holi");  
// SHOW DATA FUNCTION ya está
window.onload = () => {

const allData = pokemonData.forEach( (poke) => {
    var elementJoinData =  document.createElement("div");
    elementJoinData.setAttribute("class","singlePokemon");
    var pokeArray = [poke.name,"img",poke.type];
  
  for (var i = 0; i < pokeArray.length; i++) {
    
          if (pokeArray[i]==="img"){
                    
            var pokeElement = document.createElement("img");
            pokeElement.setAttribute("src", poke.img);
            pokeElement.setAttribute("class","pokeImg" )
          }else {
            var pokeElement = document.createElement("p");
            pokeElement.setAttribute("class", "pokeName");
          }  
            let pokeContent = document.createTextNode(pokeArray[i]);
            pokeElement.appendChild(pokeContent);
            elementJoinData.appendChild(pokeElement);
            document.getElementById("showPokemons")
                                    .appendChild(elementJoinData);
  }
  
  
  });
  }

window.onload()


// SORT FUNCTION
const sortedBySpawnProbability = pokemonData.sort( (a,b) => {
     
    if (a.spawn_chance < b.spawn_chance) {
      
      console.log("if");
      return 1;

      }   
      
 });

const createNodes2 = sortedBySpawnProbability.forEach( (poke2) => {
      var elementJoinSortedData =  document.createElement("div");
      elementJoinSortedData.setAttribute("class","singleSortedPokemon");
      var pokeArray2 = [poke2.name,"img",poke2.spawn_chance];

for (var i = 0; i < pokeArray2.length; i++) {
  
        if (pokeArray2[i]==="img"){
                  
          var pokeSortedElement = document.createElement("img");
          pokeSortedElement.setAttribute("src", poke2.img);
          pokeSortedElement.setAttribute("class","pokeSortedImg" )
        }else {
          var pokeSortedElement = document.createElement("p");
          pokeSortedElement.setAttribute("class", "pokeSortedName");
        }  
          let pokeSortedContent = document.createTextNode(pokeArray2[i]);
          pokeSortedElement.appendChild(pokeSortedContent);
          elementJoinSortedData.appendChild(pokeSortedElement);
          document.getElementById("showSortedPokemons")
                                  .appendChild(elementJoinSortedData);
}

});


// FILTER FUCTION
const createNodes = (place) => {

  let keyExtraction = Object.keys(place[0])
  let valueExtraction = Object.values(place[0])
  var searchPokemonCard = document.createElement("div");
  searchPokemonCard.setAttribute("class","singlePokemonCard");

  for (let i = 0; i < keyExtraction.length; i++) {
  
                  if (keyExtraction[i]==="img") {
                     
                    var element = document.createElement("img"); 
                    element.setAttribute("src",valueExtraction[i]);
                    element.setAttribute("class", keyExtraction[i]+ "en");

                  } else {
                   
                    var element = document.createElement("p");
                    element.setAttribute("class",keyExtraction[i]);
                  }         
         
         let content = document.createTextNode(keyExtraction[i]    +  ": "  +
                                                    valueExtraction[i]);          
          element.appendChild(content); 
          searchPokemonCard.appendChild(element);

          document.getElementById("showFilteredPokemons").appendChild(searchPokemonCard);           
  }

}


const showPokemonFiltered = () => {
      let searchedPokemon = document.getElementById("pokemonName").value;
     
      let searchedPokemonConverted = searchedPokemon[0]               .toUpperCase() +
                                     searchedPokemon.slice(1)         .toLowerCase()
         
      var filteredPokemon = pokemonData
                                    .filter(      (filtered) => {
                                                                return filtered.name === searchedPokemonConverted;
                                                                })      
   
      event.preventDefault();       
      createNodes(filteredPokemon);    
 
    
}

const filtrarPokemon =document.getElementById("searchPokemon");
filtrarPokemon.addEventListener("click",showPokemonFiltered);



