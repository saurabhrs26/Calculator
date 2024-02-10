function cleardisplay()
{
    document.getElementById("txt").value="";
}


function appendnumber(num) {
    var currentValue = document.getElementById("txt").value;
    document.getElementById("txt").value = currentValue + num;
    console.log("Appended: " + num);
}
function mod(){
    var op="%";
    var currentValue = document.getElementById("txt").value;
    document.getElementById("txt").value=currentValue+op;
   
}
function add(){
    var op="+";
    var currentValue = document.getElementById("txt").value;
    document.getElementById("txt").value=currentValue+op;
   
}
function subtract(){
    var op="-";
    var currentValue = document.getElementById("txt").value;
    document.getElementById("txt").value=currentValue+op;
    
}
function multiply(){
    var op="*";
    var currentValue = document.getElementById("txt").value;
    document.getElementById("txt").value=currentValue+op;
}
function divide(){
    var op="/";
    var currentValue = document.getElementById("txt").value;
    document.getElementById("txt").value=currentValue+op;
}
function bracket1(){
    var op="(";
    var currentValue = document.getElementById("txt").value;
    document.getElementById("txt").value=currentValue+op;
}
function bracket2(){
    var op=")";
    var currentValue = document.getElementById("txt").value;
    document.getElementById("txt").value=currentValue+op;
}
function calculate() {
    var expression = document.getElementById("txt").value;
    var result = eval(expression);
    document.getElementById("txt").value = result;
}
function decimal(){
    var op=".";
    var currentValue = document.getElementById("txt").value;
    document.getElementById("txt").value=currentValue+op;
}