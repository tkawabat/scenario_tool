import ScenarioSlice, { Scenario, ChangeMemoPayload, initialState } from '../ScenarioSlice';


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
    const previousState: Scenario = JSON.parse(JSON.stringify(initialState));

    const payload: ChangeMemoPayload = {
        id: 0,
        memo: 'hoge'
    }
    const actual = reducer(previousState, actions.changeMemo(payload));

    const expectState = JSON.parse(JSON.stringify(initialState));
    expectState.paragraph[0].memo = 'hoge';

    expect(actual).toEqual(expectState)
})

// test('should handle a todo being added to an existing list', () => {
//   const previousState = [
//     {
//       text: 'Run the tests',
//       completed: true,
//       id: 0
//     }
//   ]
//   expect(reducer(previousState, todoAdded('Use Redux'))).toEqual([
//     {
//       text: 'Run the tests',
//       completed: true,
//       id: 0
//     },
//     {
//       text: 'Use Redux',
//       completed: false,
//       id: 1
//     }
//   ])
// })