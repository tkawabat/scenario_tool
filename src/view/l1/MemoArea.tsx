import React from 'react';
import styled from 'styled-components';

const App = () => {
    const Area = styled.textarea`
        width: 30%;
        height: 200px;
        margin-top: 10px;
        margin-left: 5px;
    `;

    return (
        <Area placeholder="メモを入力"></Area>
    );
};

export default App;
