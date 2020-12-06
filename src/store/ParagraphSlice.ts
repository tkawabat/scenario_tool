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

const initialState: Paragraph[] = [initialParagraph];

const slice = createSlice({
    name: "paragraph",
    initialState,
    reducers: {
        add: (state) => { state.push(initialParagraph); },
        changeText: (state, action: PayloadAction<changeTextPayload>) => {
            state[action.payload.id].text = action.payload.text;
        },
    }
});

export default slice;