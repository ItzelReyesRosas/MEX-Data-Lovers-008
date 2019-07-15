const data = POKEMON.pokemon;

//Sección Sabías qué
const mostrarChart = () => {

  deletePokemons()
  
var dataArr = [];
var typeArr = [];
var candyArr = [];

//Función que extrae los valores de la data que necesito
const extractValues = data.forEach((pokeV)=> {
  dataArr.push(parseFloat(pokeV.weight.slice(0,-3)));   //Extrae el peso sin kg
  typeArr.push(pokeV.type[0]);  
  candyArr.push(pokeV.candy_count);
  
      });
      
      
    //Función que calcula cuántos pokemon necesitan 12 candys para evolucionar
    //{12: 3, 25: 15, 50: 38, 100: 13, 400: 1, undefined: 81} 81 pokemon no necesitan
    const candyCount = candyArr.reduce((counterCandy, candyNum) =>{
      counterCandy[candyNum] =  (counterCandy[candyNum] || 0) + 1;
      return counterCandy;
    },{});
    
    
    //Función que dibuja una gráfica de barras para la cantidad de caramelos
    google.charts.load("current", {packages:['corechart']});
    google.charts.setOnLoadCallback(drawChartC);
    function drawChartC() {
      var dataC = google.visualization.arrayToDataTable([
        ["Cantidad de Pokémons", "Caramelos", { role: "style" } ],
        ["3 pokémons", 12, "#b87333"],
        ["15 pokémons", 25, "color: #76A7FA"],
        ["38 pokémons", 50, "gold"],
        ["13 pokémons", 100, "color: #e5e4e2"],
        ["1 pokémon", 400, "color: #C5A5CF"],
        ["81 pokémons", 0, "silver"]
        
      ]);
      
      var view = new google.visualization.DataView(dataC);
      view.setColumns([0, 1,
        { calc: "stringify",
        sourceColumn: 1,
        type: "string",
        role: "annotation" },
        2]);
        
        var options = {
          title: "Cantidad de caramelos que necesitan los pokémons para evolucionar",
          width: 600,
          height: 400,
          bar: {groupWidth: "95%"},
          legend: { position: "none" },
        };
        var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values"));
        chart.draw(view, options);
      }
      
      
      
      
      
      
      //Hacer función que calcula el pokemon más pesado y el menos pesado
      var min=Math.min.apply(null, dataArr);
      var max=Math.max.apply(null, dataArr);
      console.log(max);  //Es Snorlax con 460 kg Pokemon num 142
      console.log(min);  // Son 2, Gastly y Haunter con 0.1 kg pokemon numero 91 y 92
      
      
      //Función que calcula la suma total de los pesos de los pokemon
    const totalW = dataArr.reduce((total,currentValue)=>{
      return total + currentValue;
    },0);
    
    //averageW devuelve el promedio del peso de los pokemon
    const averageW = totalW/dataArr.length;
     console.log("En promedio los pokémon pesan:"+averageW);
     
     //Función que contabiliza los pokemon por tipo, devuelve un objeto {Grass: 12, Fire: 12, Water: 28, Bug: 12, Normal: 24, …}
    const typeCount = typeArr.reduce((counterType, typeName) =>{
      counterType[typeName] =  (counterType[typeName] || 0) + 1;
      return counterType;
    },{});
    
    
    //console.log(typeCount); //Me indica la cantidad de pokemon que hay por tipo
    
    //Código para dibujar pie Chart de acuerdo a datos de typeCount obtenidos
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);
    
    function drawChart() {
      
      var dataP = google.visualization.arrayToDataTable([
        ['Task', 'Pokémon Type Count'],
        ['Bug',     12],
        ['Dragon',      3],
        ['Electric',  9],
        ['Fighting',  7],
        ['Fire', 12],
        ['Ghost',    3],
        ['Grass',    12],
        ['Ground',    8],
        ['Ice',    2],
        ['Normal',    24],
        ['Poison',    14],
        ['Psychic',    8],
        ['Rock',    9],
          ['Water',    28]
          
        ]);
        
        
        
        var options = {
          title: 'Tipo de Pokémon'
        };
        
        var chart = new google.visualization.PieChart(document.getElementById('piechart'));
        
        chart.draw(dataP, options);
      }
      
      
      
      
      
        let mostrarCharts = document.getElementById("chart");
        mostrarCharts.style.display = "block";

      }
      
      const enlaceChart= document.getElementById("sabiasQue");
          enlaceChart.addEventListener("click",mostrarChart);