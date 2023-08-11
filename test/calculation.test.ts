import  calculateBMI  from "../src/calculation";

describe("calculateBMI function", () => {
  it("calculates BMI correctly", () => {

    // Arrange 
    const weight = 80;
    const height = 180 / 100; // Convert cm to meters

    // Act 
    const result = calculateBMI(weight, height);

    // Assert
    expect(result).toBeCloseTo(24.69, 2);
  });

  it("calculates BMI incorrectly", () => {

    // Arrange 
    const weight = 55;
    const height = 160 / 100 // Convert cm to meters

    //Act 
    const result = calculateBMI(weight, height);

    // Assert
    expect(result).not.toBeCloseTo(24.69);
  });
});
