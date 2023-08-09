document.addEventListener("DOMContentLoaded", function () {
    var calculateButton = document.getElementById("calculate");
    var weightInput = document.getElementById("weight");
    var heightInput = document.getElementById("height");
    var resultDiv = document.getElementById("result");
    calculateButton.addEventListener("click", function () {
        var weight = parseFloat(weightInput.value);
        var height = parseFloat(heightInput.value) / 100; // Convert cm to meters
        var bmi = weight / (height * height);
        var category = "";
        if (bmi < 18.5) {
            category = "Abaixo do Peso";
        }
        else if (bmi < 24.9) {
            category = "Peso Normal";
        }
        else if (bmi < 29.9) {
            category = "Sobrepeso";
        }
        else {
            category = "Obeso";
        }
        resultDiv.textContent = "Seu IMC \u00E9 ".concat(bmi.toFixed(2), ". Categoria: ").concat(category);
    });
});