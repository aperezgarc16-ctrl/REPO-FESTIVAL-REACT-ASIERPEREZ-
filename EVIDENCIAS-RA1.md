# EVIDENCIAS-RA1

Navegador, Vite, HTML, CSS y JSX:
El navegador ejecuta HTML, CSS y JavaScript. Vite sirve el código en desarrollo y compila/empaqueta para producción. HTML es la base y el div root, CSS da estilo y JSX es sintaxis parecida a HTML dentro de JS que se transforma.
Ventajas: desarrollo rápido y componentes reutilizables.
Limitaciones: necesita compilación para producción y depende de JS en el cliente.

DevTools:
Elements: vi el HTML del DOM generado.
Console: vi el mensaje del clic.
Sources: vi los archivos de src.
Network: vi archivos JS/CSS cargados.

Error, React DevTools y Elements:
Quité una llave/etiqueta para provocar error de sintaxis y lo corregí. En React DevTools veo componentes y props (como el objeto concierto); en Elements veo ya las etiquetas HTML.

Script directo, módulo externo y evento:
Script directo va en el HTML y puede compartir ámbito global. Módulo externo usa type="module", tiene su propio ámbito y carga diferida. Evento en React es por ejemplo onClick en un botón.
Comentario de línea: // ejemplo
Comentario de bloque: /* ejemplo */

Recorrido hasta App:
index.html carga main.jsx, main.jsx monta App en #root, y App muestra Cabecera y ConciertoCard.

Pruebas:
Cambié el artista, probé el clic, arranqué con npm run dev y compilé con npm run build.