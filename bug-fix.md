# Bug Analysis: Numbers.toRoman Implementation

## Summary
The `Numbers.toRoman` function in `src/numbers.ts` has an incomplete implementation that always returns "I" regardless of the input number. This causes test failures when the function is expected to convert integers to their proper Roman numeral representations.

## Detailed Findings

### 1. Current Implementation Issue
The `toRoman` function (lines 51-53 in `src/numbers.ts`) has a placeholder implementation:

```typescript
static toRoman(number: number): string {
  return "I";
}
```

This implementation does not perform any conversion logic and simply returns the string "I" for any input.

### 2. Test Failure Details
- **Failing Test**: "should return II for 2" (line 63 in `src/numbers.spec.ts`)
- **Expected Result**: "II"
- **Actual Result**: "I"
- **Error Message**: "Expected: \"II\" Received: \"I\""

### 3. Test Coverage
There are two tests for the `toRoman` function:
- "should return I for 1" - This test currently passes because the function returns "I" which matches the expected output for input 1.
- "should return II for 2" - This test fails because the function returns "I" instead of the expected "II".

This indicates that additional tests would also fail for other inputs (3 should return "III", 4 should return "IV", etc.).

## Root Cause
The root cause is that the `toRoman` function lacks a proper implementation for converting integers to Roman numerals. It appears to be a placeholder that was never completed.

## Requirements for Fix
The implementation should properly convert integers to Roman numerals following standard rules:
1. Use the standard Roman numeral symbols: I (1), V (5), X (10), L (50), C (100), D (500), M (1000)
2. Apply subtraction notation for 4 (IV), 9 (IX), 40 (XL), 90 (XC), 400 (CD), 900 (CM)
3. Handle inputs according to Roman numeral conventions

## Related Code Context
The file also contains a `numbers` object that maps Roman numerals to their integer values, which may be useful for the reverse conversion (`toNumber` function), but a separate mapping for integer-to-Roman conversion will likely be needed.
