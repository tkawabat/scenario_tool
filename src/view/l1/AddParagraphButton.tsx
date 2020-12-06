import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';
import { IconButton } from '@material-ui/core';
import { Add } from '@material-ui/icons';

import ParagraphSlice from '../../store/ParagraphSlice';


type Props = {

}

const App = (props: Props) => {
    const dispatch = useDispatch();

    return (
        <IconButton onClick={() => dispatch(ParagraphSlice.actions.add())}>
            <Add />
        </IconButton>
    );
};

export default App;
