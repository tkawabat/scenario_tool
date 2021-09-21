import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';

import { RootState } from '../../store/rootReducer';

import { TimerSaveProject, StorageKeyScenario, IntervalSaveScenario } from '../../lib/Const';
import TimerUtil from '../../lib/TimerUtil';
import StorageUtil from '../../lib/StorageUtil';

import { Helmet, HelmetProvider } from 'react-helmet-async';
import Header from '../l3/Header';
import Paragraph from '../l4/Paragraph';
import AddParagraphButton from '../l1/AddParagraphButton';
import ScenarioSlice, { LoadPayload, Scenario } from '../../store/ScenarioSlice';


const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

type Props = {
}

const App = (props: Props) => {
    const dispatch = useDispatch();
    const scenario = useSelector((state: RootState) => state.scenario);
    const paragraphList = scenario.paragraph.map((e, i) => {
        return (<Paragraph id={i} paragraph={e} key={i} />);
    });

    const loadStorage = () => {
        const json = StorageUtil.load(StorageKeyScenario);
        if (typeof json == 'string' && window.confirm('前回のデータをロードしますか？')) {
            try {
                const scenario: Scenario = JSON.parse(json);
                const payload: LoadPayload = {
                    scenario: scenario
                }
                dispatch(ScenarioSlice.actions.load(payload));
            } catch {
                StorageUtil.remove(StorageKeyScenario);
                alert('データの読み込みに失敗しました。');
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
        TimerUtil.setInterval(TimerSaveProject, () => {
            StorageUtil.save(StorageKeyScenario, JSON.stringify(scenarioRef.current));
        }, IntervalSaveScenario * 1000);
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

function dispatch(arg0: any) {
    throw new Error('Function not implemented.');
}
