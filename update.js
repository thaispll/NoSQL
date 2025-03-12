db.blog.insertOne({
  titulo: "Atualizações",
  autor: "Júlia",
  tags: ["tecnologia", "inovação"],
  adicionadoEm: "2025-03-11"
});
db.blog.find().pretty();

db.blog.update(
  {titulo: "Atualizações"},//filtro
  { //o que quero que apareça
    titulo: "Atualizações",
    autor: "Júlia",
    tags: ["software", "banco de dados NoSQL"]
  },
  {upsert: true}
);
db.blog.find().pretty();
db.blog.update(
  {titulo: "Atualizações"},
  {$set:
    {
      adicionadoEm:"2025-03-11"
    }
  }
);
db.blog.find().pretty();

db.blog.update(
  {titulo: "Atualizações"},
  {$inc: {viewCount: 1}}  //incremento, contador de visualizações de um documento
);
db.blog.find(
  {titulo: "Atualizações"}
).pretty();

//renomear campo
db.blog.update(
  {titulo: "Atualizações"},
  {$rename:{viewCount:"views"}}
);
db.blog.find(
  {titulo: "Atualizações"}
).pretty();

db.blog.update(
  {titulo: "Atualizações"},
  {$unset: {views:0}}  
);

db.blog.find(
  {titulo: "Atualizações"}
).pretty();


