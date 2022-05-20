{
const rootElem = document.querySelector('#companyBlocks'); 


function renderCompany() {

	const collection = rootElem.children;
	console.log(collection);
	console.log(collection.length);
	for (let i = 0; i < collection.length; i++) {
	  collection[i].addEventListener("mouseover", (event) => {
	  	event.target.classList.add('activeA');
	  });
	  collection[i].addEventListener("mouseout", (event) => {
	  	event.target.classList.remove('activeA');
	});
	}
}

let currentElem = null;

rootElem.onmouseover = function(event) {
  if (currentElem) return;

  let target = event.target.closest('.companyInfo');
  console.log(target);
  if (!target) return;

  if (!rootElem.contains(target)) return;

  currentElem = target;
  target.style.background = '#005FA3';

  const liList = [...event.target.children];
    liList.forEach(t => {
  	t.style.color = 'white';
		if (t.children.length > 0){
			const liListCh = [...t.children];
			liListCh.forEach(ch => {
				ch.style.color = 'white';
				if (ch.children.length > 0){
					const liListCh2 = [...ch.children];
					liListCh2.forEach(ch2 => {ch2.style.color = 'white';})
		}})}});

};


rootElem.onmouseout = function(event) {
  if (!currentElem) return;

    let relatedTarget = event.relatedTarget;

  while (relatedTarget) {
    if (relatedTarget == currentElem) return;

    relatedTarget = relatedTarget.parentNode;
  }

  currentElem.style.background = '';
  const liList = [...event.target.children];
  liList.forEach(t => {
  	t.style.color = '';
		if (t.children.length > 0){
			const liListCh = [...t.children];
			liListCh.forEach(ch => {
				ch.style.color = '';
				if (ch.children.length > 0){
					const liListCh2 = [...ch.children];
					liListCh2.forEach(ch2 => {ch2.style.color = '';})
		}})}});
  currentElem = null;
};

renderCompany();

}