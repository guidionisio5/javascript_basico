// função que realiza a soma de dois numeros
const soma = () => {
  // declara uma variável e atribui valor
  let numero1 = window.prompt("Digite o primeiro número");

  let numero2 = prompt("Digite o segundo número");

  console.log(numero1);
  console.log(numero2);

  let soma = parseFloat(numero1) + parseFloat(numero2);

  console.log(soma);

  // maneiras de visualizar o que está na variável na tela
  // alert('A soma dos números:'+soma)
  alert(`A soma dos números: ${soma}`);
};

const soma2 = (numero1, numero2) => {
  let soma = numero1 + numero2;
  alert(soma);
};

// Função que soma 2 números digitados pelo usuário em um form
const somaNumeros = () => {
  // cria uma variável e captura o valor do input com id = numero1
  let numero1 = document.getElementById("numero1").value;

  let numero2 = document.getElementById("numero2").value;

  let soma = parseFloat(numero1) + parseFloat(numero2);

  // Exibe a soma dentro da div resultado
  document.getElementById("resultado").innerHTML = `
        Resultado da soma é ${soma}
    `;
};

const exibe = (id) => {
  let elemento = document.getElementById(id);

  if (elemento.hidden == true) {
    elemento.hidden = false;
  } else {
    elemento.hidden = true;
  }
};

const exibeCidade = () => {
  // captura o elemento html do estado
  let estado = document.getElementById("estado");
  let cidade = document.getElementById("cidade");

  // exibe o valor do elemento capturado
  // alert(estado.value)

  if (estado.value == "sp") {
    cidade.innerHTML = `
    <option value="">São João da Boa Vista</option>
    <option value="">Aguaí</option>
    <option value="">Águas da Prata</option>
    `;
  } else if (estado.value == "rj") {
    cidade.innerHTML = `
    <option value="">Laranjeiras</option>
    <option value="">Xerém</option>
    <option value="">Parati</option>
    `;
  } else if (estado.value == "mg") {
    cidade.innerHTML = `
    <option value="">Andradas</option>
    <option value="">Poços de Caldas</option>
    <option value="">Belo Horizonte</option>
    `;
  }
};

// função que consulta o cep de uma API
// api utilizando POSTMON
const consultaCep = () =>{

    let cep = document.getElementById('cep').value

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
}