// função que realiza a soma de dois numeros
const soma = () =>{
    // declara uma variável e atribui valor
    let numero1 = window.prompt('Digite o primeiro número')

    let numero2 = prompt('Digite o segundo número')

    console.log(numero1)
    console.log(numero2)

    let soma = parseFloat(numero1) + parseFloat(numero2)

    console.log(soma)

    // maneiras de visualizar o que está na variável na tela
    // alert('A soma dos números:'+soma)
    alert(`A soma dos números: ${soma}`)

}

const soma2 = (numero1,numero2) =>{
    let soma = numero1 + numero2
    alert(soma)

}

// Função que soma 2 números digitados pelo usuário em um form 
const somaNumeros = () =>{
    // cria uma variável e captura o valor do input com id = numero1
    let numero1 = document.getElementById('numero1').value

    let numero2 = document.getElementById('numero2').value

    let soma = parseFloat(numero1) + parseFloat(numero2)

    // Exibe a soma dentro da div resultado
    document.getElementById('resultado').innerHTML = `
        Resultado da soma é ${soma}
    `
    
}