import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';

import { RootState } from '../../store/rootReducer';

import Header from '../l3/Header';
import Paragraph from '../l3/Paragraph';
import AddParagraphButton from '../l1/AddParagraphButton';


const Main = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

type Props = {
}

const App = (props: Props) => {
    const paragraph = useSelector((state: RootState) => state.paragraph).map((e, i) => {
        return (<Paragraph id={i} paragraph={e} key={i} />);
    });

    return (
        <div className="App">
            <Main>
                <Header />
                {paragraph}

                <AddParagraphButton />
            </Main>
        </div>
    );
}

export default App;