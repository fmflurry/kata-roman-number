import { toRoman } from "./numbers";

describe("Roman Numbers Converter", () => {
  const testCases = [
    [1, "I"],
    [2, "II"],
    [3, "III"],
    [4, "IV"],
    [5, "V"],
    [6, "VI"],
    [7, "VII"],
    [8, "VIII"],
    [9, "IX"],
    [10, "X"],
    [11, "XI"],
    [12, "XII"],
    [14, "XIV"],
    [15, "XV"],
    [19, "XIX"],
    [20, "XX"],
    [24, "XXIV"],
    [26, "XXVI"],
    [27, "XXVII"],
    [30, "XXX"],
    [40, "XL"],
    [44, "XLIV"],
    [49, "XLIX"],
    [50, "L"],
    [58, "LVIII"],
    [90, "XC"],
    [99, "XCIX"],
    [100, "C"],
    [101, "CI"],
    [149, "CXLIX"],
    [200, "CC"],
    [300, "CCC"],
    [400, "CD"],
    [444, "CDXLIV"],
    [500, "D"],
    [666, "DCLXVI"],
    [900, "CM"],
    [999, "CMXCIX"],
    [1000, "M"],
    [1001, "MI"],
    [1234, "MCCXXXIV"],
    [1500, "MD"],
    [1994, "MCMXCIV"],
    [2000, "MM"],
    [2023, "MMXXIII"],
    [3000, "MMM"],
    [3999, "MMMCMXCIX"],
  ] as const;

  describe("Valid conversions", () => {
    test.each(testCases)(
      "should convert %i to %s",
      (input: number, expected: string) => {
        expect(toRoman(input)).toBe(expected);
      }
    );
  });
});
