import React from 'react';

import TodoArea from './TodoArea';

export default {
    title: 'l3/TodoArea',
    component: TodoArea,
};

export const show = () => {
    return (<TodoArea paragraphId={0} />);
}
