export class Numbers {
    static toNumbers(romanNumbers: string): number {
        let totalValue = 0;
        const splittedRomanNumbers = romanNumbers.split('');

        const romanToValueMap: { [key: string]: number } = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000
        };

        for (let index = 0; index < splittedRomanNumbers.length; index++) {
            const romanNumber = splittedRomanNumbers[index];
            const nextNumber = splittedRomanNumbers[index + 1];

            const value = romanToValueMap[romanNumber];
        

            if ((romanNumber === 'I' && (nextNumber === 'V' || nextNumber === 'X')) ||
                (romanNumber === 'X' && (nextNumber === 'L' || nextNumber === 'C')) ||
                (romanNumber === 'C' && (nextNumber === 'D' || nextNumber === 'M'))) {
                totalValue -= value;
            } else {
                totalValue += value;
            }
        }
        return totalValue;
    }
}
