const request = require('supertest');
const app = require('./app');

describe('Pruebas para la API CRUD de Tareas', () => {
  
  // Prueba para obtener todas las tareas
  test('GET /tasks debe retornar una lista de tareas', async () => {
    const res = await request(app).get('/tasks');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    // Verificamos que al menos venga la tarea inicial que pusimos en app.js
    expect(res.body.length).toBeGreaterThan(0);
  });

  // Prueba para crear una nueva tarea
  test('POST /tasks debe crear una nueva tarea exitosamente', async () => {
    const nuevaTarea = { title: 'Completar la tarea de la nube' };
    const res = await request(app)
      .post('/tasks')
      .send(nuevaTarea);
    
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body.title).toBe(nuevaTarea.title);
    expect(res.body.completed).toBe(false);
  });

  // Prueba para eliminar una tarea
  test('DELETE /tasks/:id debe eliminar una tarea y retornar 204', async () => {
    // Primero creamos una para saber que ID borrar
    const temp = await request(app).post('/tasks').send({ title: 'Borrarme' });
    const idABorrar = temp.body.id;

    const res = await request(app).delete(`/tasks/${idABorrar}`);
    expect(res.statusCode).toBe(204);
  });
});