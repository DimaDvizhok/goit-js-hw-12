import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const getImagesByQuery = query => {
  const options = {
    params: {
      key: '54348758-bba5af5a9365c42f0e38aa256',
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
    },
  };
  return axios.get('', options).then(res => res.data.hits);
};
