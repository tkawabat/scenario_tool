import * as C from './Const';

import Paragraph from "../store/model/Paragraph";
import Scenario from "../store/model/Scenario";
import Todo from "../store/model/Todo";


class ScenarioUtil {

    getTextLength(paragraphList: Paragraph[]): number {
        return paragraphList.reduce((sum: number, p: Paragraph) => {
            return sum + p.text.length
        }, 0);
    }

    getCheckedTodoNum(paragraphList: Paragraph[]): number {
        const toodoReducer = (sum: number, t: Todo) => {
            return sum + (t.checked ? 1 : 0);
        }

        const paragraphReducer = (sum: number, p: Paragraph) => {
            return sum + p.todo.reduce(toodoReducer, 0);
        }

        return paragraphList.reduce(paragraphReducer, 0);
    }

    getTitle(scenario: Scenario) {
        return scenario.title ? scenario.title : C.NOTITLE;
    }

    getScenarioText(scenario: Scenario) :string {
        const ret = scenario.title ?
        scenario.title + "\r\n\r\n" : '';
    
        return ret + scenario.paragraphList.map((p) => {
            const title = p.subTitle ?
                p.subTitle + "\r\n\r\n" : '';
            return title + p.text + "\r\n\r\n";
        }).join("\r\n\r\n");
    }

    getProgress(scenario: Scenario): string[] {
        const ret: string[] = [];
    
        const previousTextLength = this.getTextLength(scenario.old);
        const nowTextLength = this.getTextLength(scenario.paragraphList);
        const previousCheckedTodoNum = this.getCheckedTodoNum(scenario.old);
        const nowCheckedTodoNum = this.getCheckedTodoNum(scenario.paragraphList);
    
        if (previousTextLength < nowTextLength) {
            const diff = nowTextLength - previousTextLength;
            ret.push('【進捗】' + diff + '文字書きました。');
        }
    
        if (previousCheckedTodoNum < nowCheckedTodoNum) {
            const diff = nowCheckedTodoNum - previousCheckedTodoNum;
            ret.push('【進捗】' + diff + '個のTodoを完了させました。');
        }
    
        return ret;
    }
}

export default new ScenarioUtil();