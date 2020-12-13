import React from 'react';
import styled from 'styled-components';

import JsonExportButton from '../l1/JsonExportButton';
import JsonImportButton from '../l1/JsonImportButton';
import TextExportButton from '../l1/TextExportButton';


const Root = styled.div`
    display: flex;
    width: 100%;
    height: 50px;
    background-color: #D7E6EF;
    margin-bottom: 10px;
`;

const Left = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: flex-start;
    margin-left: 20px;
`;

const Center = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
`;

const Right = styled.div`
    display: flex;
    flex: 1;
    align-content: center;
    justify-content: flex-end;
    margin-right: 20px;
`;

const ToolTitle = styled.span`
    font-family: "Helvetica Neue", "Helvetica", "Hiragino Sans", "Hiragino Kaku Gothic ProN", "Arial", "Yu Gothic", "Meiryo", sans-serif;
    font-size: 20px;
    font-weight: bold;
`

type Props = {
}

const App = (props: Props) => {
    
    return (
        <Root className="header">
            <Left>
                <ToolTitle>HAKOGAKI</ToolTitle>
            </Left>
            <Center></Center>
            <Right>
                <JsonImportButton />
                <JsonExportButton />
                <TextExportButton /> 
            </Right>
        </Root>
    );
};

export default App;
