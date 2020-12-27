import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';
import { IconButton, Tooltip } from '@material-ui/core';
import { Delete } from '@material-ui/icons';

import ScenarioSlice from '../../store/ScenarioSlice';


const Main = styled(IconButton)`
    
`;

type Props = {
    id: number
}

const App = (props: Props) => {
    const dispatch = useDispatch();

    return (
        <Tooltip title="段落を削除" arrow>
            <IconButton
                size={'small'}
                onClick={() => dispatch(ScenarioSlice.actions.delete(props.id))}
            >
                <Delete />
            </IconButton>
        </Tooltip>
    );
};

export default App;
