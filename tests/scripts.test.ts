import { calculateBMI, getBMICategory } from "../src/script";

describe("calculateBMI function", () => {
  it("calculates BMI correctly", () => {
    const weight = 70;
    const height = 170 / 100; // Convert cm to meters

    const result = calculateBMI(weight, height);
    expect(result).toBeCloseTo(24.22, 2);
  });

  it("returns 'Abaixo do Peso' for BMI less than 18.5", () => {
    const weight = 50;
    const height = 160 / 100; // Convert cm to meters

    const result = getBMICategory(weight, height);
    expect(result).toBe("Abaixo do Peso");
  });

  it("returns 'Peso Normal' for BMI between 18.5 and 24.9", () => {
    const weight = 65;
    const height = 175 / 100; // Convert cm to meters

    const result = getBMICategory(weight, height);
    expect(result).toBe("Peso Normal");
  });

  it("returns 'Sobrepeso' for BMI between 25 and 29.9", () => {
    const weight = 80;
    const height = 180 / 100; // Convert cm to meters

    const result = getBMICategory(weight, height);
    expect(result).toBe("Sobrepeso");
  });

  it("returns 'Obeso' for BMI equal to or greater than 30", () => {
    const weight = 100;
    const height = 185 / 100; // Convert cm to meters

    const result = getBMICategory(weight, height);
    expect(result).toBe("Obeso");
  });
});
