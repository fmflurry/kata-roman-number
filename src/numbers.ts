export class Numbers {
    static toNumbers(romanNumbers: string): number {
        let totalValue = 0;
        const splittedRomanNumbers = romanNumbers.split('');

        for (let index = 0; index < splittedRomanNumbers.length; index++) {
            const romanNumber = splittedRomanNumbers[index];
            const nextNumber = splittedRomanNumbers[index + 1];

            let value;      
            switch (romanNumber) {
            case 'I': value = 1;
            case 'V': value = 5;
            case 'X': value = 10;
            case 'L': value = 50;
            case 'C': value = 100;
            case 'D': value  = 500;
            case 'M': value = 1000;
            default: value = 0;
            }
        

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
