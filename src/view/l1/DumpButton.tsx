import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';
import { IconButton, Tooltip, Menu, MenuItem } from '@mui/material/';
import { GetApp } from '@mui/icons-material/';

import { RootState } from '../../store/rootReducer';
import Scenario from '../../store/model/Scenario';

import FileUtil from '../../lib/FileUtil';
import ScenarioUtil from '../../lib/ScenarioUtil';


const Root = styled.div`
        
`;

type Props = {
}

const App = (props: Props) => {
    const scenario: Scenario = useSelector((state: RootState) => 
        state.scenario);

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const saveProject = () => {
        const fileName = ScenarioUtil.getTitle(scenario) + '.json';
        FileUtil.download(fileName, JSON.stringify(scenario));
        handleClose();
    };
    const saveScenario = () => {
        const fileName = ScenarioUtil.getTitle(scenario) + '.txt';
        FileUtil.download(fileName, ScenarioUtil.getScenarioText(scenario));
        handleClose();
    };

    return (
        <Root>
            <Tooltip title="ファイルに保存" arrow>
                <IconButton
                    aria-controls="basic-menu"
                    aria-haspopup="true"
                    aria-expanded={Boolean(anchorEl) ? 'true' : undefined}
                    onClick={handleClick}
                >
                    <GetApp />
                </IconButton>
            </Tooltip>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{ 'aria-labelledby': 'basic-button', }}
            >
                <MenuItem onClick={saveProject}>プロジェクトとして保存</MenuItem>
                <MenuItem onClick={saveScenario}>台本として保存</MenuItem>
            </Menu>
        </Root>
    );
};

export default App;