const key = "e0283766cee7e7e70be7e75409ae8042"

function coletarClima() {
 const cidade =  document.querySelector(".cidadePesquisar").value;
 console.log(cidade);
 dadosClima(cidade);

}

async function dadosClima(cidade) {
    let dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json())
    console.log(dados)
    dadosTela(dados)
}

function dadosTela(dados) {
    document.querySelector(".cidade").innerHTML = dados.name
    document.querySelector(".temperatura").innerHTML = Math.floor(dados.main.temp) + " °C"
    document.querySelector(".icone").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
    document.querySelector(".nuvens").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%"
}
