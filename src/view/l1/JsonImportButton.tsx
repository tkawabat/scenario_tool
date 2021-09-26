import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';
import { IconButton, Tooltip } from '@mui/material/';
import { Publish } from '@mui/icons-material/';


import ScenarioSlice, { LoadPayload, } from '../../store/ScenarioSlice';
import Scenario from '../../store/model/Scenario';


const Main = styled(IconButton)`
    
`;

type Props = {
}

const App = (props: Props) => {
    const dispatch = useDispatch();

    const load = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return;
        const text = await e.target.files[0].text();

        // TODO
        try {
            const scenario: Scenario = JSON.parse(text);
            const payload: LoadPayload = {
                scenario: scenario
            };
            dispatch(ScenarioSlice.actions.load(payload));
        } catch {
            window.alert('プロジェクトファイルの読み込みに失敗しました。形式が間違っています。');
        }

        e.target.value = ""; // 空にすることで次のonchangeが発火するようにする
    }

    return (
        <Tooltip title="プロジェクトを読込" arrow>
        <IconButton 
            component="label"
        >
            <Publish />
            <input type="file" hidden accept=".json" onChange={load} />
         </IconButton>
         </Tooltip>
    );
};

export default App;
