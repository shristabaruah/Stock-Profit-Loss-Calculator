const initialPrice = document.querySelector('#Initialprice');
const Quantity = document.querySelector('#quantstock');
const currentPrice = document.querySelector('#currprice');
const outputel = document.querySelector('#output');
const button = document.querySelector('#btn');


function calculateProfitLoss(initial,quantity,current){
    if(initial>current){
        var loss = (initial - current) * quantity;
        var lossperc = (((initial-current)*100)/initial).toFixed(2);
        showOutput(`The loss is Rs${loss} and loss percentage is ${lossperc}%`);
    }else if(current > initial){
        var profit = (current - initial) * quantity;
        var profitperc = (((current-initial)*100)/initial).toFixed(2);
        showOutput(`The profit is Rs${profit} and profit percentage is ${profitperc}%`);
    
    }else{
        showOutput("No pain no gain, no gain no pain");

    }
}

function  submitHandler(){
    const inl = Number(initialPrice.value);
    const qty = Number(Quantity.value);
    const currprice = Number(currentPrice.value);
    
    if ((inl > 0) && (qty > 0) && (currprice > 0) ) {
        calculateProfitLoss(inl, qty, currprice);
    }
    else {
        showOutput("Enter valid input");
    }
    
}

button.addEventListener('click',submitHandler);


function showOutput(message){
    outputel.innerHTML= message;
}
function themeChange(){
   const msg = document.documentElement.setAttribute("data-theme","dark");
}

