AOS.init();

const dataDoEvento = new Date("Dec 12, 2023 19:00:00");
const timestampDoEvento = dataDoEvento.getTime();

const contador = setInterval(function () {
  // A função setInterval executa determinada função a cada x milisegundos. Neste caso, a cada 1000 ms (1 segundo)
  const agora = new Date(); // Nesse caso a função setInterval pega (ou atualiza) a variável "agora" a cada 1 segundo
  const timestampAtual = agora.getTime();

  const tempoAteOEvento = timestampDoEvento - timestampAtual; // Fazendo a diferença entre os dois timestamps (número único que representa o dia, hora, minutos, segundos e milisegundos de cada data) para saber quanto tempo resta até o evento

  const diaEmMs = 1000 * 60 * 60 * 24;
  const horaEmMs = 1000 * 60 * 60;
  const minutoEmMs = 1000 * 60;

  const diasAteOEvento = Math.floor(tempoAteOEvento / diaEmMs);

  const horasAteOEvento = Math.floor((tempoAteOEvento % diaEmMs) / horaEmMs);

  const minutosAteOEvento = Math.floor(
    (tempoAteOEvento % horaEmMs) / minutoEmMs
  );

  const segundosAteOEvento = Math.floor((tempoAteOEvento % minutoEmMs) / 1000);

  document.getElementById(
    "contador"
  ).innerHTML = `${diasAteOEvento}d, ${horasAteOEvento}h, ${minutosAteOEvento}min e ${segundosAteOEvento}s`;

  if (diasAteOEvento < 0) {
    clearInterval(contador); // Parando o contador criado
    document.getElementById("mensagem").innerHTML =
      "O maior evento de tecnologia do Brasil já passou, mas não se preocupe, em breve teremos novidades! Fique ligado.";
  }
}, 1000);
