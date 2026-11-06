const formulario = document.querySelector("#formulario")
const nome = document.querySelector("#nome")
const resposta = document.querySelector("#resposta")




formulario.addEventListener("submit", (event) => {
    event.preventDefault()

    const nomeDigitado = nome.value.trim()

    if (nomeDigitado === "") {
        resposta.textContent = "Preencha seu nome, seu baitola"
    } else {
        resposta.textContent = `Olá ${nomeDigitado}, seu baitola`
    }
})

