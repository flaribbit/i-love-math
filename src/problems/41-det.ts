import { Problem } from "../types";
import { randomInt } from "../utils";

export const name = '二阶行列式';
export const get = (): Problem => {
    const a: number[] = [];
    for (let i = 0; i < 4; i++)a[i] = randomInt(10);
    const question = `\\begin{vmatrix}
    ${a[0]} & ${a[1]} \\\\
    ${a[2]} & ${a[3]}
\\end{vmatrix}`;
    const answer = a[0] * a[3] - a[1] * a[2];
    return {
        type: 0,
        question,
        answer,
    };
}
