let numer = 101;
//99.9 , 100 , 100.01 , 199.9, 200, 201

function check(num){
    if (num < 200 && num > 100) {
        console.log("Liczba znajduje sie w przedziale");
    } else {
        console.log("Liczba nie znajduje sie w przedziale");
    }
}

check(numer);