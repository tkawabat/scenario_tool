import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';
import { IconButton } from '@material-ui/core';

import { RootState } from './store/rootReducer';

import AddParagraphButton from './view/l1/AddParagraphButton';
import Paragraph from './view/l2/Paragraph';


const Main = styled.div`
    width: 70%;
    margin-left: 10px;
`;

const App = () => {

    const paragraph = useSelector((state: RootState) => state.paragraph).map((e, i) => {
        return (<Paragraph id={i} paragraph={e} />);
    });;
    

    return (
        <div className="App">
            <Main>

                { paragraph }

                <IconButton >
                    <AddParagraphButton />
                </IconButton>
            </Main>
        </div>
    );
}

export default App;
