//Cifrado César
let key = document.getElementById('number').value;
let regex = /^[A-Za-z\s]+$/;
let phrase = document.getElementById('input__text').value;
let answerElement = document.getElementById('answer');

function encrypt() {    
    if(!regex.test(key)) {
        return answerElement.innerHTML = "Solo se permiten letras";
    }else if(key === "" && phrase === ""){
        return answerElement.innerHTML = "Introduce una clave y una palabra";
    }else if(key === "" || phrase === ""){
        return answerElement.innerHTML = "Introduce una " + (key = "" ? "clave" : "palabra");
    }
    
    let letter, answer = ''; 
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    //Rotamos el alfabeto [key] lugares a la derecha 
    let encryption = alphabet.slice(-key); 
    encryption += alphabet.slice(0, alphabet.length - key);
    //Coge la letra del cifrado según la posición de cada letra
    //en alfabeto 
    for (let i = 0; i < phrase.length; i++) {
        letter = phrase[i].toLowerCase();
        if (letter == ' ') {
            letter = ' ';
        } else {
            //Aquí la búsqueda se hace con la posición del alfabeto original
            letter = encryption[alphabet.indexOf(letter)];
        } 
        answer += letter;
    }
    document.getElementById('display').innerText ="Cifrado 🔒";
    return answerElement.innerHTML = "Este es el cifrado " + answer + " y con clave " + key;
}

function decrypt() {
    
    if(!regex.test(key)) {
        return answerElement.innerHTML = "Solo se permiten letras";
    }else if(key === "" && phrase === ""){
        return answerElement.innerHTML = "Introduce una clave y una palabra";
    }else if(key === "" || phrase === ""){
        return answerElement.innerHTML = "Introduce una " + (key = "" ? "clave" : "palabra");
    }
    let letter, answer = '';
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let encryption = alphabet.slice(-key);
    encryption += alphabet.slice(0, alphabet.length - key)
    for (let i = 0; i < phrase.length; i++) {
        letter = phrase[i].toLowerCase();
        if (letter == ' ') {
            letter = ' ';
        } else {
            //Aquí la búsqueda se hace con la posición de alfabeto cifrado
            letter = alphabet[encryption.indexOf(letter)];
        } 
        answer += letter;
    }
    document.getElementById('display').innerText ="Descifrado 🔓";
    return answerElement.innerHTML ="Este es el descifrado " + answer + " y con clave " + key;
}
