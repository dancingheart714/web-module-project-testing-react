import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Show from './../Show';

//Build an example data structure that contains the show data in the correct format. A show should contain a name, a summary and an array of seasons, each with a id, name and (empty) list of episodes within them. Use console.logs within the client code if you need to to verify the structure of show data.

const testShow = {
  //add in approprate test data structure here.
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

//Test that the Show component renders when your test data is passed in through show and "none" is passed in through selectedSeason.
test('renders testShow and no selected Season without errors', () => {
  render(<Show show={testShow} selectedSeason={'none'} />);
});

//Test that the Loading component displays when null is passed into the show prop (look at the Loading component to see how to test for it's existance)
test('renders Loading component when prop show is null', () => {
  //Arrange
  render(<Show show={null} selectedSeason={'none'} />);
  //Act
  const loading = screen.queryByTestId('loading-container');
  //Assert
  expect(loading).toBeInTheDocument();
});

//Test that when your test data is passed through the show prop, the same number of season select options appears as there are seasons in your test data.
test('renders same number of options seasons are passed in', () => {
  //Arrange
  render(<Show show={testShow} selectedSeason={'none'} />);
  //Act
  const seasons = screen.getAllByTestId('season-option');
  //Assert
  expect(seasons).toHaveLength(testShow.seasons.length);
});

//Test that when an item is selected, the handleSelect function is called. Look at your code to see how to get access to the select Dom element and userEvent reference materials to see how to trigger a selection.
test('handleSelect is called when an season is selected', () => {
  //Arrange:  create a mock function
  const mockHandleSelect = jest.fn();
  render(
    <Show
      show={testShow}
      selectedSeason={'none'}
      handleSelect={mockHandleSelect}
    />
  );
  //Act
  const select = screen.queryByLabelText('Select A Season');
  userEvent.selectOptions(select, ['1']);
  //Assert
  expect(mockHandleSelect).toHaveBeenCalledTimes(1);
});

//Test that the episode component DOES NOT render when the selectedSeason props is "none" and DOES render the episode component when the selectedSeason prop has a valid season index.
test('component renders when no seasons are selected and when rerenders with a season passed in', () => {
  const { rerender } = render(<Show show={testShow} selectedSeason={'none'} />);
  expect(screen.queryByTestId('episodes-container')).not.toBeInTheDocument();

  rerender(<Show show={testShow} selectedSeason={'0'} />);
  expect(screen.queryByTestId('episodes-container')).toBeInTheDocument();
});
