import { Problem } from "../types";
import { randomInt } from "../utils";

export const name = '四位数除法';
export const get = (): Problem => {
    const num1 = randomInt(1, 101);
    const num2 = randomInt(0, 101);
    let question = `${num1 * num2} \\div ${num1}`;
    return {
        type: 0,
        question,
        answer: num2
    }
}
