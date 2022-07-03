import { Problem } from "../types";
import { randomInt } from "../utils";

export default (): Problem => {
    const num1 = randomInt(0, 101);
    let question = `\\sqrt{${num1}}`;
    return {
        type: 0,
        question,
        answer: num1
    }
}
