import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';

import { RootState } from '../../store/rootReducer';

import ParagraphSlice from '../../store/ParagraphSlice';

const Main = styled.div`
        
`;

const App = () => {
    const text = useSelector((state: RootState) => state.paragraph.text);
    const dispatch = useDispatch();

    return (
        <Main>
            {text.length}
        </Main>
    );
};

export default App;
