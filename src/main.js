import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
  loadMoreElem,
} from './js/render-functions';

let page = 1;
let query = null;
let totalHits = null;

const formElem = document.querySelector('.form');

const onFormElemSubmit = async event => {
  event.preventDefault();
  hideLoadMoreButton();
  const form = event.currentTarget;
  query = form.elements['search-text']?.value.trim();
  if (!query) {
    iziToast.error({
      title: 'Помилка',
      message: 'Заповніть поле пошуку!',
      position: 'topRight',
      timeout: 3000,
    });
    return;
  }
  page = 1;
  clearGallery();
  showLoader();

  try {
    const data = await getImagesByQuery(query, page);
    totalHits = data.totalHits;
    console.log(totalHits);

    if (data.hits.length === 0) {
      iziToast.error({
        title: 'Error',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
        timeout: 3000,
      });
      return;
    }
    createGallery(data.hits);
    if (totalHits > 15) {
      showLoadMoreButton();
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: error.message,
      position: 'topRight',
      timeout: 3000,
    });
  } finally {
    form.reset();
    hideLoader();
  }
};

const handleLoadMoreClick = async () => {
  hideLoadMoreButton();
  showLoader();
  page += 1;
  try {
    const imageMore = await getImagesByQuery(query, page);
    createGallery(imageMore.hits);
    if (totalHits > 15) {
      showLoadMoreButton();
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: error.message,
      position: 'topRight',
      timeout: 3000,
    });
  } finally {
    hideLoader();
  }
};

formElem?.addEventListener('submit', onFormElemSubmit);
loadMoreElem?.addEventListener('click', handleLoadMoreClick);
