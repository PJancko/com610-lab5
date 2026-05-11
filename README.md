🚀 CRUD Task API - CI/CD con GitHub Actions
Este proyecto es una API REST básica desarrollada con Node.js y Express para la gestión de tareas. El objetivo principal es demostrar la implementación de un pipeline de Integración Continua (CI) y la aplicación de reglas de protección de ramas en GitHub.

🛠️ Tecnologías Utilizadas
Lenguaje: Node.js (v20)

Framework: Express

Pruebas: Jest & Supertest

CI/CD: GitHub Actions

Linter: ESLint

📋 Características del Proyecto
Entidad de Dominio: Tareas (Tasks).

Operaciones:

GET /tasks: Obtener todas las tareas.

POST /tasks: Crear una nueva tarea.

DELETE /tasks/:id: Eliminar una tarea por ID.

Calidad de Código: Pipeline automatizado que ejecuta linting y pruebas unitarias con reporte de cobertura en cada Pull Request.

⚙️ Configuración del Pipeline de CI
El archivo .github/workflows/ci.yml está configurado para realizar las siguientes tareas automáticamente:

Checkout del código fuente.

Instalación de dependencias mediante npm ci.

Análisis estático (Linting) para asegurar estándares de codificación.

Ejecución de Pruebas unitarias.

Generación de Cobertura de código (Code Coverage).

🛡️ Reglas de Protección
La rama main está protegida mediante un Ruleset que exige:

La creación de un Pull Request antes de fusionar código.

Que el check de estado build-and-test finalice exitosamente.

📖 Documentación del Laboratorio
Puedes encontrar el informe completo con capturas de pantalla, evidencias del pipeline (exitoso/fallido) y conclusiones en el siguiente enlace:

- [Ver el informe de laboratorio](./informe.md)