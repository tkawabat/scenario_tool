import ScenarioSlice, * as S from '../ScenarioSlice';


const reducer = ScenarioSlice.reducer;
const actions = ScenarioSlice.actions;


// test('should return the initial state', () => {
//   expect(ScenarioSlice.reducer(undefined, {})).toEqual([
//     {
//       text: 'Use Redux',
//       completed: false,
//       id: 0
//     }
//   ])
// })

test('changeMemo 正常系', () => {
    const previousState: S.Scenario = JSON.parse(JSON.stringify(S.initialState));

    const payload: S.ChangeMemoPayload = {
        id: 0,
        memo: 'hoge'
    }
    const actual = reducer(previousState, actions.changeMemo(payload));

    const expected = JSON.parse(JSON.stringify(S.initialState));
    expected.paragraph[0].memo = 'hoge';

    expect(actual).toEqual(expected)
})

test('getCheckedTodoNum 正常系 空', () => {
    const input: S.Paragraph[] = [];
    const actual = S.getCheckedTodoNum(input);

    const expected = 0;
    expect(actual).toEqual(expected)
})

test('getCheckedTodoNum 正常系 0', () => {
    const p1: S.Paragraph = JSON.parse(JSON.stringify(S.initialParagraph));
    const p2: S.Paragraph = JSON.parse(JSON.stringify(S.initialParagraph));
    const input = [p1, p2];
    const actual = S.getCheckedTodoNum(input);

    const expected = 0;
    expect(actual).toEqual(expected)
})

test('getCheckedTodoNum 正常系 2', () => {
    const p1: S.Paragraph = JSON.parse(JSON.stringify(S.initialParagraph));
    const p2: S.Paragraph = JSON.parse(JSON.stringify(S.initialParagraph));
    p1.todo[0].checked = true;
    p2.todo[1].checked = true;
    const input = [p1, p2];
    const actual = S.getCheckedTodoNum(input);

    const expected = 2;
    expect(actual).toEqual(expected)
})
