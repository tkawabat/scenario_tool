import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';
import { TextField } from '@mui/material/';

import { RootState } from '../../store/rootReducer';
import ScenarioSlice from '../../store/ScenarioSlice';


type Props = {
    id: number;
}

const Area = styled(TextField)`
`;

const App = (props: Props) => {
    const subTitle = useSelector((state: RootState) => state.scenario.paragraph[props.id].subTitle);
    const dispatch = useDispatch();

    return (
        <Area
            placeholder="章タイトルを入力"
            onChange={(e) => {
                dispatch(ScenarioSlice.actions.changeSubTitle({
                    id: props.id,
                    subTitle: e.target.value
                }));
            }}
            value={subTitle}
        />
    );
};

export default App;
