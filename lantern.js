const lantern = document.querySelector('.lantern');
const lamps = lantern.querySelector('.lamps');
 	
 	function clearClass() {
 		for(let i = 0; i < lantern.children.length; i++) {
 			lantern.children[i].classList.remove('active');
 		};
 	};

 	function addClass() {
 		lantern.addEventListener('click', function(event){
 			clearClass();
 			event.target.classList.add('active');
 			// let nameOfClass = event.target.classList;
 			// console.log(nameOfClass);
 		});
 	};

 addClass();

 	

 	

 	
