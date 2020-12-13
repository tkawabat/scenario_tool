import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';
import { IconButton } from '@material-ui/core';
import { Save } from '@material-ui/icons';

import { RootState } from '../../store/rootReducer';

import FileUtil from '../../lib/FileUtil';


const Main = styled(IconButton)`
    
`;

type Props = {
}

const App = (props: Props) => {
    const paragraph = useSelector((state: RootState) => state.paragraph);
    const dispatch = useDispatch();

    return (
        <IconButton 
            onClick={() => FileUtil.download('hoge.json', JSON.stringify(paragraph))}
        >
            <Save />
        </IconButton>
    );
};

export default App;
