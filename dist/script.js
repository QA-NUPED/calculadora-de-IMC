"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calculation_1 = require("./calculation");
const levelBMI_1 = require("./levelBMI");
document.addEventListener("DOMContentLoaded", () => {
    const calculateButton = document.getElementById("calculate");
    const weightInput = document.getElementById("weight");
    const heightInput = document.getElementById("height");
    const resultDiv = document.getElementById("result");
    calculateButton.addEventListener("click", () => {
        const weight = parseFloat(weightInput.value);
        const height = parseFloat(heightInput.value) / 100; // Convert cm to meters
        const bmi = (0, calculation_1.calculateBMI)(weight, height);
        const category = (0, levelBMI_1.getBMICategory)(bmi);
        resultDiv.textContent = `Seu IMC é ${bmi.toFixed(2)}. Categoria: ${category}`;
    });
});
