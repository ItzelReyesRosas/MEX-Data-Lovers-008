const pokemonDataSpawnTime = POKEMON.pokemon

// SORT FUNCTION por hora, falta parsearlo, para darle orden
let deletePokemons = () => {
  let showedPokemons = document.getElementById("showAllPokemons");
      for (let i = 0 ; i <pokemonDataSpawnTime.length; i++) {
    showedPokemons.removeChild(showedPokemons.childNodes[0])
  }
}

const spawnTime = () => {

deletePokemons()
const sortedBySpawnTime = pokemonDataSpawnTime.sort( (a,b) => {
   
    return  b.spawn_time - a.spawn_time
      
 });

const createNodes3 = sortedBySpawnTime.forEach( (poke2) => {
      var elementJoinSortedBySpawnTime =  document.createElement("div");
      elementJoinSortedBySpawnTime.setAttribute("class","singleSortedPokemon");
      var pokeArraySpawnTime = [poke2.name,"img",poke2.spawn_time];

for (var i = 0; i < pokeArraySpawnTime.length; i++) {
  
        if (pokeArraySpawnTime[i]==="img"){
                  
          var pokeElementSpawnTime = document.createElement("img");
          pokeElementSpawnTime.setAttribute("src", poke2.img);
          pokeElementSpawnTime.setAttribute("class","pokeSortedImg" )

        }else if (pokeArraySpawnTime[i]===poke2.name) {
          var pokeElementSpawnTime = document.createElement("p");
          pokeElementSpawnTime.setAttribute("class", "pokeSortedName");
        }  else {
          var pokeElementSpawnTime = document.createElement("p");
          pokeElementSpawnTime.setAttribute("class", "pokeSortedSpawnChance");
         

        }
          let pokeContentSpawnTime = document.createTextNode(pokeArraySpawnTime[i]);        
          pokeElementSpawnTime.appendChild(pokeContentSpawnTime);
          elementJoinSortedBySpawnTime.appendChild(pokeElementSpawnTime);
          document.getElementById("showSortedPokemonsByTime")
                                  .appendChild(elementJoinSortedBySpawnTime);
}

});


}

const timeBtn = document.getElementById("spawnTime");
timeBtn.addEventListener("click",spawnTime);