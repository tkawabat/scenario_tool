import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';
import { TextField, Checkbox } from '@material-ui/core';

import { RootState } from '../../store/rootReducer';
import ScenarioSlice, { changeTodoTextPayload, toggleTodoPayload } from '../../store/ScenarioSlice';


const Main = styled.div`
        
`;

export interface TodoProps {
    paragraphId: number;
    todoId: number;
}

const App = (props: TodoProps) => {
    const todo = useSelector((state: RootState) => state.scenario.paragraph[props.paragraphId].todo[props.todoId]);
    const dispatch = useDispatch();

    const onToggle = ()=> {
        const payload: toggleTodoPayload = {
            paragraphId: props.paragraphId,
            todoId: props.todoId,
        }
        dispatch(ScenarioSlice.actions.toggleTodo(payload));
    }

    const onChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const payload: changeTodoTextPayload = {
            paragraphId: props.paragraphId,
            todoId: props.todoId,
            text: e.target.value,
        }
        dispatch(ScenarioSlice.actions.changeTodoText(payload));
    }
    
    return (
        <Main>
            <Checkbox checked={todo.checked} onClick={onToggle} />
            <TextField
                variant="standard"
                placeholder={"Todo"}
                value={todo.text}
                onChange={onChangeText}
            />

        </Main>
    );
};

export default App;