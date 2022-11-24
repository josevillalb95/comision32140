# Inyectar cookies en el frontend

## Realizar un programa de backend que permita gestionar cookies desde el frontend. Para ello:

1. Definir una ruta “cookies”.
2. Definir un método POST que reciba un objeto con el nombre de la cookie, su valor y el tiempo de duración en segundos, y que genere y guarde dicha cookie.
3. Definir un método GET que devuelva todas las cookies presentes.
4. Definir un método DELETE que reciba el nombre de una cookie por parámetro de ruta, y la elimine.
   **NOTA 1:** Utilizar la librería express como estructura de servidor.
   **NOTA 2:** Si algún parámetro recibido es inválido, o directamente inexistente, el servidor devolverá un objeto de error.
   Ej:
    ```javascript
    { error: 'falta nombre ó valor' } o { error: 'nombre no encontrado' }
    ```

Si todo sale bien, devolver el objeto

```javascript
{
	proceso: 'ok';
}
```

**NOTA 3:** Si el tiempo no está presente, generar una cookie sin tiempo de expiración.
**NOTA 4:** Generar los request con varios navegadores (Chrome, edge, Firefox) para simular los distintos clientes en forma local.
