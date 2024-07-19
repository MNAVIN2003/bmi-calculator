// script.js

document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let height = parseFloat(document.getElementById('height').value);
    let weight = parseFloat(document.getElementById('weight').value);
    
    if (height > 0 && weight > 0) {
        let bmi = calculateBMI(height, weight);
        displayResult(bmi);
    } else {
        alert('Please enter valid height and weight values.');
    }
});

function calculateBMI(height, weight) {
    // BMI formula: weight (kg) / [height (m)]^2
    let heightInMeters = height / 100; // Convert height from cm to meters
    return (weight / (heightInMeters * heightInMeters)).toFixed(2);
}

function displayResult(bmi) {
    let resultElement = document.getElementById('result');
    resultElement.textContent = `Your BMI is: ${bmi}`;
}
