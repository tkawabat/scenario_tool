import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useSnackbar } from 'notistack';

import { RootState } from '../../store/rootReducer';
import ScenarioSlice, { LoadPayload, Scenario } from '../../store/ScenarioSlice';

import * as C from '../../lib/Const';
import TimerUtil from '../../lib/TimerUtil';
import StorageUtil from '../../lib/StorageUtil';

import Paragraph from '../l4/Paragraph';
import Header from '../l3/Header';
import AddParagraphButton from '../l1/AddParagraphButton';


const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

interface Props {
}

const App = (props: Props) => {
    const { enqueueSnackbar, } = useSnackbar();
    const dispatch = useDispatch();
    const scenario = useSelector((state: RootState) => state.scenario);
    const paragraphList = scenario.paragraph.map((e, i) => {
        return (<Paragraph id={i} paragraph={e} key={i} />);
    });

    const loadStorage = () => {
        const json = StorageUtil.load(C.StorageKeyScenario);
        if (typeof json == 'string') {
            try {
                const scenario: Scenario = JSON.parse(json);
                const loadPayload: LoadPayload = {
                    scenario: scenario
                }
                dispatch(ScenarioSlice.actions.load(loadPayload));

                // 通知
                enqueueSnackbar('前回のデータを読み込みました。', { variant: C.NotificationType.SUCCESS });
            } catch { // ERROR
                StorageUtil.remove(C.StorageKeyScenario);
            }

        }
    }

    // setIntervalの中で参照できるようにする。
    const scenarioRef = useRef(scenario);
    useEffect(() => {
        scenarioRef.current = scenario;
      }, [scenario]);

    const init = () => { // 初回のみ実行
        loadStorage();

        // 自動保存
        TimerUtil.setInterval(C.TimerSaveProject, () => {
            StorageUtil.save(C.StorageKeyScenario, JSON.stringify(scenarioRef.current));
        }, C.IntervalSaveScenario);
    }

    useEffect(init, []);

    return (
        <HelmetProvider>
            <Helmet>
                <title>HAKOGAKI</title>
            </Helmet>
            <Main className="App">
                <Header />
                {paragraphList}
                <AddParagraphButton />
            </Main>
        </HelmetProvider>
    );
}

export default App;
