
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
var ForestWealthDb =
web3.eth.contract([{"constant":true,"inputs":[],"name":"count","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"year","type":"uint256"}],"name":"getCarbonCreditByYear","outputs":[{"name":"getyear","type":"uint256"},{"name":"carboncredit","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"i","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"carboncredit","type":"uint256"},{"name":"year","type":"uint256"}],"name":"setRecord","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"index","type":"uint256"}],"name":"getCarbonCredit","outputs":[{"name":"year","type":"uint256"},{"name":"carboncredit","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]
)


//call Contract's Address- you must set this to a different address if using testRPC
var ForestWealth = ForestWealthDb.at('0xcf2f788c1acebd6bf6b7e75a9fce23955c1120d6');

window.onload = function() {
    // onclick will call outputCert
    document.getElementById("form-click").onclick = function(){outputCarbon()};

    function outputCarbon(){
      //chart js

      let carbonYear = document.getElementById("record-index").value;
      ForestWealth.getCarbonCreditByYear(carbonYear, function(error, result){
       if(!error)
            //add result to output-field
            document.getElementById('output-field').innerHTML = result.slice(-1)[0]  ;
       else
           console.error(error);}

     );
     //getting second value
     let carbonYear2 = document.getElementById("record-index2").value;
     ForestWealth.getCarbonCreditByYear(carbonYear2, function(error, result){
      if(!error)
           //add result to output-field
           document.getElementById('output-field2').innerHTML = result.slice(-1)[0]  ;
      else
          console.error(error);}
    );


    }



}
//Chart.js
