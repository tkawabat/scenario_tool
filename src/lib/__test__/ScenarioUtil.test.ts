import sinon from 'sinon';

import ScenarioUtil from '../ScenarioUtil';
import Scenario, { createScenario } from '../../store/model/Scenario';
import Paragraph, { createParagraph } from '../../store/model/Paragraph';


let stubs :sinon.SinonStub[] = [];

describe('getTextLength', () => {

    test('正常系 空', () => {
        const input: Paragraph[] = [];

        const actual = ScenarioUtil.getTextLength(input);

        const expected = 0;
        expect(actual).toEqual(expected);
    })

    test('正常系 0', () => {
        const input: Paragraph[] = [
            createParagraph(),
            createParagraph(),
        ];

        const actual = ScenarioUtil.getTextLength(input);

        const expected = 0;
        expect(actual).toEqual(expected);
    })

    test('正常系 データあり', () => {
        const input: Paragraph[] = [
            createParagraph(),
            createParagraph(),
        ];
        input[1].text = 'aa0123あいうえお';

        const actual = ScenarioUtil.getTextLength(input);

        const expected = 11;
        expect(actual).toEqual(expected);
    })
});


describe('getCheckedTodoNum', () => {

    test('正常系 空', () => {
        const input: Paragraph[] = [];

        const actual = ScenarioUtil.getCheckedTodoNum(input);

        const expected = 0;
        expect(actual).toEqual(expected);
    })

    test('正常系 0', () => {
        const input: Paragraph[] = [
            createParagraph(),
            createParagraph(),
        ];

        const actual = ScenarioUtil.getCheckedTodoNum(input);

        const expected = 0;
        expect(actual).toEqual(expected);
    })

    test('正常系 2', () => {
        const input: Paragraph[] = [
            createParagraph(),
            createParagraph(),
        ];
        input[0].todo[0].checked = true;
        input[1].todo[1].checked = true;

        const actual = ScenarioUtil.getCheckedTodoNum(input);

        const expected = 2;
        expect(actual).toEqual(expected)
    })
});


describe('getProgress', () => {

    afterEach(() => {
        stubs.forEach((s) => {
            s.restore();
        });
        stubs = [];
    })

    test('正常系 進捗なし', () => {
        const input = createScenario();
        input.paragraphList[0].text = 'a'; // oldと差をつけるため

        // stub
        const stubGetTextLength = sinon.stub(ScenarioUtil, 'getTextLength');
        stubGetTextLength.withArgs(input.paragraphList).returns(1);
        stubGetTextLength.withArgs(input.old).returns(1);
        stubs.push(stubGetTextLength);

        const stubgetCheckedTodoNum = sinon.stub(ScenarioUtil, 'getCheckedTodoNum');
        stubgetCheckedTodoNum.withArgs(input.paragraphList).returns(1);
        stubgetCheckedTodoNum.withArgs(input.old).returns(1);
        stubs.push(stubgetCheckedTodoNum);
        
        // execute
        const actual = ScenarioUtil.getProgress(input);

        const expected: string[] = [];
        expect(actual).toEqual(expected)
    })

    test('正常系 進捗あり', () => {
        const input = createScenario();
        input.paragraphList[0].text = 'a'; // oldと差をつけるため

        // stub
        const stubGetTextLength = sinon.stub(ScenarioUtil, 'getTextLength');
        stubGetTextLength.withArgs(input.paragraphList).returns(2);
        stubGetTextLength.withArgs(input.old).returns(1);
        stubs.push(stubGetTextLength);

        const stubgetCheckedTodoNum = sinon.stub(ScenarioUtil, 'getCheckedTodoNum');
        stubgetCheckedTodoNum.withArgs(input.paragraphList).returns(3);
        stubgetCheckedTodoNum.withArgs(input.old).returns(1);
        stubs.push(stubgetCheckedTodoNum);
        
        // execute
        const actual = ScenarioUtil.getProgress(input);

        const expected: string[] = [
            '開始時点から、1文字書きました。',
            '開始時点から、2個のTodoを完了させました。',
        ];
        expect(actual).toEqual(expected)
    })
});