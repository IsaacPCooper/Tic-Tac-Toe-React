import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ONGOING_GAME from "./App";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

/*
Failed Jasmine Test Implimentation ???
*/
describe('Game Is In Progress', () => {
  it('should show when a game is ongoing', () => {
      const ongoingcheck =  ONGOING_GAME;
      expect(ongoingcheck).toBe(-1);
  })
})

