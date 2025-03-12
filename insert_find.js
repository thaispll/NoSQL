
//inserir e 
//atualizar

db.blog.insert({
  titulo: "Blog 1",
  autor: "Daiana",
  tags: ["software","banco de dados"],
  adicionadoEm: "2025-03-11"
});


//atualizar o doc todo
db.blog.updateOne(
  { titulo: "Blog 1", autor: "Daiana"},//filtro
  {
    $set: {
      tags: ["software","banco de dados"],
      adicionadoEm: "2025-03-11",
      postadoEm: "2025-03-13"
    }
  }
);
//use meu_banco
//db.createCollection("minha_nova_colecao");

// update e insert = atualizar e inserir
db.blog.update(
  {
    titulo: "Blog 2"
  },
  {$set: //atualizar valor do campo em um doc
    {
      titulo: "Blog 2",
      autor: "Leandro",
      tags: ["software", "database"],
      adicionadoEm: "2025-03-09"
    }
  },
  {upsert: true} // insira caso não exista
);

//select = todos os documentos e todos os campos
// SELECT * FROM blog
db.blog.find();
db.blog.find().pretty();

//Filtrar por doc, todos os campos
// SQL: SELECT * FROM blog WHERE title= "Blog1"
db.blog.find({titulo: "Blog 1"}).pretty();
db.blog.find({titulo: "Blog 2"}).pretty();

//Filtrar doc, especificar campos
//SQL: SELECT titulo, adicionadoEm FROM blog WHERE titulo = "Blog 1"
db.blog.find(
  {titulo: "Blog 1"}, //filtro
  {titulo: 1, adicionadoEm:1} // o que eu quero na saída
).pretty();