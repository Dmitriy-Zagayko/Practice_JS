const gallery = document.getElementById('gallery');
const bigPicture = document.getElementById('bigPicture');
const btnStartSlideShow = document.getElementById('btnStartSlideShow');
const btnStopSlideShow = document.getElementById('btnStopSlideShow');
const smallPicture = document.getElementsByClassName('small_picture');
gallery.addEventListener('click', changeBigPicture);
btnStartSlideShow.addEventListener('click', startSlideShow);
btnStopSlideShow.addEventListener('click', stopSlideShow);
let interval;
let counter = 0;

function show(el) {
	el.classList.remove('hide');
};
function hide(el) {
	el.classList.add('hide');
};
function changeBigPicture(event) {
	if (event.target.className === 'small_picture') {
		bigPicture.src = event.target.src;
	}
};
function startSlideShow() {
	hide(btnStartSlideShow);
	hide(gallery);
	show(btnStopSlideShow);
	bigPicture.classList.add('after_start');
	interval = setInterval(slideShow, 1500);
};
function slideShow() {
	if (counter === smallPicture.length) {
		counter = 0;
	}
	bigPicture.src = smallPicture[counter].src;
	counter++;
};
function stopSlideShow() {
	show(btnStartSlideShow);
	show(gallery);
	hide(btnStopSlideShow);
	bigPicture.classList.remove('after_start');
	clearInterval(interval);
};
