import { randomInt } from "../utils";
import p01 from "./01-add2";
import p02 from "./02-add4";
import p03 from "./03-multiply";
import p04 from "./04-divide";
import p05 from "./05-squared";
import p06 from "./06-sqrt";
import p07 from "./07-frac";
import p11 from "./11-quad";
import p41 from "./41-det";
import p42 from "./42-det2";

const problems = [
    p01, p02, p03, p04, p05, p06, p07,
    p11,
    p41, p42,
];
export default () => problems[randomInt(problems.length)]();
