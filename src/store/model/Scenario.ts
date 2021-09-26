import * as C from '../../lib/Const';

import Paragraph, { createParagraph } from './Paragraph';


export default interface Scenario {
    title: string;
    paragraphList: Paragraph[];
    old: Paragraph[];
}

export const createScenario = () :Scenario => {
    return {
        title: '',
        paragraphList: [
            createParagraph()
        ],
        old: []
    }
}