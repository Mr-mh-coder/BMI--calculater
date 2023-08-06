const weight = document.querySelector('#weight');
const height = document.querySelector('#height');
const weightVal = document.querySelector('#weight-val');
const heightVal = document.querySelector('#height-val');
const result = document.querySelector('#result');
const category = document.querySelector('#category');


function calculate(){
    let weightValue = weight.value;
    let heightValue = height.value;
    weightVal.innerHTML = weightValue + 'kg';
    heightVal.innerHTML = heightValue + 'cm';

    heightValue /= 100;
    let fixedHeight = heightValue * heightValue; 
    let calculateBMI = weightValue / fixedHeight;
    result.innerHTML = calculateBMI.toFixed(1);

    if(calculateBMI.toFixed(1) < 18.5){
        category.innerHTML = 'Underweight';
        result.style.color = 'orange';
    }else if(calculateBMI.toFixed(1) > 18.5 && calculateBMI.toFixed(1) < 29.9){
        category.innerHTML = 'Normal weight';
        result.style.color = '#0be881';
    }else if(calculateBMI.toFixed(1) > 28.9){
        category.innerHTML = 'Obese';
        result.style.color = 'red'; 
    }
}

