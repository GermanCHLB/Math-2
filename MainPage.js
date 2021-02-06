//объявляем переменные
let s = document.querySelector('.TextBox').value;
let ButtonIs = document.querySelector('.ButtonIs');
let CLRButton = document.querySelector('.CLRButton');
let DELButton = document.querySelector('.DELButton');
let DivisionButton = document.querySelector('.DivisionButton');
let MultiplicationButton = document.querySelector('.MultiplicationButton');
let SubtractionButton = document.querySelector('.SubtractionButton');
let AdditionButton = document.querySelector('.AdditionButton');
let LeftBracket = document.querySelector('.LeftBracket');
let RightBracket = document.querySelector('.RightBracket');
let Num1 = document.querySelector('.Num1');
let Num2 = document.querySelector('.Num2');
let Num3 = document.querySelector('.Num3');
let Num4 = document.querySelector('.Num4');
let Num5 = document.querySelector('.Num5');
let Num6 = document.querySelector('.Num6');
let Num7 = document.querySelector('.Num7');
let Num8 = document.querySelector('.Num8');
let Num9 = document.querySelector('.Num9');
let Num0 = document.querySelector('.Num0');
let Num00 = document.querySelector('.Num00');
let Point = document.querySelector('.Point');



//проверяем, можно ли убрать 0
function check0(s) {
    if(s[0]=="0" && s.length == 1 || s[s.length-1]=="0" && s[s.length-2]=="+" || s[s.length-1]=="0" && s[s.length-2]=="*" || s[s.length-1]=="0" && s[s.length-2]=="-" || s[s.length-1]=="0" && s[s.length-2]=="/"){
        return(true);    
    }
    else{
        return(false);
    }
}



//добавляем цифру в зависимости от 0
function ChangeS(s, n) {
    if (check0(s)){
        if (s.length!=1) {s=s.slice(0, s.length-1) +String(n);} 
        else{s=String(n);}
        return(s);} 
    else{
        s+=String(n);
        return(s);}
}



//прописываем кнопки
Num1.onclick = function(){
    s=ChangeS(s, 1);
    document.querySelector('.TextBox').value = s;}//1
Num2.onclick = function(){
    s=ChangeS(s, 2);
    document.querySelector('.TextBox').value = s;}//2
Num3.onclick = function(){
    s=ChangeS(s, 3);
    document.querySelector('.TextBox').value = s;}//3
Num4.onclick = function(){
    s=ChangeS(s, 4);
    document.querySelector('.TextBox').value = s;}//4
Num5.onclick = function(){
    s=ChangeS(s, 5);
    document.querySelector('.TextBox').value = s;}//5
Num6.onclick = function(){
    s=ChangeS(s, 6);
    document.querySelector('.TextBox').value = s;}//6
Num7.onclick = function(){
    s=ChangeS(s, 7);
    document.querySelector('.TextBox').value = s;}//7
Num8.onclick = function(){
    s=ChangeS(s, 8);
    document.querySelector('.TextBox').value = s;}//8
Num9.onclick = function(){
    s=ChangeS(s, 9);
    document.querySelector('.TextBox').value = s;}//9
Num0.onclick = function(){
    if (s[s.length-1]=="0" && s.length==1 || s[s.length-1]=="0" && s[s.length-2]=="+" || s[s.length-1]=="0" && s[s.length-2]=="-" || s[s.length-1]=="0" && s[s.length-2]=="*" || s[s.length-1]=="0" && s[s.length-2]=="/"){} 
    else{
        s+="0";
        document.querySelector('.TextBox').value = s;}}//0

Num00.onclick = function(){
    if (s[s.length-1]=="0" && s.length==1 || s[s.length-1]=="0" && s[s.length-2]=="+" || s[s.length-1]=="0" && s[s.length-2]=="-" || s[s.length-1]=="0" && s[s.length-2]=="*" || s[s.length-1]=="0" && s[s.length-2]=="/" || s.length==0 || s[s.length-1]=="+" || s[s.length-1]=="*" || s[s.length-1]=="-" || s[s.length-1]=="/"){} 
    else{
        s+="00";
        document.querySelector('.TextBox').value = s;}}//00


CLRButton.onclick = function() {
    s="";
    document.querySelector('.TextBox').value = s;
}//CLR
DELButton.onclick = function() {
    s=s.slice(0, s.length-1);
    document.querySelector('.TextBox').value = s;
}//DEL

//проверка на наличие +/-/*/ /
function check(s) {
    if (s.indexOf("+") == -1 && s.indexOf("*")==-1 && s.indexOf("/") == -1 && s.indexOf("*") == -1){
        return(1);
    }
    else{
        return(0);
    }
}
//-
SubtractionButton.onclick = function() {
    if (check(s)){
        s+="-";
        document.querySelector('.TextBox').value = s;
    }
}
// / 
DivisionButton.onclick = function() {
    if (check(s)){
        s+="/";
        document.querySelector('.TextBox').value = s;
    }
}
// +
AdditionButton.onclick = function() {
    if (check(s)){
        s+="+";
        document.querySelector('.TextBox').value = s;
    }
}
// *
MultiplicationButton.onclick = function() {
    if (check(s)){
        s+="*";
        document.querySelector('.TextBox').value = s;
    }
}

// равно

ButtonIs.onclick = function() {
    if (s.indexOf("+") != -1){
        s=parseInt(s.slice(0, s.indexOf("+"))) + parseInt(s.slice(s.indexOf("+")+1, s.lenght));
        document.querySelector('.TextBox').value = s;
        s = document.querySelector('.TextBox').value;
    }
    else if (s.indexOf("*") != -1){
        s=parseInt(s.slice(0, s.indexOf("*"))) * parseInt(s.slice(s.indexOf("*")+1, s.lenght));
        document.querySelector('.TextBox').value = s;
        s = document.querySelector('.TextBox').value;
    }
    else if (s.indexOf("-") != -1){
        s=parseInt(s.slice(0, s.indexOf("-"))) - parseInt(s.slice(s.indexOf("-")+1, s.lenght));
        document.querySelector('.TextBox').value = s;
        s = document.querySelector('.TextBox').value;
    }  
    else if (s.indexOf("/") != -1 && s.slice(s.indexOf("/")+1, s.lenght)!="0" ){
        s=parseInt(s.slice(0, s.indexOf("/"))) / parseInt(s.slice(s.indexOf("/")+1, s.lenght));
        document.querySelector('.TextBox').value = s;
        s = document.querySelector('.TextBox').value;
    }  
}







