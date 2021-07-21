import { baseURL } from "../constants";

export async function homeCall() {
  const response = await fetch(
    `${baseURL}/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}`
  );
  return await response.json();
}

export async function tvCall() {
  const response = await fetch(
    `${baseURL}/tv/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
  );
  return await response.json();
}

export async function moviesCall() {
  const response = await fetch(
    `${baseURL}/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=2`
  );
  return await response.json();
}

export async function newAndPopularCall() {
  const response = await fetch(
    `${baseURL}/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=10`
  );
  return await response.json();
}
