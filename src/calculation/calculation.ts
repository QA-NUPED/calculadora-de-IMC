export function calculateBMI(weight: number, height: number): number {
    const result = weight / (height * height);
    return result;
  }