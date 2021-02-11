s = "1-2/3";
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
    if (s[0]!="-"){
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
            if (count(s.slice(1,), "+") + count(s.slice(1,), "*") + count(s.slice(1,), "-") + count(s.slice(1,), "/")>1){
                multiPos = s.indexOf("*");
                multiPos1 = multiPos+1;
                a = parseFloat(s.slice(0, multiPos));
                b = parseFloat(s.slice(multiPos1, pos(s.slice(multiPos1,)) + (s.length - (s.slice(multiPos1,)).length)));
                c = s.slice(pos(s.slice(multiPos1,)) + (s.length - (s.slice(multiPos1,)).length),);
                s = String(a*b) + c;
        
            } else if (count(s.slice(1,), "+") + count(s.slice(1,), "*") + count(s.slice(1,), "-") + count(s.slice(1,), "/")==1){
                multiPos = s.indexOf("*");
                multiPos1 = multiPos+1;
                a = parseFloat(s.slice(0, multiPos))
                b = parseFloat(s.slice(multiPos1,))
                s = a*b
                break
            }
        } else if (s[check(s.slice(1,))+1]=="/"){
            if (count(s.slice(1,), "+") + count(s.slice(1,), "*") + count(s.slice(1,), "-") + count(s.slice(1,), "/")>1){
                delPos = s.indexOf("/");
                delPos1 = delPos+1;
                a = parseFloat(s.slice(0, delPos));
                b = parseFloat(s.slice(delPos1, pos(s.slice(delPos1,)) + (s.length - (s.slice(delPos1,)).length)));
                c = s.slice(pos(s.slice(delPos1,)) + (s.length - (s.slice(delPos1,)).length),);
                s = String(a/b) + c;
        
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
console.log(s);