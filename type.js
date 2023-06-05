let num2 = document.getElementById(num)
let value =0

let btn1=document.querySelector(".add");
let btn2=document.querySelector(".reset");
let btn3=document.querySelector(".min");
// updateDisplay();

// btn1.addEventListener('click' , ()=>{
//     value ++ ;
// console.log(btn1)
// });


function adding(){
    document.getElementById(".add")
    count+=1
    document.getElementById("num").innerHTML = count
}
function subtract(){
    document.getElementById(".min")
    count-=1
    document.getElementById("num").innerHTML = count
}
