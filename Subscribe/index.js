const mycheckBox = document.getElementById("mycheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const paypalBtn = document.getElementById("paypalBtn");
const mysubmit = document.getElementById("mysubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mysubmit.onclick = function(){

    if(mycheckBox.checked){
        subResult.textContent = `You are subscribed!`;
    }
    else {
         subResult.textContent = `You are NOT subscribed!`;
    }
    if(visaBtn.checked){
        paymentResult.textContent = ` You are paying with Visa`;
    }
    else if(masterCardBtn.checked){
        paymentResult.textContent = ` You are paying with MasterCard`;
    }
    else if(paypalBtn.checked){
        paymentResult.textContent = ` You are paying with PayPal`;
    }
    else {
        paymentResult.textContent = `You must select a Payment Type`;
    }
}