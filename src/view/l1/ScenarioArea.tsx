import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';

import { RootState } from '../../store/rootReducer';
import ScenarioSlice, { ChangeTextPayload } from '../../store/ScenarioSlice';


type Props = {
    id: number;
}

const Area = styled.textarea`
    height: 500px;
`;

const App = (props: Props) => {
    const text = useSelector((state: RootState) =>
        state.scenario.paragraphList[props.id].text);
    const dispatch = useDispatch();

    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const payload: ChangeTextPayload = {
            paragraphId: props.id,
            text: e.target.value
        }
        dispatch(ScenarioSlice.actions.changeText(payload));
    }

    return (
        <Area
            placeholder="本文を入力"
            onChange={onChange}
            value={text}
        />
    );
};

export default App;
