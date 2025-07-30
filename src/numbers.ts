export class Numbers {
  private static readonly numbers: Record<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  private static readonly allowedPreceeds: Record<string, string[]> = {
    I: ["V", "X"],
    X: ["L", "C"],
    C: ["D", "M"],
  };

  static toNumber(roman: string): number {
    const isValidRoman = this.isValid(roman);
    if (!isValidRoman) {
      throw new Error("Invalid Roman number");
    }

    let lastOperationWasSubstraction = false;
    return [...roman].reduce((acc, curr, index) => {
      const nextRoman = roman[index + 1];
      const nextNumericValue = this.numbers[nextRoman];
      const currentNumericValue = this.numbers[curr];

      if (nextNumericValue > currentNumericValue) {
        const isOperationValid = this.isOperationValid(
          curr,
          nextRoman,
          lastOperationWasSubstraction
        );

        if (!isOperationValid) {
          throw new Error("Invalid Roman number");
        }

        lastOperationWasSubstraction = true;
        return acc - this.numbers[curr];
      }

      lastOperationWasSubstraction = false;
      const num = this.numbers[curr];
      return acc + num;
    }, 0);
  }

  static toRoman(number: number): string {
    return "I";
  }

  private static isValid(roman: string) {
    const keys = Object.keys(this.numbers);

    // one element is not in keys ?
    if (![...roman].every((element) => keys.includes(element))) {
      return false;
    }

    // we have more than 3 times the element ?
    if (
      [...roman].some(
        (element) => [...roman].filter((e) => e === element).length > 3
      )
    ) {
      return false;
    }

    return true;
  }

  private static isOperationValid(
    currentRoman: string,
    nextRoman: string,
    lastOperationWasSubstraction: boolean
  ) {
    if (lastOperationWasSubstraction) {
      return false;
    }

    const allowedPreceeds = this.allowedPreceeds[currentRoman];
    if (!allowedPreceeds.includes(nextRoman)) {
      return false;
    }

    return true;
  }
}
