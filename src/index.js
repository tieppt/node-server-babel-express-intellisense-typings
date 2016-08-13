import express from 'express';

let app = express();

app.get('/', (req, res) => {
  res.send(`Hello node. At directory ${__dirname}`);
});

app.get('/users', (req, res) => {
  let users = [
    {
      id: 1,
      name: "Tiep Phan"
    }, {
      id: 2,
      name: "Nodejs User"
    }
  ];
  res.json(users);
})

let server = app.listen('3333', () => {
  console.log(`App listen on port 3333. At directory ${__dirname}`);
});
