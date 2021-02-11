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
let PointButton = document.querySelector('.PointButton');
let TextBox = document.querySelector('.TextBox');
TextBox.textChanged = function () {
    s = TextBox.value;
}


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


function CheckPoint(s){
    if (s.indexOf("+")!=-1){
        s2 = s.slice(s.indexOf("+"), s.length-1);
        if (s2.indexOf(".") == -1){
            return(true);
        }
    } else if (s.indexOf("-")!=-1){
        s2 = s.slice(s.indexOf("-"), s.length-1);
        if (s2.indexOf(".") == -1){
            return(true);
        }
    } else if (s.indexOf("*")!=-1){
        s2 = s.slice(s.indexOf("*"), s.length-1);
        if (s2.indexOf(".") == -1){
            return(true);
        }
    } else if (s.indexOf("/")!=-1){
        s2 = s.slice(s.indexOf("/"), s.length-1);
        if (s2.indexOf(".") == -1){
            return(true);
        }
    } else if (s.indexOf(".") == -1){
        return(true);
}
}


PointButton.onclick = function() {
    if (CheckPoint(s)){
        s+=".";
        document.querySelector('.TextBox').value = s;
    }    
}


CLRButton.onclick = function() {
    s="";
    document.querySelector('.TextBox').value = s;
}//CLR
DELButton.onclick = function() {
    s=TextBox.value;
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
    s+="-";
    document.querySelector('.TextBox').value = s;
}
// / 
DivisionButton.onclick = function() {
    s+="/";
    document.querySelector('.TextBox').value = s;
}
// +
AdditionButton.onclick = function() {
    s+="+";
    document.querySelector('.TextBox').value = s;
}
// *
MultiplicationButton.onclick = function() {
    s+="*";
    document.querySelector('.TextBox').value = s;
}

// равно

ButtonIs.onclick = function() {
    s = TextBox.value;
    function pos(s) {
        d = 0;
        for(i=0; i<s.length; i++){
            if (s[i]=="+" || s[i]=="*" || s[i]=="-" || s[i]=="/"){
                d=i;
                break;
            }
        }
        return d;
    }
    function count(s, n){
        k=0;
        for(i=0; i<s.length; i++){
            if (s[i]==n){
                k+=1;
            }
        }
        return k;
    }
    function check(s){

        posPlus = s.indexOf("+");
        posMulti = s.indexOf("*");
        posMinus = s.indexOf("-");
        posDel= s.indexOf("/");
        if (posPlus == -1) {posPlus = 10000}
        if (posMulti == -1) {posMulti = 10000}
        if (posMinus == -1 || posMinus == 0) {posMinus = 10000}
        if (posDel == -1) {posDel = 10000}
        return Math.min(posPlus, posMinus, posDel, posMulti);
    }
    while (s.length!=1){
        if (s[check(s)]=="+"){
            if (count(s, "+") + count(s, "*") + count(s, "-") + count(s, "/")>1){
                plusPos = s.indexOf("+");
                plusPos1 = plusPos+1;
                a = parseFloat(s.slice(0, plusPos));
                b = parseFloat(s.slice(plusPos1, pos(s.slice(plusPos1,)) + (s.length - (s.slice(plusPos1,)).length)));
                c = s.slice(pos(s.slice(plusPos1,)) + (s.length - (s.slice(plusPos1,)).length),);
                s = String(a + b) + c;
                console.log(s);
            
            } else if (count(s, "+") + count(s, "*") + count(s, "-") + count(s, "/")==1){
                plusPos = s.indexOf("+");
                plusPos1 = plusPos + 1;
                a = parseFloat(s.slice(0, plusPos))
                b = parseFloat(s.slice(plusPos1,))
                s = a+b
                console.log(s);
                break
            }
        } else if (s[check(s)]=="*"){
            if (count(s, "+") + count(s, "*") + count(s, "-") + count(s, "/")>1){
                multiPos = s.indexOf("*");
                multiPos1 = multiPos+1;
                a = parseFloat(s.slice(0, multiPos));
                b = parseFloat(s.slice(multiPos1, pos(s.slice(multiPos1,)) + (s.length - (s.slice(multiPos1,)).length)));
                c = s.slice(pos(s.slice(multiPos1,)) + (s.length - (s.slice(multiPos1,)).length),);
                s = String(a*b) + c;
            
            } else if (count(s, "+") + count(s, "*") + count(s, "-") + count(s, "/")==1){
                multiPos = s.indexOf("*");
                multiPos1 = multiPos+1;
                a = parseFloat(s.slice(0, multiPos))
                b = parseFloat(s.slice(multiPos1,))
                s = a*b
                break
            }
        } else if (s[check(s)]=="/"){
            if (count(s, "+") + count(s, "*") + count(s, "-") + count(s, "/")>1){
                delPos = s.indexOf("/");
                delPos1 = delPos+1;
                a = parseFloat(s.slice(0, delPos));
                b = parseFloat(s.slice(delPos1, pos(s.slice(delPos1,)) + (s.length - (s.slice(delPos1,)).length)));
                c = s.slice(pos(s.slice(delPos1,)) + (s.length - (s.slice(delPos1,)).length),);
                s = String(a/b) + c;
            
            } else if (count(s, "+") + count(s, "*") + count(s, "-") + count(s, "/")==1){
                delPos = s.indexOf("/");
                delPos1 = delPos+1;
                a = parseFloat(s.slice(0, delPos))
                b = parseFloat(s.slice(delPos1,))
                s = a/b
                break
            }
        } else if (s[check(s)]=="-"){
            if (count(s, "+") + count(s, "*") + count(s, "-") + count(s, "/")>1){
                minusPos = s.indexOf("-");
                minusPos1 = minusPos+1;
                a = parseFloat(s.slice(0, minusPos));
                b = parseFloat(s.slice(minusPos1, pos(s.slice(minusPos1,)) + (s.length - (s.slice(minusPos1,)).length)));
                c = s.slice(pos(s.slice(minusPos1,)) + (s.length - (s.slice(minusPos1,)).length),);
                s = String(a-b) + c;
            
            } else if (count(s, "+") + count(s, "*") + count(s, "-") + count(s, "/")==1){
                minusPos = s.indexOf("-");
                minusPos1 = minusPos+1;
                a = parseFloat(s.slice(0, minusPos))
                b = parseFloat(s.slice(minusPos1,))
                s = a-b
                break
            }
        }
    }
    document.querySelector('.TextBox').value = s;
}

//смена темы
let body = document.querySelector(".page");;
let ThemeChangeButton = document.getElementById("ThemeChangeButton");
let ThemeChangeImg = document.getElementById("ThemeChangeImg"); 
let k=1;
ThemeChangeButton.onclick = function() {
    if (k == 0){
        body.classList.remove('night-theme');
        ThemeChangeImg.src = "moon.svg";
        k=1;
    }
    else{
        body.classList.add('night-theme');
        ThemeChangeImg.src = "day.svg";
        k=0;
    }
}





