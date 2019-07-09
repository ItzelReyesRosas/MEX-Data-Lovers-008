
const pokemonDataN = POKEMON.pokemon
 
const createNodes = (place) => {
  
  
   let keysExtractionName = Object.keys(place[0])
   let valuesExtractionName = Object.values(place[0])
  console.log(valuesExtractionName);
  

   var searchPokemonCard = document.createElement("div");
   searchPokemonCard.setAttribute("class","filteredByName");

   var placeArrayName = ["name","img","type","height","weight","weaknesses","candy_count","next_evolution"]
  
   for (let i = 0; i < keysExtractionName.length; i++) {
   
                   if (keysExtractionName[i]=== placeArrayName[1]) {
                        
                     var elementName = document.createElement("img"); 
                     elementName.setAttribute("src",valuesExtractionName[i]);
                     elementName.setAttribute("class", keysExtractionName[i]+ "en");
                               
                      var contentName = document.createTextNode(keysExtractionName[i]    +  ": "  +
                      valuesExtractionName[i]);          
            elementName.appendChild(contentName); 
            searchPokemonCard.appendChild(elementName);

            document.getElementById("showFilteredPokemonsByName").appendChild(searchPokemonCard);    

                  }  else if   (keysExtractionName[i]=== placeArrayName[7] )
                                                          
                               {                     
                      var elementName = document.createElement("p");
                      elementName.setAttribute("class",keysExtractionName[i]);
                                            
                      var contentName = document.createTextNode(keysExtractionName[i]    +  ": "  +
                      valuesExtractionName[i][0].name);          
            elementName.appendChild(contentName); 
            searchPokemonCard.appendChild(elementName);
                      
                      var element2Name = document.createElement("p");
                      element2Name.setAttribute("class",keysExtractionName[i]);
                      var content2Name = document.createTextNode(keysExtractionName[i]    +  ": "  +
                      valuesExtractionName[i][1].name);          
            element2Name.appendChild(content2Name); 
            searchPokemonCard.appendChild(element2Name);


            document.getElementById("showFilteredPokemonsByName").appendChild(searchPokemonCard);    
           
                  } else if  (  keysExtractionName[i]=== placeArrayName[2] || 
                                keysExtractionName[i]=== placeArrayName[3] ||
                                keysExtractionName[i]=== placeArrayName[4] ||
                                keysExtractionName[i]=== placeArrayName[5] ||
                                keysExtractionName[i]=== placeArrayName[6] )
                  { 
                    var elementName = document.createElement("p");
                    elementName.setAttribute("class",keysExtractionName[i]);
                                          
                    var contentName = document.createTextNode(keysExtractionName[i]    +  ": "  +
                    valuesExtractionName[i]);          
          elementName.appendChild(contentName); 
          searchPokemonCard.appendChild(elementName);
                  }
             
      
   }
 
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
 
 

