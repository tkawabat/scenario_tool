import sinon from 'sinon';

import ScenarioSlice, { ChangeMemoPayload } from '../ScenarioSlice';
import Scenario, { createScenario } from '../model/Scenario';

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
    const previousState: Scenario = createScenario();

    const payload: ChangeMemoPayload = {
        paragraphId: 0,
        memo: 'hoge'
    }
    const actual = reducer(previousState, actions.changeMemo(payload));

    const expected: Scenario = createScenario();
    expected.paragraphList[0].memo = 'hoge';

    expect(actual).toEqual(expected)
})
