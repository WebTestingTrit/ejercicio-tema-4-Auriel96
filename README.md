# Práctica pruebas funcionales con Cypress

## Definición

Probar el funcionamiento de una web usando _Cypress_.
Preferiblemente usa una tuya que tenga una parte accesible al público. 
Si no puedes o quieres, te propongo que uses https://www.timeanddate.com/

### Requerimientos

Probar al menos 

- una interacción de navegación del usuario
- una interacción de tecleo
- una interacción de click

Crear algún comendo custom

Desacoplar el API mediante fixtures si es posible

#### Recomendaciones

Seguir la estructura _Arrange-Act-Assert_

En los mensajes escritos usar el patrón _Given-When-Then_

### Commits y deploy

- Se recomienda usar convenio de nombrado durante los commits.

- Documentación [standard-version](https://www.npmjs.com/package/standard-version) to produce a changelog file from [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0-beta.4/)

- Para subir los cambios usar el script `npm run deploy` Se encarga de hacer el push y crear un changeLog con lo hecho.

### Code style y Prettier

-  Recomendado [extension](https://github.com/prettier/prettier-vscode) for VSCode
