let string1 = "Uwielbiam JavaScript";
let string2 = "Jestem swietnym programista";

function measure (str1, str2) {
    if  (str1.length > str2.length){
        let newStr = (str1+'')*3
    }   else {
        let newStr = (str2+'')*3
    }
    return newStr;
}

console.log(measure(string1, string2));