{
const responseRootElem = document.querySelector('#responseRoot');
const responseList = [
{
	text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. ',
	photo: 'response.png',
	name: 'Екатерина Иванова',
	work: 'Директор ООО “Раз-два”'
},
{
	text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. ',
	photo: 'scrudge.jpeg',
	name: 'Екатерина Иванова',
	work: 'Директор ООО “Раз-два”'
},
{
	text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. ',
	photo: 'response.png',
	name: 'Екатерина Иванова',
	work: 'Директор ООО “Раз-два”'
},
{
	text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. ',
	photo: 'DuckTales.jpeg',
	name: 'Екатерина Иванова',
	work: 'Директор ООО “Раз-два”'
}
];

const mediaPath = 'media/response/';
let imgIndexR = 0;

const sliderContainer = document.createElement('div');
const sliderMain = document.createElement('div');
const slideContent = document.createElement('div');
const slideContentText = document.createElement('div');
const sliderPhotoSign = document.createElement('div');
const sliderPhoto = document.createElement('div');
const sliderSign = document.createElement('div');
const sliderSignName = document.createElement('div');
const sliderSignWork = document.createElement('div');

const sliderTrigger = document.createElement('div');
const sliderRadio = document.createElement('div');

const sliderTriggerLeft = document.createElement('div');
const sliderTriggerRight = document.createElement('div');

sliderTriggerLeft.innerHTML = '<i class="fas fa-angle-left"></i>';
sliderTriggerRight.innerHTML = '<i class="fas fa-angle-right"></i>';

sliderContainer.classList.add('responseContainer');
slideContent.classList.add('responeContent');
sliderPhoto.classList.add('responsePhoto');
sliderPhotoSign.classList.add('responsePhotoSign');
sliderSign.classList.add('responseSign');
sliderSignName.classList.add('sliderSignName');
sliderSignWork.classList.add('sliderSignWork');
sliderMain.classList.add('responseMain');
sliderTrigger.classList.add('sliderTrigger');
sliderRadio.classList.add('sliderFootter');

sliderSign.append(sliderSignName, sliderSignWork);
sliderPhotoSign.append(sliderPhoto, sliderSign);
slideContent.append(slideContentText, sliderPhotoSign);
sliderMain.append(slideContent);

sliderTrigger.append(sliderTriggerLeft, sliderTriggerRight);
sliderContainer.append(sliderMain, sliderRadio);
responseRootElem.append(sliderContainer);



const render = ()=>{
	sliderPhoto.style.backgroundImage = `url('${mediaPath+responseList[imgIndexR].photo}')`;
	slideContentText.innerText = responseList[imgIndexR].text;
	sliderSignName.innerText = responseList[imgIndexR].name;
	sliderSignWork.innerText = responseList[imgIndexR].work;
	
	const liList = document.querySelectorAll('#responseRoot .sliderPoints li');
	
	liList.forEach(t=>t.classList.remove('active'));
	liList[imgIndexR].classList.add('active');
}

sliderTriggerLeft.addEventListener('click', ()=>{
	if (imgIndexR > 0){
		imgIndexR--;
	}else{
		imgIndexR = responseList.length - 1;
	}
	render()
});

sliderTriggerRight.addEventListener('click', ()=>{
	if (responseList.length - 1 > imgIndexR){
		imgIndexR++;
	}else{
		imgIndexR = 0;
	}
	render()
});

const ulElem = document.createElement('ul');
ulElem.classList.add('sliderPoints');

ulElem.append(...responseList.map((_, index)=>{
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