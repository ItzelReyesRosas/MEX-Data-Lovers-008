let nameAndImg = POKEMON.pokemon

/*array vacio 
let classes = */ 

nameAndImg.forEach( (poke) => {

      let element = document.createElement("p"); //creamos elemento en el DOM
      element.setAttribute("class", "pokemonData");
      let contentName = document.createTextNode(poke.name); // creamos el contenido del elemento
      let contentHeight = document.createTextNode(poke.height);
      let contentWeight = document.createTextNode(poke.weight);
            
      /*append*/
      element.appendChild(contentName); //añadimos el nodo de texto al elemento
     
      for(var i = 0; i < poke.type.length; i++) {
        let contentType = document.createTextNode(poke.type[i]);
        element.appendChild(contentType);
        
      }

      
      element.appendChild(contentHeight);
      element.appendChild(contentWeight);
      
      for(var i = 0; i < poke.weaknesses.length; i++){
        let contentWeaknesses = document.createTextNode(poke.weaknesses[i]);
        element.appendChild(contentWeaknesses);
        
       }

      document.getElementById("showPokemons").appendChild(element);
     
      let elementImage = document.createElement("img");
      let contentImage = document.createTextNode(poke.img);
      elementImage.setAttribute("src", poke.img);
      elementImage.appendChild(contentImage);
      document.getElementById("showPokemons").appendChild(elementImage);

     
});











/* fetch("https://gist.github.com/sofiamejiamuro/133498500fc0354c7903fa86cc111456.js") 
.then(function(resp) {
  return resp.json(); //Convierte 

}).then(function(data) {
console.log(data);

}).catch(function(error){
console.error("Something went wrong with retrieving the pokemons");

});*/
