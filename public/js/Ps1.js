let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let Add = document.getElementById("Add");
let Sub = document.getElementById("Sub");
let Multiply = document.getElementById("Multiply");
let Divide = document.getElementById("Divide");
let Result = document.getElementById("result");
let clear = document.getElementById("clear");

Add.addEventListener("click",()=>{
    var value1 = input1.value;
    var value2 = input2.value;
    var res = Number(value1)+Number(value2);
    Result.innerText = "Result = "+res;
})

Sub.addEventListener("click",()=>{
    var value1 = input1.value;
    var value2 = input2.value;
    var res = Number(value1)-Number(value2);
    Result.innerText = "Result = "+res;
})

Multiply.addEventListener("click",()=>{
    var value1 = input1.value;
    var value2 = input2.value;
    var res = Number(value1)*Number(value2);
    Result.innerText = "Result = "+res;
})

Divide.addEventListener("click",()=>{
    var value1 = input1.value;
    var value2 = input2.value;
    var res = Number(value1)/Number(value2);
    Result.innerText = "Result = "+res;
})

clear.addEventListener("click",()=>{
    input1.value = "";
    input2.value = "";
    Result.innerText = "";
})