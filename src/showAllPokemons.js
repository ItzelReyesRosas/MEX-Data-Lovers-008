const pokemonData = POKEMON.pokemon


    const allData = pokemonData.forEach( (poke) => {
        var elementJoinData =  document.createElement("div");
      
        elementJoinData.setAttribute("class","singlePokemon");
        
      
        var pokeArray = [poke.name, "img"];
        
                    
      for (var i = 0; i < pokeArray.length; i++) {
        
        if (pokeArray[i]==="img"){
                        
          var pokeElement = document.createElement("img");
          pokeElement.setAttribute("src", poke.img);
          pokeElement.setAttribute("class","pokeImg" )

        }else if (pokeArray[i]=== poke.name) {
          var pokeElement = document.createElement("p");
          pokeElement.setAttribute("class", "name");

        }
 
          let pokeContent = document.createTextNode(pokeArray[i]);
          pokeElement.appendChild(pokeContent);
          elementJoinData.appendChild(pokeElement);
              
            } 
                  


          document.getElementById("showAllPokemons").appendChild(elementJoinData);

      }
      
      
      );
      

    