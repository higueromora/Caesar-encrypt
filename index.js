//Cifrado César
function encrypt() {
    let key = document.getElementById('number').value;
    let phrase = document.getElementById('input__text').value;
    if(key === "" && phrase === ""){
        return document.getElementById('answer').innerHTML = "Introduce una clave y una palabra";
    }else if(key === ""){
        return document.getElementById('answer').innerHTML = "Introduce una clave";
    }else if(phrase === ""){
        return document.getElementById('answer').innerHTML = "Introduce una palabra";
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
    return document.getElementById('answer').innerHTML = "Este es el cifrado " + answer + " y con clave " + key;
}

function decrypt() {
    let key = document.getElementById('number').value;
    let phrase = document.getElementById('input__text').value;
    if(key === "" && phrase === ""){
        return document.getElementById('answer').innerHTML = "Introduce una clave y una palabra";
    }else if(key === ""){
        return document.getElementById('answer').innerHTML = "Introduce una clave";
    }else if(phrase === ""){
        return document.getElementById('answer').innerHTML = "Introduce una palabra";
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
    return document.getElementById('answer').innerHTML ="Este es el descifrado " + answer + " y con clave " + key;
}
