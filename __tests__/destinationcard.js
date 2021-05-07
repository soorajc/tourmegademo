/**
 * @format
 */

import 'react-native';
import React from 'react';
import DestinationCard from '../src/components/destinationcard';

import renderer from 'react-test-renderer';

// Sample data of the destination according to the api-schema
import {SAMPLE_DESTINATION_DATA} from '../src/data';

it('Destination Card renders successfully on passing the data as per the api schema', () => {
  const wrapper = renderer.create(
    <DestinationCard index={0} destination={SAMPLE_DESTINATION_DATA} />,
  ).root;

  // Check whether the data provided is accroding to the api schema
  expect(wrapper.props.destination.thumbnail_url).toBeDefined();
  expect(wrapper.props.destination.city).toBeDefined();
  expect(wrapper.props.destination.average_rating).toBeDefined();
  expect(wrapper.props.destination.number_of_reviews).toBeDefined();
  expect(wrapper.props.destination.name).toBeDefined();
  expect(wrapper.props.destination.price_in_usd).toBeDefined();

  // Check whether the values passed are displayed correctly

  const testData = SAMPLE_DESTINATION_DATA;

  expect(wrapper.props.destination.thumbnail_url).toEqual(
    testData.thumbnail_url,
  );
  expect(wrapper.props.destination.city).toEqual(testData.city);
  expect(wrapper.props.destination.average_rating).toEqual(
    testData.average_rating,
  );
  expect(wrapper.props.destination.number_of_reviews).toEqual(
    testData.number_of_reviews,
  );
  expect(wrapper.props.destination.name).toEqual(testData.name);
  expect(wrapper.props.destination.price_in_usd).toEqual(testData.price_in_usd);
});
