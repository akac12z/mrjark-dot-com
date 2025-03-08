# Estructura de Carpetas del proyecto

Last Update: **08/03/2025**

> _Breve explicación de cómo están construidas y pensadas las rutas de carpetas del proyecto para aquella persona que las quiera copiar o para mi yo del futuro por si tiene un lapso mental y se le olvida._

Estas carpetas las voy a ir definiendo de arriba a abjado y siempre en formato `src/*` excepto las de `public/*` que serán una carpeta a parte y aislada.

## Disclaimers

- Hago diferenciación entre páginas y contenidos. Una **página** es aquello que es estático y está dentro de `/src/pages/*` mientras que un **contenido** es aquellos que está dentro de la carpeta `/src/content/*`. Por ende, a la hora de generar los OpenGraph y tener ciertos archivos estáticos, los trataré de forma distinta. Mientras que a los archivos de las páginas específicas las tendré dentro de `/src/assets/images/OpenGraph/pages/*`, los archivos y OpenGraph 'dinámicos', los tendré dentro de cada una de sus carpetas dentro del `/src/content/{carpeta_del_content}/{nombre_del_content}/*.{png, jpeg, webp, jpg, ...}`.

## /public

Aquí están los icons y favicons del proyecto y la imagen del Open Graph general -_la morveré en un futuro a `src/assets/images/OpenGraph`_.

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

> _Esto tengo que pensarlo un poco porque quizá esté mejor ordenado dentro de cada una de las carpetas del content y ahí tener todos los recursos de mismo contenido junto con su index.mdx. Y los OpenGraph meterlos a la ruta `/src/assets/OpenGraph` y dividirla entre pages y content_

### /src/components/icons

Todos los iconos (svg) que tenga la web y los ordenaré dependiendo de donde se encuentre dentro de la carpeta `/src/pages/*` y también por `/src/content/*`. Es decir, si por ejemplo, la página _bias_ está dentro de _behavior_ **no haré** una carpeta dentro de icons que sea `.../icons/behavior/bias`. Sino que lo tendré todo en el root de la carpeta icons como dos elementos totalmente distintos.

Y en la carpte de `/src/components/icons/shared` tengo los icons que se compoarten en toda la web como puede ser el Logo.

### /src/components/pages

Aquí estará la UI de toda la web. Es decir, todos los elementos **generales** y se dividirán como los **icons**, donde no tendré en cuenta las subcarpetas sino que las tendré todas en el root de estas pages como elementos distintos.

Y dentro de cada una de estas páginas, tendrá todos los elementos de dicha página.

Algunas páginas de contenido se estructurarán en 3 partes:

1. Header: Una breve intro de qué se trata en esa página.
2. Cards (si los hubiere): La previsualización los **content** dentro de estas pages.
3. Page: Es la unión de ambas anteriores y esta es la que se llamará en las pages concretas de cada una de las rutas del proyecto.

#### /src/components/pages/{page_name}/icons

Esta carpeta puede o no estar. Aquí estarán los icons que puedan hacer falta para cada uno de los elementos de previsualización de las páginas. Por ejemplo, en las cards de los bias, van a tener cada una un icon distinto dependiendo del bias descrito y esos icons los tendré en esta carpeta que estaria en `/src/components/pages/bias/icons`.

Con esto me evito tener archivos muy grandes y sigo el principio de _componetización_ y siendo una forma más sencilla de consumir el contenido y entenderlo.

### /src/components/SEO

Carpeta enfocada al SEO de la web con los Metatags, OpenGraph y las cards de Twitter.

Aquí diferencio:

- /Content: Todo lo que hay dentro de la carpeta `/src/content/*` ya que tiene un trato distinto por que no es una _website_ sino un _article_.
- /Pages: Todo lo que esté dentro de `/src/pages/*`. Estas tienen la categoría de _website_ pero le doy la de _article_ porque escribo en ellas el header y son páginas que tratan de ciertos temas como son la de /bias o /biblioteca. Pero estas el SEO no dependen del contenido que haya en ellas ya que son "estáticas".
- BaseHead.astro: Es lo que todas las páginas deben tener, sea pages o content como son los UTF-8, el responsive, entre otros para no estar repitiendo siempre lo mismo ya que es contenido que no depende de nada más.
- Favicons.astro: donde están todos los icons, de todos los tamaños para todas las plataformas y OS.
- /404: Un intento de hacer que se peuda ver el contenido de la página 404.

