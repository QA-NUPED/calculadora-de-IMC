import { calculateBMI } from "../src/calculation";

describe("calculateBMI function", () => {
  it("calculates BMI correctly", () => {

    // Arrange 
    const weight = 80;
    const height = 1.80;
    const expectedBMI = 24.69;

    // Act 
    const  result = calculateBMI(weight, height);

    // Assert
    expect(result).toBeCloseTo(expectedBMI, 2);
  });

  it("calculates BMI incorrectly", () => {

    // Arrange 
    const weight = 55;
    const height = 1.60;
    const expectedBMI = 24.69;

    //Act 
    const result = calculateBMI(weight, height);

    // Assert
    expect(result).not.toBeCloseTo(expectedBMI, 2);
  });
});
