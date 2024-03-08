console.log("1. Parašykite funkciją, kuri priima vartotojo vardą kaip argumentą ir grąžina pasveikinimo žinutę.")

function call (name) {
    return "Labas: " + name;
}
console.log(call("Marija"));



console.log("2. Sukurkite funkciją, kuri priima du skaičius kaip argumentus ir grąžina jų sumą.")
function sum(no1, no2) {
    return no1 + no2;
}
console.log(sum(1, 2));


console.log("3. Parašykite funkciją, kuri priima masyvą kaip argumentą ir grąžina visų masyvo elementų sumą.")
function array(arr) {
return arr.reduce((total, element) => total + element);
}
console.log(array([1, 2, 3]));


console.log("4.  Sukurkite funkciją, kuri priima masyvą skaičių ir grąžina didžiausią skaičių masyve.")
function max(arr) {
    return Math.max(...arr);
}
console.log(max([1, 9, 3]));


console.log("5.Parašykite funkciją, kuri priima tekstą kaip argumentą ir grąžina to teksto ilgį.")
function textLength(str) {
    return str.length;
}
console.log(textLength("Labas Rytas"));

//
console.log("6.: Sukurkite funkciją, kuri priima skaičių ir grąžina jo faktorialą.")
function factorial(num) {
   return num <= 0 ? 1 : num * factorial(num - 1);
}
console.log(factorial(4));


console.log("7.Parašykite funkciją, kuri priima masyvą skaičių ir skaičių kaip argumentus, o grąžina naują masyvą, kuriame yra tik tie skaičiai, kurie didesni už pateiktą skaičių***")
function greaterThan(arr, num) {
    newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > num) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(greaterThan([1, 3, 9, 4, 6, 6, 7, 1], 5));


console.log("8. Sukurkite funkciją, kuri priima tekstą kaip argumentą ir grąžina jį atvirkštine tvarka.")
function reverse(text) {
    return text.split('').reverse().join('');
}
console.log(reverse("sula"));


console.log("9. Parašykite funkciją, kuri nustato, ar pateiktas tekstas yra palindromas.")
function polindrome(text) {
    const reverseText = text.split('').reverse().join('');
    if (text !== reverseText) {
        return "Ne Polindromas"
    }
 return "Polindromas";
}
console.log(polindrome("savas"));
console.log(polindrome("saves"));


console.log("10. Sukurkite funkciją, kuri priima skaičių ir grąžina true, jei skaičius yra lyginis, ir false, jei skaičius yra nelyginis.")
function evenOddNumber(number){
    return number%2 === 0 ? true : false;
}
console.log(evenOddNumber(2));
console.log(evenOddNumber(3));


console.log("11.  Parašykite funkciją, kuri priima tekstą ir dvi eilutes: pakeistiną simbolį ir pakeitimo simbolį. Funkcija grąžina naują tekstą su pakeistais simboliais.")
function changeText(text, oldSymbol, newSymbol) {
   return text.replace(oldSymbol, newSymbol);
}
console.log(changeText("labas, kas bus?", "bus", "buvo"));


console.log("12. Sukurkite funkciją, kuri priima temperatūrą Celsijaus laipsniais ir konvertuoja ją į Farenheito laipsnius.")
function degreesCtoF(celsius) {
    return (celsius * 1.8) + 32; 
}
console.log(degreesCtoF(-100));


console.log("13.  Parašykite funkciją, kuri priima masyvą ir grąžina naują masyvą be dublikatų.***")
function removeDuplicate(arr) {
    return arr.filter((value, index) => arr.indexOf(value) === index); 
}
console.log(removeDuplicate([1,2,1,3,4,2]));


console.log("13a. Sukurkite funkciją, kuri priima skaičių ir grąžina true, jei skaičius yra pirminis, ir false, jei ne.")
function primeNumber(number) {
    if (number%2 !== 0 && number%3 !== 0 && number%number === 0 && number > 1 || number === 2 || number === 3) {
        return true;
    } 

    return false;
}
console.log(primeNumber(2));
console.log(primeNumber(3));
console.log(primeNumber(5));
console.log(primeNumber(7));
console.log(primeNumber(11));
console.log(primeNumber(13));
console.log("test if not prime:")
console.log(primeNumber(-5));
console.log(primeNumber(0));
console.log(primeNumber(1));
console.log(primeNumber(4));
console.log(primeNumber(6));
console.log(primeNumber(9));
console.log(primeNumber(10));
console.log(primeNumber(12));
console.log(primeNumber(14));

