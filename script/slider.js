{
const sliderRootElem = document.querySelector("#main");
const imgList = [
	{name : 'Бухгалтерские услуги в Санкт-Петербурге', img: '1.jpeg', show: 'yandex.ru'}, 
	{name : 'Бухгалтерские услуги в Москве', img: '2.jpeg', show: '#'},
	{name : 'Бухгалтерские услуги в Самаре', img: '3.jpeg', show: '#'},
	{name : 'Бухгалтерские услуги в Новосибирске', img: '4.jpeg', show: '#'}
	];
const mediaPath = 'media/slider/';
let imgIndexS = 0;

const sliderContainer = document.createElement('div');
const sliderMain = document.createElement('div');
const sliderInfo = document.createElement('div');
const sliderH1= document.createElement('h1');
const sliderBtn = document.createElement('div');
const sliderBtnUrl = document.createElement('a');
const sliderTrigger = document.createElement('div');
const sliderRadio = document.createElement('div');

const sliderTriggerLeft = document.createElement('div');
const sliderTriggerRight = document.createElement('div');

sliderTriggerLeft.innerHTML = '<i class="fas fa-angle-left"></i>';
sliderTriggerRight.innerHTML = '<i class="fas fa-angle-right"></i>';
sliderBtnUrl.innerText = 'Наша презентация';

sliderContainer.classList.add('sliderContainer');
sliderMain.classList.add('sliderMain');
sliderInfo.classList.add('sliderInfo');
sliderBtn.classList.add('btn');
sliderTrigger.classList.add('sliderTrigger');
sliderRadio.classList.add('sliderFootter');

sliderTrigger.append(sliderTriggerLeft, sliderTriggerRight);
sliderBtn.append(sliderBtnUrl);
sliderInfo.append(sliderH1, sliderBtn);
sliderMain.append(sliderInfo);
sliderContainer.append(sliderMain, sliderRadio);
sliderRootElem.append(sliderContainer);

const render = ()=>{
	sliderContainer.style.background = `linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), center / cover no-repeat url('${mediaPath+imgList[imgIndexS].img}')`;
	sliderH1.innerText = imgList[imgIndexS].name;
	sliderBtnUrl.href = imgList[imgIndexS].show;
	const liList = document.querySelectorAll('.sliderContainer .sliderPoints li');
	
	liList.forEach(t=>t.classList.remove('active'));
	liList[imgIndexS].classList.add('active');
}

sliderTriggerLeft.addEventListener('click', ()=>{
	if (imgIndexS > 0){
		imgIndexS--;
	}else{
		imgIndexS = imgList.length - 1;
	}
	render()
});

sliderTriggerRight.addEventListener('click', ()=>{
	if (imgList.length - 1 > imgIndexS){
		imgIndexS++;
	}else{
		imgIndexS = 0;
	}
	render()
});

const ulElem = document.createElement('ul');
ulElem.classList.add('sliderPoints');

ulElem.append(...imgList.map((_, index)=>{
	const elem = document.createElement('li');
	elem.addEventListener('click', event=>{
		const liElem = event.target;
		const liList = [...liElem.parentNode.children];
		imgIndex = liList.indexOf(liElem);
		render();
	})
	return elem
}));

sliderRadio.append(ulElem, sliderTrigger);

render()


}