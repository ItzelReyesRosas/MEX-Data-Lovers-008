const pokemonDataS = POKEMON.pokemon

const spawnChance = () => {

const sortedBySpawnChance = pokemonDataS.sort( (a,b) => {
   
    return  b.spawn_chance  - a.spawn_chance
      
 });

const createNodes2 = sortedBySpawnChance.forEach( (poke2) => {
      var elementJoinSortedData =  document.createElement("div");
      elementJoinSortedData.setAttribute("class","singleSortedPokemon");
      var pokeArray2 = [poke2.name,"img",poke2.spawn_chance];

for (var i = 0; i < pokeArray2.length; i++) {
  
        if (pokeArray2[i]==="img"){
                  
          var pokeSortedElement = document.createElement("img");
          pokeSortedElement.setAttribute("src", poke2.img);
          pokeSortedElement.setAttribute("class","pokeSortedImg" )

        }else if (pokeArray2[i]===poke2.name) {
          var pokeSortedElement = document.createElement("p");
          pokeSortedElement.setAttribute("class", "pokeSortedName");
        }  else {
          var pokeSortedElement = document.createElement("p");
          pokeSortedElement.setAttribute("class", "pokeSortedSpawnChance");
          

        }
          let pokeSortedContent = document.createTextNode(pokeArray2[i]);         
          pokeSortedElement.appendChild(pokeSortedContent);
          elementJoinSortedData.appendChild(pokeSortedElement);
          document.getElementById("showSortedPokemons")
                                  .appendChild(elementJoinSortedData);
}

});

}

const chanceBtn = document.getElementById("spawnChance");
chanceBtn.addEventListener("click",spawnChance);
