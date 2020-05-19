//DOM elements
const loadApp = document.getElementById('loadBtn');
const UpdateApp = document.getElementById('updateBtn');
const resetApp = document.getElementById('resetBtn');
let stockPara = document.getElementById('stock-level');
let quantityInput = document.getElementById('quantityInput');
let pricePara = document.getElementById('price');
let chargePara = document.getElementById('charge');


//global variables
let Instock = 50;
let price = 150;


//load button event listener and function
loadApp.addEventListener('click', function load() {

    stockPara.textContent = Instock; 

});


//update button event listener and function
UpdateApp.addEventListener('click', function update() {

    //price

    let quantityInputVal = quantityInput.value;

    let updateFormula = quantityInputVal * price;

    pricePara.textContent = '£' + updateFormula;

    //charge

     let chargeFormula = updateFormula / 100 * 15;

     let newchargeFormula = updateFormula + chargeFormula;
    
    chargePara.textContent = '£' + newchargeFormula;

    //update stock level

    let updateStock = Instock - quantityInputVal;
    
    stockPara.textContent = updateStock;

    Instock = updateStock;
    //this part is for when the stock is below 0
    if (updateStock < 0) {
        stockPara.textContent = 'Out of Stock!';
        pricePara.textContent = 'Out of Stock!';
        chargePara.textContent = 'Out of Stock!';

    }

    resetApp.addEventListener("click", function reset() {
      
    var elems = document.getElementsByTagName('input');
    var l = elems.length;
    for (var i = 0; i < l; i++) {
      elems[i].value="";
   }
   

    para.textContent = "";

});

resetApp.addEventListener("click", function resetTwo() {
      
        document.getElementById("stock-level").innerHTML = "";
        document.getElementById("price").innerHTML = "";
        document.getElementById("charge").innerHTML = "";

        Instock = 50;
})

});



