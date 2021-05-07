export function apiCallHandler(method, url, data, contentType, token) {
  const authHeader = {
    Accept: 'application/json',
    'Content-Type': contentType,
    Authorization: 'Bearer ' + token,
    Connection: 'close',
  };
  const normalHeader = {
    Accept: 'application/json',
    'Content-Type': contentType,
    Connection: 'close',
  };
  if (method === 'GET') {
    return fetch(url, {
      method: method,
      headers: token ? authHeader : normalHeader,
    })
      .then(function (response) {
        return response.json();
      })
      .then(responseData => {
        if (responseData) {
          return responseData;
        }
      })
      .catch(err => {
        return err;
      });
  } else {
    return fetch(url, {
      method: method,
      headers: token ? authHeader : normalHeader,
      body: data,
    })
      .then(function (response) {
        return response.json();
      })
      .then(responseData => {
        if (responseData) {
          return responseData;
        }
      })
      .catch(err => {
        return err;
      });
  }
}
