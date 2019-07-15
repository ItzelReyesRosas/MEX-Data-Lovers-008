const pokemonDataSpawnChance = POKEMON.pokemon


const spawnChance = () => {

  deletePokemons()

const sortedBySpawnChance = pokemonDataSpawnChance.sort( (a,b) => {


  

   
    return  b.spawn_chance  - a.spawn_chance
      
 });

const createNodes2 = sortedBySpawnChance.forEach( (poke2) => {
      var elementJoinSortedBySpawnChance =  document.createElement("div");
      elementJoinSortedBySpawnChance.setAttribute("class","singleBySpawnChance");
      var pokeArraySpawnChance = [poke2.name,"img",poke2.spawn_chance];

for (var i = 0; i < pokeArraySpawnChance.length; i++) {
  
        if (pokeArraySpawnChance[i]==="img"){
                  
          var pokeElementSpawnChance = document.createElement("img");
          pokeElementSpawnChance.setAttribute("src", poke2.img);
          pokeElementSpawnChance.setAttribute("class","pokeSortedImg" )

        }else if (pokeArraySpawnChance[i]===poke2.name) {
          var pokeElementSpawnChance = document.createElement("p");
          pokeElementSpawnChance.setAttribute("class", "pokeSortedName");
        }  else {
          var pokeElementSpawnChance = document.createElement("p");
          pokeElementSpawnChance.setAttribute("class", "pokeSortedSpawnChance");
          

        }
          let pokeContentSpawnChance = document.createTextNode(pokeArraySpawnChance[i]);         
          pokeElementSpawnChance.appendChild(pokeContentSpawnChance);
          elementJoinSortedBySpawnChance.appendChild(pokeElementSpawnChance);
          document.getElementById("showSortedPokemonsByChance")
                                  .appendChild(elementJoinSortedBySpawnChance);
}

});

}

const chanceBtn = document.getElementById("spawnChance");
chanceBtn.addEventListener("click",spawnChance);
