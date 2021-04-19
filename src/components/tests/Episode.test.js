import React from 'react';
import { render, screen } from '@testing-library/react';
import Episode from './../Episode';

const testEpisode = {
  id: 1,
  name: '',
  image:
    'http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg',
  season: 1,
  number: 1,
  summary: 'this is the summary value running in the testEpisode',
  runtime: 1,
};

const testEpisodeWithoutImage = {
  //Add in approprate test data structure here.
  id: 1,
  name: '',
  image: '',
  season: 1,
  number: 1,
  summary: 'this is the summary value running in the testEpisodeWithoutImage',
  runtime: 1,
};

//Complete a test that shows the Episode component renders. Pass in the provided example episode data as a test prop.
test('renders without error', () => {
  render(<Episode episode={testEpisode} />);
});

//Modify the test data to display a specific summary statement. Complete a test that shows that the summary value passed in to the Episode component displays as expected. Use no more then 3 different expect statements to test the the existance of the summary value.

test('renders the summury test passed as prop', () => {
  //Arrange
  render(<Episode episode={testEpisode} />);
  //Act
  const summary = screen.queryByText(
    'this is the summary value running in the testEpisode'
  );
  //Assert
  expect(summary).toBeInTheDocument();

  expect(summary).toHaveTextContent(
    'this is the summary value running in the testEpisode'
  );

  expect(summary).not.toBeNull();
});

//The episode component displays a default value ('./stranger_things.png') when a image url is not provided. Create a new piece of test data with the image property set to null. Test that the alt tag of the image displayed is set to './stranger_things.png'.

test('renders default image when image is not defined', () => {
  //Arrange
  render(<Episode episode={testEpisodeWithoutImage} />);
  //Act
  const image = screen.getByAltText('./stranger_things.png');
  //Assert
  expect(image).toHaveAttribute('alt', './stranger_things.png');
});
