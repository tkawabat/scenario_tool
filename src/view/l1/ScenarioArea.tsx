import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';

import { RootState } from '../../store/rootReducer';
import ParagraphSlice from '../../store/ParagraphSlice';


type Props = {
    id: number;
}

const Area = styled.textarea`
    height: 100%;
`;

const App = (props: Props) => {
    const text = useSelector((state: RootState) => state.paragraph[props.id].text);
    const dispatch = useDispatch();

    return (
        <Area
            placeholder="本文を入力"
            onChange={(e) => {
                dispatch(ParagraphSlice.actions.changeText({
                    id: props.id,
                    text: e.target.value
                }));
            }}
            value={text}
        />
    );
};

export default App;
