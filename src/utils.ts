export const random = () => {
    return Math.random();
}

export const randomInt = (min: number, max?: number) => {
    if (max === undefined) {
        return Math.floor(Math.random() * min);
    }
    return Math.floor(random() * (max - min)) + min;
}

export const gcd = (a: number, b: number) => {
    while (b !== 0) {
        const t = b;
        b = a % b;
        a = t;
    }
    return a;
}
