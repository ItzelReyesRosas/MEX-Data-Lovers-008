
const pokemonDataN = POKEMON.pokemon

const createNodes = (place) => {
  
  
   let keysExtraction = Object.keys(place[0])
   let valuesExtraction = Object.values(place[0])
  console.log(valuesExtraction);
  

   var searchPokemonCard = document.createElement("div");
   var placeArray = ["name","img","type","height","weight","weaknesses","candy_count","next_evolution"]
  
   for (let i = 0; i < keysExtraction.length; i++) {
   
                   if (keysExtraction[i]=== placeArray[1]) {
                        
                     var element = document.createElement("img"); 
                     element.setAttribute("src",valuesExtraction[i]);
                     element.setAttribute("class", keysExtraction[i]+ "en");
                               
                      var content = document.createTextNode(keysExtraction[i]    +  ": "  +
                      valuesExtraction[i]);          
            element.appendChild(content); 
            searchPokemonCard.appendChild(element);

            document.getElementById("showFilteredPokemons").appendChild(searchPokemonCard);    

                  }  else if   (keysExtraction[i]=== placeArray[7] )
                                                          
                               {                     
                      var element = document.createElement("p");
                      element.setAttribute("class",keysExtraction[i]);
                                            
                      var content = document.createTextNode(keysExtraction[i]    +  ": "  +
                      valuesExtraction[i][0].name);          
            element.appendChild(content); 
            searchPokemonCard.appendChild(element);
                      
                      var element2 = document.createElement("p");
                      element2.setAttribute("class",keysExtraction[i]);
                      var content2 = document.createTextNode(keysExtraction[i]    +  ": "  +
                      valuesExtraction[i][1].name);          
            element2.appendChild(content2); 
            searchPokemonCard.appendChild(element2);


            document.getElementById("showFilteredPokemons").appendChild(searchPokemonCard);    
            console.log(valuesExtraction[i][0].name);
            
                  } else if  (  keysExtraction[i]=== placeArray[2] || 
                                keysExtraction[i]=== placeArray[3] ||
                                keysExtraction[i]=== placeArray[4] ||
                                keysExtraction[i]=== placeArray[5] ||
                                keysExtraction[i]=== placeArray[6] )
                  { 
                    var element = document.createElement("p");
                    element.setAttribute("class",keysExtraction[i]);
                                          
                    var content = document.createTextNode(keysExtraction[i]    +  ": "  +
                    valuesExtraction[i]);          
          element.appendChild(content); 
          searchPokemonCard.appendChild(element);
                  }
             
      
   }
 
 }





 
 
 const showPokemonFiltered = () => {
       let searchedPokemon = document.getElementById("pokemonName").value;
           
       let searchedPokemonConverted = searchedPokemon[0]               .toUpperCase() +
                                      searchedPokemon.slice(1)         .toLowerCase()
       
       var filteredPokemon = pokemonDataN
                                     .filter(      (filtered) => {
                                                                 return filtered.name === searchedPokemonConverted;
                                                                 })      
     
       event.preventDefault();  
            
       createNodes(filteredPokemon);    
       
     
 }
 

 const filterPokemon =document.getElementById("searchPokemon");
 filterPokemon.addEventListener("click",showPokemonFiltered);
 
 

