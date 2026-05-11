const app = require('./app');
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor CRUD corriendo en http://localhost:${PORT}`);
});