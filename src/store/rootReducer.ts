import { combineReducers } from '@reduxjs/toolkit'

import ParagraphSlice from './ParagraphSlice';

const rootReducer = combineReducers({
    paragraph: ParagraphSlice.reducer
})
 
export type RootState = ReturnType<typeof rootReducer>
 
export default rootReducer;