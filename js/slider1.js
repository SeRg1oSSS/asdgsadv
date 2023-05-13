let offset1 = 0; // смещение от левого края
const sliderLine = document.querySelector('.slider-line1');

document.querySelector('.slider-next1').addEventListener('click', function(){
	offset1 = offset1 + 300;
	if(offset1>900){
		offset1=0;
	}
	sliderLine.style.left = -offset1 + 'px';
});
	document.querySelector('.slider-prev1').addEventListener('click', function(){
		offset1 = offset1 - 300;
		if(offset1<0){
			offset1=900;
		}
		sliderLine.style.left = -offset1 + 'px';
});