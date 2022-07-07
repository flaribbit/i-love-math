import { Problem } from "../types";
import { randomInt } from "../utils";

export const name = '一元二次方程2';
export const get = (): Problem => {
    const x1 = randomInt(-10, 11);
    const x2 = randomInt(-10, 11);
    const k1 = randomInt(1, 11);
    const k2 = randomInt(1, 11);
    const a = k1 * k2;
    const b = -k1 * x2 - k2 * x1;
    const c = x1 * x2;
    const question = `${a}x^2 + ${b}x + ${c} = 0`
        .replaceAll('+ -', '- ')
        .replaceAll('1x', 'x')
        .replaceAll('+ 0', '')
        .replaceAll('+ 0x', '');
    return {
        type: 0,
        question,
        answer: [x1, x2],
    }
}
