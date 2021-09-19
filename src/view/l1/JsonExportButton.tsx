import React from 'react';
import Moment from 'moment';
import { useDispatch, useSelector } from "react-redux";
import { IconButton, Tooltip } from '@material-ui/core';
import { GetApp } from '@material-ui/icons';

import { RootState } from '../../store/rootReducer';

import FileUtil from '../../lib/FileUtil';


type Props = {
}

const App = (props: Props) => {
    const scenario = useSelector((state: RootState) => state.scenario);
    const dispatch = useDispatch();

    const fileName = scenario.title
        + Moment().format('YYYYMMDDHHmmss')
        + '.json'
    ;

    return (
        <Tooltip title="プロジェクトを保存" arrow>
        <IconButton 
            onClick={() => FileUtil.download(fileName, JSON.stringify(scenario))}
        >
            <GetApp />
        </IconButton>
        </Tooltip>
    );
};

export default App;