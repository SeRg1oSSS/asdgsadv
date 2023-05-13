let offset4 = 0; // смещение от левого края
const sliderLine4 = document.querySelector('.slider-line4');

document.querySelector('.slider-next4').addEventListener('click', function(){
	offset4 = offset4 + 300;
	if(offset4>900){
		offset4=0;
	}
	sliderLine4.style.left = -offset4 + 'px';
});
	document.querySelector('.slider-prev4').addEventListener('click', function(){
		offset4 = offset4 - 300;
		if(offset4<0){
			offset4=900;
		}
		sliderLine4.style.left = -offset4 + 'px';
});