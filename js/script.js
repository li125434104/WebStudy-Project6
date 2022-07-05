const boxes = document.querySelectorAll('.box')
window.addEventListener('scroll', ()=> {
	const scrollBottom = window.innerHeight / 5 * 4
	boxes.forEach(box => {
		let boxTop = box.getBoundingClientRect().top
		if (boxTop < scrollBottom) {
			box.classList.add('show')
		} else {
			box.classList.remove('show')
		}
	})
})