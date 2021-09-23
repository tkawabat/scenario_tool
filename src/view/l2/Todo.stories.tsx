import React from 'react';

import Todo from './Todo';

export default {
    title: 'l2/Todo',
    component: Todo,
};

export const show = () => {
    return (<Todo paragraphId={0} todoId={0} />);
}
