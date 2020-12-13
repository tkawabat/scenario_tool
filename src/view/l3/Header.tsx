import React, {useState} from 'react';
import styled from 'styled-components';

import { Paragraph } from '../../store/ParagraphSlice';

import ParagraphTitle from '../l1/ParagraphTitle';
import FileButton from '../l1/FileButton';

const Root = styled.div`
    display: flex;
    width: 100%;
    height: 50px;
`;

const Left = styled.div`
    display: flex;
    flex: 1;
    align-content: center;
`;

const Center = styled.div`
    display: flex;
    flex: 1;
    align-content: center;
`;

const Right = styled.div`
    display: flex;
    flex: 1;
    align-content: flex-end;
`;

type Props = {
}

const App = (props: Props) => {
    
    return (
        <Root className="header">
            <Left></Left>
            <Center></Center>
            <Right>
                <FileButton />
            </Right>
        </Root>
    );
};

export default App;
