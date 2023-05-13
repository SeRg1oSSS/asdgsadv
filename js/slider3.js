let offset3 = 0; // смещение от левого края
const sliderLine3 = document.querySelector('.slider-line3');

document.querySelector('.slider-next3').addEventListener('click', function(){
	offset3 = offset3 + 300;
	if(offset3>600){
		offset3=0;
	}
	sliderLine3.style.left = -offset3 + 'px';
});
	document.querySelector('.slider-prev3').addEventListener('click', function(){
		offset3 = offset3 - 300;
		if(offset3<0){
			offset3=600;
		}
		sliderLine3.style.left = -offset3 + 'px';
});