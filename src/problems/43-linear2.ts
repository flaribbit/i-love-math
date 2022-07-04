import { Problem } from "../types";
import { randomInt } from "../utils";

export const name = '线性方程组';
export const get = (): Problem => {
    const a: number[] = [];
    const x = [randomInt(-10, 11), randomInt(-10, 11)];
    for (let i = 0; i < 4; i++)a[i] = randomInt(-10, 11);
    const y = [a[0] * x[0] + a[1] * x[1], a[2] * x[0] + a[3] * x[1]];
    const question = `\\begin{bmatrix}
    ${a[0]} & ${a[1]} \\\\
    ${a[2]} & ${a[3]}
\\end{bmatrix} {\\bf X} = \\begin{bmatrix}
${y[0]} \\\\
${y[1]}
\\end{bmatrix}`;
    return {
        type: 0,
        question,
        answer: x,
    };
}
