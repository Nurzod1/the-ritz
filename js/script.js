// // Show Modal

const modal = document.querySelector('#modal')
const openModal = document.querySelector('#showModal')
const closeModal = document.querySelector('#closeModal')

openModal.addEventListener('click', () => {
  modal.classList.add('active')
})

closeModal.addEventListener('click', () => {
  modal.classList.remove('active')
})

// Show Photosphere

const photosphere = document.querySelector('#photosphere')
const openPhotosphere = document.querySelector('#showPhotosphere')
const closePhotosphere = document.querySelector('#closePhotosphere')

openPhotosphere.addEventListener('click', () => {
  photosphere.classList.add('active')
})

closePhotosphere.addEventListener('click', () => {
  photosphere.classList.remove('active')
})

// // Open popup-page
  
// const openPopup = document.querySelector('#project-popup')

// openPopup.addEventListener('click', () => {
//   window.location.href = 'http://127.0.0.1:5500/popup.html'
// })



//

