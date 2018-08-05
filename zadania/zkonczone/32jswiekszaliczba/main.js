var num1 = 2;
var num2 = 5;

function biggerNum (n1, n2) {
    let bigNum = 0
    if (n1 < n2) {
        bigNum = n2 + Math.floor(Math.random()*101);
    }   else{
        bigNum = n1 + Math.floor(Math.random()*101);
    }
    return bigNum;
}

console.log(biggerNum(num1, num2));







