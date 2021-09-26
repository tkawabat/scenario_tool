import * as C from '../../lib/Const';

import Paragraph, { createParagraph } from './Paragraph';


// Scenarioのインターフェースを変えるときは
// ・CurrentScenarioFormatVersionを上げる
// ・load関数内で後方互換性をもたせる（詳細は作るときに考える。）
export default interface Scenario {
    formatVersion: number;
    title: string;
    paragraphList: Paragraph[];
    old: Paragraph[];
}

export const createScenario = () :Scenario => {
    return {
        formatVersion: C.CurrentScenarioFormatVersion,
        title: '',
        paragraphList: [
            createParagraph()
        ],
        old: []
    }
}