const btns = document.querySelectorAll('.btn-cert');

const overlay = document.createElement('div');
overlay.classList.add('img-overlay');

const overlayImg = document.createElement('img');
overlay.appendChild(overlayImg);

document.body.appendChild(overlay);

btns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();

    const cert = btn.closest('.cert-content');
    const img = cert.querySelector('img');

    overlayImg.src = img.src;
    overlay.classList.add('show');
		document.body.classList.add('no-scroll');
  });
});

overlay.addEventListener('click', () => {
  overlay.classList.remove('show');
	document.body.classList.remove('no-scroll');
});


// navbar
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
	if (window.scrollY > 10) {
		navbar.classList.add('navBackground');
	} else {
		navbar.classList.remove('navBackground');
	}
});