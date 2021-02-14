//#region объявляем переменные

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
//#endregion 


//#region разные функции

//проверяем, можно ли убрать 0
function check0(s) {
    if(s[0]=="0" && s.length == 1 || s[s.length-1]=="0" && s[s.length-2]=="+" || s[s.length-1]=="0" && s[s.length-2]=="*" || s[s.length-1]=="0" && s[s.length-2]=="-" || s[s.length-1]=="0" && s[s.length-2]=="/"){
        return(true);    
    }
    else{
        return(false);}}
//добавляем цифру в зависимости от 0
function ChangeS(s, n) {
    if (check0(s)){
        if (s.length!=1) {s=s.slice(0, s.length-1) +String(n);} 
        else{s=String(n);}
        return(s);} 
    else{
        s+=String(n);
        return(s);}}
//что-то делает
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
//проверка на наличие +/-/*/ /
function check(s) {
    if (s.indexOf("+") == -1 && s.indexOf("*")==-1 && s.indexOf("/") == -1 && s.indexOf("*") == -1){
        return(1);
    }
    else{
        return(0);
    }
}

//#endregion разные функции


//#region кнопки калькулятора
    Num1.onclick = function(){
        s = TextBox.value;
        s=ChangeS(s, 1);
        document.querySelector('.TextBox').value = s;}//1
    Num2.onclick = function(){
        s = TextBox.value;
        s=ChangeS(s, 2);
        document.querySelector('.TextBox').value = s;}//2
    Num3.onclick = function(){
        s = TextBox.value;
        s=ChangeS(s, 3);
        document.querySelector('.TextBox').value = s;}//3
    Num4.onclick = function(){
        s = TextBox.value;
        s=ChangeS(s, 4);
        document.querySelector('.TextBox').value = s;}//4
    Num5.onclick = function(){
        s = TextBox.value;
        s=ChangeS(s, 5);
        document.querySelector('.TextBox').value = s;}//5
    Num6.onclick = function(){
        s = TextBox.value;
        s=ChangeS(s, 6);
        document.querySelector('.TextBox').value = s;}//6
    Num7.onclick = function(){
        s = TextBox.value;
        s=ChangeS(s, 7);
        document.querySelector('.TextBox').value = s;}//7
    Num8.onclick = function(){
        s = TextBox.value;
        s=ChangeS(s, 8);
        document.querySelector('.TextBox').value = s;}//8
    Num9.onclick = function(){
        s = TextBox.value;
        s=ChangeS(s, 9);
        document.querySelector('.TextBox').value = s;}//9
    Num0.onclick = function(){
        s = TextBox.value;
        if (s[s.length-1]=="0" && s.length==1 || s[s.length-1]=="0" && s[s.length-2]=="+" || s[s.length-1]=="0" && s[s.length-2]=="-" || s[s.length-1]=="0" && s[s.length-2]=="*" || s[s.length-1]=="0" && s[s.length-2]=="/"){} 
        else{
            s+="0";
            document.querySelector('.TextBox').value = s;}}//0

    Num00.onclick = function(){
        s = TextBox.value;
        if (s[s.length-1]=="0" && s.length==1 || s[s.length-1]=="0" && s[s.length-2]=="+" || s[s.length-1]=="0" && s[s.length-2]=="-" || s[s.length-1]=="0" && s[s.length-2]=="*" || s[s.length-1]=="0" && s[s.length-2]=="/" || s.length==0 || s[s.length-1]=="+" || s[s.length-1]=="*" || s[s.length-1]=="-" || s[s.length-1]=="/"){} 
        else{
            s+="00";
            document.querySelector('.TextBox').value = s;}}//00

    PointButton.onclick = function() {
        s = TextBox.value;
        if (CheckPoint(s)){
        s+=".";
        document.querySelector('.TextBox').value = s;}}//.

    CLRButton.onclick = function() {
        s="";
        document.querySelector('.TextBox').value = s;}//CLR

    DELButton.onclick = function() {
        s=TextBox.value;
        s=s.slice(0, s.length-1);
        document.querySelector('.TextBox').value = s;}//DEL

    SubtractionButton.onclick = function() {
        s = TextBox.value;
        s+="-";
        document.querySelector('.TextBox').value = s;
    } // -
    
    DivisionButton.onclick = function() {
        s = TextBox.value;
        s+="/";
        document.querySelector('.TextBox').value = s;
    }// /
    
    AdditionButton.onclick = function() {
        s = TextBox.value;
        s+="+";
        document.querySelector('.TextBox').value = s;
    } // +
    
    MultiplicationButton.onclick = function() {
        s = TextBox.value;
        s+="*";
        document.querySelector('.TextBox').value = s;
    } // * 
    



