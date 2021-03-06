import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';
import { IconButton } from '@material-ui/core';
import { Add } from '@material-ui/icons';

import ParagraphSlice from '../../store/ParagraphSlice';


const Main = styled(IconButton)`
    
`;

type Props = {

}

const App = (props: Props) => {
    const dispatch = useDispatch();

    return (
        <Main onClick={() => dispatch(ParagraphSlice.actions.add())}>
            <Add />
        </Main>
    );
};

export default App;
