import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Display from '../Display';

//Rebuild or copy the show test data element as used in the previous set of tests.
const testShow = {
  name: 'Stranger Things',
  image: {
    medium:
      'https://static.tvmaze.com/uploads/images/medium_portrait/200/501942.jpg',
    original:
      'https://static.tvmaze.com/uploads/images/original_untouched/200/501942.jpg',
  },
  summary:
    "A love letter to the '80s classics that captivated a generation, Stranger Things is set in 1983 Indiana, where a young boy vanishes into thin air. As friends, family and local police search for answers, they are drawn into an extraordinary mystery involving top-secret government experiments, terrifying supernatural forces and one very strange little girl.",
  seasons: [
    {
      id: 0,
      name: 'Season 1',
      episodes: [],
    },
    {
      id: 1,
      name: 'Season 2',
      episodes: [],
    },
    {
      id: 2,
      name: 'Season 3',
      episodes: [],
    },
    {
      id: 3,
      name: 'Season 4',
      episodes: [],
    },
  ],
};

//Test that the Display component renders without any passed in props.
test('display renders', () => {
  render(<Display />);
});

//Test that when the fetch button is pressed, the show component will display. Make sure to account for the api call and change of state in building your test.
test('test fetch', () => {
  //Arrange
  render(<Display />);
  //Act
  const button = screen.getByRole('button');
  userEvent.click(button);
  const show = screen.queryByTestId('show-container');
  //Assert
  waitFor(() => expect(show).toBeInTheDocument());
});

//Test that when the fetch button is pressed, the amount of select options rendered is equal to the amount of seasons in your test data.

//Notice the optional functional prop passed in to the Display component client code. Test that when the fetch button is pressed, this function is called.

///Tasks:
//1. Add in nessisary imports and values to establish the testing suite.
//2. Test that the Display component renders without any passed in props.
//3. Rebuild or copy a show test data element as used in the previous set of tests.
//4. Test that when the fetch button is pressed, the show component will display. Make sure to account for the api call and change of state in building your test.
//5. Test that when the fetch button is pressed, the amount of select options rendered is equal to the amount of seasons in your test data.
//6. Notice the optional functional prop passed in to the Display component client code. Test that when the fetch button is pressed, this function is called.
