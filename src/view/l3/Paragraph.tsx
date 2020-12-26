import React, {useState} from 'react';
import styled from 'styled-components';

import { Paragraph } from '../../store/ParagraphSlice';

import ParagraphTitle from '../l1/ParagraphTitle';
import ScenarioArea from '../l1/ScenarioArea';
import ScenarioAreaCount from '../l1/ScenarioAreaCount';
import MemoArea from '../l1/MemoArea';
import ParagraphTool from '../l2/ParagraphTool';

const Root = styled.div`
    display: flex;
    width: 95%;
    justify-content: space-between;
    margin-top: 10px;
    min-height: 200px;
    transition: all 1000ms ease;
`;
const Main = styled.div`
    display: flex;
    flex-direction: column;
    width: 74%;
`;
const Sub = styled.div`
    display: flex;
    flex-direction: column;
    width: 24%;
`;

type Props = {
    id: number;
    paragraph: Paragraph;
}

const App = (props: Props) => {
    
    return (
        <Root className="paragraph">
            <Main>
                <ParagraphTitle id={props.id} />
                <ScenarioArea id={props.id} />
                <ScenarioAreaCount id={props.id} />
            </Main>
            <Sub>
                <ParagraphTool id={props.id} />
                <MemoArea id={props.id} />
            </Sub>
        </Root>
    );
};

export default App;
