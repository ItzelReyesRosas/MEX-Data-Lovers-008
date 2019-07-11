
const pokemonDataN = POKEMON.pokemon
 
const createNodes = (place) => {
  
  
            const allDataName = place.forEach( (pokeName) => {
              var elementJoinDataName =  document.createElement("div");
              elementJoinDataName.setAttribute("class","singleName");
              var elementJoinDataNameBack = document.createElement("div");
              elementJoinDataNameBack.setAttribute("class","singleNameBack");

              var pokeArrayName = [pokeName.name,"img"]
              var pokeArrayBack = [pokeName.height,
                                    pokeName.weight,
                                    pokeName.candy_count,
                                    pokeName.spawn_chance,
                                    pokeName.spawn_time,
                                    pokeName.type[0], //solo una posicion, ciclo for adentro
                                    pokeName.weaknesses[0], //solo una posicion, ciclo for adentro
                                    //pokeName.prev_evolution[0].name No entra
                                   
                                    ]
                            
                                    console.log(pokeName.weaknesses);
                                    
                        
            for (var i = 0; i < pokeArrayName.length; i++) {
              
                    if (pokeArrayName[i]==="img"){
                              
                      var pokeElementName = document.createElement("img");
                      pokeElementName.setAttribute("src", pokeName.img);
                      pokeElementName.setAttribute("class","pokeImg" )
                    } else {
                      var pokeElementName = document.createElement("p");
                      pokeElementName.setAttribute("class", "pokeName");
                    }
                    
                    
                     let pokeContentName = document.createTextNode(pokeArrayName[i]);
                      pokeElementName.appendChild(pokeContentName);
                      elementJoinDataName.appendChild(pokeElementName);
                      document.getElementById("showFilteredPokemonsByName")
                                              .appendChild(elementJoinDataName);
          
                    }

        

                for (var i = 0; i < pokeArrayBack.length; i++) {
                  if  (pokeArrayBack[i]=== pokeName.height) {
                    var pokeElementNameBack = document.createElement("p");
                    pokeElementNameBack.setAttribute("class", "pokeName");
                    pokeElementNameBack.innerHTML = "Altura " + ": ";
                  } else if (pokeArrayBack[i]=== pokeName.weight) {
                    var pokeElementNameBack = document.createElement("p");
                    pokeElementNameBack.setAttribute("class", "pokeName");
                    pokeElementNameBack.innerHTML = "Peso " + ": ";
                  } else if (pokeArrayBack[i]===pokeName.candy_count){
                    var pokeElementNameBack = document.createElement("p");
                    pokeElementNameBack.setAttribute("class","pokeName");
                    pokeElementNameBack.innerHTML = "Caramelos " + ": ";
                  } else if (pokeArrayBack[i]===pokeName.spawn_chance){
                    var pokeElementNameBack = document.createElement("p");
                    pokeElementNameBack.setAttribute("class","pokeName");
                    pokeElementNameBack.innerHTML = "Probabilidad de avistamiento " + ": " + "%";
                  
                  } else if (pokeArrayBack[i]===pokeName.spawn_time){
                    var pokeElementNameBack = document.createElement("p");
                    pokeElementNameBack.setAttribute("class","pokeName");
                    pokeElementNameBack.innerHTML = "Mejor hora de avistamiento : " ;
                  }  else if (pokeArrayBack[i]===pokeName.type[0]){
                    var pokeElementNameBack = document.createElement("p");
                    pokeElementNameBack.setAttribute("class","pokeName");
                    pokeElementNameBack.innerHTML = "Tipos principal " + ": ";

                  } else if (pokeArrayBack[i]===pokeName.weaknesses[0]){
                    var pokeElementNameBack = document.createElement("p");
                    pokeElementNameBack.setAttribute("class","pokeName");
                    pokeElementNameBack.innerHTML = "Debilidades " + ": ";

                  } 
                    let pokeContentNameBack = document.createTextNode(pokeArrayBack[i]);
                    pokeElementNameBack.appendChild(pokeContentNameBack);
                    elementJoinDataNameBack.appendChild(pokeElementNameBack);
                    document.getElementById("showFilteredPokemonsByName")
                                            .appendChild(elementJoinDataNameBack);
                }


          })
            
            
            
          }
            
      
   
 
 
 
 const showPokemonFilteredByName = () => {
       let searchedPokemon = document.getElementById("pokemonName").value;
           
       let searchedPokemonConverted = searchedPokemon[0]               .toUpperCase() +
                                      searchedPokemon.slice(1)         .toLowerCase()
       
       var filteredPokemonByName = pokemonDataN
                                     .filter(      (filtered) => {
                                                                 return filtered.name === searchedPokemonConverted;
                                                                 })      
                                                                 
     
       event.preventDefault();  
            
       createNodes(filteredPokemonByName);    
       
     
 }
 

 const filterPokemonByName =document.getElementById("searchPokemon");
 filterPokemonByName.addEventListener("click",showPokemonFilteredByName);
 
 

