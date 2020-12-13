
import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';
import { IconButton, Tooltip } from '@material-ui/core';
import { Publish } from '@material-ui/icons';

import { RootState } from '../../store/rootReducer';

import FileUtil from '../../lib/FileUtil';


const Main = styled(IconButton)`
    
`;

type Props = {
}

const App = (props: Props) => {
    const paragraph = useSelector((state: RootState) => state.paragraph);
    const dispatch = useDispatch();

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return;
        const files = e.target.files;
    }

    return (
        <Tooltip title="プロジェクトを読込" arrow>
        <IconButton 
            component="label"
        >
            <Publish />
            <input type="file" hidden onChange={(e) => console.log(e.target.files)} />
         </IconButton>
         </Tooltip>
    );
};

export default App;
