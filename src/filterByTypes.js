const pokemonDataType = POKEMON.pokemon

console.log(pokemonDataType); //un areglo de objetos, cada objeto es un pokemon

const createOptionNodes = () => {
    var elementJoinSelectors = document.createElement("select"); 
    elementJoinSelectors.setAttribute("id","selector");
    elementJoinSelectors.setAttribute("onchange" , "getSelectedValue();")  
  var typesArray = ["Tipo de Pokémon",
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


  document.getElementById("mainForm").appendChild(elementJoinSelectors);  
  }
  createOptionNodes()

//__________________________________________________
const createNodesType = (p) => {

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
      return c.type[0] === "Grass";
      

       }) 

       createNodesType(filterGrass)

  } else if (selectedValue === "Psychic") {
    var filterPsychic = pokemonDataType.filter( (c) => {
      return c.type[0] === "Psychic";
       }) 

       createNodesType(filterPsychic)
       
  } else if (selectedValue === "Poison") {
    var filterPoison = pokemonDataType.filter( (c) => {
      return c.type[0] === "Poison";
       }) 

       createNodesType(filterPoison)
       
  } else if (selectedValue === "Water") {
    var filterWater = pokemonDataType.filter( (c) => {
      return c.type[0] === "Water";
       }) 

       createNodesType(filterWater)
       
  } else if (selectedValue === "Ghost") {
    var filterGhost = pokemonDataType.filter( (c) => {
      return c.type[0] === "Ghost";
       }) 

       createNodesType(filterGhost)
       
  } else if (selectedValue === "Ground") {
    var filterGround = pokemonDataType.filter( (c) => {
      return c.type[0] === "Ground";
       }) 

       createNodesType(filterGround)
       
  } else if (selectedValue === "Rock") {
    var filterRock = pokemonDataType.filter( (c) => {
      return c.type[0] === "Rock";
       }) 

       createNodesType(filterRock)
       
  } else if (selectedValue === "Rock") {
    var filterRock = pokemonDataType.filter( (c) => {
      return c.type[0] === "Rock";
       }) 

       createNodesType(filterRock)
       
  } else if (selectedValue === "Flying") {
    var filterFlying = pokemonDataType.filter( (c) => {
      return c.type[1] === "Flying";
       }) 

       createNodesType(filterFlying)
       
  } else if (selectedValue === "Dragon") {
    var filterDragon = pokemonDataType.filter( (c) => {
      return c.type[0] === "Dragon";
       }) 

       createNodesType(filterDragon)
       
  } else if (selectedValue === "Bug") {
    var filterBug = pokemonDataType.filter( (c) => {
      return c.type[0] === "Bug";
       }) 

       createNodesType(filterBug)
       
  } else if (selectedValue === "Fire") {
    var filterFire = pokemonDataType.filter( (c) => {
      return c.type[0] === "Fire";
       }) 

       createNodesType(filterFire)
       
  } else if (selectedValue === "Electric") {
    var filterElectric = pokemonDataType.filter( (c) => {
      return c.type[0] === "Electric";
       }) 

       createNodesType(filterElectric)
       
  } else if (selectedValue === "Ice") {
    var filterIce = pokemonDataType.filter( (c) => {
      return c.type[0] === "Ice";
       }) 

       createNodesType(filterIce)
       
  }  else if (selectedValue === "Normal") {
    var filterNormal = pokemonDataType.filter( (c) => {
      return c.type[0] === "Normal";
       }) 

       createNodesType(filterNormal)
       
  }

}
 getSelectedValue()



//________________________________________________________________

