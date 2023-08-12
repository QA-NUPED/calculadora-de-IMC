import { calculateBMI } from '../src/calculation/calculation';
import { getBMICategory } from '../src/calculation/levelBMI';

document.addEventListener('DOMContentLoaded', () => {
  const calculateButton = document.getElementById(
    'calculate',
  ) as HTMLInputElement;
  const weightInput = document.getElementById('weight') as HTMLInputElement;
  const heightInput = document.getElementById('height') as HTMLInputElement;
  const resultDiv = document.getElementById('result') as HTMLInputElement;

  calculateButton.addEventListener('click', () => {
    const weight = Number(weightInput.value);
    const height = Number(heightInput.value) / 100; // Convert cm to meters

    const bmi = calculateBMI(weight, height);
    const category = getBMICategory(bmi);

    resultDiv.textContent = `Seu IMC é ${bmi.toFixed(
      2,
    )}. Categoria: ${category}`;
  });
});
