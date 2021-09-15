import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';
import { IconButton, Tooltip } from '@material-ui/core';
import { GetApp } from '@material-ui/icons';

import { RootState } from '../../store/rootReducer';

import FileUtil from '../../lib/FileUtil';


type Props = {
}

const App = (props: Props) => {
    const paragraph = useSelector((state: RootState) => state.scenario.paragraph);
    const dispatch = useDispatch();

    return (
        <Tooltip title="プロジェクトを保存" arrow>
        <IconButton 
            onClick={() => FileUtil.download('hoge.json', JSON.stringify(paragraph))}
        >
            <GetApp />
        </IconButton>
        </Tooltip>
    );
};

export default App;
