import { createSlice, PayloadAction } from '@reduxjs/toolkit';


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

const initialState: Paragraph[] = [initialParagraph];


const slice = createSlice({
    name: "paragraph",
    initialState,
    reducers: {
        add: (state) => { state.push(initialParagraph); },
        delete: (state, action: PayloadAction<number>) => {
            state.splice(action.payload, 1);
            return state;
        },
        changeSubTitle: (state, action: PayloadAction<changeSubTitlePayload>) => {
            state[action.payload.id].subTitle = action.payload.subTitle;
        },
        changeText: (state, action: PayloadAction<changeTextPayload>) => {
            state[action.payload.id].text = action.payload.text;
        },
        changeMemo: (state, action: PayloadAction<changeMemoPayload>) => {
            state[action.payload.id].memo = action.payload.memo;
        },
    }
});

export default slice;