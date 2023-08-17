const apiKey = '6441f3bca519b96fa8406b32';
const apiUrl =  ` https://v6.exchangerate-api.com/v6/${apiKey}/latest/`;
const baseCurr = document.getElementById('enter');
const secondCurr = document.getElementById('second');
const submit = document.querySelector('button');
const amount = document.getElementById('first-amount');



async function getCur(baseCurrency,secondCurrency){
    const response = await fetch(apiUrl + baseCurrency);
    const data = await response.json();
    console.log(data);


    let first = document.getElementById('start-currency').innerHTML = baseCurrency.toUpperCase();

    let firstRate = " = " + data.conversion_rates[first] * amount.value;
    let base =document.createTextNode(firstRate);
    document.getElementById('start-currency').appendChild(base);


    let second = document.getElementById('exchange-currency').innerHTML = secondCurrency.toUpperCase();
    let secondRate = " = " + data.conversion_rates[second] * amount.value;
    let exchange =document.createTextNode(secondRate);
    document.getElementById('exchange-currency').appendChild(exchange);


   


}

function exchange(){
    getCur(baseCurr.value,secondCurr.value);
}


submit.addEventListener('click', exchange);
