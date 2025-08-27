// fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL').then(response => response.json()).then(data => {
// }
fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL').then(resposta => resposta.json()).then(dado =>{
    console.log(dado.USDBRL.bid)
    document.getElementById('valor').innerHTML = dado.USDBRL.bid
})