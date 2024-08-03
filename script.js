const dia = document.getElementById('dia');
const hora = document.getElementById('hora');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const lancamento = '21 jul 2025'; // Define a data final como parâmtro para a contagem regressiva

function countDown() {
	const dataLancamento = new Date(lancamento);
	const hoje = new Date();

	const segundosTotal = (dataLancamento - hoje) / 1000;

	const totalDias = Math.floor(segundosTotal / 60 / 60 / 24); // Transforma o total de segundos em dias
	const totalHoras = Math.floor(segundosTotal / 60 / 60) % 24; // Transforma o total de segundos em horas
	const totalMinutos = Math.floor(segundosTotal / 60) % 60; // Transforma o total de segundos em minutos
	const totalSegundos = Math.floor(segundosTotal) % 60; // Armazena os segundos que restaram

	dia.innerHTML = formatoTempo(totalDias) + 'D';
	hora.innerHTML = formatoTempo(totalHoras) + 'H';
	minutos.innerHTML = formatoTempo(totalMinutos) + 'M';
	segundos.innerHTML = formatoTempo(totalSegundos) + 'S';
}

function formatoTempo(tempo) {
	return tempo < 10 ? `0${tempo}` : tempo; // Se o valor do tempo for menor que 10, concatena o zero na frete do valor, se não, retorna o valor original do tempo
}

countDown(); // Executa a contagem regressiva
setInterval(countDown, 1000); // Define o intervalo de 1s (1000ms) para atualizar a contagem dos segundos e possibilitar a visualização dos segundos passando