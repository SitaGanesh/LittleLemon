// times.test.js
import { initializeTimes, updateTimes } from './times';

test('initializeTimes returns correct initial times', () => {
  const times = initializeTimes();
  expect(times).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00"]);
});

test('updateTimes returns the same state that is provided', () => {
  const state = ["17:00", "18:00", "19:00", "20:00", "21:00"];
  const action = { type: 'UPDATE_TIMES', payload: { date: '2022-01-01' } }; // Example action
  const newState = updateTimes(state, action);
  expect(newState).toEqual(state);
});
