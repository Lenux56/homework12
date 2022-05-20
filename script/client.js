{
const sliderRootElem = document.querySelector("#clientsRoot");
const imgListC = [['microsoft.png', 'microsoft.png', 'microsoft.png', 'microsoft.png'],
	['microsoft.png', 'ikonka.jpeg', 'microsoft.png', 'microsoft.png'],
	['microsoft.png', 'microsoft.png', 'microsoft.png', 'microsoft.png'],
	['microsoft.png', 'microsoft.png', 'microsoft.png', 'microsoft.png']
	];
const mediaPath = 'media/clients/';
let imgIndexC = 0;

const mediaQuery = window.matchMedia('(max-width: 750px)');
function handleTabletChange(e) {
	const divListElem = document.querySelectorAll('.sliderClientMain div');
	  if (e.matches) {
	    divListElem.forEach((t, index) => {
			//t.style.background = `center / contain no-repeat url('${mediaPath+imgListC[imgIndexC][index]}')`;
			t.style.width = `0`;
			t.style.height = `0`;
			console.log('in');
		});
			divListElem[0].style.background = `center / contain no-repeat url('${mediaPath+imgListC[imgIndexC][0]}')`;
			divListElem[0].style.width = `480px`;
			divListElem[0].style.height = `190px`;
	 }
	 else{
	 	divListElem.forEach((t, index) => {
			t.style.background = `center / contain no-repeat url('${mediaPath+imgListC[imgIndexC][index]}')`;
			t.style.width = `250px`;
			t.style.height = `80px`;
		});
	 }
}

const sliderContainer = document.createElement('div');
const sliderMain = document.createElement('div');

const sliderTrigger = document.createElement('div');
const sliderRadio = document.createElement('div');

const sliderTriggerLeft = document.createElement('div');
const sliderTriggerRight = document.createElement('div');

sliderTriggerLeft.innerHTML = '<i class="fas fa-angle-left"></i>';
sliderTriggerRight.innerHTML = '<i class="fas fa-angle-right"></i>';

sliderContainer.classList.add('sliderClientContainer');
sliderMain.classList.add('sliderClientMain');
sliderTrigger.classList.add('sliderTrigger');
sliderRadio.classList.add('sliderFootter');


sliderMain.append(...imgListC[0].map((_, indexIn)=>{
		const slideDiv = document.createElement('div');
		return slideDiv
	}));

sliderTrigger.append(sliderTriggerLeft, sliderTriggerRight);
sliderContainer.append(sliderMain, sliderRadio);
sliderRootElem.append(sliderContainer);

mediaQuery.addListener(handleTabletChange);
handleTabletChange(mediaQuery);

const render = ()=>{
	const divListElem = document.querySelectorAll('.sliderClientMain div');
	handleTabletChange(mediaQuery);
	const liList = document.querySelectorAll('#clientsRoot .sliderPoints li');
	
	liList.forEach(t=>t.classList.remove('active'));
	liList[imgIndexC].classList.add('active');
}

sliderTriggerLeft.addEventListener('click', ()=>{
	if (imgIndexC > 0){
		imgIndexC--;
	}else{
		imgIndexC = imgListC.length - 1;
	}
	render()
});

sliderTriggerRight.addEventListener('click', ()=>{
	if (imgListC.length - 1 > imgIndexC){
		imgIndexC++;
	}else{
		imgIndexC = 0;
	}
	render()
});

const ulElem = document.createElement('ul');
ulElem.classList.add('sliderPoints');

ulElem.append(...imgListC.map((_, index)=>{
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
handleTabletChange(mediaQuery);
render()

}