import { Problem } from "../types";
import { randomInt } from "../utils";

export default (): Problem => {
    const x1 = randomInt(-10, 11);
    const x2 = randomInt(-10, 11);
    const a = 1;
    const b = -x1 - x2;
    const c = x1 * x2;
    let question = `x^2`;
    if (b < 0) {
        question += ` - ${-b}x`;
    } else if (b > 0) {
        question += ` + ${b}x`;
    }
    if (c < 0) {
        question += ` - ${-c}`;
    } else if (c > 0) {
        question += ` + ${c}`;
    }
    question += ` = 0`;
    return {
        type: 0,
        question,
        answer: [x1, x2],
    }
}
