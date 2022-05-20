{
	const servicesRootElem = document.querySelector('#servicesRoot');
	const listServices = [
	{name : 'Бухгалтерское обслуживание', img: 'block.jpeg', show: '#'}, 
	{name : 'Бухгалтерское обслуживание', img: 'block.jpeg', show: '#'},
	{name : 'Бухгалтерское обслуживание', img: 'block.jpeg', show: '#'}, 
	{name : 'Бухгалтерское обслуживание', img: 'block.jpeg', show: '#'},
	{name : 'Бухгалтерское обслуживание', img: 'block.jpeg', show: '#'},
	{name : 'Бухгалтерское обслуживание', img: 'block.jpeg', show: '#'}
	];
	
	function renderService (){
		servicesRootElem.append(...listServices.map((e) => {
			const elemServiceBlock = document.createElement('div');
			const elemNameBlock = document.createElement('div');
			const elemNameUrl = document.createElement('a');

			elemServiceBlock.classList.add('serviceBlock');
			elemNameBlock.classList.add('textBlock');

			elemNameUrl.href = e.show;
			elemNameUrl.innerText = e.name;

			elemNameBlock.appendChild(elemNameUrl);
			elemServiceBlock.appendChild(elemNameBlock);
			return elemServiceBlock;
		})	
		)
	}
	
renderService()	
}
	