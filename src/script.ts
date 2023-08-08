export function calculateBMI(weight: number, height: number): number {
  return weight / (height * height);
}

export function getBMICategory(weight: number, height: number): string {
  const bmi = calculateBMI(weight, height);

  if (bmi < 18.5) {
    return "Abaixo do Peso";
  } else if (bmi < 24.9) {
    return "Peso Normal";
  } else if (bmi < 29.9) {
    return "Sobrepeso";
  } else {
    return "Obeso";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const calculateButton = document.getElementById("calculate") as HTMLInputElement;
  const weightInput = document.getElementById("weight") as HTMLInputElement;
  const heightInput = document.getElementById("height") as HTMLInputElement;
  const resultDiv = document.getElementById("result") as HTMLInputElement;

  calculateButton.addEventListener("click", () => {
    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value) / 100; // Convert cm to meters

    const bmi = calculateBMI(weight, height);
    const category = getBMICategory(weight, height);

    resultDiv.textContent = `Seu IMC é ${bmi.toFixed(2)}. Categoria: ${category}`;
  });
});
