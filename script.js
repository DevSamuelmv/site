let currentSlide = 0;
let currentSlide1 = 0;

const slides = document.querySelectorAll('.bannerRotativo .slide');
const slides1 = document.querySelectorAll('.bannerRotativo1 .slide');

function showSlide(index, slides) {
	slides.forEach((slide, i) => {
		if (i === index) {
			slide.classList.add('active');
		} else {
			slide.classList.remove('active');
		}
	});
}

function nextSlide(slides, currentSlide) {
	currentSlide = (currentSlide + 1) % slides.length;
	showSlide(currentSlide, slides);
	return currentSlide;
}

function nextSlide1(slides, currentSlide) {
	currentSlide = (currentSlide + 1) % slides.length;
	showSlide(currentSlide, slides);
	return currentSlide;
}

// Show the first slide initially
showSlide(currentSlide, slides);
showSlide(currentSlide1, slides1);

// Automatically switch to the next slide every 5 seconds
setInterval(() => {
	currentSlide = nextSlide(slides, currentSlide);
}, 4000);

setInterval(() => {
	currentSlide1 = nextSlide1(slides1, currentSlide1);
}, 5000);



// Função para o link de segmento dos cartões ir para o segmento correspondente do menu suspenso   
document.addEventListener("DOMContentLoaded", function () {
	var linksSegmento = document.querySelectorAll(".Segmento");
	linksSegmento.forEach(function (link) {
		link.addEventListener("click", function (event) {
			event.preventDefault();
			var segmento = link.getAttribute("data-segmento");
			document.getElementById("segmento").value = segmento;
			buscarLojasPorSegmento(segmento);
		});
	});
});


function buscarLojasPorNome(nome) {
	// Remove espaços em branco extras e converte para letras minúsculas para facilitar a comparação
	nome = nome.trim().toLowerCase();

	// Seleciona todos os cartões de loja
	var cartoes = document.querySelectorAll('.cartao');

	// Itera sobre cada cartão de loja
	cartoes.forEach(function (cartao) {
		// Obtém o nome da loja dentro do cartão atual
		var nomeLoja = cartao.querySelector('.nome').textContent.toLowerCase();

		// Verifica se o nome da loja contém o texto de busca
		if (nomeLoja.includes(nome)) {
			// Se contiver, exibe o cartão
			cartao.style.display = 'block';
		} else {
			// Caso contrário, oculta o cartão
			cartao.style.display = 'none';
		}
	});
}



// Função para buscar as lojas por segmento
function buscarLojasPorSegmento(segmento) {
	var cartoes = document.querySelectorAll(".cartao");
	cartoes.forEach(function (cartao) {
		if (segmento === "todos" || cartao.classList.contains(segmento)) {
			cartao.parentElement.style.justifyContent = "flex-start";
			cartao.style.display = "block";
		} else {
			cartao.style.display = "none";
		}
	});
}

// Função para buscar as lojas por letra do nome
function buscarLojasPorLetra(letra) {
	var cartoes = document.querySelectorAll(".cartao");
	cartoes.forEach(function (cartao) {
		var nomeLoja = cartao.querySelector(".nome").innerText;
		if (nomeLoja.charAt(0).toUpperCase() === letra) {
			cartao.parentElement.style.justifyContent = "flex-start";
			cartao.style.display = "block";
		} else {
			cartao.style.display = "none";
		}
	});
}