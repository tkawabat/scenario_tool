import React from 'react';
import styled from 'styled-components';

import ScenarioArea from '../l1/ScenarioArea';
import MemoArea from '../l1/MemoArea';

const App = () => {
    const Main = styled.div`
        display: flex;
    `;

    return (
        <Main>
            <ScenarioArea />
            <MemoArea />
        </Main>
    );
};

export default App;
