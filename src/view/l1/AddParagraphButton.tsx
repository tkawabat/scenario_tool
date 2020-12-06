import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';
import { Add } from '@material-ui/icons';

import ParagraphSlice from '../../store/ParagraphSlice';


type Props = {

}

const App = (props: Props) => {
    const dispatch = useDispatch();

    return (
        <Add onClick={() => dispatch(ParagraphSlice.actions.add())} />
    );
};

export default App;
