import { Problem } from "../types";
import { randomInt } from "../utils";

export default (): Problem => {
    const a: number[] = [];
    for (let i = 0; i < 9; i++)a[i] = randomInt(10);
    const question = `\\begin{vmatrix}
    ${a[0]} & ${a[1]} & ${a[2]} \\\\
    ${a[3]} & ${a[4]} & ${a[5]} \\\\
    ${a[6]} & ${a[7]} & ${a[8]}
\\end{vmatrix}`;
    const answer = -a[2] * a[4] * a[6] + a[1] * a[5] * a[6] + a[2] * a[3] * a[7] - a[0] * a[5] * a[7] - a[1] * a[3] * a[8] + a[0] * a[4] * a[8];
    return {
        type: 0,
        question,
        answer,
    };
}
