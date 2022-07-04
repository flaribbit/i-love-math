import { Problem } from "../types";
import { randomInt } from "../utils";

export const name = '四位数加减法';
export const get = (): Problem => {
    const num1 = randomInt(-10000, 10001);
    const num2 = randomInt(-10000, 10001);
    let question;
    if (num2 < 0) {
        question = `${num1} - ${-num2}`;
    } else {
        question = `${num1} + ${num2}`;
    }
    return {
        type: 0,
        question,
        answer: num1 + num2
    }
}
