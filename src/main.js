import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { imagesTemplate, imageTemplate } from './js/render-functions';
import { getImages } from './js/pixabay-api';

const formElem = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.lds-roller');

const lightBox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

formElem.addEventListener('submit', e => {
  e.preventDefault();
  gallery.innerHTML = '';
  const image = e.target.elements.input.value.trim();
  if (image === '') {
    iziToast.error({
      position: 'topRight',
      maxWidth: '360px',
      theme: 'dark',
      messageColor: 'white',
      iconUrl: '../img/error.svg',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
    });
    return;
  }
  showLoader();
  getImages(image)
    .then(data => {
      const markup = imagesTemplate(data.hits);
      gallery.innerHTML = markup;
      lightBox.refresh();
    })
    .catch(err => console.log(err))
    .finally(() => {
      hideLoader();
    });
  formElem.reset();
});

// ====================================================
function showLoader() {
  loader.classList.remove('hidden');
}

function hideLoader() {
  loader.classList.add('hidden');
}
