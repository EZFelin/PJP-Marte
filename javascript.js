const funcoes = [
  { Nome: "Mare Imbrium", descricao: "Uma das maiores planícies de lava solidificada da Lua, perfeita para pousos e caminhadas." },
  { Nome: "Cratera Tycho", descricao: "Cratera jovem e brilhante com raios que se estendem por centenas de quilômetros." },
  { Nome: "Oceanus Procellarum", descricao: "Maior planície oceânica lunar, com locais históricos de missões Apollo." },
  { Nome: "Montes Apenninus", descricao: "Cadeia montanhosa com picos de quase 5 km de altura e paisagens dramáticas." },
  { Nome: "Cratera Copernicus", descricao: "Cratera de impacto com paredes altas e pico central, rodeada por raios claros." },
  { Nome: "Rima Hadley", descricao: "Fenda estreita próxima ao local da Apollo 15, um ponto histórico e fascinante." },
  { Nome: "Cratera Clavius", descricao: "Uma das maiores crateras visíveis da Lua, com cerca de 225 km de diâmetro, famosa por sua forma circular e pequenas crateras internas." },
  { Nome: "Cratera Shackleton", descricao: "Localizada no Polo Sul lunar, importante por conter sombra permanente e possível gelo, fundamental para pesquisas futuras." },
  { Nome: "Vale Schroter", descricao: "Um grande rift vulcânico com mais de 160 km de extensão, ideal para explorar formações geológicas incomuns." },
  { Nome: "Mare Crisium", descricao: "Grande planície lunar visível da Terra, conhecida por sua cor escura e superfície lisa." },
  { Nome: "Mons Huygens", descricao: "A montanha mais alta da Lua, com quase 5,5 km de altitude, localizada na cadeia Montes Apenninus." }
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
        <strong>Nome:</strong> ${sorteio.Nome}<br>
        <strong>descrição:</strong> ${sorteio.descricao}
      `;
  
      let op = 0;
      const fadeInInterval = setInterval(() => {
        if (op >= 1) {
          clearInterval(fadeInInterval);
        }
        resultado.style.opacity = op;
        op += 0.05;
      }, 50);
  
      btn.innerText = "Local recebido!";
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