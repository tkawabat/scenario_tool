import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import { RootState } from '../../store/rootReducer';
import ScenarioSlice from '../../store/ScenarioSlice';

import Todo, { TodoProps } from './Todo';

export default {
    title: 'l2/Todo',
    component: Todo,
};

export const showTodo = () => {
    // const text = useSelector((state: RootState) => state.scenario.paragraph[props.id].text);

    return (<Todo paragraphId={0} todoId={0} />);
    // return (<Todo text={""} checked={false} />);
}
