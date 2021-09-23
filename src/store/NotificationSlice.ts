import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { NotificationType } from '../lib/Const';


export interface NotificationModel {
    text: string;
    type: NotificationType;
}

export interface AddNotificationPayload {
    notification: NotificationModel;
}

const initialState: NotificationModel[] = [];

const slice = createSlice({
    name: "notification",
    initialState,
    reducers: {
        add: (state, action: PayloadAction<AddNotificationPayload>) => {
            state.push(action.payload.notification);
        },
    }
});

export default slice;