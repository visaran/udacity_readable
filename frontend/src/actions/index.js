import axios from 'axios';

export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';


export function fetchCategories() {
  const request = axios.get('locahost/3002/categories');

  return {
    type: FETCH_CATEGORIES,
    payload: request
  };
}