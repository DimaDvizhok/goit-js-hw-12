import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImagesByQuery, PER_PAGE } from './js/pixabay-api';
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
    if (totalHits > PER_PAGE) {
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
    const { hits } = await getImagesByQuery(query, page);
    createGallery(hits);

    const galleryItemElem = document.querySelector('.gallery-item');
    if (galleryItemElem) {
      const { height } = galleryItemElem.getBoundingClientRect();
      window.scrollBy({
        top: height * 2,
        behavior: 'smooth',
      });
    }

    const totalPages = Math.ceil(totalHits / PER_PAGE);
    if (page >= totalPages) {
      hideLoadMoreButton();
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'bottomRight',
        timeout: 3000,
      });
    } else {
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
