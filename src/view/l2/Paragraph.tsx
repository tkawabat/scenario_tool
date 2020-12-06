import React from 'react';
import styled from 'styled-components';

import { Paragraph } from '../../store/ParagraphSlice';

import ScenarioArea from '../l1/ScenarioArea';
import ScenarioAreaCount from '../l1/ScenarioAreaCount';
import MemoArea from '../l1/MemoArea';


const Root = styled.div``;
    const Main = styled.div`
        display: flex;
    `;
    const Footer = styled.div`
    display: flex;
`;

type Props = {
    id: number
    paragraph: Paragraph
}

const App = (props: Props) => {
    

    return (
        <Root>
            <Main>
                <ScenarioArea id={props.id} />
                <MemoArea id={props.id} />
            </Main>
            <Footer>
                <ScenarioAreaCount id={props.id} />
            </Footer>
        </Root>
    );
};

export default App;
