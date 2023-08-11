export function getBMICategory(bmi: number) {
    const IMC = [ "Abaixo do Peso", "Peso Normal", "Sobrepeso"]
  
    if (bmi <= 18.59) return IMC[0];
    else if (bmi <= 24.99) return  IMC[1];
    else if (bmi <= 29.99) return  IMC[2];
    else 
      return "Obeso";
}