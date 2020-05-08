function countEvens(x){
    y = 0
    for(var i = 0; i <= x.length; i++){
        if(x[i] % 2 == 0){
            y += 1
        }
    }
    return y
}


function countHi(x){
    y=0;
    for(var i = 0; i<=x.length;i++){
        if(x[i]=="h" && x[i+1]=="i"){
            y+=1
        }
    }
    return y
}

function no14(x){
    y = 0
    k = 0
    for(var i=0; i<=x.length;i++){
        if(x[i]==4){
            y +=1
        }
        if (x[i]==1){
            k+=1
        }
    }
    if (k==0||y==0){
        return true
    }else{
        return false
    }

}


function either24(x){
    y=0
    k=0
    for(var i=0; i<=x.length;i++){
        if(x[i]==2 && x[i+1]==2){
            y +=1
        }
        if (x[i]==4 && x[i+1]==4){
            k+=1
        }
    }
    if(y>= 1 && k>=1){
        return false
    }else if(y==0 && k==0){
        return false
    }else{
        return true
    }
}


function makeChocolate(x, y, z){
    var k=5*y
    if((z - k) <= x ){
        if ((z-k) >= 0){
            return z-k;
        }else if ((z % 5) <= x){
            return z % 5;
        }else{
            return -1;
        }
    }else{
        return -1;
    }
}


function luckySum(a, b, c){
    y = 0
    if(a + b + c){
        if(a == 13){
            y = 0;
        }else if(b == 13 ){
            y = a
        }else if(c == 13){
            y = a + b
        }else{
            y = a + b + c
        }
    }
    return y
}

function maxBlock(str){
    var a = "";
    var b = 1;
    var c = 0;
    for(var i = 0; i < str.length; i++){
        a = str.substring(i,i+1);
        for(var j = i+1; i < str.length; j++){
            if(str.substring(j,j+1) == a){
                b += 1;
            }else{
                break;
            }
        }
        if(b>c){
            c=b;
        }
        b = 1;
    }
    return c;
}

function linearIn(x,y){
    var a = 0;
    for(var i=0;i <= x.length;i++){
        if(x[i] == y[a]){
            a +=1
        }
        if(a == y.length+1){
            return true;
        }
    }
    return false;
}

function countTriple(str){
    var y = -1;
    for(var i=0;i<=str.length;i++){
        if(str.substring(i,i+1)==str.substring(i+1,i+2)  && str.substring(i+1,i+2)==str.substring(i+2,i+3)){
            y += 1;
        }
    }
    return y;
}

function sameEnds(x) {

    var ends = "";

    for(var i = 0; i <= x.length-1; i++){
        if(x.substring(0, i) == x.substring(x.length-i,x.length) && i<=x.length-i){
            ends = x.substring(0,i);
        }
    }

    return ends;
}