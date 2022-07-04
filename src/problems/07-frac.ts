import { Problem } from "../types";
import { random, randomInt, gcd } from "../utils";

export const name = '分数加减法';
export const get = (): Problem => {
    const x1 = randomInt(2, 11);
    const x2 = randomInt(2, 11);
    const x3 = randomInt(1, 11);
    let y1 = randomInt(0, 101);
    let y2 = randomInt(0, 101);
    let z1 = x1 * x3;
    let z2 = x2 * x3;
    const gcd1 = gcd(y1, z1);
    const gcd2 = gcd(y2, z2);
    if (gcd1 > 1) {
        z1 /= gcd1;
        y1 /= gcd1;
    }
    if (gcd2 > 1) {
        z2 /= gcd2;
        y2 /= gcd2;
    }
    let question;
    if (random() < 0.5) {
        question = `-\\frac{${y1}}{${z1}}`
        y1 = -y1
    } else {
        question = `\\frac{${y1}}{${z1}}`
    }
    if (random() < 0.5) {
        question += ` - \\frac{${y2}}{${z2}}`
        y2 = -y2
    } else {
        question += ` + \\frac{${y2}}{${z2}}`
    }
    return {
        type: 0,
        question,
        answer: y1 / z1 + y2 / z2
    }
}
