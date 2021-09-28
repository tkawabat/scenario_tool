import React from 'react';
import styled from 'styled-components';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material/';
import { ExpandMore } from '@mui/icons-material/';

import Paragraph from '../../store/model/Paragraph';

import ScenarioArea from '../l1/ScenarioArea';
import ScenarioAreaCount from '../l1/ScenarioAreaCount';
import MemoArea from '../l1/MemoArea';
import ParagraphHeader from '../l2/ParagraphHeader';
import TodoArea from '../l3/TodoArea';


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
                <ParagraphHeader paragraphId={props.id} />
            </Header>
            <Detail>
                <Main>
                    <ScenarioArea id={props.id} />
                    <ScenarioAreaCount id={props.id} />
                </Main>
                <Sub>
                    <TodoArea paragraphId={props.id} />
                    <MemoArea id={props.id} />
                </Sub>
            </Detail>
        </Root>
    );
};

export default App;
