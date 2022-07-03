export interface Problem {
    type: number;
    question: string;
    answer: number | string;
    choices?: string[];
    judge?: (text: string) => boolean;
}
