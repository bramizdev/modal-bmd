'use strict';

const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const toggle = document.querySelector('.toggle');
const closeBtn = document.querySelector('.close-btn');

const openModal = () => {
  overlay.classList.remove('hidden');
  modal.classList.remove('hidden');
};

const closeModal = () => {
  overlay.classList.add('hidden');
  modal.classList.add('hidden');
};

toggle.addEventListener('click', openModal);

overlay.addEventListener('click', closeModal);

closeBtn.addEventListener('click', closeModal);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !overlay.classList.contains('hidden')) {
    closeModal();
  }
});
