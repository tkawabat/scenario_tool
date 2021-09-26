import React from 'react';
import styled from 'styled-components';

import * as C from '../../lib/Const';

import Center from '../l1/Center';
import Left from '../l1/Left';
import Right from '../l1/Right';
import DeleteScenarioButton from '../l1/DeleteScenarioButton';
import JsonImportButton from '../l1/JsonImportButton';
import DumpButton from '../l1/DumpButton';
import ScenarioTitle from '../l1/ScenarioTitle';


const Root = styled.div`
    display: flex;
    width: 100%;
    height: 50px;
    background-color: #D7E6EF;
    margin-bottom: 10px;
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
                <ToolTitle>{C.APP_NAME}</ToolTitle>
            </Left>
            <Center>
                <ScenarioTitle />
            </Center>
            <Right>
                <DeleteScenarioButton />
                <JsonImportButton />
                <DumpButton /> 
            </Right>
        </Root>
    );
};

export default App;