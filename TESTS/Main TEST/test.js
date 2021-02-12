s = "2/3+3/2+3*2";
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
function count(s, n){
    k=0;
    for(i=0; i<s.length; i++){
        if (s[i]==n){
            k+=1;
        }
    }
    return k;
}
function backfind(s) {
    return Math.max(rfind(s, "+"), rfind(s, "-"))
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
                
        
            } else if (count(s.slice(1,), "+") + count(s.slice(1,), "*") + count(s.slice(1,), "-") + count(s.slice(1,), "/")==1){
                plusPos = s.indexOf("+");
                plusPos1 = plusPos + 1;
                a = parseFloat(s.slice(0, plusPos))
                b = parseFloat(s.slice(plusPos1,))
                s = a+b
                
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