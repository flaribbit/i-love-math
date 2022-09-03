export interface Problem {
    type: number
    question: string
    answer: number | string | number[]
    choices?: string[]
    judge?: (text: string) => boolean
}
export interface IResult {
    question: string
    user_answer: string
    answer: string
    correct: boolean
}