#### /src/components/SEO/pages/{page_name}/

Cada página dentro de su carpeta tendrá:

1. Un componente de Astro con los metatags y twitter cards que tendrá el nombre de **{page_nameSEO}.astro** donde estará recogidos todos los metas necesarios para los artículos
2. Archivo de keywords específico para esa página en concreto con el formato específico para cumplir con la interface de las keywords.

Pueden haber {page_nameSEO}.astro distinas ya que pueden ser videos, libros, y para cada una de ellas hay tags especiíficos.

Puedes buscar más información en:

- [The Open Grapth Protocol](https://ogp.me/)
- [Twitter for Devs](https://developer.x.com/en/docs/x-for-websites/cards/overview/abouts-cards)

#### /src/components/SEO/content/{content_name}/

Cada content, que serán todos aquellos que estén en la ruta `/src/content/*` tendrán un componente de Astro distinto con un nombre identificativo con el contenido **{content_nameSEO}.astro** porque cada uno tendrá unas entry distintas que estarán definidas en las collections como las **keywords**.

Y es obligatorio que se repita el contenido porque cada uno tiene unos entry distintos.

### /src/components/shared

Esta carpeta está destinada a tener todos aquellos componentes que se compartan a lo largo de la web y estarán organizados a su vez por subcarpetas donde están:

- **/components/bottons**: aquí están todos los elementos que son (o tienn forma de o funcionalidad estilo) botones. Como son _go to top_ o _go back_ y los futuros que se creen. Si hubieren varios botones que se pudieran agrupar por una categoría en concreto, se crearía teniendo así una subcarpeta estilo _/components/bottons/{carpeta-de-ejemplo}_ .
- **/components/analytics**: elementos que tengan que ver con toda la medición de la web, cookies (si las hubiere) y demás.
- **/components/headerMenus**: estos son los elementos que corresponden al navbar.
- Elementos "sueltos" que al ser únicos en su categoría, están en la general.

### /src/components/statics

Son las páginas y elementos de las páginas que no tienen una función SEO específica como son la home o el about y el cv.

Dentro de esta tengo:

- Carpeta de markdowns: esta es donde escribo los contenidos de estas pages.
- Elementos .astro: que son aquellos elementos donde se renderiza el contenido del markdown y los que se colocan en las páginas respectivas con sus nombres en las rutas `/src/pages/*`.

### /src/components/tags

Carpeta donde pondré los elementos que tengan que ver con los tags (work in progress).

### /src/components/test

Carpeta para colocar los elementos en los cuales ando trabajando y que no tengo seguro si poner o como tenerlos en la UI.

### /src/content

Carpeta de Astro donde se renderizan los contenidos. Si quieres saber más sobre ella, ve a [defineCollection()](https://docs.astro.build/en/reference/modules/astro-content/#definecollection) en Astro.

### /src/global

Aquí está el contenido estático de la propia web y páginas como puede ser:

- Información de la web
- Información de las páginas como el title o description
- Header links (_este seguramente acabe cambiándolo a `/src/components/shared`_)

### /src/interfaces

Dentro de la carpeta están todas las interfaces que hacen que funcione el proyecto salvo aquellas que sean "insignificates" y que no tengan mucha importancia más a allá de poner el title o description.

Cada una de estas interfaces que se coloquen deben tener el nombre de la siguiente forma: **{para_que_es_la_interfaz}.interface.ts**.

No es más grande gracias al esquema de [Zod](https://zod.dev/).

### /src/layouts

Tengo dos distintos:

- MainLayout: que es para todas las páginas en general y es **obligatorio** junto con sus títulos de la página y descripción específicos para cada una.
- 404Layout: que solo es para la 404 page y la única diferencia es que es _nofollow_.

### /src/pages

Donde van todas las páginas del proyecto.

### /src/styles

Estilos globales de mi página con sus "atajos" para tailwind

### /src/tuils

Elementos que me son útiles para ciertas funcionalidades. Básicamente es el JavaScript/TypeScript que me hace falta para ciertas cosas y que no quiero tener en los componentes como un script.
