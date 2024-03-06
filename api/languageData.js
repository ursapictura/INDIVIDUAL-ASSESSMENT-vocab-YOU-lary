import client from '../utils/client';

const endpoint = client.databaseURL;

const getLanguages = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/languages.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const getSingleLanguage = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/languages/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }, // you technically do not need the options object for GET requests, but using it here for consistency
  })
    .then((response) => response.json())
    .then((data) => resolve(data)) // will resolve a single object
    .catch(reject);
});

export { getLanguages, getSingleLanguage };
