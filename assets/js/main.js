const changelogBtn = document.querySelector('.changelog__btn')
const changelogList = document.querySelector('.changelog__content')
const body = document.querySelector('body')

changelogBtn.addEventListener('click', (e) => {
  changelogBtn.classList.toggle('active')

})

$('.changelog__btn').on('click', function () {
  $(this).toggleClass('-active');
  $('.changelog__content').stop(true, true).toggle(500);
});