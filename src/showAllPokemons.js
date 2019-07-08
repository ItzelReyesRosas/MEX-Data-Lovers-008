const pokemonData = POKEMON.pokemon


    const allData = pokemonData.forEach( (poke) => {
        var elementJoinData =  document.createElement("div");
        elementJoinData.setAttribute("class","singlePokemon");
        var pokeArray = [poke.name,"img",poke.type];
      
      for (var i = 0; i < pokeArray.length; i++) {
        
              if (pokeArray[i]==="img"){
                        
                var pokeElement = document.createElement("img");
                pokeElement.setAttribute("src", poke.img);
                pokeElement.setAttribute("class","pokeImg" )
              }else if (pokeArray[i] === poke.type ){
                var pokeElement = document.createElement("p");
                pokeElement.innerHTML = "Tipo " + ": ";
                pokeElement.setAttribute("class", "pokeType");
              }  else {
                var pokeElement = document.createElement("p");
                pokeElement.setAttribute("class", "pokeName");
              }
                let pokeContent = document.createTextNode(pokeArray[i]);
                pokeElement.appendChild(pokeContent);
                elementJoinData.appendChild(pokeElement);
                document.getElementById("showAllPokemons")
                                        .appendChild(elementJoinData);
      }
      
      
      });
      

    