import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';
import { IconButton, Tooltip } from '@material-ui/core';
import { Save } from '@material-ui/icons';

import { RootState } from '../../store/rootReducer';
import { getText } from '../../store/ParagraphSlice';

import FileUtil from '../../lib/FileUtil';


const Main = styled(IconButton)`
    
`;

type Props = {
}

const App = (props: Props) => {
    const paragraph = useSelector((state: RootState) => state.paragraph);
    const dispatch = useDispatch();

    return (
        <Tooltip title="台本を出力" arrow>
        <IconButton 
            onClick={() => FileUtil.download('hoge.txt', getText(paragraph))}
        >
            <Save />
        </IconButton>
        </Tooltip>
    );
};

export default App;
