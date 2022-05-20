const formElem = document.forms[0];
const btnFormElem = document.querySelector('#btnForm');
const burgerElem = document.querySelector('#burgerMenu');
const menuElem = document.querySelector(".menu");

const readStorage = () => JSON.parse(localStorage.getItem('feedBackOneBuh')) || [];
const writeStorage = data => localStorage.setItem('feedBackOneBuh', JSON.stringify([...readStorage(), data]));

function renderBurger() {
	const menuLiElem = document.querySelectorAll(".menu li");
	const divELem = document.createElement('div');
	divELem.classList.add('drDown');

	const ulELem = document.createElement('ul');
	menuLiElem.forEach((e)=>{
		const liELem = document.createElement('li');
		liELem.innerHTML = e.innerHTML;
		ulELem.append(liELem);
	})
	divELem.append(ulELem);
	burgerElem.append(divELem);

}

renderBurger();

burgerElem.addEventListener('click', event =>{
	const menuUlElem = burgerElem.querySelector("ul");
	const childBurger = burgerElem.children[0];
	if (childBurger.classList.contains('fa-bars')){
		childBurger.classList.toggle("fa-times");
		menuUlElem.classList.add('show');	
	}else if (childBurger.classList.contains('fa-times')) {
		childBurger.classList.toggle("fa-bars");
		menuUlElem.classList.remove('show');
	}
})






/*window.addEventListener('mouseup', function(e) {
    const menuUlElem = burgerElem.querySelector("ul");
    if (event.target != burgerElem.children[0] && event.target != burgerElem.children[0][0] &&
    	event.target != burgerElem.querySelector("li") && event.target != burgerElem.querySelector("a")) {
		if (burgerElem.children[0].classList.contains('fa-times')) {
			menuUlElem.classList.remove('show');
			burgerElem.children[0].classList.toggle("fa-bars");
			
			console.log('out0')
			console.log(menuUlElem);
    	}
    	console.log('out')
    }
});*/

formElem.addEventListener('submit', event => {
	event.preventDefault();
	console.log(event);
	const inputElem = formElem.querySelectorAll('input');
	const userName = inputElem[0].value;
	const userSername = inputElem[1].value;
	const areaElem = formElem.querySelectorAll('textarea');
	const userText = areaElem[0].value;
	writeStorage({userName, userSername, userText});

	inputElem[0].value = '';
	inputElem[1].value = '';
	areaElem[0].value = '';
	swal("Готово", "Ваше сообщение успешно отправлено!", "success");
})

btnFormElem.addEventListener('click', event => {
	const inputElem = formElem.querySelectorAll('input');
	const userName = inputElem[0].value;
	const userSername = inputElem[1].value;
	const areaElem = formElem.querySelectorAll('textarea');
	const userText = areaElem[0].value;
	writeStorage({userName, userSername, userText});

	inputElem[0].value = '';
	inputElem[1].value = '';
	areaElem[0].value = '';
	swal("Готово", "Ваше сообщение успешно отправлено!", "success");
})


