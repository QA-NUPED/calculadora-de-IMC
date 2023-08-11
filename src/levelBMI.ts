function getBMICategory(bmi: number) {
    const IMC = [ "Abaixo do Peso", "Peso Normal", "Sobrepeso"]
  
    if (bmi < 18.5) return IMC[0];
    if (bmi < 24.9) return  IMC[1];
    if (bmi < 29.9) return  IMC[2];
    else 
      return "Obeso";
}

export const category = getBMICategory