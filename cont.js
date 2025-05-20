document.addEventListener("DOMContentLoaded", function () {
  // Conta os jogos em cada categoria
  const jogando = document.querySelectorAll(".emjogo .jogom").length;
  const zerados = document.querySelectorAll(".zerados .jogoz").length;
  const dropados = document.querySelectorAll(".dropados .jogod").length;
  const pendentes = document.querySelectorAll(".pendentes .jogop").length;

  // Seleciona os elementos <pm>, <pz>, <pd> e <pp> dentro do <h2>
  const pm = document.querySelector("h2 pm");
  const pz = document.querySelector("h2 pz");
  const pd = document.querySelector("h2 pd");
  const pp = document.querySelector("h2 pp");

  // Atualiza o conteúdo com os novos números
  if (pm) pm.textContent = `Jogando [${jogando}]`;
  if (pz) pz.textContent = `Zerados [${zerados}]`;
  if (pd) pd.textContent = `Dropados [${dropados}]`;
  if (pp) pp.textContent = `Pendentes [${pendentes}]`;
});
