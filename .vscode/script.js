// função para trocar de modo
function togglemode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // Chama a função que verifica e troca a imagem após a classe ter sido alterada
  setProfileImage()
}

// função para mudar a imagem
function setProfileImage() {
  const html = document.documentElement
  const img = document.querySelector("#profile img")

  // Verifica se a classe 'light' está presente
  if (html.classList.contains("light")) {
    // Se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/aFlyingCat.jpg")
    img.setAttribute("alt", "um gato voador")
  } else {
    // Se não tiver (dark mode), manter a imagem normal
    img.setAttribute("src", "./assets/gatoEspacial.jpg")
    img.setAttribute(
      "alt",
      "um gato espacial em cima de um tubarão detalhe extremamente radical"
    )
  }
}
// Isso garantirá que a imagem seja ajustada logo no carregamento
// verificando a classe inicial do HTML (que é "light").
setProfileImage()
