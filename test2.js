let s = "1+3+2+3";
function pos(s) {
    a = 0;
    for(i=0; s.length; i++){
        if (s[i]=="+" || s[i]=="*" || s[i]=="-" || s[i]=="/"){
            a=i;
            break;
        }
    }
    return a;
}
function count(s, n){
    k=0;
    for(i=0; s.length; i++){
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
    if (posMinus == -1) {posMinus = 10000}
    if (posDel == -1) {posDel = 10000}
    return Math.min(posPlus, posMinus, posDel, posMulti);
}
while (s.length!=1){
    plusPos = s.indexOf("+");
    plusPos1 = plusPos+1;
    a = parseInt(s.slice(0, plusPos));
    b = parseInt(s.slice(plusPos1, pos(s.slice(plusPos1,)) + (s.length - (s.slice(plusPos1,)).length)));
    c = s.slice(pos(s.slice(plusPos1,)) + (s.length - (s.slice(plusPos1,)).length),);
    s = String(a+b) + c;
    console.log(s);
    if (s.length>10){
        break
    }
}
