# CHILD_PROCESS CON FORK

Realizar un servidor en express que contenga una ruta raíz '/' donde se represente la cantidad de visitas totales a este endpoint (no usar session).
Se implementará otra ruta '/calculo-bloq', que permita realizar una suma incremental de los números del 0 al 100000 con el siguiente algoritmo.

```javascript
function sumar() {
	let suma = 0;
	for (let i = 0; i < 5e9; i++) {
		suma += 1;
	}
	return suma;
}
```

Comprobar que al alcanzar esta ruta en una pestaña del navegador, el proceso queda en espera del resultado. Constatar que durante dicha espera, la ruta de visitas no responde hasta terminar este proceso.
Luego crear la ruta '/calculo-nobloq' que hará dicho cálculo forkeando el algoritmo en un child_process, comprobando ahora que el request a esta ruta no bloquee la ruta de visitas. Asegurarse de que una vez finalizado el proceso, el worker se cierra correctamente.
