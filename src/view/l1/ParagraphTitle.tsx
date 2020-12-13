import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';
import { TextField } from '@material-ui/core';

import { RootState } from '../../store/rootReducer';
import ParagraphSlice from '../../store/ParagraphSlice';


type Props = {
    id: number;
}

const Area = styled(TextField)`
`;

const App = (props: Props) => {
    const subTitle = useSelector((state: RootState) => state.paragraph[props.id].subTitle);
    const dispatch = useDispatch();

    return (
        <Area
            placeholder="サブタイトルを入力"
            onChange={(e) => {
                dispatch(ParagraphSlice.actions.changeSubTitle({
                    id: props.id,
                    subTitle: e.target.value
                }));
            }}
            value={subTitle}
        />
    );
};

export default App;
