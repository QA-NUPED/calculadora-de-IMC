function calculateBMI(weight: number, height: number) {
    const result = weight / (height * height);
    return result;
  }

  export default calculateBMI