// Variáveis globais para controlar o jogo
let primeiraCarta = null;
let segundaCarta = null;
let bloquearTabuleiro = false;

// Função para iniciar o jogo de memória
function iniciarJogo() {
    let section = document.getElementById("tabuleiro");
    section.innerHTML = ""; // Limpar o tabuleiro
    let resultados = ""; // Variável que vai armazenar as cartas viradas
  
    // Loop sobre os dados (cartas) e construção do HTML para as cartas
    for (let dado of dados) {
        // Verifique se dado.imagem está definido
        if (!dado.imagem) {
            console.error(`Imagem não definida para o dado com título ${dado.titulo}`);
            continue; // Pular a iteração se a imagem estiver indefinida
        }

        resultados += `
            <div class="carta" style="--img-url: url('${dado.imagem}');" onclick="virarCarta(this)">
                <p class="oculta">${dado.titulo}</p>
            </div>
        `;
    }
  
    // Exibir cartas no tabuleiro
    section.innerHTML = resultados;
}

// Função para virar uma carta
function virarCarta(elemento) {
    if (bloquearTabuleiro || elemento.classList.contains('virada')) return;

    elemento.classList.add('virada');
    elemento.querySelector('p').style.visibility = 'visible'; // Mostrar o texto da carta

    // Verificar se já existe uma carta virada
    if (!primeiraCarta) {
        primeiraCarta = elemento;
        return;
    }

    // Se for a segunda carta, verificar se é um par
    segundaCarta = elemento;

    // Verifica se as cartas são iguais
    if (primeiraCarta.querySelector('p').innerText === segundaCarta.querySelector('p').innerText) {
        // Exibir a informação específica para o par encontrado
        let info = dados.find(dado => dado.titulo === primeiraCarta.querySelector('p').innerText).informacao;
        exibirInformacao(info);

        primeiraCarta = null;
        segundaCarta = null; 
    } else {
        bloquearTabuleiro = true;
        setTimeout(() => {
            primeiraCarta.classList.remove('virada');
            segundaCarta.classList.remove('virada');
            primeiraCarta.querySelector('p').style.visibility = 'hidden';
            segundaCarta.querySelector('p').style.visibility = 'hidden';
            primeiraCarta = null;
            segundaCarta = null;
            bloquearTabuleiro = false;
        }, 1000);
    }
}

// Função para exibir a informação específica
function exibirInformacao(info) {
    let infoDiv = document.getElementById('informacao');
    if (infoDiv) {
        infoDiv.innerHTML = info;
    } else {
        console.error("Elemento de informação não encontrado.");
    }
}
