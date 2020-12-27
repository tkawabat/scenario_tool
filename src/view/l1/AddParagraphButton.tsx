import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';
import { IconButton } from '@material-ui/core';
import { Add } from '@material-ui/icons';

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
