const xor = (a: boolean, b: boolean) => (a ? !b : b);

const charCode = (ch: string) => ch.charCodeAt(0);
const isDigit = (chr: string) => {
    const code = charCode(chr);
    return (code >= charCode('0')) && (code <= charCode('9'));
};

const splitString = function (str: string) {
    return {
        from: 0,
        index: 0,
        count: 0,
        next () {
            if (this.index === str.length) {
                return null;
            }

            while (++this.index) {
                const currentIsDigit = isDigit(str.charAt(this.index - 1));
                const nextChar = str.charAt(this.index);
                const currentIsLast = (this.index === str.length);

                const isBorder = currentIsLast || xor(currentIsDigit, isDigit(nextChar));

                if (isBorder) {
                    const part = str.slice(this.from, this.index);
                    this.from = this.index;
                    this.count += 1;
                    return {
                        IsNumber: currentIsDigit,
                        Value: currentIsDigit ? Number(part) : part,
                    };
                }
            }
        },
    };
};

export function compareStrings (str1: string, str2: string) {
    const compare = (a: string|number, b: string|number) => ((a < b) ? -1 : (a > b) ? 1 : 0);

    const splitter1 = splitString(str1);
    const splitter2 = splitString(str2);

    while (true) {
        const first = splitter1.next();
        const second = splitter2.next();

        if (first && second) {
            if (xor(first.IsNumber, second.IsNumber)) {
                return first.IsNumber ? -1 : 1;
            }
            const comp = compare(first.Value, second.Value);
            if (comp !== 0) {
                return comp;
            }
        } else {
            return compare(splitter1.count, splitter2.count);
        }
    }
}
