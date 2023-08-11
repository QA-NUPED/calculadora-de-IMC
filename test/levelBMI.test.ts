import { getBMICategory } from '../src/levelBMI'

describe("categoryBMI function", () => {
    
    it("returns 'Abaixo do Peso' for BMI less than 18.5", () => {
        // Arrenge  
        const bmi = 18;

        // Act  
        const result = getBMICategory(bmi);

        // Assert
        expect(result).toBe("Abaixo do Peso");
    });
  
    it("returns 'Peso Normal' for BMI between 18.5 and 24.9", () => {
        // Arrenge   
        const bmi = 20.5;

        // Act   
        const result = getBMICategory(bmi);

        // Assert   
        expect(result).toBe("Peso Normal");
    });
  
    it("returns 'Sobrepeso' for BMI between 25 and 29.9", () => {
        // Arrenge   
        const bmi = 27.4;

        // Act   
        const result = getBMICategory(bmi);

        // Assert
        expect(result).toBe("Sobrepeso");
    });
  
    it("returns 'Obeso' for BMI equal to or greater than 30", () => {
        // Arrenge   
        const bmi = 31;

        // Act   
        const result = getBMICategory(bmi);

        // Assert
        expect(result).toBe("Obeso");
    });
});