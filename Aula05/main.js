/*
 BUSCA AUTOMÁTICA DE CIDADES POR ESTADO
*/

const estados = []; // Array para armazenar os estados do Brasil
const cidades = []; // Array para armazenar as cidades do Brasil

// Elementos selects do formulário (DOM)
const estadosSelect = document.querySelector('#estado');
const cidadesSelect = document.querySelector('#cidade');

// https://servicodados.ibge.gov.br/api/v1/localidades/estados

const buscaEstados = async () => {
    const resposta = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome');
    if (resposta.ok) {
        const dados = await resposta.json();
        dados.forEach(estado => {
            const id = estado.id;
            const sigla = estado.sigla;
            const nome = estado.nome;
            estados.push({ id, sigla, nome });
            // Adiciona os estados no select do formulário
            const option = document.createElement('option');
            option.value = id;
            option.textContent = `${sigla} - ${nome}`;
            estadosSelect.appendChild(option);
        });
        console.log(estados);
    }
}
/* Listener para o evento de mudança do select de estados */
estadosSelect.addEventListener('change', (event) => {
    const idSelecionado = event.target.value;
    buscaCidades(idSelecionado);
})


const buscaCidades = async idEstado => {
    const resposta = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${idEstado}/municipios`);
    const dados = await resposta.json();
    if (resposta.ok) {
       
        // Limpa o array de cidades e o select de cidades
        cidades.length = 0;
        cidadesSelect.innerHTML = '';
        
        // Preenche o select de cidades com as cidades do estado selecionado
        dados.forEach(cidade => {
            const id = cidade.id;
            const nome = cidade.nome;
            cidades.push({ id, nome });
            // Adiciona as cidades no select do formulário
            const option = document.createElement('option');
            option.value = id;
            option.textContent = nome;
            cidadesSelect.appendChild(option);
        });
    }
};


buscaEstados();
