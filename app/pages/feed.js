const url = 'https://google-images4.p.rapidapi.com/getGoogleImages?query=art&count=15';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '6b4c9442damshdcf123ab9ebadbbp1594e2jsne1a45e5d8c06',
		'x-rapidapi-host': 'google-images4.p.rapidapi.com'
	}
};

async function fetchAndDisplayImages() {
	try {
		const response = await fetch(url, options);
		const result = await response.json(); // Parsear o JSON da resposta
		console.log(result); // Verificar a estrutura da resposta

		// Selecionar o array de imagens na resposta
		const images = result.images;

		// Selecionar o elemento onde as imagens serão exibidas
		const imageContainer = document.getElementById('image-container');

		// Limpar qualquer conteúdo existente
		imageContainer.innerHTML = '';

		// Verificar se images é um array e tem URLs válidas
		if (Array.isArray(images) && images.length > 0) {
			// Criar e adicionar elementos de imagem ao container
			images.forEach(imageObj => {
				const img = document.createElement('img');
				img.src = imageObj.url; // Usar a URL da imagem
				img.alt = 'Google Image'; // Defina o texto alternativo conforme necessário
				img.style.width = '400px'; // Defina o tamanho conforme necessário
				img.style.height = '350px'; // Defina o tamanho conforme necessário
				imageContainer.appendChild(img);
			});
		} else {
			console.error('No images found in the response');
		}
	} catch (error) {
		console.error('Error fetching images:', error);
	}
}

// Chamar a função para buscar e exibir as imagens
fetchAndDisplayImages();


document.addEventListener('DOMContentLoaded', function() {
  const logOut = document.querySelector('#logout');
  logOut.addEventListener('click', function logout() {
    if (confirm("Deseja mesmo sair?")) {
      window.location.href = '../index.html';
      }
  });
})