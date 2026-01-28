import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const pixabayApi = axios.create({ baseURL: 'https://pixabay.com/api/' });

export const getImagesByQuery = async (query, page) => {
  const options = {
    params: {
      key: '54348758-bba5af5a9365c42f0e38aa256',
      q: query,
      page,
      per_page: 15,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  };

  const { data } = await pixabayApi.get('', options);
  return data;
};
