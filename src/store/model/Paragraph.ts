import Todo, { createTodo } from './Todo';


export default interface Paragraph {
    subTitle: string;
    text: string;
    memo: string;
    todo: Todo[];
}

export const createParagraph = () :Paragraph => {
    return {
        subTitle: '',
        text: '',
        memo: '',
        todo: [
            createTodo(),
            createTodo(),
            createTodo(),
        ]
    }
}