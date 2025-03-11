
db.funcionarios.insertMany([
  {funId: 1, nome: 'Clark', dept: 'Vendas' },
  {funId: 2, nome: 'Dave', dept: 'Contabilidade' },
  {funId: 3, nome: 'Ava', dept: 'Vendas' },
  {funId: 4, nome: 'Leandro', dept: 'Marketing' },
  {funId: 5, nome: 'Jeff', dept: 'TI' }
]);

db.funcionarios.find({
  $or: [
    {dept: "Vendas"},
    {dept: "Contabilidade"},
    {dept: "Marketing"}
    ]  
  });