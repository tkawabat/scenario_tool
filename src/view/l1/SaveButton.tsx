import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';
import { IconButton, Tooltip } from '@material-ui/core';
import { Save } from '@material-ui/icons';

import { RootState } from '../../store/rootReducer';


const Main = styled(IconButton)`
    
`;

type Props = {
}

const App = (props: Props) => {
    const scenario = useSelector((state: RootState) => state.scenario);

    const save = () => {
        JSON.stringify(scenario)
    }

    return (
        <Tooltip title="ブラウザに保存" arrow>
        <IconButton 
            onClick={save}
        >
            <Save />
        </IconButton>
        </Tooltip>
    );
};

export default App;
