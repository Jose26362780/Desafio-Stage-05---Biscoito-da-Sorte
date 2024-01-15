//Screen
const screen1 = document.querySelector(".container")
const screen2 = document.querySelector(".container2")

//Buttons
const cookie = document.querySelector(".cookie-luck")
const button = document.querySelector(".button-open-cookie")

//Events
cookie.addEventListener("click", luckToday)
button.addEventListener("click", openAgainCookie)
document.addEventListener("keypress", screenByEnter)

//Logic
let textLuck = document.querySelector(".text-luck p")
const arrayMessage = [
  "Acredite nos seus sonhos, eles foram dados a você por um motivo.",
  "A criatividade é a inteligência se divertindo. Solte a sua!",
  "A felicidade está no agora, não espere por amanhã.",
  "Cada dia é uma nova página em sua história. Escreva uma boa.",
  "A maior de todas as torres começa no solo.",
  "Cada dia é uma oportunidade para se reinventar e buscar a versão melhor de si mesmo.",
  "O segredo da mudança é focar toda a sua energia, não na luta contra o velho, mas na construção do novo.",
  "A amizade é como uma estrela, não podemos sempre vê-la, mas sabemos que está sempre lá.",
  "Você é mais forte do que pensa. Acredite em si mesmo!",
  "Às vezes, a mudança que buscamos está dentro de nós mesmos, esperando para ser descoberta.",
  "A persistência realiza o impossível.",
  "Siga os bons e aprenda com eles.",
  "Não importa o tamanho da montanha, ela não pode tapar o sol.",
  "A gratidão transforma o que temos em suficiente e mais. Aprecie cada conquista, por menor que seja.",
  "Seja gentil: é o idioma que o surdo pode ouvir e o cego pode ver.",
  "O tempo é um recurso valioso; invista em coisas que te fazem feliz e te aproximam dos seus objetivos.",
  "Aquele que se importa com o sentimento dos outros, não é um tolo.",
  "Cada problema contém uma oportunidade para o crescimento.",
  "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
  "Amar é a única força capaz de transformar um inimigo em amigo.",
]

//Functions
function luckToday(event) {
  event.preventDefault(event)

  let randomArrayMessage = Math.round(Math.random() * 20)
  textLuck.innerHTML = arrayMessage[randomArrayMessage]
  toggleScreen()
}

function openAgainCookie(event) {
  event.preventDefault(event)

  toggleScreen()
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function screenByEnter(event) {
  if (event.key == "Enter" && screen2.classList.contains("hide")) {
    luckToday(event)
  }
}
