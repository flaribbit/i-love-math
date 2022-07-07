import { randomInt } from "../utils";
import * as p01 from "./01-add2";
import * as p02 from "./02-add4";
import * as p03 from "./03-multiply";
import * as p04 from "./04-divide";
import * as p05 from "./05-squared";
import * as p06 from "./06-sqrt";
import * as p07 from "./07-frac";
import * as p11 from "./11-quad";
import * as p12 from "./12-quad2";
import * as p41 from "./41-det";
import * as p42 from "./42-det2";
import * as p43 from "./43-linear2";

export const problems = [
    p01, p02, p03, p04, p05, p06, p07,
    p11, p12,
    p41, p42, p43
];
export default () => problems[randomInt(problems.length)].get();
