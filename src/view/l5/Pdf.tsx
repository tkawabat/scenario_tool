import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';

import { RootState } from '../../store/rootReducer';

import PdfImportButton from '../l1/PdfImportButton';


const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Header = styled.div`
    height: 100px;
`;

type Props = {
}

const App = (props: Props) => {

    return (
        <Main>
            <Header />
            <PdfImportButton />
        </Main>
    );
}

export default App;