//#endregion кнопки калькулятора


//#region  равно
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
        if (posDel !=10000 || posMulti!=10000){
            return Math.min(posDel, posMulti)
        }else{
            return Math.min(posPlus, posMinus);
        }
    }
    
    function backfind(s) {
        return Math.max(rfind(s, "+"), rfind(s, "-"))
    }

    function rfind(s, object) {
        pepe = 0
        for (i=s.length; i>0; i--){
            if (s[i] == object){
                return i;
                pepe = 1
            }
        }
        if (pepe == 0){
          return(-1)
        }
    }

    while (s.length!=1){
        if (s[0]!="-"){
            if (s[check(s)]=="+"){
                if (count(s, "+") + count(s, "*") + count(s, "-") + count(s, "/")>1){
                    plusPos = s.indexOf("+");
                    plusPos1 = plusPos+1;
                    a = parseFloat(s.slice(0, plusPos));
                    b = parseFloat(s.slice(plusPos1, pos(s.slice(plusPos1,)) + (s.length - (s.slice(plusPos1,)).length)));
                    c = s.slice(pos(s.slice(plusPos1,)) + (s.length - (s.slice(plusPos1,)).length),);
                    s = String(a + b) + c;
                    
            
                } else if (count(s, "+") + count(s, "*") + count(s, "-") + count(s, "/")==1){
                    plusPos = s.indexOf("+");
                    plusPos1 = plusPos + 1;
                    a = parseFloat(s.slice(0, plusPos))
                    b = parseFloat(s.slice(plusPos1,))
                    s = a+b
                    
                    break
                }
            } else if (s[check(s)]=="*"){
                if (count(s, "+") + count(s, "*") + count(s, "-") + count(s, "/")>1){
                    multiPos = s.indexOf("*");
                    multiPos1 = multiPos+1;
                    if (s.slice(1, multiPos).indexOf("+") == -1 && s.slice(1, multiPos).indexOf("-") == -1){
                        a = parseFloat(s.slice(0, multiPos));
                        c1 = "";
                        if (s.slice(multiPos1+1,).indexOf("+")==-1 && s.slice(multiPos1+1,).indexOf("/")==-1 && s.slice(multiPos1+1,).indexOf("*")==-1 && s.slice(multiPos1+1,).indexOf("-")==-1 ){
                            b = parseFloat(s.slice(multiPos1,))
                            c2 = ""
                            
                        } else{
                            n = s.length - s.slice(multiPos1,).length;
                            b = parseFloat(s.slice(multiPos1, pos(s.slice(multiPos1,)) + n));
                            c2 = s.slice(pos(s.slice(multiPos1,)) + n,);
                            
                        }
                    } else{
                        a = parseFloat(s.slice(backfind(s.slice(0, multiPos)) + 1, multiPos));
                        c1 = s.slice(0, backfind(s.slice(0, multiPos-1)) + 1)
                        
                        if (s.slice(multiPos1+1,).indexOf("+")==-1 && s.slice(multiPos1+1,).indexOf("/")==-1 && s.slice(multiPos1+1,).indexOf("*")==-1 && s.slice(multiPos1+1,).indexOf("-")==-1 ){
                            b = parseFloat(s.slice(multiPos1,))
                            c2 = ""    
                            
                        } else{
                            n = s.length - s.slice(multiPos1,).length;
                            b = parseFloat(s.slice(multiPos1, pos(s.slice(multiPos1,)) + n));
                            c2 = s.slice(pos(s.slice(multiPos1,)) + n,);
                            
                        }
                    }
                    s = c1 + String(a * b) + c2
                    
            
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
                    if (s.slice(1, delPos).indexOf("+") == -1 && s.slice(1, delPos).indexOf("-") == -1){
                        a = parseFloat(s.slice(0, delPos));
                        c1 = "";
                        if (s.slice(delPos1+1,).indexOf("+")==-1 && s.slice(delPos1+1,).indexOf("/")==-1 && s.slice(delPos1+1,).indexOf("*")==-1 && s.slice(delPos1+1,).indexOf("-")==-1 ){
                            b = parseFloat(s.slice(delPos1,))
                            c2 = ""
                            
                        } else{
                            n = s.length - s.slice(delPos1,).length;
                            b = parseFloat(s.slice(delPos1, pos(s.slice(delPos1,)) + n));
                            c2 = s.slice(pos(s.slice(delPos1,)) + n,);
                            
                        }
                    } else{
                        a = parseFloat(s.slice(backfind(s.slice(0, delPos)) + 1, delPos));
                        c1 = s.slice(0, backfind(s.slice(0, delPos-1)) + 1)
                        
                        if (s.slice(delPos1+1,).indexOf("+")==-1 && s.slice(delPos1+1,).indexOf("/")==-1 && s.slice(delPos1+1,).indexOf("*")==-1 && s.slice(delPos1+1,).indexOf("-")==-1 ){
                            b = parseFloat(s.slice(delPos1,))
                            c2 = ""    
                            
                        } else{
                            n = s.length - s.slice(delPos1,).length;
                            b = parseFloat(s.slice(delPos1, pos(s.slice(delPos1,)) + n));
                            c2 = s.slice(pos(s.slice(delPos1,)) + n,);
                            
                            
                        }
                    }
                    s = c1 + String(a / b) + c2
            
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
        } else{
            if (s[check(s.slice(1,))+1]=="+"){
                if (count(s.slice(1,), "+") + count(s.slice(1,), "*") + count(s.slice(1,), "-") + count(s.slice(1,), "/")>1){
                    plusPos = s.indexOf("+");
                    plusPos1 = plusPos+1;
                    a = parseFloat(s.slice(0, plusPos));
                    b = parseFloat(s.slice(plusPos1, pos(s.slice(plusPos1,)) + (s.length - (s.slice(plusPos1,)).length)));
                    c = s.slice(pos(s.slice(plusPos1,)) + (s.length - (s.slice(plusPos1,)).length),);
                    s = String(a + b) + c;
                    console.log(s);
            
                } else if (count(s.slice(1,), "+") + count(s.slice(1,), "*") + count(s.slice(1,), "-") + count(s.slice(1,), "/")==1){
                    plusPos = s.indexOf("+");
                    plusPos1 = plusPos + 1;
                    a = parseFloat(s.slice(0, plusPos))
                    b = parseFloat(s.slice(plusPos1,))
                    s = a+b
                    console.log(s);
                    break
                }
            } else if (s[check(s.slice(1,))+1]=="*"){
                if (count(s, "+") + count(s, "*") + count(s, "-") + count(s, "/")>1){
                    multiPos = s.indexOf("*");
                    multiPos1 = multiPos+1;
                    if (s.slice(1, multiPos).indexOf("+") == -1 && s.slice(1, multiPos).indexOf("-") == -1){
                        a = parseFloat(s.slice(0, multiPos));
                        c1 = "";
                        if (s.slice(multiPos1+1,).indexOf("+")==-1 && s.slice(multiPos1+1,).indexOf("/")==-1 && s.slice(multiPos1+1,).indexOf("*")==-1 && s.slice(multiPos1+1,).indexOf("-")==-1 ){
                            b = parseFloat(s.slice(multiPos1,))
                            c2 = ""
                            
                        } else{
                            n = s.length - s.slice(multiPos1,).length;
                            b = parseFloat(s.slice(multiPos1, pos(s.slice(multiPos1,)) + n));
                            c2 = s.slice(pos(s.slice(multiPos1,)) + n,);
                            
                        }
                    } else{
                        a = parseFloat(s.slice(backfind(s.slice(0, multiPos)) + 1, multiPos));
                        c1 = s.slice(0, backfind(s.slice(0, multiPos-1)) + 1)
                        
                        if (s.slice(multiPos1+1,).indexOf("+")==-1 && s.slice(multiPos1+1,).indexOf("/")==-1 && s.slice(multiPos1+1,).indexOf("*")==-1 && s.slice(multiPos1+1,).indexOf("-")==-1 ){
                            b = parseFloat(s.slice(multiPos1,))
                            c2 = ""    
                            
                        } else{
                            n = s.length - s.slice(multiPos1,).length;
                            b = parseFloat(s.slice(multiPos1, pos(s.slice(multiPos1,)) + n));
                            c2 = s.slice(pos(s.slice(multiPos1,)) + n,);
                            
                        }
                    }
                    s = c1 + String(a * b) + c2
            
                } else if (count(s.slice(1,), "+") + count(s.slice(1,), "*") + count(s.slice(1,), "-") + count(s.slice(1,), "/")==1){
                    multiPos = s.indexOf("*");
                    multiPos1 = multiPos+1;
                    a = parseFloat(s.slice(0, multiPos))
                    b = parseFloat(s.slice(multiPos1,))
                    s = a*b
                    break
                }
            } else if (s[check(s.slice(1,))+1]=="/"){
                if (count(s, "+") + count(s, "*") + count(s, "-") + count(s, "/")>1){
                    delPos = s.indexOf("/");
                    delPos1 = delPos+1;
                    if (s.slice(1, delPos).indexOf("+") == -1 && s.slice(1, delPos).indexOf("-") == -1){
                        a = parseFloat(s.slice(0, delPos));
                        c1 = "";
                        if (s.slice(delPos1+1,).indexOf("+")==-1 && s.slice(delPos1+1,).indexOf("/")==-1 && s.slice(delPos1+1,).indexOf("*")==-1 && s.slice(delPos1+1,).indexOf("-")==-1 ){
                            b = parseFloat(s.slice(delPos1,))
                            c2 = ""
                            
                        } else{
                            n = s.length - s.slice(delPos1,).length;
                            b = parseFloat(s.slice(delPos1, pos(s.slice(delPos1,)) + n));
                            c2 = s.slice(pos(s.slice(delPos1,)) + n,);
                            
                        }
                    } else{
                        a = parseFloat(s.slice(backfind(s.slice(0, delPos)) + 1, delPos));
                        c1 = s.slice(0, backfind(s.slice(0, delPos-1)) + 1)
                        
                        if (s.slice(delPos1+1,).indexOf("+")==-1 && s.slice(delPos1+1,).indexOf("/")==-1 && s.slice(delPos1+1,).indexOf("*")==-1 && s.slice(delPos1+1,).indexOf("-")==-1 ){
                            b = parseFloat(s.slice(delPos1,))
                            c2 = ""    
                            
                        } else{
                            n = s.length - s.slice(delPos1,).length;
                            b = parseFloat(s.slice(delPos1, pos(s.slice(delPos1,)) + n));
                            c2 = s.slice(pos(s.slice(delPos1,)) + n,);
                            
                            
                        }
                    }
                    s = c1 + String(a / b) + c2
            
                } else if (count(s.slice(1,), "+") + count(s.slice(1,), "*") + count(s.slice(1,), "-") + count(s.slice(1,), "/")==1){
                    delPos = s.indexOf("/");
                    delPos1 = delPos+1;
                    a = parseFloat(s.slice(0, delPos))
                    b = parseFloat(s.slice(delPos1,))
                    s = a/b
                    break
                }
            } else if (s[check(s.slice(1,))+1]=="-"){
                if (count(s.slice(1,), "+") + count(s.slice(1,), "*") + count(s.slice(1,), "-") + count(s.slice(1,), "/")>1){
                    minusPos = s.slice(1,).indexOf("-")+1;
                    minusPos1 = minusPos+1;
                    a = parseFloat(s.slice(0, minusPos));
                    b = parseFloat(s.slice(minusPos1, pos(s.slice(minusPos1,)) + (s.length - (s.slice(minusPos1,)).length)));
                    c = s.slice(pos(s.slice(minusPos1,)) + (s.length - (s.slice(minusPos1,)).length),);
                    s = String(a-b) + c;
            
                } else if (count(s.slice(1,), "+") + count(s.slice(1,), "*") + count(s.slice(1,), "-") + count(s.slice(1,), "/")==1){
                    minusPos = s.slice(1,).indexOf("-")+1;
                    minusPos1 = minusPos+1;
                    a = parseFloat(s.slice(0, minusPos))
                    b = parseFloat(s.slice(minusPos1,))
                    s = a-b
                    break
                }
            }
        }
    }
    document.querySelector('.TextBox').value = s;
}
//#endregion равно


//#region смена темы
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
//#endregion смена темы
