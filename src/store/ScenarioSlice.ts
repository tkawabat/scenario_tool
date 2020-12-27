import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Scenario {
    title: string;
    paragraph: Paragraph[];
}

export interface Paragraph {
    subTitle: string;
    text: string;
    memo: string;
}

const initialParagraph: Paragraph = {
    subTitle: "",
    text: "",
    memo: "",
}

export type changeTitlePayload = {
    title: string;
}

export type changeSubTitlePayload = {
    id: number;
    subTitle: string;
}

export type changeTextPayload = {
    id: number;
    text: string;
}

export type changeMemoPayload = {
    id: number;
    memo: string;
}

export const getText = (paragraph: Paragraph[]) :string => {
    return paragraph.map((p) => {
        return p.subTitle + "\r\n\r\n" + p.text + "\r\n\r\n";
    }).join("\r\n");
}

const initialState: Scenario = {
    title: "",
    paragraph: [initialParagraph],
}

const slice = createSlice({
    name: "scenario",
    initialState,
    reducers: {
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
        changeMemo: (state, action: PayloadAction<changeMemoPayload>) => {
            state.paragraph[action.payload.id].memo = action.payload.memo;
        },
    }
});

export default slice;