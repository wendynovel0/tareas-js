function invertirCadena() {
    const input = document.getElementById('inputString').value;
    const reversed = input.split('').reverse().join('');
    document.getElementById('output1').innerText = `Cadena invertida: ${reversed}`;
}

function esPrimo() {
    const number = parseInt(document.getElementById('inputNumber').value);
    if (isNaN(number) || number <= 1) {
        document.getElementById('output2').innerText = 'Por favor, ingrese un número mayor que 1.';
        return;
    }
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }
    document.getElementById('output2').innerText = `El número ${number} ${isPrime ? 'es' : 'no es'} primo.`;
}

function eliminarDuplicados() {
    const input = document.getElementById('inputArray').value;
    const array = input.split(',').map(item => item.trim());
    const uniqueArray = [...new Set(array)];
    document.getElementById('output3').innerText = `Arreglo sin duplicados: [${uniqueArray.join(', ')}]`;
}

function calcularFactorial() {
    const number = parseInt(document.getElementById('inputFactorial').value);
    if (isNaN(number) || number < 0) {
        document.getElementById('output4').innerText = 'Por favor, ingrese un número no negativo.';
        return;
    }
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }
    document.getElementById('output4').innerText = `El factorial de ${number} es ${factorial}.`;
}

function contarVocales() {
    const input = document.getElementById('inputVowels').value;
    const vowels = input.match(/[aeiou]/gi);
    const count = vowels ? vowels.length : 0;
    document.getElementById('output5').innerText = `Número de vocales: ${count}.`;
}

function sumarNumeros() {
    const input = document.getElementById('inputSumArray').value;
    const array = input.split(',').map(item => parseFloat(item.trim()));
    if (array.some(isNaN)) {
        document.getElementById('output6').innerText = 'Por favor, ingrese un arreglo válido de números.';
        return;
    }
    const sum = array.reduce((total, num) => total + num, 0);
    document.getElementById('output6').innerText = `Suma de los números: ${sum}.`;
}

function encontrarMaximo() {
    const input = document.getElementById('inputMaxArray').value;
    const array = input.split(',').map(item => parseFloat(item.trim()));
    if (array.some(isNaN)) {
        document.getElementById('output7').innerText = 'Por favor, ingrese un arreglo válido de números.';
        return;
    }
    const max = Math.max(...array);
    document.getElementById('output7').innerText = `El número máximo es: ${max}.`;
}