const depoimentos = [
    {
        imagem: "assets/icons/Depoimento1.png",
        texto: '"O melhor ramen que já provei!" - Naruto Uzumaki'
    },
    {
        imagem: "assets/icons/Depoimento2.png",
        texto: '"Esse ramen é tão bom que eu poderia comer umas 50 tigelas!" - Son Goku'
    },
    {
        imagem: "assets/icons/Depoimento3.png",
        texto: '"Esse ramen é incrível!" - Monkey D. Luffy'
    },
    {
        imagem: "assets/icons/Depoimento4.png",
        texto: '"Esse ramen é bom demais! Até eu fiquei impressionado." - Inuyasha'
    }
];

let indiceAtual = 0;

const imagemDepoimento = document.getElementById("imagem-depoimento");
const textoDepoimento = document.getElementById("texto-depoimento");
const botaoAnterior = document.getElementById("anterior");
const botaoProximo = document.getElementById("proximo");

function mostrarDepoimento() {
    imagemDepoimento.src = depoimentos[indiceAtual].imagem;
    textoDepoimento.innerText = depoimentos[indiceAtual].texto;
}

function proximo() {
    indiceAtual++;

    if (indiceAtual >= depoimentos.length) {
        indiceAtual = 0;
    }

    mostrarDepoimento();
}

function anterior() {
    indiceAtual--;

    if (indiceAtual < 0) {
        indiceAtual = depoimentos.length - 1;
    }

    mostrarDepoimento();
}

botaoAnterior.addEventListener("click", anterior);
botaoProximo.addEventListener("click", proximo);


const formulario = document.querySelector("form");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const nome = document.querySelector('input[name="nome"]').value.trim();
    const telefone = document.querySelector('input[name="telefone"]').value.trim();
    const endereco = document.querySelector('input[name="endereco"]').value.trim();
    const sabor = document.querySelector('select[name="sabor"]').value;
    const pagamento = document.querySelector('input[name="pagamento"]:checked');

    if (nome === "" || telefone === "" || endereco === "") {
        alert("Preencha todos os campos obrigatórios.");
        return;
    }

    const telefoneNumeros = telefone.replace(/\D/g, "");

    if (telefoneNumeros.length < 10 || telefoneNumeros.length > 11) {
        alert("Digite um telefone válido.");
        return;
    }

    if (sabor === "") {
        alert("Selecione o sabor.");
        return;
    }

    if (!pagamento) {
        alert("Escolha uma forma de pagamento.");
        return;
    }

    window.location.href = "obrigado.html";
});