export function getImages(requestImage) {
  const API_KEY = '44366879-bfb1deb33845459b9a36e6118';
  const BASE_URL = 'https://pixabay.com';
  const END_POINT = '/api/';
  const params = new URLSearchParams({
    key: API_KEY,
    q: requestImage,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  const url = `${BASE_URL}${END_POINT}?${params}`;

  return fetch(url).then(res => res.json());
}
