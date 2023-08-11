import { getBMICategory } from '../src/levelBMI'

describe("getBMICategory function", () => {
    
    it("returns 'Abaixo do Peso' for BMI less than 18.5", () => {
        // Arrenge  
        const bmi = 18.4;
        const expectedBMI = "Abaixo do Peso"

        // Act  
        const result = getBMICategory(bmi);

        // Assert
        expect(result).toBe(expectedBMI);
    });
  
    it("returns 'Peso Normal' for BMI between 18.5 and 24.9", () => {
        // Arrenge   
        const bmi = 20.5;
        const expectedBMI = "Peso Normal";

        // Act  
        const result = getBMICategory(bmi);

        // Assert
        expect(result).toBe(expectedBMI);
    });
  
    it("returns 'Sobrepeso' for BMI between 25 and 29.9", () => {
        // Arrenge   
        const bmi = 27.4;
        const expectedBMI = "Sobrepeso"

        // Act  
        const result = getBMICategory(bmi);

        // Assert
        expect(result).toBe(expectedBMI);
    });
  
    it("returns 'Obeso' for BMI equal to or greater than 30", () => {
        // Arrenge   
        const bmi = 30;
        const expectedBMI = "Obeso"

        // Act  
        const result = getBMICategory(bmi);

        // Assert
        expect(result).toBe(expectedBMI);
    });
});