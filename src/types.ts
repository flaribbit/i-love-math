export interface Problem {
    type: number;
    question: string;
    answer: number | string | number[];
    choices?: string[];
    judge?: (text: string) => boolean;
}
