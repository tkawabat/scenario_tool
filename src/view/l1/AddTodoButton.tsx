import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';
import { IconButton } from '@material-ui/core';
import { Add } from '@material-ui/icons';

import ScenarioSlice, { addTodoPayload } from '../../store/ScenarioSlice';


const Main = styled(IconButton)`
    
`;

type Props = {
    paragraphId: number
}

const App = (props: Props) => {
    const dispatch = useDispatch();

    const add = () => {
        const payload: addTodoPayload = {
            paragraphId: props.paragraphId,
        }
        dispatch(ScenarioSlice.actions.addTodo(payload));
    }

    return (
        <Main onClick={add}>
            <Add />
        </Main>
    );
};

export default App;