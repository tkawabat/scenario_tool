import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';
import { IconButton, Tooltip } from '@mui/material/';
import { Delete } from '@mui/icons-material/';

import { RootState } from '../../store/rootReducer';
import ScenarioSlice, { DeleteParagraphPayload, } from '../../store/ScenarioSlice';
import Paragraph from '../../store/model/Paragraph';

import ScenarioUtil from '../../lib/ScenarioUtil';


const Main = styled(IconButton)`
    
`;

type Props = {
    id: number
}

const App = (props: Props) => {
    const dispatch = useDispatch();
    const paragraph: Paragraph = useSelector((state: RootState) => 
        state.scenario.paragraphList[props.id]);

    const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const payload: DeleteParagraphPayload = {
            paragraphId: props.id
        }
        if (ScenarioUtil.isParagraphEmpty(paragraph)
            || confirm('段落を削除します。よろしいですか？')) {
            dispatch(ScenarioSlice.actions.deleteParagraph(payload));
        }

        e.stopPropagation(); // アコーディオンの開閉をしないようにする。
    }

    return (
        <Tooltip title="段落を削除" arrow>
            <IconButton
                size={'small'}
                onClick={onClick}
            >
                <Delete />
            </IconButton>
        </Tooltip>
    );
};

export default App;
