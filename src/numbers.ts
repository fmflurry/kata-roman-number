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

  static toNumber(roman: string): number {
    const keys = Object.keys(this.numbers);
    if (![...roman].every((element) => keys.includes(element))) {
      throw new Error("Invalid Roman number");
    }

    let number = 0;
    for (const element of roman) {
      const numeral = this.numbers[element];
      number += numeral;
    }

    return number;
  }

  static toRoman(number: number): string {
    return "I";
  }
}
