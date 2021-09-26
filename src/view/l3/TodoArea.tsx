import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';

import { RootState } from '../../store/rootReducer';

import AddTodoButton from '../l1/AddTodoButton';
import Todo from '../l2/Todo';


const Root = styled.div`
    align-items: center;
`;

type Props = {
    paragraphId: number;
}

const App = (props: Props) => {
    const todo = useSelector((state: RootState) => {
        const todo = state.scenario.paragraphList[props.paragraphId].todo;
        return todo.map((e, i) => {
            return (<Todo paragraphId={props.paragraphId} todoId={i} key={i} />);
        });
    });
    
    return (
        <Root className="todoArea">
            {todo}
            <AddTodoButton paragraphId={props.paragraphId}/>
        </Root>
    );
};

export default App;
