import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';
import { TextField } from '@mui/material/';

import { RootState } from '../../store/rootReducer';
import ScenarioSlice, { ChangeTitlePayload } from '../../store/ScenarioSlice';


type Props = {
}

const Area = styled(TextField)`
`;

const App = (props: Props) => {
    const title = useSelector((state: RootState) =>
        state.scenario.title);
    const dispatch = useDispatch();

    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const payload: ChangeTitlePayload = {
            title: e.target.value
        }
        dispatch(ScenarioSlice.actions.changeTitle(payload));
    }

    return (
        <Area
            variant='standard'
            className='scenarioTitle'
            placeholder='作品タイトルを入力'
            onChange={onChange}
            value={title}
            {...props}
        />
    );
};

export default App;
