const pokemonDataT = POKEMON.pokemon

// SORT FUNCTION por hora, falta parsearlo, para darle orden

const spawnTime = () => {

const sortedBySpawnTime = pokemonDataT.sort( (a,b) => {
   
    return  b.spawn_time - a.spawn_time
      
 });

const createNodes2 = sortedBySpawnTime.forEach( (poke2) => {
      var elementJoinSortedData =  document.createElement("div");
      elementJoinSortedData.setAttribute("class","singleSortedPokemon");
      var pokeArray2 = [poke2.name,"img",poke2.spawn_time];

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

const timeBtn = document.getElementById("spawnTime");
timeBtn.addEventListener("click",spawnTime);