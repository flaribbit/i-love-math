import { Problem } from "../types";
import { randomInt } from "../utils";

export const name = '两位数加减法';
export const get = (): Problem => {
    const num1 = randomInt(-100, 101);
    const num2 = randomInt(-100, 101);
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
