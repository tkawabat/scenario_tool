import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as C from '../lib/Const';


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

export const initialParagraph: Paragraph = {
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

export const initialState: Scenario = {
    title: "",
    paragraph: [JSON.parse(JSON.stringify(initialParagraph))],
    old: [JSON.parse(JSON.stringify(initialParagraph))],
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

export interface ChangeMemoPayload {
    id: number;
    memo: string;
}

export const getTitle = (scenario: Scenario) => {
    return scenario.title ? scenario.title : C.NOTITLE;
}

export const getScenarioText = (scenario: Scenario) :string => {
    const title = scenario.title ?
        scenario.title + "\r\n\r\n" : '';

    return title + scenario.paragraph.map((p) => {
        const title = p.subTitle ?
            p.subTitle + "\r\n\r\n" : '';
        return title + p.text + "\r\n\r\n";
    }).join("\r\n\r\n");
}

export const getTextLength = (paragraph: Paragraph[]) :number => {
    return paragraph.reduce((sum:number, p: Paragraph) => {
        return sum + p.text.length
    }, 0);
}

export const getCheckedTodoNum = (paragraph: Paragraph[]) :number => {
    const toodoReducer = (sum: number, t: Todo) => {
        return sum + (t.checked ? 1 : 0);
    }

    const paragraphReducer = (sum: number, p: Paragraph) => {
        return sum + p.todo.reduce(toodoReducer, 0);
    }

    return paragraph.reduce(paragraphReducer, 0);
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
        changeMemo: (state, action: PayloadAction<ChangeMemoPayload>) => {
            state.paragraph[action.payload.id].memo = action.payload.memo;
        },
    }
});

export default slice;