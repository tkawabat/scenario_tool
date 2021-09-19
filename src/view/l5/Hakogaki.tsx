import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';

import { RootState } from '../../store/rootReducer';

import { Helmet, HelmetProvider } from 'react-helmet-async';
import Header from '../l3/Header';
import Paragraph from '../l4/Paragraph';
import AddParagraphButton from '../l1/AddParagraphButton';


const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

type Props = {
}

const App = (props: Props) => {
    const paragraph = useSelector((state: RootState) => state.scenario.paragraph).map((e, i) => {
        return (<Paragraph id={i} paragraph={e} key={i} />);
    });

    return (
        <HelmetProvider>
            <Helmet>
                <title>HAKOGAKI</title>
            </Helmet>
            <Main className="App">
                <Header />
                {paragraph}
                <AddParagraphButton />
            </Main>
        </HelmetProvider>
    );
}

export default App;