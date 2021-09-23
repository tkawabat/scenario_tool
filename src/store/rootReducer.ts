import { combineReducers } from '@reduxjs/toolkit'

import ScenarioSlice from './ScenarioSlice';
import NotificationSlice from './NotificationSlice';

const rootReducer = combineReducers({
    scenario: ScenarioSlice.reducer,
    notification: NotificationSlice.reducer,
})
 
export type RootState = ReturnType<typeof rootReducer>
 
export default rootReducer;