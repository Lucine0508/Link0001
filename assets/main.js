window.arenaCallback = () => {
	// Put your JavaScript in here!
	// This will run after Are.na’s API returns your data.
	let imageblocks = document.querySelectorAll('li.image-block')
	
	imageblocks.forEach((block)=> {
		block.onclick = () =>{
			block.classList.add('active')
		}
	})

	block.querySelector('aside').onclick = () =>{
		block.classList.remove('active')
	}
	
}