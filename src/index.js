import axios from 'axios';
const BASE_URL = 'https://pixabay.com';
const API_KEY = '30636306-622e8e29f4556862f1def4eb8';

const inputValue = document.querySelector('.search-form');

inputValue.addEventListener('submit', search);

// function search(event) {
//   event.preventDefault();
//   const data = axios.get(`${BASE_URL}/api/?key=${API_KEY}`);
//   console.log(data);
// }

async function search(event) {
  event.preventDefault();
  try {
    const response = await axios.get(`${BASE_URL}/api/?key=${API_KEY}`);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
