import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';

import Center from '../l1/Center';
import Left from '../l1/Left';
import Right from '../l1/Right';
import ParagraphTitle from '../l1/ParagraphTitle';
import DeleteParagraphButton from '../l1/DeleteParagraphButton';


const Main = styled.div`
    display: flex;
    width: 100%;
`;

const Title = styled(ParagraphTitle)`
    width: 70%;
`;

type Props = {
    paragraphId: number;
}

const App = (props: Props) => {

    return (
        <Main>
            <Left>
                <Title id={props.paragraphId} />
            </Left>
            <Center>
            </Center>
            <Right>
                <DeleteParagraphButton id={props.paragraphId} />
            </Right>
            
            
        </Main>
    );
};

export default App;
