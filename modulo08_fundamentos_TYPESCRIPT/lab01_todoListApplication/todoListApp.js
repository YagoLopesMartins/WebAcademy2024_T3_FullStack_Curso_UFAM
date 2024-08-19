var lembretes = [];
function adicionarLembrete() {
    var titulo = prompt('Título: ');
    var descricao = prompt('Descrição: ');
    var dataLimiteString = prompt('Data Limite (AAAA-MM-DD HH:mm): ');
    var dataLimite = new Date(dataLimiteString);
    if (isNaN(dataLimite.getTime())) {
        console.log('Data Limite inválida. Por favor, insira no formato AAAA-MM-DD HH:mm');
        return;
    }
    var lembrete = {
        titulo: titulo,
        criadoEm: new Date(),
        dataLimite: dataLimite,
        descricao: descricao
    };
    lembretes.push(lembrete);
    console.log('Lembrete adicionado com sucesso.');
}
function listarLembretes() {
    prompt('--- Lista de Lembretes ---');
    if (lembretes.length <= 0) {
        prompt('--- Lista vazia ---');
    }
    lembretes.forEach(function (lembrete, indice) {
        prompt("".concat(indice, ". ").concat(lembrete.titulo, " - ").concat(lembrete.dataLimite.toLocaleString(), " - ").concat(lembrete.descricao));
    });
    console.log('--------------------------');
}
function editarLembrete() {
    var indice = parseInt(prompt('Índice do lembrete a ser editado: '));
    if (isNaN(indice) || indice < 0 || indice >= lembretes.length) {
        console.log('Índice inválido.');
        return;
    }
    var lembrete = lembretes[indice];
    var titulo = prompt('Novo Título (Deixe em branco para manter o mesmo): ') || lembrete.titulo;
    var descricao = prompt('Nova Descrição (Deixe em branco para manter a mesma): ') || lembrete.descricao;
    var dataLimiteString = prompt('Nova Data Limite (AAAA-MM-DD HH:mm, Deixe em branco para manter a mesma): ') || lembrete.dataLimite.toISOString();
    var dataLimite = new Date(dataLimiteString);
    if (isNaN(dataLimite.getTime())) {
        console.log('Data Limite inválida. Por favor, insira no formato AAAA-MM-DD HH:mm');
        return;
    }
    lembrete.titulo = titulo;
    lembrete.descricao = descricao;
    lembrete.dataLimite = dataLimite;
    prompt('Lembrete editado com sucesso.');
}
function excluirLembrete() {
    var indice = parseInt(prompt('Índice do lembrete a ser excluído: '));
    if (isNaN(indice) || indice < 0 || indice >= lembretes.length) {
        console.log('Índice inválido.');
        return;
    }
    lembretes.splice(indice, 1);
    prompt('Lembrete excluído com sucesso.');
}
function principal() {
    while (true) {
        console.log('\n===== MENU =====');
        console.log('1. Adicionar Lembrete');
        console.log('2. Editar Lembrete');
        console.log('3. Listar Lembretes');
        console.log('4. Excluir Lembrete');
        console.log('5. Sair');
        var escolha = prompt("         \n                                ===== MENU =====\n                                1. Adicionar Lembrete\n                                2. Editar Lembrete\n                                3. Listar Lembretes\n                                4. Excluir Lembrete\n                                5. Sair\n\n                                Escolha uma op\u00E7\u00E3o: \n");
        switch (escolha) {
            case '1':
                adicionarLembrete();
                break;
            case '2':
                editarLembrete();
                break;
            case '3':
                listarLembretes();
                break;
            case '4':
                excluirLembrete();
                break;
            case '5':
                prompt('Saindo ...');
                return;
            default:
                prompt('Opção inválida. Por favor, escolha uma opção válida.');
        }
    }
}
principal();
