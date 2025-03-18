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
//3. Listar todas as disciplinas cursadas por um aluno específico
db.alunos.findOne({nome:'João'}, {disciplinas:1, _id:0});
db.alunos.findOne({nome:'Maria'}, {disciplinas:1, _id:0});
db.alunos.findOne({nome: 'Luís'}, {disciplinas: 1, _id:0});

//4. Inserir um novo aluno na coleção "alunos":
db.alunos.insertOne({
    nome: 'Daiana',
    idade: 20,
    curso: {
        id: 'curso-id-1',
        nome: 'Ciência da Computação'
    },
    disciplinas: [
        { id: 'disciplina-id-1', nome: 'Algoritmos'},
        { id: 'disciplina-id-5', nome: 'Python'}
    ]
});
//5. Listar todos os professores que ministram a disciplina "Algoritmos"
db.professores.find(
    {'disciplinas.nome': 'Algoritmos'},
    {nome: 1, _id: 0}
);

//6. Já feito
//7. Listar todos os alunos matriculados no curso "Ciência da Computação"
db.alunos.find(
    { 'curso.nome': 'Ciência da Computação'},
    { nome: 1, _id: 0}
);
//8.Buscar todos os cursos que incluem a disciplina "Banco de Dados"
db.cursos.find(
    { 'disciplinas.nome': 'Banco de Dados'},
    { nome: 1, duracao: 1, _id: 0}
);
//pergunta extra: consultar nome de todas as disciplinas existentes no bd
db.disciplinas.find({}, {nome:1, _id:0});

//9. Atualizar o nome do curso "Engenharia de Software" para "Engenharia de Sistemas
db.cursos.updateOne(
    { nome: 'Engenharia de Software'},
    {$set: { nome: 'Engenharia de Sistemas'}}
);
db.cursos.find({},{nome:1, duracao: 1, _id:0});
//10. Remover todos os alunos que não estão matriculados em nenhum curso
db.alunos.insertOne({
    nome: 'Garibalda',
    idade: 34,
    curso: null,
    disciplinas: []
});
db.alunos.insertOne({
    nome: 'Suco de fruta',
    idade: 34,
    curso: [],
    disciplinas: []
});
db.alunos.deleteMany({
    $or: [
        { curso: null},
        { curso: {} },
        { curso: {$exists: false}},
        { curso:[]}
    ]
});
db.alunos.find();

/*11. Criar uma coleção "disciplinas" com um documento que contém 
detalhes sobre a disciplina "Algoritmos"*/

db.disciplinas.updateOne(
    { nome: 'Algoritmos'},
    {
        $set: {
            carga_horaria:80,
            descricao: 'Estudo avançado de técnicas e estruturas para resolver problemas computacionais complexos'
        }
    }
);
db.disciplinas.find();

//12. Buscar todos os alunos que cursaram a disciplina "Estruturas de Dados"
db.alunos.find({'disciplinas.nome': 'Estrutura de Dados'}, {nome:1, _id:0});

//13. Contar quantos alunos estão matriculados no curso "Engenharia Civil"
db.alunos.countDocuments({ 'curso.nome': 'Engenharia Civil'});

db.alunos.aggregate([
    {
     $group: {
        _id: '$curso.nome',
        quantidade: {$sum: 1}
        }
    }, 
    {
        $project: {
        _id: 0,
        curso : '$_id',
        quantidade: 1
        }
    }
]);
//14. Ordenar os alunos por idade em ordem crescente
db.alunos.find({}, {nome:1, idade: 1, _id:0}).sort({idade: 1});

//15. Projetar apenas os campos "nome" e "curso" dos alunos
db.alunos.find({}, {nome:1, 'curso.nome': 1, _id:0}).sort({nome: 1});

