import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

const formElem = document.querySelector('.form');

const onFormElemSubmit = event => {
  event.preventDefault();
  const form = event.currentTarget;
  const formValue = form.elements['search-text']?.value.trim();
  if (!formValue) {
    iziToast.error({
      title: 'Помилка',
      message: 'Заповніть поле пошуку!',
      position: 'topRight',
      timeout: 3000,
    });
    return;
  }

  clearGallery();
  showLoader();

  getImagesByQuery(formValue)
    .then(hits => {
      if (hits.length > 0) {
        createGallery(hits);
      } else {
        iziToast.error({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          timeout: 3000,
        });
      }
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: error.message,
        position: 'topRight',
        timeout: 3000,
      });
    })
    .finally(() => {
      form.reset();
      hideLoader();
    });
};

formElem?.addEventListener('submit', onFormElemSubmit);
