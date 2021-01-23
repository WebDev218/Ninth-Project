const projectGrid = document.querySelector('#project-grid');
const projects = document.querySelectorAll('.project');
const descriptionsFull = document.querySelectorAll('.project-description.full');

const imageLinks = [
	"https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
	"https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
	"https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
	"https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg"
];

function changeDescriptions() {
	// for (let i = 0; i<descriptionsFull.length; i++) {
	// 	descriptionsFull[i].style.display = 'none';
	// }

}




function createProjects() {
	for (let project of projects) {
		const languages = project.querySelector('.languages > ul');
		if (languages) {
			for (let li of languages.children) {			
				if (li.textContent === 'HTML') {
					li.appendChild(generateElement('img', [['src', imageLinks[0]], ['alt', 'HTML 5 Logo']], ['language-icon']));
				} 
				if (li.textContent === 'CSS') {
					li.appendChild(generateElement('img', [['src', imageLinks[1]], ['alt', 'CSS 3 Logo']], ['language-icon']));
				} 
				if (li.textContent === 'JavaScript') {
					li.appendChild(generateElement('img', [['src', imageLinks[2]], ['alt', 'JavaScript Logo']], ['language-icon']));
				}
				if (li.textContent === 'SASS') {
					li.appendChild(generateElement('img', [['src', imageLinks[3]], ['alt', 'SASS Logo']], ['language-icon']));
				} 
			}
		}


		const projLink = project.querySelector('.project-link');
		console.log(projLink)
		let projId = project.id;
		let imageSm = `img/projects/project${projId}-sm.png`;
		let img = generateElement('img', [['src', imageSm], ['alt', `Preview of project ${project.id}.`]], ['proj-img', 'sm']);
		projLink.appendChild(img);

		project.addEventListener('click', (e) => {
			openModalHere(project);
		});		
	}
}


function generateElement(type, attr=[], classList=[]) {
	let newElement = document.createElement(type);
	if (attr) {
		attr.forEach((attribute) => {
			// [0]=attribute [1]=value
			newElement.setAttribute(attribute[0], attribute[1]);
		});
		// newElement.setAttribute(attr, value);
	}
	if (classList) {
		classList.forEach((className) => {
			newElement.classList.add(className);
		});		
	}
	return newElement;
}



function openModalHere(proj) {

}


createProjects();
populateSearch()
changeDescriptions();