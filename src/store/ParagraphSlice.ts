import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface ParagraphState {
    text: string;
    memo: string;
}

const initialState: ParagraphState = {
    text: "",
    memo: "",
}

const slice = createSlice({
    name: "paragraph",
    initialState,
    reducers: {
        changeText: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        },
    }
});

export default slice;