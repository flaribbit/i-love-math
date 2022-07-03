import { Problem } from "../types";
import { randomInt } from "../utils";

export default (): Problem => {
    const num1 = randomInt(1, 101);
    const num2 = randomInt(0, 101);
    let question = `${num1 * num2} \\div ${num1}`;
    return {
        type: 0,
        question,
        answer: num2
    }
}
