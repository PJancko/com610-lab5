# Informe de Laboratorio: Implementación de CI/CD y Protección de Ramas

**Estudiante:** Pablo Alejandro Jancko Gallardo
**Materia:** Trabajando en la Nube
**Fecha:** Mayo 2026

---

## 1. Descripción del Proyecto
Se ha desarrollado una API REST funcional utilizando **Node.js** y **Express**. La aplicación gestiona una entidad de dominio denominada `Task` (Tareas), permitiendo realizar operaciones CRUD básicas (Crear, Leer y Eliminar).

Para garantizar la calidad del software, se integraron pruebas unitarias con **Jest** y **Supertest**, además de un análisis estático de código (Linting).

## 2. Configuración del Pipeline de CI
El flujo de trabajo de Integración Continua (CI) se configuró mediante **GitHub Actions** en el archivo `.github/workflows/ci.yml`. El pipeline automatiza los siguientes procesos:

1. **Checkout del código:** Obtención de la última versión del repositorio.
2. **Setup del entorno:** Configuración de Node.js v20.
3. **Instalación:** Uso de `npm ci` para garantizar consistencia en las dependencias.
4. **Linting:** Validación de estándares de código.
5. **Pruebas y Cobertura:** Ejecución de tests y generación de reportes de cobertura de código.

---

## 3. Evidencias de Funcionamiento

### A. Historial de ejecuciones en Actions
Esta captura muestra el historial de los flujos de trabajo disparados por los commits realizados al repositorio.
![Historial de Actions](./img/historial_actions.png)

### B. Detalle de un Workflow Exitoso y Cobertura
Evidencia de que todos los pasos del pipeline terminaron correctamente y el reporte de cobertura de Jest muestra un 100% (o el porcentaje alcanzado) en la lógica de `app.js`.
![Workflow Exitoso](./img/workflow_exitoso.png)

### C. Detalle de un Workflow Fallido
Para demostrar la efectividad del CI, se forzó un error intencionalmente (ej. cambiando un resultado esperado en los tests). El pipeline detectó el error y bloqueó la integración.
![Workflow Fallido](./img/workflow_fallido.png)

### D. Configuración de la Regla de Protección de Rama
Se configuró un *Ruleset* en la rama `main` para requerir que el check `build-and-test` pase obligatoriamente y que los cambios se realicen mediante Pull Request.
![Protección de Rama](./img/configuracion_regla.png)

### E. Bloqueo de Push Directo a Main
Como evidencia de la efectividad del Ruleset, se intentó realizar un `git push origin main` desde la terminal local. El servidor de GitHub rechazó la operación indicando que se han violado las reglas del repositorio, específicamente el requerimiento de un Pull Request y de los checks de estado.

![Error de Push Directo](./img/error_push_directo.png)
---

## 4. Conclusiones y Reflexión
La implementación de un pipeline de **Integración Continua (CI)** es fundamental en el desarrollo de software moderno por las siguientes razones:

* **Detección temprana de errores:** Las pruebas se ejecutan automáticamente en cada cambio, evitando que errores lleguen a la rama principal.
* **Seguridad y Cumplimiento:** Las reglas de protección de rama aseguran que ningún desarrollador pueda saltarse los controles de calidad, forzando un flujo de revisión por pares o validación automatizada.
* **Eficiencia:** Al automatizar tareas repetitivas como el linting y la ejecución de tests, el desarrollador puede enfocarse en la lógica del negocio, confiando en que el sistema de CI actuará como una malla de seguridad.

En este laboratorio, se demostró cómo pasar de un desarrollo local desprotegido a un entorno profesional en la nube que garantiza la integridad del código en todo momento.