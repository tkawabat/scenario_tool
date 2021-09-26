import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import * as C from '../lib/Const';

import Scenario, { createScenario } from './model/Scenario';
import { createParagraph } from './model/Paragraph';
import { createTodo } from './model/Todo';


export interface LoadPayload {
    scenario: Scenario;
}

export interface DeletePayload {
    paragraphId: number;
}

export interface ChangeTitlePayload {
    title: string;
}

export interface ChangeSubTitlePayload {
    paragraphId: number;
    subTitle: string;
}

export interface ChangeTextPayload {
    paragraphId: number;
    text: string;
}

export interface AddTodoPayload {
    paragraphId: number;
}

export interface DeleteTodoPayload {
    paragraphId: number;
    todoId: number;
}

export interface ChangeTodoTextPayload {
    paragraphId: number;
    todoId: number;
    text: string;
}

export interface ToggleTodoPayload {
    paragraphId: number;
    todoId: number;
}

export interface ChangeMemoPayload {
    paragraphId: number;
    memo: string;
}

const initialState: Scenario = createScenario();

const slice = createSlice({
    name: "scenario",
    initialState,
    reducers: {
        load: (state, action: PayloadAction<LoadPayload>) => {
            const scenario = action.payload.scenario;
            if (scenario.formatVersion < C.CurrentScenarioFormatVersion) {
                // TODO
                window.alert('プロジェクトファイルのバージョンが古く読み込めません。');
            }
            state.title = scenario.title;
            state.paragraphList = scenario.paragraphList;
            state.old = scenario.paragraphList; // 読み込み時点のデータをoldにセット
        }
        , add: (state: Scenario) => {
            state.paragraphList.push(createParagraph());
        }
        
        , delete: (state: Scenario, action: PayloadAction<DeletePayload>) => {
            state.paragraphList.splice(action.payload.paragraphId, 1);
        }

        , changeTitle: (state, action: PayloadAction<ChangeTitlePayload>) => {
            state.title = action.payload.title;
        }

        , changeSubTitle: (state, action: PayloadAction<ChangeSubTitlePayload>) => {
            state.paragraphList[action.payload.paragraphId].subTitle
                = action.payload.subTitle;
        }

        , changeText: (state, action: PayloadAction<ChangeTextPayload>) => {
            state.paragraphList[action.payload.paragraphId].text
                = action.payload.text;
        }

        , addTodo: (state, action: PayloadAction<AddTodoPayload>) => {
            state.paragraphList[action.payload.paragraphId]
                .todo.push(createTodo());
        }

        , deleteTodo: (state, action: PayloadAction<DeleteTodoPayload>) => {
            state.paragraphList[action.payload.paragraphId]
                .todo.splice(action.payload.todoId, 1);
        }

        , changeTodoText: (state, action: PayloadAction<ChangeTodoTextPayload>) => {
            state.paragraphList[action.payload.paragraphId]
                .todo[action.payload.todoId].text = action.payload.text;
        }
        
        , toggleTodo: (state, action: PayloadAction<ToggleTodoPayload>) => {
            const checked = state.paragraphList[action.payload.paragraphId]
                .todo[action.payload.todoId].checked;
            state.paragraphList[action.payload.paragraphId]
                .todo[action.payload.todoId].checked = !checked;
        }
        
        ,changeMemo: (state, action: PayloadAction<ChangeMemoPayload>) => {
            state.paragraphList[action.payload.paragraphId].memo
                = action.payload.memo;
        },
    }
});

export default slice;