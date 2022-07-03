import { Problem } from "../types";
import { randomInt } from "../utils";

export default (): Problem => {
    const num1 = randomInt(0, 101);
    const num2 = randomInt(0, 101);
    let question = `${num1} \\times ${num2}`;
    return {
        type: 0,
        question,
        answer: num1 * num2
    }
}
