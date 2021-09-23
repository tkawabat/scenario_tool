import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';

import { Button, Stack } from '@mui/material/';

import { RootState } from '../../store/rootReducer';
import NotificationSlice, { AddNotificationPayload} from '../../store/NotificationSlice';
import { NotificationType } from '../../lib/Const';

import NotificationList from './NotificationList';


export default {
    title: 'l2/NotificationList',
    component: Notification,
};

export const show = () => {
    const dispatch = useDispatch();

    const add = () => {
        const payload: AddNotificationPayload = {
            notification: {
                text: 'これはinfoのお知らせです。',
                type: NotificationType.INFO
            }
        }
        dispatch(NotificationSlice.actions.add(payload));
    }

    return (
        <Stack spacing={2} sx={{ width: '100%' }}>
            <Button onClick={add} >
                追加
            </Button>
            <NotificationList />
        </Stack>
    );
}
