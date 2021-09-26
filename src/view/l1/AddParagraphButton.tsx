import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';
import { IconButton, } from '@mui/material/';
import { Add } from '@mui/icons-material/';

import ScenarioSlice from '../../store/ScenarioSlice';


const Main = styled(IconButton)`
    
`;

type Props = {

}

const App = (props: Props) => {
    const dispatch = useDispatch();

    return (
        <Main onClick={() => dispatch(ScenarioSlice.actions.add())}>
            <Add />
        </Main>
    );
};

export default App;
