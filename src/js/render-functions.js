import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');
const loaderElem = document.querySelector('.loader');
export const loadMoreElem = document.querySelector('.js-button');

let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export const createGallery = images => {
  if (!galleryContainer) {
    return;
  }
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `<li class="gallery-item">
  <a class="gallery-link" href="${largeImageURL}">
    <img
      class="gallery-image"
      src="${webformatURL}"
      alt="${tags}"
    />
  </a>
  <div class = "image-info-block">
    <div class = "image-info-block-part">
      <p class="bold">Likes</p>
      <p>${likes}</p>
  </div>
    <div class = "image-info-block-part">
    <p class="bold">Views</p>
    <p>${views}</p>
  </div>
  <div class = "image-info-block-part">
    <p class="bold">Comments</p>
    <p>${comments}</p>
  </div>
  <div class = "image-info-block-part">
    <p class="bold">Downloads</p>
    <p>${downloads}</p>
  </div>
</div>
</li>`
    )
    .join('');

  galleryContainer.insertAdjacentHTML('beforeend', markup);
  gallery?.refresh?.();
};

export const clearGallery = () => {
  if (galleryContainer) {
    galleryContainer.innerHTML = '';
  }
};

export const showLoader = () => {
  loaderElem?.classList.remove('is-hidden');
};

export const hideLoader = () => {
  loaderElem?.classList.add('is-hidden');
};

export const showLoadMoreButton = () => {
  loadMoreElem?.classList.remove('is-hidden');
};

export const hideLoadMoreButton = () => {
  loadMoreElem?.classList.add('is-hidden');
};
