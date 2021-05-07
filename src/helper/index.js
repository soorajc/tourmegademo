import {SEARCH_DESTINATIONS_URL} from '../constants';
import {apiCallHandler} from '../api';

export const searchDestinations = async place => {
  let url = '';
  if (place.hasOwnProperty('introduction')) {
    url = SEARCH_DESTINATIONS_URL + 'country_id=' + place.id + '&count=20';
  } else {
    url =
      SEARCH_DESTINATIONS_URL +
      'country_id=' +
      place.country_id +
      '&city=' +
      place.name +
      '&count=20';
  }

  return apiCallHandler('GET', url, '', '')
    .then(data => {
      return data;
    })
    .catch(error => {
      return error;
    });
};
