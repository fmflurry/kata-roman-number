import { Numbers } from './numbers';

describe('Numbers', () => {
  it('should convert 1 to I', () => {
    expect(Numbers.toNumbers('I')).toBe(1);
  });

  it('should convert 2 to II', () => {
    expect(Numbers.toNumbers('II')).toBe(2);
  });

  it('should convert 3 to III', () => {
    expect(Numbers.toNumbers('III')).toBe(3);
  });
  
  it('should convert 4 to IV', () => {
    expect(Numbers.toNumbers('IV')).toBe(4);
  });

  it('should convert 5 to V', () => {
    expect(Numbers.toNumbers('V')).toBe(5);
  });

  it('should convert 9 to IX', () => {
    expect(Numbers.toNumbers('IX')).toBe(9);
  });

  it('should convert 10 to X', () => {
    expect(Numbers.toNumbers('X')).toBe(10);
  });

it('should convert 24 to XXIV', () => {
    expect(Numbers.toNumbers('XXIV')).toBe(24);
  });

  it('should convert 99 to XCIX', () => {
    expect(Numbers.toNumbers('XCIX')).toBe(99);
  });
  it('should convert 1999 to MCMXCIX', () => {
    expect(Numbers.toNumbers('MCMXCIX')).toBe(1999);
  });
  it('should convert 2023 to MMXXIII', () => {
    expect(Numbers.toNumbers('MMXXIII')).toBe(2023);
  });
  it('should convert 3999 to MMMCMXCIX', () => {
    expect(Numbers.toNumbers('MMMCMXCIX')).toBe(3999);
  });
  it('should convert 4000 to MMMM', () => {
    expect(Numbers.toNumbers('MMMM')).toBe(4000);
  });
});
