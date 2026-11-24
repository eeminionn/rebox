# RE:BOX

Landing de RE:BOX: armado de la caja, usos del organizador y empaques para marcas de calzado.

[Ver el sitio publicado](https://eeminionn.github.io/rebox/)

## Desarrollo

Sitio estático con HTML, CSS y JavaScript, sin compilación ni servicios externos para las interacciones.

```sh
python3 -m http.server 4173
```

La raíz del repositorio contiene el sitio. GitHub Pages publica `main` desde `/`. Para probar los saltos a un momento del video en Safari, el servidor local debe admitir solicitudes HTTP Range; GitHub Pages las admite. El servidor básico de Python permite ver la página y reproducir el video, pero no sirve para verificar esos saltos.

## Contenido e idiomas

- `index.html`: contenido inicial en inglés y estructura accesible.
- `content.js`: todos los textos en inglés y español, incluidos los estados interactivos.
- `languages.js`: selector EN/ES mediante claves, sin recargar ni reiniciar las interacciones. Cada visita comienza en inglés.
- `script.js`: guía por scroll, comparación de imágenes, organizador de ocho espacios, precios por volumen, galería y accesos al video.
- `styles.css`: estilos adaptables y alternativa sin animación para movimiento reducido.

El selector de idioma está en el extremo superior derecho. Las fuentes locales Bricolage Grotesque y Montserrat incluyen sus licencias en `assets/fonts/`.

## Actualización del 24 de noviembre de 2026

Fuente de contenido: **LAMINA RE BOX copia.pdf**, entregada por Emilio. La lámina completa está disponible en `assets/documents/rebox-project-sheet.pdf` y desde la página. Se mantuvo el enfoque para compradores: características, armado, desarrollo del diseño, encuesta, servicio para marcas y precios. El canvas completo, sus referencias y sus cifras internas se pueden consultar en el PDF.

Las seis fotos `assets/images/lamina-*.webp` proceden directamente de la lámina. Se convirtieron de CMYK a RGB y se optimizaron sin cambiar su contenido. La foto final y el video confirman ocho compartimentos.

El video `assets/video/armado-rebox.mp4` procede de **WhatsApp Video 2026-11-24 at 15.42.05.mp4**. Se optimizó a H.264, 1280 × 720, inicio rápido, 38,6 segundos y sin audio, igual que el original. Las seis fotos `armado-01.webp` a `armado-06.webp` son fotogramas del mismo video, en los segundos 5, 11,5, 18,5, 27,5, 34,5 y 37,5. Las imágenes generadas de la guía anterior ya no se utilizan.

La guía refleja la transformación observada: abrir, separar la tapa, desprender piezas por los precortes, unir las divisiones y colocarlas en la base. El video se inicia por acción del usuario. Los controles nativos permiten pausarlo, avanzar y verlo a pantalla completa.

### Datos y criterios editoriales

La encuesta se presenta con su muestra: 22 personas en Chile, de 20 a 58 años; 95 %, 91 % y 50 %. No se presenta como una medición de todas las personas de Chile ni como una prueba de compra del producto terminado.

Los precios son estimaciones de la lámina en pesos chilenos por unidad: 1–49 cajas, $3.100; 50–199, $2.500; 200–499, $2.000; 500–999, $1.800; 1.000 o más, $1.600. La calculadora usa el precio del tramo para todo el pedido y muestra un anticipo de 50 %. Los términos indicados son transferencia bancaria, 50 % de anticipo y 50 % contra entrega, con pedidos mensuales o por temporada. No se añadió un checkout ni un canal de contacto no proporcionado.

No se reprodujeron en el texto comercial los siguientes datos ambiguos de la lámina:

- **12 %:** se describe como material reciclable, mientras el material anterior lo describía como porcentaje reciclado. No son equivalentes.
- **124 millones:** la nueva lámina usa la palabra “shoes”, sin aclarar pares o unidades.
- **Margen bruto 43,8–74,3 %:** el extremo superior no coincide con el costo variable de $900 y el precio máximo de $3.100. Con esos valores, el rango calculado sería 43,75–70,97 %. No se trasladaron los costos internos ni los márgenes al flujo de compradores. El PDF original se conserva sin corregirlo.

Bestias figura en un apartado con las fotos del diseño presentado. No se añadió ninguna afirmación sobre un contrato o piloto confirmado. La misión y la visión expresan el propósito del proyecto, sin presentarse como citas textuales de la lámina.

Se revisaron los dos idiomas con [Wikipedia:Signs of AI writing](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing) como referencia editorial: descripciones concretas, títulos informativos, sin eslóganes repetidos, atribuciones vagas, conclusiones decorativas, fuentes inventadas ni marcadores de borrador. Esto describe una revisión de estilo; no es una certificación de autoría.

La explicación breve de la Ley de Responsabilidad Extendida del Productor se contrastó con el [Ministerio del Medio Ambiente](https://mma.gob.cl/contacto/preguntas-frecuentes/economia-circular-y-gestion-de-residuos/). No se afirma que usar la caja acredite por sí solo el cumplimiento legal.
