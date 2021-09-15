import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';

import { RootState } from '../../store/rootReducer';
import ScenarioSlice from '../../store/ScenarioSlice';


type Props = {
    id: number;
}

const Area = styled.textarea`
    height: 500px;
`;

const App = (props: Props) => {
    const text = useSelector((state: RootState) => state.scenario.paragraph[props.id].text);
    const dispatch = useDispatch();

    return (
        <Area
            placeholder="本文を入力"
            onChange={(e) => {
                dispatch(ScenarioSlice.actions.changeText({
                    id: props.id,
                    text: e.target.value
                }));
            }}
            value={text}
        />
    );
};

export default App;
