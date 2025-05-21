window.onload = function () {
    contarJogos();
};

// Contador atualizado para contar apenas os jogos visíveis
function contarJogos() {
    const seções = [
        { id: 's1', classe: 'jogom', span: 'pm' },
        { id: 's2', classe: 'jogoz', span: 'pz' },
        { id: 's3', classe: 'jogod', span: 'pd' },
        { id: 's4', classe: 'jogop', span: 'pp' }
    ];

    let total = 0;

    seções.forEach(({ id, classe, span }) => {
        const jogos = document.querySelectorAll(`#${id} .${classe}`);
        let visiveis = 0;

        jogos.forEach(jogo => {
            // Verifica se o jogo está visível
            if (jogo.style.display !== 'none') {
                visiveis++;
            }
        });

        // Atualiza o texto da seção com o número de visíveis
        const nomeSecao = document.getElementById(span).textContent.split(" ")[0];
        document.getElementById(span).textContent = `${nomeSecao} [${visiveis}]`;
        total += visiveis;
    });

    // Atualiza o total
    document.getElementById('total').textContent = total;
}

// Função de busca por título (usando atributo title)
function filtrarJogos() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const todosJogos = document.querySelectorAll(".jogod, .jogom, .jogop, .jogoz");

    todosJogos.forEach(jogo => {
        const img = jogo.querySelector("img");
        const titulo = img.getAttribute("title").toLowerCase();

        if (titulo.includes(input)) {
            jogo.style.display = "";
        } else {
            jogo.style.display = "none";
        }
    });

    contarJogos(); // Atualiza contadores após o filtro
}
