import { error } from "jquery";

export function getBMICategory(bmi: number) {
    const IMC = [ "Seu peso tem que ser um valor acima de 0", "Abaixo do Peso", "Peso Normal", "Sobrepeso", "Obeso" ]
  
    if (bmi <= 0) return IMC[0];
    else if (bmi <= 18.59) return IMC[1];
    else if (bmi <= 24.99) return  IMC[2];
    else if (bmi <= 29.99) return  IMC[3];
    else 
      return IMC[4];
}