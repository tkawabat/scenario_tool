import { createSlice, PayloadAction } from '@reduxjs/toolkit';


export interface Todo {
    text: string;
    checked: boolean;
}

const initialTodo: Todo = {
    text: "",
    checked: false
}

export interface Paragraph {
    subTitle: string;
    text: string;
    memo: string;
    todo: Todo[];
}

const initialParagraph: Paragraph = {
    subTitle: "",
    text: "",
    todo: [
        JSON.parse(JSON.stringify(initialTodo)),
        JSON.parse(JSON.stringify(initialTodo)),
        JSON.parse(JSON.stringify(initialTodo)),
    ],
    memo: "",
}

export interface Scenario {
    title: string;
    paragraph: Paragraph[];
    old: Paragraph[];
}

export interface LoadPayload {
    scenario: Scenario;
}

export interface changeTitlePayload {
    title: string;
}

export interface changeSubTitlePayload {
    id: number;
    subTitle: string;
}

export interface changeTextPayload {
    id: number;
    text: string;
}

export interface addTodoPayload {
    paragraphId: number;
}

export interface deleteTodoPayload {
    paragraphId: number;
    todoId: number;
}

export interface changeTodoTextPayload {
    paragraphId: number;
    todoId: number;
    text: string;
}

export interface toggleTodoPayload {
    paragraphId: number;
    todoId: number;
}

export interface changeMemoPayload {
    id: number;
    memo: string;
}

export const getText = (scenario: Scenario) :string => {
    return scenario.paragraph.map((p) => {
        return p.subTitle + "\r\n\r\n" + p.text + "\r\n\r\n";
    }).join("\r\n");
}

const initialState: Scenario = {
    title: "",
    paragraph: [JSON.parse(JSON.stringify(initialParagraph))],
    old: [JSON.parse(JSON.stringify(initialParagraph))],
}

const slice = createSlice({
    name: "scenario",
    initialState,
    reducers: {
        load: (state, action: PayloadAction<LoadPayload>) => {
            state.title = action.payload.scenario.title;
            state.paragraph = action.payload.scenario.paragraph;
            state.old = action.payload.scenario.paragraph;
        },
        add: (state) => { state.paragraph.push(initialParagraph); },
        delete: (state, action: PayloadAction<number>) => {
            state.paragraph.splice(action.payload, 1);
            return state;
        },
        changeTitle: (state, action: PayloadAction<changeTitlePayload>) => {
            state.title = action.payload.title;
        },
        changeSubTitle: (state, action: PayloadAction<changeSubTitlePayload>) => {
            state.paragraph[action.payload.id].subTitle = action.payload.subTitle;
        },
        changeText: (state, action: PayloadAction<changeTextPayload>) => {
            state.paragraph[action.payload.id].text = action.payload.text;
        },
        addTodo: (state, action: PayloadAction<addTodoPayload>) => {
            state.paragraph[action.payload.paragraphId].todo.push(JSON.parse(JSON.stringify(initialTodo)));
        },
        deleteTodo: (state, action: PayloadAction<deleteTodoPayload>) => {
            state.paragraph[action.payload.paragraphId].todo.splice(action.payload.todoId, 1);
        },
        changeTodoText: (state, action: PayloadAction<changeTodoTextPayload>) => {
            const payload = action.payload;
            state.paragraph[payload.paragraphId].todo[payload.todoId].text = payload.text;
        },
        toggleTodo: (state, action: PayloadAction<toggleTodoPayload>) => {
            const payload = action.payload;
            state.paragraph[payload.paragraphId].todo[payload.todoId].checked =
                !state.paragraph[payload.paragraphId].todo[payload.todoId].checked;
        },
        changeMemo: (state, action: PayloadAction<changeMemoPayload>) => {
            state.paragraph[action.payload.id].memo = action.payload.memo;
        },
    }
});

export default slice;