import React from 'react';
import styled from 'styled-components';

import ScenarioArea from '../l1/ScenarioArea';
import ScenarioAreaCount from '../l1/ScenarioAreaCount';
import MemoArea from '../l1/MemoArea';

const App = () => {
    const Root = styled.div``;
    const Main = styled.div`
        display: flex;
    `;
    const Footer = styled.div`
    display: flex;
`;

    return (
        <Root>
            <Main>
                <ScenarioArea />
                <MemoArea />
            </Main>
            <Footer>
                <ScenarioAreaCount />
            </Footer>
        </Root>
    );
};

export default App;
