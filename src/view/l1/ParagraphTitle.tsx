import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';
import { TextField } from '@mui/material/';

import { RootState } from '../../store/rootReducer';
import ScenarioSlice, { ChangeSubTitlePayload } from '../../store/ScenarioSlice';


type Props = {
    id: number;
}

const Area = styled(TextField)`
`;

const App = (props: Props) => {
    const subTitle = useSelector((state: RootState) =>
        state.scenario.paragraphList[props.id].subTitle);
    const dispatch = useDispatch();

    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const payload: ChangeSubTitlePayload = {
            paragraphId: props.id,
            subTitle: e.target.value
        }
        dispatch(ScenarioSlice.actions.changeSubTitle(payload));
    }

    const onClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation(); // アコーディオンの開閉をしないようにする。
    }

    return (
        <Area
            variant='standard'
            placeholder='段落のタイトル'
            onChange={onChange}
            onClick={onClick}
            value={subTitle}
        />
    );
};

export default App;
