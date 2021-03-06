import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';

import { RootState } from '../../store/rootReducer';
import ParagraphSlice from '../../store/ParagraphSlice';


const Area = styled.textarea`
        height: 100%;
    `;

type Props = {
    id: number;
}

const App = (props: Props) => {
    const memo = useSelector((state: RootState) => state.paragraph[props.id].memo);
    const dispatch = useDispatch();

    return (
        <Area
            placeholder="メモを入力"
            onChange={(e) => {
                dispatch(ParagraphSlice.actions.changeMemo({
                    id: props.id,
                    memo: e.target.value
                }));
            }}
            value={memo}
        />
    );
};

export default App;
