// elhoverlaywrapper
let elhOverlayWrapper = document.getElementById('overlayWrapper');

// let elhOverlay
let elhOverlay = document.createElement('div');
elhOverlay.setAttribute('class', 'overlay');

// let elhOverlayArt
let elhOverlayArt = document.createElement('div');
elhOverlayArt.setAttribute('id', 'overlayArt');

// let close
let elhClose = document.createElement('button');
elhClose.innerHTML = 'X';
elhClose.setAttribute('id','close');
elhClose.setAttribute('title','close');

// let p
let elhPOverlay = document.createElement('p');
elhPOverlay.innerHTML='test';

// elhArtHTML
let elhArtHTML = document.getElementById('artHTML');
let elhArtCSS = document.getElementById('artCSS');
let elhArtJS = document.getElementById('artJS');

elhArtHTML.addEventListener('click',function(){
	elhOverlayWrapper.appendChild(elhOverlay);
	elhOverlay.appendChild(elhOverlayArt);
	elhOverlayArt.appendChild(elhClose);
	elhOverlayArt.appendChild(elhPOverlay);
	elhPOverlay.innerHTML='Hypertext Markup Language adalah bahasa markah standar untuk dokumen yang dirancang untuk ditampilkan di peramban internet. Ini dapat dibantu oleh teknologi seperti Cascading Style Sheets dan bahasa scripting seperti JavaScript dan VBScript.';

	elhOverlayWrapper.setAttribute('class','overlayWrapper');

	elhClose.addEventListener('click',function(){
		elhOverlayWrapper.setAttribute('class','overlayWrapperHidden');
	});
});

elhArtCSS.addEventListener('click',function(){
	elhOverlayWrapper.appendChild(elhOverlay);
	elhOverlay.appendChild(elhOverlayArt);
	elhOverlayArt.appendChild(elhClose);
	elhOverlayArt.appendChild(elhPOverlay);
	elhPOverlay.innerHTML='Cascading Style Sheet merupakan aturan untuk mengatur beberapa komponen dalam sebuah web sehingga akan lebih terstruktur dan seragam. CSS bukan merupakan bahasa pemograman.';

	elhOverlayWrapper.setAttribute('class','overlayWrapper');

	elhClose.addEventListener('click',function(){
		elhOverlayWrapper.setAttribute('class','overlayWrapperHidden');
	});
});

elhArtJS.addEventListener('click',function(){
	elhOverlayWrapper.appendChild(elhOverlay);
	elhOverlay.appendChild(elhOverlayArt);
	elhOverlayArt.appendChild(elhClose);
	elhOverlayArt.appendChild(elhPOverlay);
	elhPOverlay.innerHTML='JavaScript adalah bahasa pemrograman tingkat tinggi dan dinamis. JavaScript populer di internet dan dapat bekerja di sebagian besar penjelajah web populer seperti Google Chrome, Internet Explorer, Mozilla Firefox, Netscape dan Opera. Kode JavaScript dapat disisipkan dalam halaman web menggunakan tag SCRIPT.';

	elhOverlayWrapper.setAttribute('class','overlayWrapper');

	elhClose.addEventListener('click',function(){
		elhOverlayWrapper.setAttribute('class','overlayWrapperHidden');
	});
});











