import React from 'react';
import styled from 'styled-components';
import { Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';

import { Paragraph } from '../../store/ScenarioSlice';

import ParagraphTitle from '../l1/ParagraphTitle';
import ScenarioArea from '../l1/ScenarioArea';
import ScenarioAreaCount from '../l1/ScenarioAreaCount';
import MemoArea from '../l1/MemoArea';
import ParagraphTool from '../l2/ParagraphTool';


const Root = styled(Accordion)`
    display: flex;
    flex-direction: column;
    width: 95%;
    justify-content: space-between;
    margin-top: 10px;
`;
const Header = styled(AccordionSummary)`
    width: 97%;
`;
const Title = styled(ParagraphTitle)`
    width: 70%;
`;

const Detail = styled(AccordionDetails)`
    display: flex;
    width: 95%;
    justify-content: space-between;
    margin-top: 10px;
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
            <Header
                expandIcon={<ExpandMore />}
            >
                <Title id={props.id} />
            </Header>
            <Detail>
                <Main>
                    <ScenarioArea id={props.id} />
                    <ScenarioAreaCount id={props.id} />
                </Main>
                <Sub>
                    <MemoArea id={props.id} />
                    <ParagraphTool id={props.id} />
                </Sub>
            </Detail>
        </Root>
    );
};

export default App;
