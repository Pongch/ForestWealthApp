
//set web3
if (typeof web3 !== 'undefined') {
            web3 = new Web3(web3.currentProvider);
        } else {
            // set the provider you want from Web3.providers
            web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/CT0ypkZhkZ8gm2pLeyD0 "));
        }
//import { default as Web3} from 'web3';
//import { default as contract } from 'truffle-contract'


//call contract's ABI
var ForestWealthDb1 =
web3.eth.contract([{"constant":true,"inputs":[{"name":"year","type":"uint256"}],"name":"getCarbonEmissionByYear","outputs":[{"name":"getyear","type":"uint256"},{"name":"carbonEmission","type":"int256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"count","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"year","type":"uint256"}],"name":"getDeforestationByYear","outputs":[{"name":"getyear","type":"uint256"},{"name":"deforestation","type":"int256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"carbonEmission","type":"int256"},{"name":"year","type":"uint256"},{"name":"deforestation","type":"int256"}],"name":"setRecord","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"i","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"index","type":"uint256"}],"name":"getCarbonInfo","outputs":[{"name":"year","type":"uint256"},{"name":"carbonEmission","type":"int256"},{"name":"deforestation","type":"int256"}],"payable":false,"stateMutability":"view","type":"function"}])


//call Contract's Address- you must set this to a different address if using testRPC
var ForestWealth1 = ForestWealthDb1.at('0x9c185ed8948d1306211776dc520128c5ebeb5cdc');

window.onload = function() {

    //CARBON output
    // onclick will call outputCert
    document.getElementById("form-click").onclick = function(){outputCarbon()};

    function outputCarbon(){
      //chart js

      let carbonYear = document.getElementById("record-index").value;
      ForestWealth1.getCarbonEmissionByYear(carbonYear, function(error, result){
       if(!error)
            //add result to output-field
            document.getElementById('output-field').innerHTML = "1st Year: " + result.slice(-1)[0] + " Million Tonnes C per year"  ;
       else
           console.error(error);}

     );
     //getting second value
     let carbonYear2 = document.getElementById("record-index2").value;
     ForestWealth1.getCarbonEmissionByYear(carbonYear2, function(error, result){
      if(!error)
           //add result to output-field
           document.getElementById('output-field2').innerHTML = "2nd Year: " + result.slice(-1)[0] + ' Million Tonnes C per year' ;
      else
          console.error(error);}
    );

    }
    document.getElementById("form-click2").onclick = function(){outputForest()};

    function outputForest(){

          //DEFORESTATION output
          let forestYear1 = document.getElementById("forest-record-index").value;
          ForestWealth1.getDeforestationByYear(forestYear1, function(error, result){
           if(!error)
                //add result to output-field
                document.getElementById('forest-output-field').innerHTML = "1st Year: " + result.slice(-1)[0] + " ha per year" ;
           else
               console.error(error);}

         );
         //getting second value
         let forestYear2 = document.getElementById("forest-record-index2").value;
         ForestWealth1.getDeforestationByYear(forestYear2, function(error, result){
          if(!error)
               //add result to output-field
               document.getElementById('forest-output-field2').innerHTML = "2nd Year: " + result.slice(-1)[0] + " ha per year" ;
          else
              console.error(error);}
        );
    }

    var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

}
//Chart.js
