import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';
import { TextField } from '@mui/material/';

import { RootState } from '../../store/rootReducer';
import ScenarioSlice from '../../store/ScenarioSlice';


type Props = {
}

const Area = styled(TextField)`
`;

const App = (props: Props) => {
    const title = useSelector((state: RootState) =>
        state.scenario.title);
    const dispatch = useDispatch();

    return (
        <Area
            variant='standard'
            className='scenarioTitle'
            placeholder='作品タイトルを入力'
            onChange={(e) => {
                dispatch(ScenarioSlice.actions.changeTitle({
                    title: e.target.value
                }));
            }}
            value={title}
            {...props}
        />
    );
};

export default App;
