import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';

import { Stack, } from '@mui/material/';

import { RootState } from '../../store/rootReducer';
import NotificationSlice, { NotificationModel } from '../../store/NotificationSlice';

import Notification from '../l1/Notification';


const Main = styled.div`
`;

export interface NotificationProps {
    
}

const App = (props: NotificationProps) => {
    const notification = useSelector((state: RootState) => state.notification)
        .map(v => <Notification notification={v}/>);
    const dispatch = useDispatch();


    return (
        <Main>
            { notification }
        </Main>
    );
};

export default App