const API_KEY = 'dW9FyNOAXIgM1BsAEXhrWIBJwVg34bin';
const BASE_URL = 'https://app.ticketmaster.com/discovery/v2';

export async function fetchEventByKeyword(keyword) {
  const url = `${BASE_URL}/events.json?keyword=${keyword}&apikey=${API_KEY}`;
  const response = await fetch(url);
  const data = await response.json();
  return data._embedded?.events || [];
}
