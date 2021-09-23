import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import { RootState } from '../../store/rootReducer';
import ScenarioSlice, { LoadPayload, Scenario } from '../../store/ScenarioSlice';
import NotificationSlice, { AddNotificationPayload } from '../../store/NotificationSlice';

import { TimerSaveProject, StorageKeyScenario, IntervalSaveScenario, NotificationType } from '../../lib/Const';
import TimerUtil from '../../lib/TimerUtil';
import StorageUtil from '../../lib/StorageUtil';

import Paragraph from '../l4/Paragraph';
import Header from '../l3/Header';
import NotificationList from '../l2/NotificationList';
import AddParagraphButton from '../l1/AddParagraphButton';


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
        if (typeof json == 'string') {
            try {
                const scenario: Scenario = JSON.parse(json);
                const loadPayload: LoadPayload = {
                    scenario: scenario
                }
                dispatch(ScenarioSlice.actions.load(loadPayload));

                const addNoticiationpayload: AddNotificationPayload = {
                    notification: {
                        text: '前回のデータを読み込みました。',
                        type: NotificationType.INFO
                    }
                }
                dispatch(NotificationSlice.actions.add(addNoticiationpayload));
            } catch { // ERROR
                StorageUtil.remove(StorageKeyScenario);
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
                <NotificationList />
            </Main>
        </HelmetProvider>
    );
}

export default App;

function dispatch(arg0: any) {
    throw new Error('Function not implemented.');
}
