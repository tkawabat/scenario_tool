import { createSlice, PayloadAction } from '@reduxjs/toolkit';


export interface Paragraph {
    text: string;
    memo: string;
}

const initialParagraph: Paragraph = {
    text: "",
    memo: "",
}

export type changeTextPayload = {
    id: number;
    text: string;
}

export type changeMemoPayload = {
    id: number;
    memo: string;
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
        changeText: (state, action: PayloadAction<changeTextPayload>) => {
            state[action.payload.id].text = action.payload.text;
        },
        changeMemo: (state, action: PayloadAction<changeMemoPayload>) => {
            state[action.payload.id].memo = action.payload.memo;
        },
    }
});

export default slice;