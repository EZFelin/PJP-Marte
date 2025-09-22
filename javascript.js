const funcoes = [
    { profissao: "Engenheiro de Propulsão", missao: "Criar motores eficientes para viagens em Marte." },
    { profissao: "Biólogo Agrícola", missao: "Desenvolver sistemas de cultivo de alimentos." },
    { profissao: "Psicólogo Espacial", missao: "Garantir a saúde mental da tripulação." },
    { profissao: "Mecânico Robótico", missao: "Fazer a manutenção dos robôs exploradores." },
    { profissao: "Analista de Dados", missao: "Monitorar sinais e dados climáticos de Marte." },
    { profissao: "Arquiteto Espacial", missao: "Projetar habitats marcianos seguros." },
    { profissao: "Médico Interplanetário", missao: "Cuidar da saúde dos colonos humanos." },
    { profissao: "Cientista Geoambiental", missao: "Estudar a composição do solo e sua utilidade." },
    { profissao: "Engenheiro de Transporte", missao: "Desenvolver veículos para locomoção marciana." },
    { profissao: "Diretor de Comunicação", missao: "Enviar relatórios e notícias à Terra." }
];

const btn = document.querySelector("button");
const resultado = document.getElementById("resultado");

function gerarMissao() {
    btn.disabled = true;
    btn.innerText = "Carregando...";
    btn.style.backgroundColor = "#555";
    btn.style.cursor = "not-allowed";
  
    resultado.style.opacity = 0;
  
    setTimeout(() => {
      const sorteio = funcoes[Math.floor(Math.random() * funcoes.length)];
      resultado.innerHTML = `
        <strong>Profissão:</strong> ${sorteio.profissao}<br>
        <strong>Missão:</strong> ${sorteio.missao}
      `;
  
      let op = 0;
      const fadeInInterval = setInterval(() => {
        if (op >= 1) {
          clearInterval(fadeInInterval);
        }
        resultado.style.opacity = op;
        op += 0.05;
      }, 50);
  
      btn.innerText = "Função recebida!";
    }, 2000);
  }
  
  btn.addEventListener('click', gerarMissao);

const container = document.getElementById("estrelas");

for (let i = 0; i < 500; i++) {
  const estrela = document.createElement("div");
  estrela.className = "estrela";
  estrela.style.top = `${Math.random() * 100}%`;
  estrela.style.left = `${Math.random() * 100}%`;
  estrela.style.animationDelay = `${Math.random() * 2}s`;
  estrela.style.opacity = Math.random();
  container.appendChild(estrela);
}