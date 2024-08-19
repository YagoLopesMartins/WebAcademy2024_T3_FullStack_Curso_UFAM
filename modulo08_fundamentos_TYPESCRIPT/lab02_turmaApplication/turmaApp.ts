class Aluno {
    id: number;
    nomeCompleto: string;
    idade: number;
    altura: number;
    peso: number;

    constructor(id: number, nomeCompleto: string, idade: number, altura: number, peso: number) {
        this.id = id;
        this.nomeCompleto = nomeCompleto;
        this.idade = idade;
        this.altura = altura;
        this.peso = peso;
    }
}

class Turma {
    id: number;
    nome: string;
    alunos: Aluno[];

    constructor(id: number, nome: string) {
        this.id = id;
        this.nome = nome;
        this.alunos = [];
    }

    adicionarAluno(): void {
       const id = parseInt(prompt('Id: '));
       const nomeCompleto = prompt('nomeCompleto: ');
       const idade = parseInt(prompt('Idade: '));
       const altura = parseInt(prompt('Altura: '));
       const peso = parseInt(prompt('Peso: '));

       const aluno = new Aluno(id, nomeCompleto, idade, altura, peso);

        this.alunos.push(aluno);
    }

    removerAluno(): void {
        const indice = parseInt(prompt('Índice do aluno a ser excluído: '));
    if (isNaN(indice) || indice < 0 || indice >= this.alunos.length) {
        console.log('Índice inválido.');
        return;
    }
        this.alunos.splice(indice, 1);
        prompt('Lembrete excluído com sucesso.');
    }

    editarAluno(): void{
        const indice = parseInt(prompt('Id do aluno a ser editado: '));
        if (isNaN(indice) || indice < 0 || indice >= this.alunos.length) {
            console.log('Id inválido.');
            return;
        }
        const aluno = this.alunos[indice];
        
        const id = parseInt(prompt('Novo Id (Deixe em branco para manter o mesmo): ')) || aluno.id;
        const nomeCompleto = prompt('Novo nomeCompleto (Deixe em branco para manter a mesma): ') || aluno.nomeCompleto;
        const idade = parseInt(prompt('Nova idade (Deixe em branco para manter a mesma): ')) || aluno.idade;
        const altura = parseInt(prompt('Nova altura (Deixe em branco para manter a mesma): ')) || aluno.altura;
        const peso = parseInt(prompt('Novo peso (Deixe em branco para manter a mesma): ')) || aluno.peso;

        aluno.id = id;
        aluno.nomeCompleto = nomeCompleto;
        aluno.idade = idade;
        aluno.altura = altura;
        aluno.peso = peso;

        prompt('Aluno editado com sucesso.');
    }
    listarAlunos(): void {
        prompt('--- Lista de Alunos ---');
        if(minhaTurma.alunos.length <= 0) {
            prompt('--- Lista vazia ---');
        }
        this.alunos.forEach((aluno, indice) => {
            prompt(`${indice}. ${aluno.id} - ${aluno.nomeCompleto} - ${aluno.idade} - ${aluno.altura} - ${aluno.peso}`);
        });
        console.log('--------------------------');
    }
    getNumAlunos(): number {
        return this.alunos.length;
    }

    getMediaIdades(): number {
        const totalIdades = this.alunos.reduce((total, aluno) => total + aluno.idade, 0);
        return totalIdades / this.alunos.length;
    }

    getMediaAlturas(): number {
        const totalAlturas = this.alunos.reduce((total, aluno) => total + aluno.altura, 0);
        return totalAlturas / this.alunos.length;
    }

    getMediaPesos(): number {
        const totalPesos = this.alunos.reduce((total, aluno) => total + aluno.peso, 0);
        return totalPesos / this.alunos.length;
    }

    exibirEstatisticas(): void {
        prompt(`===== Estatísticas da Turma ${this.nome} =====
                        Número de Alunos: ${this.getNumAlunos()}
                        Média de Idades: ${this.getMediaIdades().toFixed(2)} anos
                        Média de Alturas: ${this.getMediaAlturas().toFixed(2)} cm
                        Média de Pesos: ${this.getMediaPesos().toFixed(2)} kg
        ==============================================`);
    }
}

// Criando a classe Turma
const minhaTurma = new Turma(1, 'Educação Física');

 function principal(): void {
    while(true){
        console.log('\n===== MENU =====');
        console.log('1. Adicionar Aluno');
        console.log('2. Editar Aluno');
        console.log('3. Excluir Aluno');
        console.log('4. Sair');
        minhaTurma.exibirEstatisticas();
        minhaTurma.listarAlunos();
        const escolha = prompt(`         
                                ===== MENU =====
                                1. Adicionar Aluno
                                2. Editar Aluno
                                3. Excluir Aluno
                                4. Sair\n
                                Escolha uma opção: \n`);
        switch (escolha) {
            case '1':
                minhaTurma.adicionarAluno();
                minhaTurma.exibirEstatisticas();
                minhaTurma.listarAlunos();
                break;
            case '2':
                minhaTurma.editarAluno();
                minhaTurma.exibirEstatisticas();
                minhaTurma.listarAlunos();
                break;
            case '3':
                minhaTurma.removerAluno();
                minhaTurma.exibirEstatisticas();
                minhaTurma.listarAlunos();
                break;
            case '4':
                prompt('Saindo ...');
                minhaTurma.exibirEstatisticas();
                return;
            default:
                prompt('Opção inválida. Por favor, escolha uma opção válida.');
                minhaTurma.exibirEstatisticas();
        }
    }
}

principal();