import React from 'react';
import styled from 'styled-components';


const Main = styled.div`
    display: flex;
    flex: 1;
    align-content: center;
    justify-content: flex-end;
    margin-right: 20px;
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