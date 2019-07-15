const pokemonDataType = POKEMON.pokemon







const createOptionNodes = () => {



    var elementJoinSelectors = document.createElement("select"); 
    elementJoinSelectors.setAttribute("id","selector");
    elementJoinSelectors.setAttribute("class","selectorBox")
    elementJoinSelectors.setAttribute("onchange" , "getSelectedValue();")  
  var typesArray = ["Tipos",
                    "Grass",
                    "Psychic",
                    "Water",
                    "Ghost",                  
                    "Ground",
                    "Rock",
                    "Flying",
                    "Dragon",
                    "Bug",
                    "Fire",
                    "Electric",
                    "Ice",
                    "Poison",
                    "Normal"]
  
  for (var i = 0; i < typesArray.length; i++) {
    var elementOption = document.createElement("option");
    elementOption.setAttribute("value",typesArray[i]);
    elementOption.setAttribute("id", typesArray[i])
   

    var contentOption = document.createTextNode(typesArray[i]);
    elementOption.appendChild(contentOption);
    elementJoinSelectors.appendChild(elementOption);
    
  } 


  document.getElementById("selectorTypes").appendChild(elementJoinSelectors);  
  }
  createOptionNodes()

//__________________________________________________
const createNodesType = (p) => {
  deletePokemons()

  const allDataTypes = p.forEach( (pokeTypes) => {
    var elementJoinDataTypes =  document.createElement("div");
    elementJoinDataTypes.setAttribute("class","singleType");
    var pokeArrayTypes = [pokeTypes.name,
                          "img",  
                          pokeTypes.height,
                          pokeTypes.weight];
  
  for (var i = 0; i < pokeArrayTypes.length; i++) {
    
          if (pokeArrayTypes[i]==="img"){
                    
            var pokeElementTypes = document.createElement("img");
            pokeElementTypes.setAttribute("src", pokeTypes.img);
            pokeElementTypes.setAttribute("class","pokeImg" )
          } else if  (pokeArrayTypes[i]=== pokeTypes.height) {
            var pokeElementTypes = document.createElement("p");
            pokeElementTypes.setAttribute("class", "pokeName");
            pokeElementTypes.innerHTML = "Altura " + ": ";
          } else if (pokeArrayTypes[i]=== pokeTypes.weight) {
            var pokeElementTypes = document.createElement("p");
            pokeElementTypes.setAttribute("class", "pokeName");
            pokeElementTypes.innerHTML = "Peso " + ": ";
          } else {
            var pokeElementTypes = document.createElement("p");
            pokeElementTypes.setAttribute("class", "pokeName");
            
          }
            let pokeContentTypes = document.createTextNode(pokeArrayTypes[i]);
            pokeElementTypes.appendChild(pokeContentTypes);
            elementJoinDataTypes.appendChild(pokeElementTypes);
            document.getElementById("showFilteredPokemonsByType")
                                    .appendChild(elementJoinDataTypes);
  }
  
  
  });
  

  }
  
  
//__________________________________________________________
const getSelectedValue = () => {

   let selectedValue =document.getElementById("selector").value;

  if (selectedValue === "Grass") {
    var filterGrass = pokemonDataType.filter( (c) => {
      for (let i = 0; i < c.type.length; i++) {
         if  (c.type[i] === "Grass") {
            return true; } } 
            return false;
       }) ;
       createNodesType(filterGrass)  
       return filterGrass

       } 
        else if (selectedValue === "Psychic") {
    var filterPsychic = pokemonDataType.filter( (c) => {
      for (let i = 0; i< c.type.length; i++) {
      if (c.type[i] === "Psychic") {
        return true }}
        return false;
       }); 
       createNodesType(filterPsychic)
       
  } else if (selectedValue === "Poison") {
    var filterPoison = pokemonDataType.filter( (c) => {
      for (let i = 0; i < c.type.length; i++) {
        if (c.type[i] === "Poison" ) {
          return true}}
          return false;
        });
        createNodesType(filterPoison)

      } else if (selectedValue === "Water") {
    var filterWater = pokemonDataType.filter( (c) => {
      for (let i = 0; i < c.type.length; i++) {
        if (c.type[i] === "Water" ) {
          return true}}
          return false;
        });
       createNodesType(filterWater)
       
  } else if (selectedValue === "Ghost") {
    var filterGhost = pokemonDataType.filter( (c) => {
      for (let i = 0; i < c.type.length; i++) {
        if (c.type[i] === "Ghost" ) {
          return true}}
          return false;
        });
       createNodesType(filterGhost)   
  } else if (selectedValue === "Ground") {
    var filterGround = pokemonDataType.filter( (c) => {
      for (let i = 0; i < c.type.length; i++) {
        if (c.type[i] === "Ground" ) {
          return true}}
          return false;
        });
       createNodesType(filterGround)
       
       
  } else if (selectedValue === "Rock") {
    var filterRock = pokemonDataType.filter( (c) => {
      for (let i = 0; i < c.type.length; i++) {
        if (c.type[i] === "Rock" ) {
          return true}}
          return false;
        });
       createNodesType(filterRock)
       
       
  }  else if (selectedValue === "Flying") {
    var filterFlying = pokemonDataType.filter( (c) => {
      for (let i = 0; i < c.type.length; i++) {
        if (c.type[i] === "Flying" ) {
          return true}}
          return false;
        });
       createNodesType(filterFlying)
       
  } else if (selectedValue === "Dragon") {
    var filterDragon = pokemonDataType.filter( (c) => {
      for (let i = 0; i < c.type.length; i++) {
        if (c.type[i] === "Dragon" ) {
          return true}}
          return false;
        });
       createNodesType(filterDragon)
       
       
  } else if (selectedValue === "Bug") {
    var filterBug = pokemonDataType.filter( (c) => {
      for (let i = 0; i < c.type.length; i++) {
        if (c.type[i] === "Bug" ) {
          return true}}
          return false;
        });
       createNodesType(filterBug)
       
       
  } else if (selectedValue === "Fire") {
    var filterFire = pokemonDataType.filter( (c) => {
      for (let i = 0; i < c.type.length; i++) {
        if (c.type[i] === "Fire" ) {
          return true}}
          return false;
        });
       createNodesType(filterFire)
       
  } else if (selectedValue === "Electric") {
    var filterElectric = pokemonDataType.filter( (c) => {
      for (let i = 0; i < c.type.length; i++) {
        if (c.type[i] === "Electric" ) {
          return true}}
          return false;
        });
       createNodesType(filterElectric)
       
       
  } else if (selectedValue === "Ice") {
    var filterIce = pokemonDataType.filter( (c) => {
      for (let i = 0; i < c.type.length; i++) {
        if (c.type[i] === "Ice" ) {
          return true}}
          return false;
        });
       createNodesType(filterIce)
       
       
  }  else if (selectedValue === "Normal") {
    var filterNormal = pokemonDataType.filter( (c) => {
      for (let i = 0; i < c.type.length; i++) {
        if (c.type[i] === "Normal" ) {
          return true}}
          return false;
        });
       createNodesType(filterNormal)
       
  }

}
 getSelectedValue()



//________________________________________________________________

