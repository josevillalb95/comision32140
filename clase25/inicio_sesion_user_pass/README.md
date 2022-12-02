# INICIO DE SESIÓN CON USERNAME Y PASSWORD

Basado en un proyecto express que almacene sesiones de usuario, realizar un sistema que:

1. Tenga una vista de registro de usuario (nombre, password y dirección) que almacene dicha información en un array en memoria.
2. Posea un formulario de login (nombre y password) para permitir a los usuarios registrados a acceder a su información.
3. Si accede un usuario no registrado o las credenciales son incorrectas, el servidor enviará un error (puede ser a través de un objeto plano o de una plantilla).
4. Si se quiere registrar un usuario que ya está registrado, el servidor enviará un error (puede ser a través de un objeto plano o de una plantilla).
5. En el caso de que sea válido el login, se iniciará una sesión de usuario y se mostrarán los datos completos del usuario en una ruta específica (/datos).👉 Se puede mostrar la información a través de un objeto plano o de una plantilla.
6. Implementar el cierre de sesión en una ruta '/logout' que puede llamar desde la barra de dirección del browser, o desde un botón en la misma plantilla de datos.
7. Esa ruta '/datos' sólo estará disponible en caso de estar en una sesión de usuario activa. caso contrario, se redireccionará a la vista de login.
8. Como extra podemos implementar un contador de visitas, que se muestre sobre la vista de datos.
   **NOTA:** no utilizar passport.
