interface Lembrete {
    titulo: string;
    criadoEm: Date;
   dataLimite: Date;
    descricao: string;
}


let lembretes: Lembrete[] = [];

function adicionarLembrete(): void {

    const titulo = prompt('Título: ');
    const descricao = prompt('Descrição: ');
   const dataLimiteString = prompt('Data Limite (AAAA-MM-DD HH:mm): ');
   const dataLimite = new Date(dataLimiteString);
    if (isNaN(dataLimite.getTime())) {
        console.log('Data Limite inválida. Por favor, insira no formato AAAA-MM-DD HH:mm');
        return;
    }
    const lembrete: Lembrete = {
        titulo,
        criadoEm: new Date(),
        dataLimite,
        descricao
    };
    lembretes.push(lembrete);
    console.log('Lembrete adicionado com sucesso.');
}

function listarLembretes(): void {
    prompt('--- Lista de Lembretes ---');
    if(lembretes.length <= 0) {
        prompt('--- Lista vazia ---');
    }
    lembretes.forEach((lembrete, indice) => {
        prompt(`${indice}. ${lembrete.titulo} - ${lembrete.dataLimite.toLocaleString()} - ${lembrete.descricao}`);
    });
    console.log('--------------------------');
}

function editarLembrete(): void {
    const indice = parseInt(prompt('Índice do lembrete a ser editado: '));
    if (isNaN(indice) || indice < 0 || indice >= lembretes.length) {
        console.log('Índice inválido.');
        return;
    }
    const lembrete = lembretes[indice];
    const titulo = prompt('Novo Título (Deixe em branco para manter o mesmo): ') || lembrete.titulo;
    const descricao = prompt('Nova Descrição (Deixe em branco para manter a mesma): ') || lembrete.descricao;
    const dataLimiteString = prompt('Nova Data Limite (AAAA-MM-DD HH:mm, Deixe em branco para manter a mesma): ') || lembrete.dataLimite.toISOString();
    const dataLimite = new Date(dataLimiteString);
    if (isNaN(dataLimite.getTime())) {
        console.log('Data Limite inválida. Por favor, insira no formato AAAA-MM-DD HH:mm');
        return;
    }
    lembrete.titulo = titulo;
    lembrete.descricao = descricao;
    lembrete.dataLimite = dataLimite;
    prompt('Lembrete editado com sucesso.');
}

function excluirLembrete(): void {
    const indice = parseInt(prompt('Índice do lembrete a ser excluído: '));
    if (isNaN(indice) || indice < 0 || indice >= lembretes.length) {
        console.log('Índice inválido.');
        return;
    }
    lembretes.splice(indice, 1);
    prompt('Lembrete excluído com sucesso.');
}

function principal(): void {
    while(true){
        console.log('\n===== MENU =====');
        console.log('1. Adicionar Lembrete');
        console.log('2. Editar Lembrete');
        console.log('3. Listar Lembretes');
        console.log('4. Excluir Lembrete');
        console.log('5. Sair');
        const escolha = prompt(`         
                                ===== MENU =====
                                1. Adicionar Lembrete
                                2. Editar Lembrete
                                3. Listar Lembretes
                                4. Excluir Lembrete
                                5. Sair\n
                                Escolha uma opção: \n`);
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