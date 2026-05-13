const express = require('express');
const app = express();
app.use(express.json());

// Base de datos volátil en memoria
let tasks = [
    { id: 1, title: "Estudiar para Nube", completed: false }
];

// Operaciones CRUD
app.get('/tasks', (req, res) => res.status(200).json(tasks));

app.post('/tasks', (req, res) => {
    const newTask = {
        id: tasks.length + 1,
        title: req.body.title,
        completed: false
    };
    tasks.push(newTask);
    res.status(201).json(newTask);
});

app.delete('/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);
    tasks = tasks.filter(t => t.id !== id);
    res.status(204).send();
});

// Requisito del Lab 5.2: Endpoint de salud
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok', version: '2.0.0' });
});

// comentario

module.exports = app;