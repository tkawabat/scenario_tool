import React from 'react';
import styled from 'styled-components';

const App = () => {
    const Area = styled.textarea`
        width: 70%;
        height: 200px;
        margin-top: 10px;
    `;

    return (
        <Area placeholder="本文を入力"></Area>
    );
};

export default App;
