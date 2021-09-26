import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';

import DeleteParagraphButton from '../l1/DeleteParagraphButton';


const Main = styled.div`
        
`;

type Props = {
    id: number;
}

const App = (props: Props) => {

    return (
        <Main>
            <DeleteParagraphButton id={props.id} />
        </Main>
    );
};

export default App;
