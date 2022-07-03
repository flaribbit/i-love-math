import { Problem } from "../types";
import { randomInt, gcd } from "../utils";

export default (): Problem => {
    const x1 = randomInt(1, 11);
    const x2 = randomInt(1, 11);
    const x3 = randomInt(1, 11);
    let y1 = randomInt(-100, 101);
    let y2 = randomInt(-100, 101);
    let z1 = x1 * x3;
    let z2 = x2 * x3;
    const gcd1 = gcd(z1, y1);
    const gcd2 = gcd(z2, y2);
    if (gcd1 !== 1) {
        z1 /= gcd1;
        y1 /= gcd1;
    }
    if (gcd2 !== 1) {
        z2 /= gcd2;
        y2 /= gcd2;
    }
    let question;
    if (y1 < 0) {
        question = `-\\frac{${-y1}}{${z1}}`
    } else {
        question = `\\frac{${y1}}{${z1}}`
    }
    if (y2 < 0) {
        question += ` - \\frac{${-y2}}{${z2}}`
    } else {
        question += ` + \\frac{${y2}}{${z2}}`
    }
    return {
        type: 0,
        question,
        answer: y1 / z1 + y2 / z2
    }
}
