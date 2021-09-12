const initialPrice = document.querySelector('#Initialprice');
const Quantity = document.querySelector('#quantstock');
const currentPrice = document.querySelector('#currprice');
const outputel = document.querySelector('#output');
const button = document.querySelector('#btn');


function calculateProfitLoss(initial,quantity,current){
    if(initial>current){
        var loss = (initial - current) * quantity;
        var lossperc = (loss/initial)*100;
        showOutput(`The loss is Rs${loss} and loss percentage is ${lossperc.toFixed(2)}%`);
    }else if(current > initial){
        var profit = (current - initial) * quantity;
        var profitperc = (profit/initial)*100;
        showOutput(`The profit is Rs${profit} and profit percentage is ${profitperc.toFixed(2)}%`);
        themeChange(msg);
    }else{
        showOutput("No pain no gain, no gain no pain");

    }
}

function  submitHandler(){
    const inl = Number(initialPrice.value);
    const qty = Number(Quantity.value);
    const currprice = Number(currentPrice.value);
    calculateProfitLoss(inl,qty,currprice);
}

button.addEventListener('click',submitHandler);


function showOutput(message){
    outputel.innerHTML= message;
}
function themeChange(){
   const msg = document.documentElement.setAttribute("data-theme","dark");
}

