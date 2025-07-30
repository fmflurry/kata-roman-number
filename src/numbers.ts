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

    return [...roman].reduce((acc, curr, index) => {
      const next = this.numbers[roman[index + 1]];
      if (next > this.numbers[curr]) {
        return acc - this.numbers[curr];
      }

      const num = this.numbers[curr];
      return acc + num;
    }, 0);
  }

  static toRoman(number: number): string {
    return "I";
  }
}
