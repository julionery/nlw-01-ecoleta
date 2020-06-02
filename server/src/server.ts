import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log("Listagem de usuários");
    response.json(['Júlio', 'Diego', 'Karen', 'Nery']);
});

app.listen(3333);

