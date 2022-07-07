import { Problem } from "../types";
import { randomInt } from "../utils";

export const name = '一元二次方程';
export const get = (): Problem => {
    const x1 = randomInt(-10, 11);
    const x2 = randomInt(-10, 11);
    const b = -x1 - x2;
    const c = x1 * x2;
    const question = `x^2 + ${b}x + ${c} = 0`.replaceAll('+ -', '- ').replaceAll('1x', 'x');
    return {
        type: 0,
        question,
        answer: [x1, x2],
    }
}
