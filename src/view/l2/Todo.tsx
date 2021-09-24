import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';
import { Tooltip, IconButton, TextField, Checkbox } from '@mui/material/';
import { Delete } from '@mui/icons-material/';

import { RootState } from '../../store/rootReducer';
import ScenarioSlice, { changeTodoTextPayload, deleteTodoPayload, toggleTodoPayload } from '../../store/ScenarioSlice';


const Main = styled.div`
        
`;

export interface TodoProps {
    paragraphId: number;
    todoId: number;
}

const App = (props: TodoProps) => {
    const todo = useSelector((state: RootState) => state.scenario.paragraph[props.paragraphId].todo[props.todoId]);
    const dispatch = useDispatch();

    const toggle = ()=> {
        const payload: toggleTodoPayload = {
            paragraphId: props.paragraphId,
            todoId: props.todoId,
        }
        dispatch(ScenarioSlice.actions.toggleTodo(payload));
    }

    const changeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const payload: changeTodoTextPayload = {
            paragraphId: props.paragraphId,
            todoId: props.todoId,
            text: e.target.value,
        }
        dispatch(ScenarioSlice.actions.changeTodoText(payload));
    }

    const deleteTodo = ()=> {
        const payload: deleteTodoPayload = {
            paragraphId: props.paragraphId,
            todoId: props.todoId,
        }
        dispatch(ScenarioSlice.actions.deleteTodo(payload));
    }
    
    return (
        <Main>
            <Tooltip title="完了" arrow>
                <Checkbox checked={todo.checked} onClick={toggle} />
            </Tooltip>
            <TextField
                variant="standard"
                placeholder={"Todo"}
                value={todo.text}
                onChange={changeText}
            />
            <Tooltip title="Todoを削除" arrow>
            <IconButton
                size={'small'}
                onClick={deleteTodo}
            >
                <Delete />
            </IconButton>
        </Tooltip>
            

        </Main>
    );
};

export default App;