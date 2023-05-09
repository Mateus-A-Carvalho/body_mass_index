const form = document.querySelector('#form'); // Catching form to manipulate in Javascript

form.addEventListener('submit', function(event) { // In "function (event)", event are the parameter of function. 
    event.preventDefault(); 
    const inputWeight = event.target.querySelector('#weight') 
    const inputHeight = event.target.querySelector('#height') 

    const weight = Number(inputWeight.value); 
    const height = Number(inputHeight.value); 

    if (!weight) { 
        setResult('Invalid Weight', false);
        return;
    }

    if (!height) {
        setResult('Invalid Height', false);
        return;
    }

    const imc =  getImc(weight, height);
    const rangeIMC = getImcRange(imc);
    const msg = `Your BMI is ${imc} (${rangeIMC}).`; // Creating the message to display the IMC and the Range of obesity.

    setResult(msg, true);

});

function getImc(weight, height) { // This function calcule the IMC and return value with two decimals cases.
    const imc = weight / (height * height);
    return imc.toFixed(2);  
}

function getImcRange(imc) {
    const level = ['Underweight', 'Normal weight', 'Overweight', 'Obesity Level I', 'Obesity Level II', 'Obesidade Obesity Level III'];

    if (imc >= 39.9) return level[5];
    if (imc >= 34.9) return level[4];
    if (imc >= 29.9) return level[3];
    if (imc >= 24.9) return level[2];
    if (imc >= 18.5) return level[1];
    if (imc < 18.5) return level[0];
    
}

function createP () { // The purpose of this function is just creat a <p> element.
    const p = document.createElement('p') // Creating an element in HTML with Javascript.
    // p.classList.add('p-result'); // Adding a class with Javascript.
    return p;
}

function setResult (msg, isValid) { // This function has the purpose of creating a result in a div. The first parameter set a message. The second, check a boolean value to tell if input values test false or true. Remember of "Falsy Values" in Javascript. Nan is a falsy value, so it will test false.
    const result = document.querySelector('.result'); // Catching the div with class="result" in HTML.
    result.innerHTML = ''; 

    const p = createP();     

    if(isValid) { 
        p.classList.add('good')
    } else {
        p.classList.add('bad')
    }

    p.innerHTML = msg;
    result.appendChild(p) // Adding the element <p> inside div result.
}
