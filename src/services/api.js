import { baseURL, imagePath, key } from "../constants";

export async function homeCall() {
  const response = await fetch(`${baseURL}/trending/all/week?${key}`);
  return await response.json();
}

export async function tvCall() {
  const response = await fetch(
    `${baseURL}/tv/popular?${key}&language=en-US&page=1`
  );
  return await response.json();
}

export async function moviesCall() {
  const response = await fetch(
    `${baseURL}/movie/popular?${key}&language=en-US&page=2`
  );
  return await response.json();
}

export async function newAndPopularCall() {
  const response = await fetch(
    `${baseURL}/trending/all/day?${key}&language=en-US&page=10`
  );
  return await response.json();
}
