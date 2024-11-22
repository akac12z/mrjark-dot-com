# Estructura de Carpetas del proyecto

> *Breve explicación de cómo están construidas y pensadas las rutas de carpetas del proyecto para aquella persona que las quiera copiar o para mi yo del futuro por si tiene un lapso mental y se le olvida.*

Estas carpetas las voy a ir definiendo de arriba a abjado y siempre en formato `src/*` excepto las de `public/*` que serán una carpeta a parte y aislada.

## Disclaimers

- Hago diferenciación entre páginas y contenidos. Una **página** es aquello que es estático y está dentro de `/src/pages/*` mientras que un **contenido** es aquellos que está dentro de la carpeta `/src/content/*`. Por ende, a la hora de generar los OpenGraph y tener ciertos archivos estáticos, los trataré de forma distinta. Mientras que a los archivos de las páginas específicas las tendré dentro de `/src/assets/images/OpenGraph/pages/*`, los archivos y OpenGraph 'dinámicos', los tendré dentro de cada una de sus carpetas dentro del `/src/content/{carpeta_del_content}/{nombre_del_content}/*.{png, jpeg, webp, jpg, ...}`.

## /public

Aquí están los icons y favicons del proyecto y la imagen del Open Graph general -*la morveré en un futuro a `src/assets/images/OpenGraph`*.

## /src/assets

Elementos del proyecto que son estáticos, que no van a cambiar y que son imprescindibles para el proyecto y que quiero que les ponga un hash a cada una de ellas como son:

- Las fuentes del proyecto `/src/assets/fonts/*`
- Imagenes estáticas del proyecto como pueden ser las de mi perfil, las de la página 404, el .git, o los distintos OpenGrapth de cada una de las **páginas**.

Estas últimas las he estructurado en:

- `/404`: Todos los elementos que tengan que estar en la página del 404 como es el .gif y todos aquellos assets estáticos que se **vean** al caer en la página.
- `/mii`: Las imagenes de un servidor que pueda poner en un about o por ahí pero que no sean parte de un componente
- `/OpenGraph`: Las imágenes que irán como Open Graph de cada una de las **páginas** específicas. Y con páginas me refiero a todas aquellas que estén dentro de `/src/pages/` y sus subpáginas. No incluiré aquí los OpenGraph de los contenidos.

## /src/components

Todos los elementos, por muy pequeños que sean, que conforman el sitio web irán aquí dentro.

### /src/components/assets

Aquí estarán las imagenes o componentes visuales estáticos de los contenidos ya sean los OpenGraph de estos o las imágenes de los propios contenidos.

- `/images/contents`: Aquí estarán cada las carpetas que pertenecerán a cada content que tenga el proyecto.

  Por ejemplo, si tengo la carpeta `/src/content/bias/efecto-ancla`, en la ruta `/images/contents` habrá subruta que será (toda junta) `/images/contents/bias/efecto-ancla` donde estarán las imágenes de ese contenido.

- `/images/OpenGraph`: todos los OpenGrapth de los **content**.

>*Esto tengo que pensarlo un poco porque quizá esté mejor ordenado dentro de cada una de las carpetas del content y ahí tener todos los recursos de mismo contenido junto con su index.mdx. Y los OpenGraph meterlos a la ruta `/src/assets/OpenGraph` y dividirla entre pages y content*

### /src/components/icons

Todos los iconos (svg) que tenga la web y los ordenaré dependiendo de donde se encuentre dentro de la carpeta `/src/pages/*` y también por `/src/content/*`. Es decir, si por ejemplo, la página *bias* está dentro de *psychology* **no haré** una carpeta dentro de icons que sea `.../icons/psychology/bias`. Sino que lo tendré todo en el root de la carpeta icons como dos elementos totalmente distintos.

### /src/components/pages

Aquí estará la UI de toda la web. Es decir, todos los elementos **generales** y se dividirán como los **icons**, donde no tendré en cuenta las subcarpetas sino que las tendré todas en el root de estas pages como elementos distintos.

Y dentro de cada una de estas páginas, tendrá todos los elementos de dicha página.

Algunas páginas de contenido se estructurarán en 3 partes:

1. Header: Una breve intro de qué se trata en esa página.
2. Cards (si los hubiere): La previsualización los **content** dentro de estas pages.
3. Page: Es la unión de ambas anteriores y esta es la que se llamará en las pages concretas de cada una de las rutas del proyecto.

#### /src/components/pages/{page_name}/icons

Esta carpeta puede o no estar. Aquí estarán los icons que puedan hacer falta para cada uno de los elementos de previsualización de las páginas. Por ejemplo, en las cards de los bias, van a tener cada una un icon distinto dependiendo del bias descrito y esos icons los tendré en esta carpeta que estaria en `/src/components/pages/bias/icons`.

Con esto me evito tener archivos muy grandes y sigo el principio de *componetización* y siendo una forma más sencilla de consumir el contenido y entenderlo.

### /src/components/SEO

Carpeta enfocada al SEO de la web con los Metatags, OpenGraph y las cards de Twitter.

Aquí diferencio:

- /Content: Todo lo que hay dentro de la carpeta `/src/content/*` ya que tiene un trato distinto por que no es una *website* sino un *article*.
- /Pages: Todo lo que esté dentro de `/src/pages/*`. Estas tienen la categoría de *website* pero le doy la de  *article* porque escribo en ellas el header y son páginas que tratan de ciertos temas como son la de /bias o /book-notes. Pero estas el SEO no dependen del contenido que haya en ellas ya que son "estáticas".
- BaseHead.astro: Es lo que todas las páginas deben tener, sea pages o content como son los UTF-8, el responsive, entre otros para no estar repitiendo siempre lo mismo ya que es contenido que no depende de nada más.
- Favicons.astro: donde están todos los icons, de todos los tamaños para todas las plataformas y OS.
- /404: Un intento de hacer que se peuda ver el contenido de la página 404.

#### /src/components/SEO/{page_name}/
