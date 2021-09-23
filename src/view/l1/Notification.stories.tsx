import React from 'react';

import { NotificationType } from '../../lib/Const';
import NotificationSlice, { NotificationModel } from '../../store/NotificationSlice';

import Notification from './Notification';

export default {
    title: 'l1/Notification',
    component: Notification,
};

export const info = () => {
    const notification: NotificationModel = {
        text: 'これはinfoのお知らせです。',
        type: NotificationType.INFO
    }
    return (
            <Notification notification={notification} />
    );
}

export const warning = () => {
    const notification: NotificationModel = {
        text: 'これはwarningのお知らせです。',
        type: NotificationType.WARNING
    }
    return (
            <Notification notification={notification} />
    );
}

export const error = () => {
    const notification: NotificationModel = {
        text: 'これはerrorのお知らせです。',
        type: NotificationType.ERROR
    }
    return (
            <Notification notification={notification} />
    );
}