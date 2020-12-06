import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';

import ParagraphSlice from '../../store/ParagraphSlice';


type Props = {
    id: number;
}

const Area = styled.textarea`
        width: 70%;
        height: 200px;
        margin-top: 10px;
`;

const App = (props: Props) => {
    // const text = useSelector(state => state)
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
        />
    );
};

export default App;
