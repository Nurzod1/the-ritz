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

// // Open popup-page
  
// const openPopup = document.querySelector('#project-popup')

// openPopup.addEventListener('click', () => {
//   window.location.href = 'http://127.0.0.1:5500/popup.html'
// })



//

