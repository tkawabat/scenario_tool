import React from 'react';
import styled from 'styled-components';


const Main = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
`;

interface Props {
    children?: React.ReactNode;
}

const App = (props: Props) => {
    return (
        <Main>
            {props.children}
        </Main>
    );
};

export default App;