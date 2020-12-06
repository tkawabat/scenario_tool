import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';

import { RootState } from './store/rootReducer';

import AddParagraphButton from './view/l1/AddParagraphButton';
import Paragraph from './view/l3/Paragraph';


const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const App = () => {

    const paragraph = useSelector((state: RootState) => state.paragraph).map((e, i) => {
        return (<Paragraph id={i} paragraph={e} key={i} />);
    });;
    

    return (
        <div className="App">
            <Main>
                { paragraph }

                <AddParagraphButton />
            </Main>
        </div>
    );
}

export default App;
