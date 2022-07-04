import { Problem } from "../types";
import { randomInt } from "../utils";

export const name = '四位数平方根';
export const get = (): Problem => {
    const num1 = randomInt(0, 101);
    let question = `\\sqrt{${num1 * num1}}`;
    return {
        type: 0,
        question,
        answer: num1
    }
}
