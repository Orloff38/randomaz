const PwEl = document.querySelector("#pass");
const Pl = document.querySelector("#pass__length");
const upperCase = document.querySelector("#upCase");
const lowerCase = document.querySelector("#lowCase");
const numb = document.querySelector("#numb");
const symb = document.querySelector("#symb");
const rangeText = document.querySelector(".length__text");
const upperLetters = "QWERTYUIOPASDFGHJKLZXCVBNM"
const lowerLetters = "qwertyuiopasdfghjklzxcvbnm"
const numbers = "0123456789"
const symbols = "!()><?=-"
const generateEl = document.getElementById("generate");
const copyEl = document.getElementById("copy");

function getUpperCase(){
    return upperLetters[Math.floor(Math.random()*upperLetters.length)]
}    

function getLowerCase(){
    return lowerLetters[Math.floor(Math.random()*lowerLetters.length)]

}

function getNumbers(){
    return numbers[Math.floor(Math.random()*numbers.length)]
}

function getSymbols(){
    return symbols[Math.floor(Math.random()*symbols.length)]
}

function generatePassword(){
    const len = Pl.value;
    console.log(len)
    let password = "";
    for(let i = 0; i<len; i++){
        const x = generateX();
        console.log(x)
        password += x;
        console.log(password)
    }
    PwEl.innerText = password;
}

function generateX(){
    const xs = [];
    if(upperCase.checked){
        xs.push(getUpperCase())
    }
    if(lowerCase.checked){
        xs.push(getLowerCase())
    }
    if(numb.checked){
        xs.push(getNumbers())
    }
    if(symb.checked){
        xs.push(getSymbols())
    }
    if(xs.length === 0) return "";
    console.log(xs)
    return xs[Math.floor(Math.random()*xs.length)]
   
}
generateEl.addEventListener("click", generatePassword);
copyEl.addEventListener("click", function(){
    navigator.clipboard.writeText(PwEl.innerText)
});

Pl.addEventListener("input", function(){

    rangeText.innerText = Pl.value
});