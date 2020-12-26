import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';

import { RootState } from '../../store/rootReducer';


const Main = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

type Props = {
}

const App = (props: Props) => {

    return (
        <Main>

        </Main>
    );
}

export default App;