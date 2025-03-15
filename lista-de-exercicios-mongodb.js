use escola;

db.createCollection('alunos');
db.createCollection('cursos');
db.createCollection('disciplinas');
db.createCollection('professores');

db.alunos.insertMany([
    {
        nome: 'João',
        idade: 20,
        curso: {
            id: 'curso-id-1',
            nome: 'Ciência da Computação'
        },
        disciplinas: [
            {id: 'disciplina-id-1', nome: 'Algoritmos'},
            {id: 'disciplina-id-2', nome: 'Banco de Dados'}
        ]
    },
    {
        nome: 'Maria',
        idade: 22,
        curso: {
            id: 'curso-id-2',
            nome: 'Engenharia da Computação'
        },
        disciplinas: [
            {id: 'disciplina-id-3', nome: 'Introdução à Engenharia'},
            {id: 'disciplina-id-4', nome: 'Cálculo'}
        ]
    },
    {
        nome: 'Luís',
        idade: 21,
        curso: {
            id: 'curso-id-1',
            nome: 'Ciência da Computação'
        },
        disciplinas: [
            {id: 'disciplina-id-1', nome: 'Algoritmos'},
            {id: 'disciplina-id-5', nome: 'Python'}
        ]
    }
]);

db.cursos.insertMany([
    {
        id: 'curso-id-1',
        nome: 'Ciência da Computação',
        duracao: 4,
        disciplinas: [
            {id: 'disciplina-id-1', nome: 'Algoritmos'},
            {id: 'disciplina-id-2', nome: 'Banco de Dados'},
            {id: 'disciplina-id-5', nome: 'Python'}
        ]
    },
    {
        id: 'curso-id-2',
        nome: 'Engenharia da Computação',
        duracao: 5,
        disciplinas: [
            {id: 'disciplina-id-3', nome: 'Introdução à Engenharia'},
            {id: 'disciplina-id-4', nome: 'Cálculo'}
        ]
    }
]);

db.disciplinas.insertMany([
    {
        nome: 'Algoritmos',
        carga_horaria: 60
    },
    {
        nome: 'Estruturas de Dados',
        carga_horaria: 60
    },
    {
        nome: 'Banco de Dados',
        carga_horaria: 80
    },
    {
        nome: 'Introdução à Engenharia',
        carga_horaria: 40
    },
    {
        nome: 'Cálculo',
        carga_horaria: 80
    },
    {
        nome: 'Python',
        carga_horaria: 60
    }
]);

db.professores.insertMany([
    {
        nome: 'Professor Rodolfo',
        especialidade: 'Desenvolvimento de Software',
        disciplinas: [
            {id: 'disciplina-id-1', nome: 'Algoritmos'},
            {id: 'disciplina-id-2', nome: 'Banco de Dados'}
        ]
    },
    {
        nome: 'Professora Thais',
        especialidade: 'Engenharia da Computação',
        disciplinas: [
            {id: 'disciplina-id-3', nome: 'Introdução à Engenharia'},
            {id: 'disciplina-id-4', nome: 'Cálculo'}
        ]
    },
    {
        nome: 'Professor Kadu',
        especialidade: 'Ciência da Computação',
        disciplinas: [
            {id: 'disciplina-id-1', nome: 'Algoritmos'},
            {id: 'disciplina-id-5', nome: 'Python'}
        ]
    }
]);
//1. liste todos os cursos
db.cursos.find().pretty();

//2. Criar um novo curso chamado "Engenharia de Software"
db.cursos.insertOne({
    id: 'curso-id-3',
    nome: 'Engenharia de Software',
    duracao: 4,
    disciplinas: [
        { id: 'disciplina-id-6', nome: 'Desenvolvimento de Software'},
        { id: 'disciplina-id-7', nome: 'Metodologia Ágeis'},
        { id: 'disciplina-id-8', nome: 'Arquitetura de Software'}
    ]
});
db.cursos.find().pretty();