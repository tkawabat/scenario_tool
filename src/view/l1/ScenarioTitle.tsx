import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';
import { TextField } from '@material-ui/core';

import { RootState } from '../../store/rootReducer';
import ScenarioSlice from '../../store/ScenarioSlice';


type Props = {
    id: number;
}

const Area = styled(TextField)`
`;

const App = (props: Props) => {
    const title = useSelector((state: RootState) => state.scenario.paragraph[props.id].subTitle);
    const dispatch = useDispatch();

    return (
        <Area
            placeholder="タイトルを入力"
            onChange={(e) => {
                dispatch(ScenarioSlice.actions.changeSubTitle({
                    id: props.id,
                    subTitle: e.target.value
                }));
            }}
            value={title}
        />
    );
};

export default App;