console.log("14. Parašykite funkciją, kuri priima masyvą skaičių ir grąžina jį surikiuotą mažėjančia tvarka.")
function descOrder(arr) {
    return arr.sort((a, b) => (b-a));
}
console.log(descOrder([5, 4, 1, 2, 3])); 


console.log("15.  Sukurkite funkciją, kuri priima du skaičius kaip pradžios ir pabaigos intervalo ribas ir grąžina visų skaičių, esančių tame intervale, sumą.")
function limitLength(min, max) {
    let sum = 0;
    for (let i = min; i <= max; i++){
        sum += i;
    }
    return sum;
}
console.log(limitLength(2, 5));

console.log("17.  Parašykite funkciją, kuri priima tekstą ir grąžina jį, pakeisdamas kiekvieną raidę į sekantį raidę abėcėlėje.")

function mixLettersByOrder(text) {
    const vocabulary = "abcdefghijklmnopqrstuvwxyz";
    let mixedText = "";
    for(let i = 0; i < text.length; i++){
        if (vocabulary.includes(text[i])) {
            mixedText += vocabulary[vocabulary.indexOf(text[i]) + 1];
            console.log(vocabulary.indexOf(text[i]))
        }
    }
    return mixedText;
}
console.log(mixLettersByOrder("marius"));

console.log("18.  Sukurkite funkciją, kuri priima gimimo metus ir grąžina asmenio amžių.")
function age(bDay) {
    const currentDate = new Date;
    const currentYear = currentDate.getFullYear();
    return currentYear - bDay;
}
console.log(age(1921));

console.log("19.Parašykite funkciją, kuri priima tekstą ir simbolį, o grąžina, kiek kartų tas simbolis pasikartoja tekste.")
function symbolRepeat(text, symbol) {
    let count = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i] === symbol) {
            count ++;
        }
    }
    return count;
}
console.log(symbolRepeat("programavimas", "a"));

// 20. Parašykite funkciją, kuri priima kelių masyvų sąrašą ir grąžina naują masyvą, kuris sudarytas tik iš tų elementų, kurie pasikartoja visuose pradiniuose masyvuose.
// Reikalavimai:
// Universalumas: funkcija turėtų veikti su bet kokiu masyvu sudarytu iš skaičių.
// Veiksmingumas: stenkitės optimizuoti funkciją taip, kad ji veiktų kuo efektyviau su dideliais masyvais.
// Unikalumas: grąžinamame masyve neturėtų būti pasikartojančių elementų.
console.log("20. Parašykite funkciją, kuri priima kelių masyvų sąrašą ir grąžina naują masyvą, kuris sudarytas tik iš tų elementų, kurie pasikartoja visuose pradiniuose masyvuose.")
// function newArray(arr1, arr2) {
//     const array1 = arr1.filter((value, index, arr) => arr.indexOf(value) !== index && arr.lastIndexOf(value) === index)
//     console.log(array1);
//     const array2 = arr2.filter((value, index, arr) => arr.indexOf(value) !== index && arr.lastIndexOf(value) === index)
//     console.log(array2);
//     const result = array1.concat(array2);
//     return result.filter((value, index, arr) => arr.lastIndexOf(value) === index)
// }
// console.log(newArray([1,2,3,4,5,6,5,4,3,2,1], [10,11,12,1,2,3,4,5,10, 5]));


function newArray(...arrays) {
    const nArrays = arrays.map(arr =>
        arr.filter((value, index, array) => array.indexOf(value) !== index && array.lastIndexOf(value) === index)
    );

    const result = [].concat(...nArrays);

    return result.filter((value, index, array) => array.lastIndexOf(value) === index);
}

console.log(newArray([1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1], [10, 11, 12, 1, 2, 3, 4, 5, 10, 5], [10,5,1,2,11,11]));













