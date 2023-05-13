let offset2 = 0; // смещение от левого края
const sliderLine2 = document.querySelector('.slider-line2');

document.querySelector('.slider-next2').addEventListener('click', function(){
	offset2 = offset2 + 300;
	if(offset2>900){
		offset2=0;
	}
	sliderLine2.style.left = -offset2 + 'px';
});
	document.querySelector('.slider-prev2').addEventListener('click', function(){
		offset2 = offset2 - 300;
		if(offset2<0){
			offset2=900;
		}
		sliderLine2.style.left = -offset2 + 'px';
});