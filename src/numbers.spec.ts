import { Numbers } from "./numbers";

describe("Numbers", () => {
  describe("toNumber", () => {
    it("should throw an error for invalid Roman number", () => {
      expect(() => Numbers.toNumber("A")).toThrow("Invalid Roman number");
    });

    it("should return 1 for I", () => {
      const number = Numbers.toNumber("I");
      expect(number).toBe(1);
    });

    it("should return 2 for II", () => {
      const number = Numbers.toNumber("II");
      expect(number).toBe(2);
    });
  });

  it("should return 5 for V", () => {
    const number = Numbers.toNumber("V");
    expect(number).toBe(5);
  });

  it("should return 4 for IV", () => {
    const number = Numbers.toNumber("IV");
    expect(number).toBe(4);
  });

  it("should return 10 for X", () => {
    const number = Numbers.toNumber("X");
    expect(number).toBe(10);
  });

  it("should return 484 for CDLXXXIV", () => {
    const number = Numbers.toNumber("CDLXXXIV");
    expect(number).toBe(484);
  });

  describe("toRoman", () => {
    it("should return I for 1", () => {
      const roman = Numbers.toRoman(1);
      expect(roman).toBe("I");
    });

    xit("should return II for 2", () => {
      const roman = Numbers.toRoman(2);
      expect(roman).toBe("II");
    });
  });
});
