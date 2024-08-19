var Aluno = /** @class */ (function () {
    function Aluno(id, nomeCompleto, idade, altura, peso) {
        this.id = id;
        this.nomeCompleto = nomeCompleto;
        this.idade = idade;
        this.altura = altura;
        this.peso = peso;
    }
    return Aluno;
}());
var Turma = /** @class */ (function () {
    function Turma(id, nome) {
        this.id = id;
        this.nome = nome;
        this.alunos = [];
    }
    Turma.prototype.adicionarAluno = function () {
        var id = parseInt(prompt('Id: '));
        var nomeCompleto = prompt('nomeCompleto: ');
        var idade = parseInt(prompt('Idade: '));
        var altura = parseInt(prompt('Altura: '));
        var peso = parseInt(prompt('Peso: '));
        var aluno = new Aluno(id, nomeCompleto, idade, altura, peso);
        this.alunos.push(aluno);
    };
    Turma.prototype.removerAluno = function () {
        var indice = parseInt(prompt('Índice do aluno a ser excluído: '));
        if (isNaN(indice) || indice < 0 || indice >= this.alunos.length) {
            console.log('Índice inválido.');
            return;
        }
        this.alunos.splice(indice, 1);
        prompt('Lembrete excluído com sucesso.');
    };
    Turma.prototype.editarAluno = function () {
        var indice = parseInt(prompt('Id do aluno a ser editado: '));
        if (isNaN(indice) || indice < 0 || indice >= this.alunos.length) {
            console.log('Id inválido.');
            return;
        }
        var aluno = this.alunos[indice];
        var id = parseInt(prompt('Novo Id (Deixe em branco para manter o mesmo): ')) || aluno.id;
        var nomeCompleto = prompt('Novo nomeCompleto (Deixe em branco para manter a mesma): ') || aluno.nomeCompleto;
        var idade = parseInt(prompt('Nova idade (Deixe em branco para manter a mesma): ')) || aluno.idade;
        var altura = parseInt(prompt('Nova altura (Deixe em branco para manter a mesma): ')) || aluno.altura;
        var peso = parseInt(prompt('Novo peso (Deixe em branco para manter a mesma): ')) || aluno.peso;
        aluno.id = id;
        aluno.nomeCompleto = nomeCompleto;
        aluno.idade = idade;
        aluno.altura = altura;
        aluno.peso = peso;
        prompt('Aluno editado com sucesso.');
    };
    Turma.prototype.listarAlunos = function () {
        prompt('--- Lista de Alunos ---');
        if (minhaTurma.alunos.length <= 0) {
            prompt('--- Lista vazia ---');
        }
        this.alunos.forEach(function (aluno, indice) {
            prompt("".concat(indice, ". ").concat(aluno.id, " - ").concat(aluno.nomeCompleto, " - ").concat(aluno.idade, " - ").concat(aluno.altura, " - ").concat(aluno.peso));
        });
        console.log('--------------------------');
    };
    Turma.prototype.getNumAlunos = function () {
        return this.alunos.length;
    };
    Turma.prototype.getMediaIdades = function () {
        var totalIdades = this.alunos.reduce(function (total, aluno) { return total + aluno.idade; }, 0);
        return totalIdades / this.alunos.length;
    };
    Turma.prototype.getMediaAlturas = function () {
        var totalAlturas = this.alunos.reduce(function (total, aluno) { return total + aluno.altura; }, 0);
        return totalAlturas / this.alunos.length;
    };
    Turma.prototype.getMediaPesos = function () {
        var totalPesos = this.alunos.reduce(function (total, aluno) { return total + aluno.peso; }, 0);
        return totalPesos / this.alunos.length;
    };
    Turma.prototype.exibirEstatisticas = function () {
        prompt("===== Estat\u00EDsticas da Turma ".concat(this.nome, " =====\n                        N\u00FAmero de Alunos: ").concat(this.getNumAlunos(), "\n                        M\u00E9dia de Idades: ").concat(this.getMediaIdades().toFixed(2), " anos\n                        M\u00E9dia de Alturas: ").concat(this.getMediaAlturas().toFixed(2), " cm\n                        M\u00E9dia de Pesos: ").concat(this.getMediaPesos().toFixed(2), " kg\n        =============================================="));
    };
    return Turma;
}());
// Criando a classe Turma
var minhaTurma = new Turma(1, 'Educação Física');
function principal() {
    while (true) {
        console.log('\n===== MENU =====');
        console.log('1. Adicionar Aluno');
        console.log('2. Editar Aluno');
        console.log('3. Excluir Aluno');
        console.log('4. Sair');
        minhaTurma.exibirEstatisticas();
        minhaTurma.listarAlunos();
        var escolha = prompt("         \n                                ===== MENU =====\n                                1. Adicionar Aluno\n                                2. Editar Aluno\n                                3. Excluir Aluno\n                                4. Sair\n\n                                Escolha uma op\u00E7\u00E3o: \n");
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
