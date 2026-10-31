const PI = 3.1416;
let radius;
let circumference;

document.getElementById("mysubmit").onclick = function (){
    radius= document.getElementById("mytext").value ;
    radius=Number(radius);
    circumference = 2*PI*radius;
    document.getElementById("circum").textContent = `The circumference of this circle is ${circumference}` + "cm";
}