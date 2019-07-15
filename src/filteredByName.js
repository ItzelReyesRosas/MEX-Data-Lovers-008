
const pokemonDataN = POKEMON.pokemon
 



const createNodes = (place) => {
  
            const allDataName = place.forEach( (pokeName) => {


              var elementJoinDataName =  document.createElement("div");
              elementJoinDataName.setAttribute("class","singleName");
              var elementJoinDataNameBack = document.createElement("div");
              elementJoinDataNameBack.setAttribute("class","singleNameBack");

              var elementCard =document.createElement("div");
              elementCard.setAttribute("class","completeCard");
              elementCard.appendChild(elementJoinDataNameBack);
              elementCard.appendChild(elementJoinDataName);



             /* var ponerclase = () => {
                  
                frente.classList.add('frente');
                atras.classList.add('atras'); 
                console.log("holi frente");
                
                
              }
              
              
              var quitarclase = () => {
                frente.classList.remove('frente');
                atras.classList.remove('atras');
                console.log("holi tras");

                
              }*/

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
                            
                                   // console.log(pokeName.weaknesses);
                                    
                        
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
                                              .appendChild(elementCard);
                                              
                                          //  var frente = document.querySelector(".singleName")       
          
                    }

        

                for (var i = 0; i < pokeArrayBack.length; i++) {
                  if  (pokeArrayBack[i]=== pokeName.height) {
                    var pokeElementNameBack = document.createElement("p");
                    pokeElementNameBack.setAttribute("class", "pokeNameBack");
                    pokeElementNameBack.innerHTML = "Altura " + ": ";
                  } else if (pokeArrayBack[i]=== pokeName.weight) {
                    var pokeElementNameBack = document.createElement("p");
                    pokeElementNameBack.setAttribute("class", "pokeNameBack");
                    pokeElementNameBack.innerHTML = "Peso " + ": ";
                  } else if (pokeArrayBack[i]===pokeName.candy_count){
                    var pokeElementNameBack = document.createElement("p");
                    pokeElementNameBack.setAttribute("class","pokeNameBack");
                    pokeElementNameBack.innerHTML = "Caramelos " + ": ";
                  } else if (pokeArrayBack[i]===pokeName.spawn_chance){
                    var pokeElementNameBack = document.createElement("p");
                    pokeElementNameBack.setAttribute("class","pokeNameBack");
                    pokeElementNameBack.innerHTML = "Probabilidad de avistamiento " + ": " + "%";
                  
                  } else if (pokeArrayBack[i]===pokeName.spawn_time){
                    var pokeElementNameBack = document.createElement("p");
                    pokeElementNameBack.setAttribute("class","pokeNameBack");
                    pokeElementNameBack.innerHTML = "Mejor hora de avistamiento : " ;
                  }  else if (pokeArrayBack[i]===pokeName.type[0]){
                    var pokeElementNameBack = document.createElement("p");
                    pokeElementNameBack.setAttribute("class","pokeNameBack");
                    pokeElementNameBack.innerHTML = "Tipo principal " + ": ";

                  } else if (pokeArrayBack[i]===pokeName.weaknesses[0]){
                    var pokeElementNameBack = document.createElement("p");
                    pokeElementNameBack.setAttribute("class","pokeNameBack");
                    pokeElementNameBack.innerHTML = "Debilidades " + ": ";

                  } 
                    let pokeContentNameBack = document.createTextNode(pokeArrayBack[i]);
                    pokeElementNameBack.appendChild(pokeContentNameBack);
                    elementJoinDataNameBack.appendChild(pokeElementNameBack);
                   

                    document.getElementById("showFilteredPokemonsByName")
                                            .appendChild(elementCard);

                                            //var atras = document.querySelector(".singleNameBack")

                                            
              
              
                }
               
               
               
            

               
               /* frente.addEventListener("click", ponerclase);
                atras.addEventListener("click", quitarclase);*/

                
                
                

                
                
                


                
                

  
              })
            
          
          
        }
        
      

  
 
 
 
 var showPokemonFilteredByName = () => {
 
       var searchedPokemon = document.getElementById("pokemonName").value;
           
       var searchedPokemonConverted = searchedPokemon[0]               .toUpperCase() +
                                      searchedPokemon.slice(1)         .toLowerCase()
       
       var filteredPokemonByName = pokemonDataN
                       .filter(      (filtered) => {
                              return filtered.name === searchedPokemonConverted;
                                                                 })     
                                                                  
          /*if (frente) {
            console.log("HOLI CAS CASI");
            var frente = document.querySelector(".singleName") 
            var atras = document.querySelector(".singleNameBack")
          frente.addEventListener("click", ponerclase);
          atras.addEventListener("click", quitarclase);
        }else{
          console.log("holi aún no");
          var frente = document.querySelector(".singleName") 
          var atras = document.querySelector(".singleNameBack")
          console.log(frente);
          console.log(atras);
    
        }                      */     

       event.preventDefault();  
            
       createNodes(filteredPokemonByName);    

        return showPokemonFilteredByName
       
     
 }
 

 const filterPokemonByName =document.getElementById("searchPokemon");
 filterPokemonByName.addEventListener("click",showPokemonFilteredByName);


 
 

