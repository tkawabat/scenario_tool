import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';
import { IconButton } from '@material-ui/core';
import { Delete } from '@material-ui/icons';

import ParagraphSlice from '../../store/ParagraphSlice';


const Main = styled(IconButton)`
    
`;

type Props = {
    id: number
}

const App = (props: Props) => {
    const dispatch = useDispatch();

    return (
        <IconButton 
            size={'small'}
            onClick={() => dispatch(ParagraphSlice.actions.delete(props.id))}
        >
            <Delete />
        </IconButton>
    );
};

export default App;
