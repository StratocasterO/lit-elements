# CREACIÓN DE WEB COMPONENTS CON LITELEMENT 
==========================================================

## Introducción 

## HTML y CSS3

** Hacemos el ejercicio en JsFiddle.

Vamos a crear una página básica HTML en la que probaremos etiquetas y atributos 
de interés.

El ejercicio se puede hacer en la página https://jsfiddle.net/ .

Empezaremos creando la página HTML tal que:

```html
<!doctype html>
<html>
  <head>
  </head>
  <body>
    <h1>¡Hola Mundo!</h1>
  </body>
</html>
```

Añadimos un título a la página. 

Añadimos también un formulario y un input de texto en el, 
al que añadimos una id para identificarlo.

```html
<!doctype html>
<html>
  <head>
    <title>This is a test</title>
  </head>
  <body>
    <h1>¡Hola Mundo!</h1>
    <form>
        <input id="formNombre" type="text"/>
        <br />
        <button>Enviar</button>
    </form>
  </body>
</html>
```

En este punto podemos comprobar que, si le damos al botón enviar, se 
envía el formulario, tenga o no valor el input de texto.

Si añadimos al input del formulario el atributo **required**, no podremos 
enviarlo a no ser que le demos un valor.

```html
<!doctype html>
<html>
  <head>
    <title>This is a test</title>
  </head>
  <body>
    <h1>¡Hola Mundo!</h1>
    <form>
        <input id="formNombre" type="text" required />
        <br />
        <button>Enviar</button>
    </form>
  </body>
</html>
```

El atributo **placeholder** nos ayuda a identificar qué ha de contener 
un input de texto.

```html
<!doctype html>
<html>
  <head>
    <title>This is a test</title>
  </head>
  <body>
    <h1>¡Hola Mundo!</h1>
    <form>
        <input id="formNombre" type="text" required placeholder="Nombre" />
        <br />
        <button>Enviar</button>
    </form>
  </body>
</html>
```

Hay tipos de input más específicos, como por ejemplo email, que añaden 
una validación previa al envío, comprobando que el contenido cumpla un 
patrón de texto predeterminado.

```html
<!doctype html>
<html>
  <head>
    <title>This is a test</title>
  </head>
  <body>
    <h1>¡Hola Mundo!</h1>
    <form>
        <input id="formNombre" type="text" required placeholder="Nombre" />
        <br />
		<input id="formEmail" type="email" placeholder="email" />
		<br />
        <button>Enviar</button>
    </form>
  </body>
</html>
```

Existe también el input de tipo **number** que cuenta con atributos 
específicos, min y max, para delimitar los números permitidos.

```html
<!doctype html>
<html>
  <head>
    <title>This is a test</title>
  </head>
  <body>
    <h1>¡Hola Mundo!</h1>
    <form>
        <input id="formNombre" type="text" required placeholder="Nombre" />
        <br />
		<input id="formEmail" type="email" placeholder="email" />
		<br />
		<input id="formAge" min="18" max="99" type="number"/>
		<br />
        <button>Enviar</button>
    </form>
  </body>
</html>
```

También podemos añadir etiquetas a los input para mejorar su usabilidad.

```html
<!doctype html>
<html>
  <head>
    <title>This is a test</title>
  </head>
  <body>
    <h1>¡Hola Mundo!</h1>
    <form>
		<label>Nombre</label>
        <input id="formNombre" type="text" required placeholder="Nombre" />
        <br />
		<label>Email</label>
		<input id="formEmail" type="email" placeholder="email" />
		<br />
		<label>Edad</label>
		<input id="formAge" min="18" max="99" type="number"/>
		<br />
        <button>Enviar</button>
    </form>
  </body>
</html>
```


Existen más tipos de input, como por ejemplo **date** y **color**.

```html
<!doctype html>
<html>
  <head>
    <title>This is a test</title>
  </head>
  <body>
    <h1>¡Hola Mundo!</h1>
    <form>
		<label>Nombre</label>
        <input id="formNombre" type="text" required placeholder="Nombre" />
        <br />
		<label>Email</label>
		<input id="formEmail" type="email" placeholder="email" />
		<br />
		<label>Edad</label>
		<input id="formAge" min="18" max="99" type="number"/>
		<br />
		<input id="formDate" type="date"/>
		<br />
		<input id="formColor" type="color"/>
		<br />
        <button>Enviar</button>
    </form>
  </body>
</html>
```

### HTEX02 - Adición de estilos a formulario elaborado en HTEX01 - 15 min

Partiremos de la página realizada en el ejercicio anterior.

```html
<!doctype html>
<html>
  <head>
    <title>This is a test</title>
  </head>
  <body>
    <h1>¡Hola Mundo!</h1>
    <form>
		<label>Nombre</label>
        <input id="formNombre" type="text" required placeholder="Nombre" />
        <br />
		<label>Email</label>
		<input id="formEmail" type="email" placeholder="email" />
		<br />
		<label>Edad</label>
		<input id="formAge" min="18" max="99" type="number"/>
		<br />		
        <button>Enviar</button>
    </form>
  </body>
</html>
```

En el código de la página utilizamos las **etiquetas** HTML para indicar 
la maquetación de la página.

Se pueden añadir, como hemos visto, atributos id a los elementos.

Además, también se puede añadir el atributo **class**, que puede contener uno 
o varios valores, que sirvan para luego **seleccionar** ese elemento y aplicarle 
estilos.

Por ejemplo, un input de texto con id y class.

```html
<input id="formNombre" class="centrado caps otraClase" type="text" required placeholder="Nombre" />
```

CSS nos permite aplicar estilos al HTML de una página, pudiendo cambiar por 
ejemplo el color de una tipografía, su tamaño o centrar un componente.

Para aplicar estos estilos necesitamos alguna forma de poder **seleccionar** 
a qué partes del HTML aplicarlos y ahí es donde entran los **selectores** CSS,
que utilizarán los mecanismos que acabamos de ver antes.

Si queremos seleccionar en base a una **etiqueta HTML** lo haríamos tal que:
```css
  input {
  }
```

Si queremos seleccionar en base a una **id** lo haríamos tal que:
```css
  #formNombre {
  }
```

Si queremos seleccionar en base a una **clase** lo haríamos tal que:
```css
  .centrado {
  }
```

Los selectores se pueden **combinar** de varias formas:
```css
  input .centrado {
}
```

Vamos a ver los selectores en un ejemplo.

El objetivo será poner la tipografía de cada uno de los 3 inputs que tenemos 
en nuestro formulario de un color distinto, utilizando distintos selectores.

Para cambiar el color de la tipografía usaremos la propiedad **color**.

Con este selector, pondremos el texto de todos los inputs en rojo 
(podríamos poner solo input también).

```css
form input {
	color: red;
}
```

Ahora añadimos a un input, por ejemplo el email, la clase "green".

```css
<input id="formEmail" class="green" type="email" placeholder="email" />
```

Y CSS apropiado para seleccionar el HTML que tenga la clase "green" y poner 
el color de su tipografía verde.

```css
.green {
	color: green;
}
```

Por último, usaremos una de las id, la del input de texto del nombre por ejemplo, 
para seleccionarlo y poner el color de su tipografía azul.

```css
#formNombre {
	color: blue;
}
```

Y así nos quedaría cada input con el texto que contiene de un color distinto.

El HTML sería:

```html
<!doctype html>
<html>
  <head>
    <title>This is a test</title>
  </head>
  <body>
    <h1>¡Hola Mundo!</h1>
    <form>
		<label>Nombre</label>
        <input id="formNombre" type="text" required placeholder="Nombre" />
        <br />
		<label>Email</label>
		<input id="formEmail" class="green" type="email" placeholder="email" />
		<br />
		<label>Edad</label>
		<input id="formAge" min="18" max="99" type="number"/>
		<br />		
        <button>Enviar</button>
    </form>
  </body>
</html>
```html


Y el CSS

```css
input {
  color: red;
}

.green {
  color: green;
}

#formNombre {
  color: blue;
}
```

### HTEX03 - Recogida de datos de formulario: 
	uso de localStorage y sessionStorage - 60 min

En este ejercicio vamos a almacenar y recuperar datos introducidos en un 
formulario utilizando para ello LocalStorage y SessionStorage.

Ambas son parte de las APIs de Web Storage, que nos sirven para almacenar 
datos en formato de pares clave/valor en el navegador.

La diferencia fundamental entre ambas es que en SessionStorage los datos 
persisten en lo que dure la sesión en la que se han almacenado, mientras 
que en LocalStorage persisten incluso al cerrar el navegador.

NOTA - Para ver los datos que almacenemos en los ejemplos, en Chrome 
tendremos que pulsar la tecla F12, en el menú que aparece seleccionar 
"Application" y ahí veremos en la barra lateral la sección "Storage", 
que contiene Local Storage y Session Storage.

Partiremos de la página HTML diseñada en el ejercicio HTEX01 y podremos 
usar también la página https://jsfiddle.net/ para resolver el ejercicio.

Empezaremos añadiendo una función Javascript que recogerá el nombre 
que haya en el input formNombre del formulario. Además, almacenará 
tanto en localStorage como en sessionStorage su valor asociado 
a la "key" name. Esta "key" se usará luego para recuperar el valor.

Con "event.preventDefault();" evitaremos que se envíe el formulario.

```javascript
function storeUserData() {
	console.log("storeUserData");
	event.preventDefault();

	var name = document.getElementById("formNombre").value;
	localStorage.setItem("name", name);
	sessionStorage.setItem("name", name);
}
```

Añadimos un botón al formulario para iniciar el proceso de guardado y a su 
evento click asociamos como función manejadora storeUserData.

```html
<button onclick="storeUserData()">Guardar</button>
```

En este punto podremos comprobar en el navegador que se haya almacenado 
correctamente el valor. Además, si abrimos/cerramos el navegador y/o abrimos 
una nueva pestaña, podremos ver la diferencia en la persistencia de localStorage 
y sessionStorage.

A continuación vamos a hacer el proceso inverso: obtendremos desde localStorage 
el nombre almacenado y lo pintaremos en el input apropiado del formulario.

```javascript
function getUserData() {
	console.log("getUserData");
	event.preventDefault();

	var nameInput = document.getElementById("formNombre");
	nameInput.value = localStorage.getItem("name");
}
```

Añadimos un botón para recuperar el nombre asociando la función manejadora 
a getUserData.

```html
<button onclick="getUserData()">Recuperar</button>
```

También podemos guardar varios elementos del formulario al mismo tiempo.
Para ello, podemos utilizar objetos Javascript y guardarlos en formato JSON.
Así luego podremos hacer el proceso inverso: recuperar los datos almacenados 
en JSON y pasarlos a objetos Javascript, pudiendo asignarlos a los campos 
del formulario apropiados.

Refactorizamos la función storeUserData para que:

· Recoja el nombre y el email del formulario.
· Usando un objeto, agrupe sus valores.
· Convierta el valor del objeto Javascript a JSON y lo almacene.

```javascript
function storeUserData() {

	console.log("storeUserData");
	event.preventDefault();
	
	var name = document.getElementById("formNombre").value;
	var email = document.getElementById("formEmail").value;

	var userData = {
		"name": name,
		"email": email
	};

    localStorage.setItem("userDataJSON", JSON.stringify(userData));
}
```

Refactorizamos también getUserData para que:

· Recupere los datos guardados en JSON.
· Los convierta a una variable Javascript.
· Extraiga los datos y los asigne a los inputs apropiados del formulario.

```javascript
function getUserData() {
	console.log("getUserData");
	event.preventDefault();

	var userData = JSON.parse(localStorage.getItem("userDataJSON"));
	
	document.getElementById("formNombre").value = userData.name;
	document.getElementById("formEmail").value = userData.email;	
}
```

El HTML quedaría tal que:

```html
<!doctype html>
<html>
  <head>
    <title>This is a test</title>
  </head>
  <body>
    <h1>¡Hola Mundo!</h1>
    <form>
		<label>Nombre</label>
        <input id="formNombre" type="text" required placeholder="Nombre" />
        <br />
		<label>Email</label>
		<input id="formEmail" type="email" placeholder="email"/>
		<br />
		<label>Edad</label>
		<input id="formAge" min="18" max="99" type="number"/>		
		<br />
        <button>Enviar</button>
        <button onclick="storeUserData()">Guardar</button>
        <button onclick="getUserData()">Recuperar</button>
    </form>
  </body>
</html>
```

Y el Javascript tal que:

```javascript
function storeUserData() {
	console.log("storeUserData");
	event.preventDefault();
	
	var name = document.getElementById("formNombre").value;
	var email = document.getElementById("formEmail").value;

	var userData = {
		"name": name,
		"email": email
	};

    localStorage.setItem("userDataJSON", JSON.stringify(userData));
}

function getUserData() {
	console.log("getUserData");
	event.preventDefault();

	var userData = JSON.parse(localStorage.getItem("userDataJSON"));
	
	document.getElementById("formNombre").value = userData.name;
	document.getElementById("formEmail").value = userData.email;	
}
```

### Web Components: motivación y estructura.

· MVC -> Model - View - Controller -> Modelo - Vista - Controlador

· Patrón de diseño software que divide el código según su función:

Modelo - Representa los datos de la aplicación y la lógica de negocio más próxima a su gestión (CRUD)

Vista - Compone una visualización de los datos para usuarios.

Controlador - Recibe entrada de datos desde la vista, la envía a los modelos 
(puede usar Servicios), recibe una respuesta y devuelve un resultado 
a la vista.

POSIBLE GRÁFICO -> Estos 3 ítems con la vista en un ordenador de un usuario, luego el controlador y el modelo 
	en otra máquina remota como un servidor y el modelo enviando datos (una flecha) a una BD.

*** 
	
En los lenguajes orientados a objetos este código estará en clases.

La orientación a objetos busca:

· Reutilización del código. POSIBLE IMAGEN – Unos ladrillos, bloques, herramienta.
· Agilizar el mantenimiento del software. POSIBLE IMAGEN – Un reloj.

Que contribuyen a la mejora general de los proyectos. POSIBLE IMAGEN – Flecha, algo ascendente.

*** 

En la Web, como elementos fundamentales tenemos:

HTML – Hypertext Markup Language
Representa la estructura y los datos que se presentan al usuario. 
Clave el uso de las etiquetas.

CSS – Cascading Style Sheets
Indicará cómo se visualizan los datos que presentan y estructuran las etiquetas HTML. 
En CSS se trabaja con selectores.

Javascript
Da el dinamismo a la presentación de los datos y a la página en general. 
Muy importante el manejo de los eventos.

*** 

· La mejora de las comunicaciones y de la velocidad de las máquinas, 
	permiten buscar mucho más dinamismo en las páginas Web,
	extendiendo el uso de Javascript.

· La extensión de su uso hace que se demande más funcionalidad al lenguaje, 
	que evoluciona profundamente.

· Las páginas web, que en general son la Vista en MVC para Web, 
	se hacen mucho más complejas y sofisticadas.

POSIBLE GRÁFICO - Código orientado a objetos, clases interactuando entre 
	si y una página web con muchos componentes interactuando entre si.

***

· Los Web Components permiten conseguir crear componentes que 
	sean independientes y reutilizables, pudiendo ser adaptados 
	al contexto en el que se utilizan.
· Dentro de MVC en desarrollo Web, la Vista termina enviándose 
	-en general- a un navegador.
· Esta Vista a su vez es la que podríamos visualizar como una especie 
	de "MVC": teniendo una parte que representa los datos, otra como 
	esos datos cambian y el dinamismo de la página y otra con 
	el aspecto que presentan esos datos.
· Para conseguirlo, se usan una serie de tecnologías estándar web, 
	que permiten crear Web Components y esta división de 
	responsabilidades en ellos.

*** 

· Tecnologías Web Components:	
	· HTML Template - Permite incrustar HTML en los componentes, representando 
		la parte que se va a ver, su presentación.
	· Custom Elements - El componente se va a presentar en una página web y, 
		para ello, hay que usar etiquetas HTML.	Este mecanismo permite 
		generar nuestras propias etiquetas HTML y añadirlas a páginas.
	· Shadow DOM - Permite la encapsulación del componente. Mediante el 
		Shadow DOM se consigue crear un DOM, el DOM local, que es 
		independiente del DOM de la página y/o componente que contiene ese DOM. 
		Así se pueden mantener separados estos DOMs, permitiendo una 
		separación entre componentes (aunque esto no quiere decir que 
		estén aislados 	de su contexto y que no se puedan comunicar con el).		
		
POSIBLE GRÁFICO - Por un lado la página web con el componente y en otro 
	el código del componente. Una etiqueta custom en la página, relacionada 
	con el mismo nombre, el Custom Element, en el código del componente.
	Esa etiqueta de la página contiene HTML, que viene de una HTML Template 
	que está en el código del componente. El componente en la página tiene 
	una especie de borde exterior, el Shadow DOM. Poner en la página web 
	varios componentes, cada uno con su propio Shadow DOM y sus 
	etiquetas/html viniendo del código de varios componentes.
***

### MÓDULOS JAVASCRIPT

· HTML Import 
	· Mecanismo utilizado en librerías anteriores de Web Components (Polymer) 
	para traer los componentes a una página en concreto. 
	· Similar conceptualmente a un import en Java u otros lenguajes
	de programación.
	· No estándar, distinto funcioamiento según el navegador, diferentes 
		tiempos de carga.
	· En desuso.

· Módulos Javascript 
	· Los Web Components contienen código Javascript.
	· Tiene sentido usar un estándar propio de Javascript, los módulos.
	· Importaremos componentes como módulos Javascript.

	
***

### LitElement: una base para crear Web Components
· Litelement no es una librería o framework.
· Siguiendo un enfoque de Orientación a Objetos litelement es una clase base.
· Contiene un "andamiaje" para la construcción de Web Components.
· Utiliza los estándaderes antes descritos.
· Añade funcionalidad propia de utilidad.

***

## Conceptos Previos

### NodeJS y Single Page Applications

· Históricamente se ha desarrollado software para escritorio.
· Con la aparición de Internet, cambia el modelo de desarrollo 
	a trabajar con sistemas distribuidos.
· La mejora de las infraestructuras de comunicación y de la 
	capacidad de computación de las máquinas cambia el mercado aun más.
· Javascript amplía sus posibilidades profundamente.
· En la actualidad tenemos aplicaciones que, sin ser de escritorio, 
	se comportan como si lo fueran, por ejemplo Word.
	
POSIBLE GRÁFICO - Evolución de un desarrollo que va a un CD, con ese CD yendo 
	a estar disponible a la Web, o desarrollo que va a una web en vez de a un 
	CD.

***

· NodeJS: Single threaded non blocking I/O.

· Industria del desarrollo de aplicaciones Web muy importante.
· Estas aplicaciones se usan de forma masiva y concurrente.
· Requieren una alta disponibilidad.
· La propia naturaleza de los servidores web y de la arquitectura 
	cliente/servidor puede ser limitante.
· NodeJS surge para conseguir mejorar los tiempos de respuesta 
	y la disponibilidad de estas aplicaciones.

POSIBLE GRÁFICO - Muchos usuarios accediendo a una misma página web 
	al mismo tiempo.

***

NodeJS está compuesto, entre otras tecnologías, de:

V8 - Motor JS de Google en los navegadores.

libuv - biblioteca para ejecución asíncrona de tareas de I/O en 
	el sistema operativo (acceso a disco y red).

Bibliotecas - Piezas de código de utilidad, por ejemplo escritura 
	de ficheros en disco.

Se consigue extraer Javascript del entorno del navegador y ponerlo 
	a disposición de otras tecnologías para su utilización.

POSIBLE GRÁFICO - "Extracción" del motor Javascript de un navegador 
	Web y sumarlo a libuv más otras librerías y eso forma NodeJS.

***

### NPM y gestión de dependencias

· Toda aquella pieza de software necesaria para que funcione 
	nuestra aplicación es una **dependencia**.
· Según se empieza a trabajar con sistemas distribuidos y se hacen más 
	complejas las aplicaciones, más dependencias tienen.
· Las dependencias son recursivas.
· Es imposible gestionar esa complejidad sin apoyo.
· Los lenguajes de programación modernos tienen **gestores de dependencias**.
· El gestor de dependencias de NodeJS, y que también utilizaremos para 
	añadir los Web Components como dependencias, es NPM 
	de **Node Package Manager**.

POSIBLE GRÁFICO – Un proyecto software con dentro otros proyectos 
	a su vez y así recursivo.

***

## PRIMEROS PASOS 

### Instalación

###### NODE JS y NPM 
En teoría instalados ya en las máquinas, comprobar las versiones 
con los comandos apropiados

node -v

npm -v

###### Instalación del proyecto base

Vamos a partir de un proyecto básico pregrenerado para construir nuestra app. 
La fuente es Open Web Components, que nos proporciona un mecanismo para generar 
un "scaffolding", esto es, un andamiaje base para empezar a trabajar.

Nos vamos al directorio de nuestros proyectos y ahí ponemos en la consola:

npm init @open-wc

Tras cargar, nos aparecerá un menú para ir seleccionando opciones.

A la pregunta "What would you like to do today?" respondemos 
"Scaffold a new project" pulsando intro con la respuesta seleccionada.

A continuación a la pregunta "What would you like to scaffold?"
contestamos "Application".

A continuación a la pregunta "What would you like to add?" pulsamos intro 
de nuevo puesto que no añadiremos ningún "extra".

A continuación a la pregunta "Would you like to use typescript?" contestamos 
que no.

A continuación a la pregunta "What is the tag name of your application/web component?"
contestamos "base-litelement".

Revisamos que las respuestas sean correctas y que los archivos que se vayan a 
crear también y a la pregunta "Do you want to write this file structure to disk?"
contestamos "Yes".

Esto escribirá los archivos en disco, si no hay problema continuamos.

A continuación a la pregunta "Do you want to install dependencies?" contestaremos 
"Yes, with npm".

Esto iniciará el proceso de instalación de las dependencias.

Revisamos que la instalación sea correcta y que no haya 
	avisos relevantes y ya prodremos continuar.
	
###### Crear primer componente hola-mundo

Entramos en el directorio de nuestra app

> cd base-litelement

Y vamos al directorio con el componente creado automáticamente.

>cd src 

Ahí crearemos un directorio nuevo para nuestro componente
> mkdir hola-mundo 

Entramos al directorio
> cd hola-mundo

Y creamos el archivo del componente
> touch hola-mundo.js

El código del componente será:

hola-mundo.js
```javascript
import { LitElement, html } from 'lit-element';

class HolaMundo extends LitElement {
  render() {
    return html`
		<div>Hola Mundo!</div>
	`;
  }
}

customElements.define('hola-mundo', HolaMundo)
```
En el directorio principal de la app, veremos un archivo index.html. Ese 
será el archivo que se cargue cuando lancemos nuestra app y ahí será 
donde añadiremos nuestro componente.

index.html
```html
<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
  <meta name="Description" content="Put your description here.">
  <base href="/">

  <style>
    html,
    body {
      margin: 0;
      padding: 0;
      font-family: sans-serif;
      background-color: #ededed;
    }
  </style>
  <title>base-litelement</title>
</head>

<script type="module" src="./src/hola-mundo/hola-mundo.js"></script>

<body>
  <hola-mundo></hola-mundo>
</body>

</html>
```

Ahora en la consola ponemos:

> npm run start 

Lo que iniciará un servidor de pruebas y lanzará el navegador, en el que veremos 
nuestra app y el componente hola-mundo.

###### Reutilizar componente hola-mundo

```
// index
<script type="module" src="./src/hola-mundo/hola-mundo.js"></script>

<hola-mundo></hola-mundo>
<hola-mundo></hola-mundo>
```

*** 

PROPIEDADES Y DATA BINDING
==========================================================

· Una propiedad es algún valor significativo del componente que 
queremos gestionar. 

· Lo podríamos asimilar a una variable o una propiedad de una 
clase y veremos que, al menos en los tipos, son similares.

· Las propiedades en un Componente Web pueden responder al dinamismo de 
una página y reflejar su valor en ella.

· LitElement abstrae y facilita la gestión de cambios en las propiedades.


POSIBLE GRÁFICO – Un componente en una página, se señalan algunas partes 
del componente, tal vez el valor de un input de texto, como propiedades.

***

####### DECLARACIÓN y TIPOS

Las propiedades pueden ser, entre otros, de los tipos:

· String
· Number
· Boolean
· Array
· Object
 
Así pues, al diseñar el componente tendremos que pensar qué propiedades 
querremos gestionar y de qué tipo son.

***

###### LTEX001 Ejercicio ficha-persona

En nuestro caso, vamos a crear el componente ficha-persona a partir del 
	ya existente hola-mundo.

Para ello: 

Duplicar el directorio del componente hola-mundo y renombrarlo a ficha-persona.

Dentro del directorio ficha-persona, renombrar archivo 
	hola-mundo.js a ficha-persona.js

En ficha-persona.js

// Cambiar el class HolaMundo por class FichaPersona
// Cambiar el texto en el div por Ficha Persona.
// Cambiar el customElements.define('hola-mundo', HolaMundo)
// por customElements.define('ficha-persona', FichaPersona)
	
***

En el index

```javascript
// Importar el módulo y añadir la etiqueta para que se muestre

// <script type="module" src="./src/ficha-persona/ficha-persona.js"></script>
// <ficha-persona></ficha-persona>
```

Comprobar en el navegador que aparece el componente correctamente.

***

Manejaremos las propiedades:

· name -> String
· yearsInCompany -> Number 
· photo -> Object

> Primero tendremos que añadir las propiedades al componente.

```javascript
import { LitElement, html } from 'lit-element';

class FichaPersona extends LitElement {	
	
	static get properties() {
		return {
			name: {type: String},			
			yearsInCompany: {type: Number},			
			photo: {type: Object}			
		};
	}			  
	
	// Rest of component's code
}
```
***

A continuación crearemos una plantilla base, que iremos refactorizando, 
para mostrar las propiedades.

Se puede usar la imagen que se desee para la persona.

En algunos bloques de código, se omitirán partes ya añadidas para 
facilitar su legibilidad.

***
ficha-persona.js
```javascript
import { LitElement, html } from 'lit-element';

class FichaPersona extends LitElement {

  // Properties code up here	
  render() {
    return html`
		<div>
			<label for="fname">Nombre Completo</label>
			<input type="text" id="fname" name="fname"></input>
			<br />						
			<label for="age">Años en la empresa</label>
			<input type="text" name="yearsInCompany"></input>
			<br />			
			<img src="./img/persona.jpg" height="200" width="200" alt="Foto persona">
		</div>
	`;
  }
  // Rest of component's code
}

customElements.define('ficha-persona', FichaPersona)
```

####### DATA BINDING
· Comprobaremos primero que aparece correctamente el nuevo HTML del 
	componente.

· A continuación, estableceremos un enlace entre las propiedades 
	y su representación en la plantilla: el data binding.

· Para ello, usaremos una serie de etiquetas que añadiremos a la plantilla.

· Con ellas señalaremos el enlace entre esa parte de la plantilla 
	y el valor de una propiedad del componente.

***

ficha-persona.js
```javascript
import { LitElement, html } from 'lit-element';

class FichaPersona extends LitElement {

  // Properties code up here	
  render() {
    return html`
		<div>
			<label for="fname">Nombre Completo</label>
			<input type="text" id="fname" name="fname" value="${this.name}"></input>
			<br />						
			<label for="age">Años en la empresa</label>
			<input type="text" name="yearsInCompany" value="${this.yearsInCompany}"></input>
			<br />			
			<img src="${this.photo.src}" height="200" width="200" alt="${this.photo.alt}">
		</div>
	`;
  }
  // Rest of component's code
}

customElements.define('ficha-persona', FichaPersona)
```
***

Para que no tengamos problemas en la carga del componente, 
tendremos que inicializar las propiedades.

Las inicializaremos en el constructor del componente.

Dentro del constructor llamaremos siempre a super() lo primero.

***

ficha-persona.js
```javascript
// Properties up here

constructor() {
		// Always calls super() first.
		super();
		
		this.name = "Prueba Nombre";	
		this.yearsInCompany = 12;
		this.photo = {
			src: "./img/persona.jpg",
			alt: "foto persona"			
		};			
	}
	
// Render and rest of code down here.
```

*** 
También es posible inicializar las propiedades al incluir el componente.

index.html
```html
<ficha-persona
	name="Otra Persona" 	
	yearsInCompany="2" 
	photo='{"src": "./img/persona.jpg", "alt": "otra persona"}'>
</ficha-persona>
```

Los atributos HTML son siempre string.

***
	
####### CICLO DE VIDA DEL COMPONENTE
El **ciclo de vida** de una pieza de software nos permite ir observando 
los cambios que se van produciendo en su ejecución.

Al tratarse de un componente web, es especialmente importante 
tener la oportunidad de reaccionar ante sus cambios. Estamos en entorno 
web y el usuario interactúa continuamente con la página. 

Podremos reaccionar a estos sucesos con los **callbacks**, o 
llamadas diferidas, del ciclo de vida.

El estándar de Componentes Web define sus propios métodos, 
por ejemplo **connectedCallback**, **disconnectedCallback**, 
**attributeChangedCallback**.

LitElement define otros extra, de los que vamos a ver algunos ejemplos.

***

######### UPDATED
Se llama cuando se ha actualizado y pintado el DOM del componente.
Nos permite reaccionar ante cambios.

```javascript
// changedProperties is a Map.
updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      console.log("Propiedad " + propName + " cambia valor, anterior era " + oldValue);
    });
  }
```


También podemos buscar una propiedad en concreto.

```javascript
	// Inside updated
	if (changedProperties.has("name")) {
		console.log("Propiedad name cambia valor anterior era " + changedProperties.get("name") + " nuevo es " + this.name);
	}
```

***

####### Cambio de estado: introducción a eventos

El estado de un componente, de forma general, 
será el conjunto de valores de sus propiedades.

Esto es similar a la Orientación a Objetos: las propiedades representan 
el estado de un objeto y estos valores se cambian 
utilizando métodos, que son los que representan el comportamiento 
del mismo.

En el caso de los Web Components, estos cambios de estado van a venir, 
en su mayoría, desencadenados por la interacción del usuario con la 
página y los componentes. 

Entonces, podremos cambiar las propiedades reaccionando a esta interacción 
con la página por parte del usuario.

Cuando el usuario hace cierto tipo de interacciones con la página 
se lanzan **eventos**. 

Son una especie de "aviso" que emite el navegador de que se ha producido 
una determinada interacción con la página.

Según el evento, vendrán unos u otros datos de interés (coordenadas, 
	tecla pulsada, ...).

Estos eventos se están lanzando continuamente sin que nosotros los generemos.

Los eventos pueden ser "escuchados" según interese reaccionar a ellos o no.

***

```html
<input type="text" id="fname" name="fname" value="${this.name}" @change="${this.updateName}"></input>
```

Y añadimos la función “manejadora” del evento change.

```javascript
updateName(e) {
	console.log("updateName");
	this.name = e.target.value;	  
}
```

***

######### EJERCICIO LTEX - Propiedad personInfo - 45 min
Añadir una propiedad personInfo que, según el valor de la propiedad 
	yearsInCompany, tomará un valor u otro, que se 
	mostrará en la plantilla.

Añadimos la propiedad al componente.

ficha-persona.js
```javascript
static get properties() {		
	return {			
		name: {type: String},			
		yearsInCompany: {type: Number},			
		personInfo: {type: String},
		photo: {type: Object}			
	};
}			  	
```
Esta propiedad será calcula en base al valor de yearsInCompany, por 
 lo que en el constructor, en lugar de inicializar directamente ahí 
 su valor, llamaremos a una función que lo haga. Además, así 
 podremos reutilizar ese código para cuando se actualice el valor 
 de la propiedad yearsInCompany y haya que cambiar de nuevo su valor.
 
Esta función será la que calcule el valor en base a los criterios 
	especificados.

ficha-persona.js
```javascript

updatePersonInfo() {

	console.log("updatePersonInfo");
	console.log("yearsInCompany vale " + this.yearsInCompany);
	
	if (this.yearsInCompany >= 7) {
		this.personInfo = "lead";
	} else if (this.yearsInCompany >= 5) {
		this.personInfo = "senior";
	} else if (this.yearsInCompany >= 3) {
		this.personInfo = "team";
	} else {
		this.personInfo = "junior";
	}
}
```

En el constructor llamaremos a la función.

ficha-persona.js
```javascript

constructor() {
	// Always calls super() first.
	super();
		
	this.name = "Prueba Nombre";		
	this.yearsInCompany = 12;
	this.photo = {
		src: "./img/persona.jpg",
		alt: "foto persona"			
	};			
	
	this.updatePersonInfo();
}
```

Y mostramos el valor en la plantilla, no permitiendo editarlo.

ficha-persona.js
```javascript
render() {
	return html`
		<div>
			<label for="fname">Nombre Completo</label>
			<input type="text" id="fname" name="fname" value="${this.name}" @input="${this.updateName}"></input>
			<br />						
			<label for="age">Años en la empresa</label>
			<input type="text" name="yearsInCompany" value="${this.yearsInCompany}"></input>
			<br />			
			<input type="text" name="personInfo" value="${this.personInfo}" disabled></input>
			<br />			
			<img src="${this.photo.src}" height="200" width="200" alt="${this.photo.alt}">
		</div>
	`;
}
```

**NO PONER EN DIAPOSITIVAS Parte final de LTEX - Propiedad personInfo - 45 min**
######### PRÁCTICA: ACTUALIZACIÓN DE CAMPO INFORMACIÓN DE LA PERSONA
**NO PONER EN DIAPOSITIVAS Parte final de LTEX - Propiedad personInfo - 45 min**

Completaremos el ejercicio anterior añadiendo el código necesario para que, 
	cada vez que se varíe el valor del input de texto yearsInCompany, se 
	actualice el valor de la propiedad yearsInCompany y se vuelva a calcular 
	el valor de personInfo.
	
	NOTA - Hay que usar la función de ciclo de vida updated.
	

Empezamos capturando el evento input en yearsInCompany.

ficha-persona.js
```javascript
render() {
	return html`
		<div>
			<label for="fname">Nombre Completo</label>
			<input type="text" id="fname" name="fname" value="${this.name}" @input="${this.updateName}"></input>
			<br />						
			<label for="age">Años en la empresa</label>
			<input type="text" name="yearsInCompany" value="${this.yearsInCompany}" @input="${this.updateyearsInCompany}"></input>
			<br />			
			<input type="text" name="personInfo" value="${this.personInfo}" disabled></input>
			<br />			
			<img src="${this.photo.src}" height="200" width="200" alt="${this.photo.alt}">
		</div>
	`;
}
```	

En la función manejadora, actualizamos el valor de la propiedad

ficha-persona.js
```javascript
updateyearsInCompany(e) {
	console.log("updateyearsInCompany");
	this.yearsInCompany = e.target.value;
}
```	


Y en updated, cuando comprobemos que la propiedad ha cambiado de valor, 
	llamamos a updatePersonInfo.

ficha-persona.js
```javascript
updated(changedProperties) {	   
	if (changedProperties.has("name")) {
		console.log("Propiedad name cambiada valor anterior era " + changedProperties.get("name") + " nuevo es " + this.name);
	}
		
	if (changedProperties.has("yearsInCompany")) {
		console.log("Propiedad yearsInCompany cambiada valor anterior era " + changedProperties.get("yearsInCompany") + " nuevo es " + this.yearsInCompany);
		this.updatePersonInfo();
	}
}
```	

***
## Plantillas 

==========================================================

La única responsabilidad de una plantilla ha de ser presentar 
	el contenido de un componente.

Este contenido vendrá determinado por el valor de sus propiedades.

Ante un cambio de estado, esto es, del valor de sus propiedades, 
	es posible que cambie el contenido del componente.

Gestionar estos cambios de estado y las modificaciones necesarias del HTML 
	presentado al usuario es complejo.

*** 

Para gestionar la presentación del contenido HTML se usan 
	los motores de plantillas.

Lit-html es el motor de plantillas que usaremos en LitElement.

Usa Javascript a nivel interno.

Es muy rápido en las actualizaciones que se desencadenan ante cambios.

*** 

####### COMPOSICIÓN DE PLANTILLAS

Vamos a crear una división básica en nuestra aplicación.

Tendremos un componente principal, app, que contendrá al resto:
	· Header
	· Main
	· Footer
	
Primero creamos el componente principal persona-app:
· Crear nuevo directorio.
· Crear archivo js (duplicar o de cero).

En el index.html, importar y añadir a la plantilla el nuevo componente.

Borrar el resto de componentes de la plantilla en el index.html, que solo 
aparezca persona-app.

***

persona-app.js
```javascript
import { LitElement, html } from 'lit-element';

class PersonaApp extends LitElement {
	
	static get properties() {
		return {			
		};
	}
	
	constructor() {
		super();			
	}
	
	render() {
		return html`
			<h1>PersonaApp</h1>
		`;
	}    
}

customElements.define('persona-app', PersonaApp)
```

*** 
Seguimos el mismo proceso para los 3 componentes que irán en nuestra app:
· persona-header
· persona-main
· persona-footer

Estos tres componentes los vamos a importar y añadir a la plantilla de persona-app.

*** 

persona-header.js
```javascript
import { LitElement, html } from 'lit-element';

class PersonaHeader extends LitElement {
	
	static get properties() {
		return {			
		};
	}
	
	constructor() {
		super();			
	}
	
	render() {
		return html`
			<h1>App molona</h1>
		`;
	}    
}

customElements.define('persona-header', PersonaHeader)
```

***

persona-main.js
```javascript
import { LitElement, html } from 'lit-element';

class PersonaMain extends LitElement {
	
	static get properties() {
		return {			
		};
	}
	
	constructor() {
		super();			
	}
	
	render() {
		return html`
			<h2>Main</h2>
		`;
	}    
}

customElements.define('persona-main', PersonaMain)
```

***

persona-footer.js
```javascript
import { LitElement, html } from 'lit-element';

class PersonaFooter extends LitElement {
	
	static get properties() {
		return {			
		};
	}
	
	constructor() {
		super();			
	}
	
	render() {
		return html`
		<h5>@PersonaApp 2020</h5>
		`;
	}    
}

customElements.define('persona-footer', PersonaFooter)
```

***

```javascript
import { LitElement, html } from 'lit-element';
import '../persona-header/persona-header.js';
import '../persona-main/persona-main.js';
import '../persona-footer/persona-footer.js';

class PersonaApp extends LitElement {
	
	static get properties() {
		return {			
		};
	}
	
	constructor() {
		super();			
	}
	
	render() {
		return html`
			<persona-header></persona-header>
			<persona-main></persona-main>
			<persona-footer></persona-footer>
		`;
	}    
}

customElements.define('persona-app', PersonaApp)
```

***

####### BUCLES

Uno de los objetivos de nuestra aplicación será pintar un listado de personas.

Estas personas estarán almacenadas en la propia aplicación.

Cada persona tendrá una ficha y pintaremos tantas fichas como personas 
	haya almacenadas.

Como primer paso, necesitamos una ficha de la persona para el listado.

A este componente lo llamaremos **PersonaFichaListado**.

***

```javascript
import { LitElement, html } from 'lit-element';

class PersonaFichaListado extends LitElement {
	
	static get properties() {
		return {
			name: {type: String}			
		};
	}
	
	constructor() {
		super();			
	}
	
	render() {
		return html`
			<div>
				<label for="fname">Nombre</label>			
				<input type="text" id="fname" name="fname" value="${this.name}"/>
				<br />						
			</div>
		`;
	}    
}

customElements.define('persona-ficha-listado', PersonaFichaListado)
```

***

> Añadimos las personas como array en las propiedades del componente principal.

persona-main.js
```javascript
static get properties() {
	return {
		people: {type: Array}
	};
}
```

Usamos un bucle para mostrar el array de personas, pintando una ficha para 
cada una.

persona-main.js
```javascript
render() {	
    return html`	
		<h2>Main</h2>
		<main>			
		${this.people.map(
			person => html`<persona-ficha-listado></persona-ficha-listado>`
		)}
		</main>
	`;
}    
```

*** 

Importamos la ficha del listado en el componente main.

persona-main.js
```javascript
import { LitElement, html } from 'lit-element';
import '../persona-ficha-listado/persona-ficha-listado.js';
```
Creamos personas con nombre en el constructor.

persona-main.js
```javascript
	// Persona Main
	constructor() {
		super();
		this.people = [
			{
				name: "Ellen Ripley"
			}, {
				name: "Bruce Banner"				
			}, {
				name: "Éowyn"
			}
		];
	}	    
```

***

Y pasamos a la ficha su nombre.

persona-main.js
```javascript
render() {	
    return html`	
		<h2>Main</h2>
		<main>			
		${this.people.map(
			person => html`<persona-ficha-listado name="${person.name}"></persona-ficha-listado>`
		)}
		</main>
	`;
}    
```

***

Ahora añadiremos la propiedad yearsInCompany.

Empezamos añadiendo la propiedad en la ficha del listado.

persona-ficha-listado.js
```javascript				
static get properties() {
	return {
		name: {type: String},
		yearsInCompany: {type: Number}
	}
};	
```

La pintamos en la plantilla de la ficha.

persona-ficha-listado.js
```javascript		
	render() {
    return html`
		<div>
			<label for="fname">Nombre</label>			
			<input type="text" id="fname" name="fname" value="${this.name}"/>
			<br />					
			<label for="age">Años en la empresa</label>
			<input type="text" name="yearsInCompany" value="${this.yearsInCompany}"></input>
			<br />			
		</div>
	`;
  }   
```	

***

Añadimos los valores al array de personas.

persona-main.js
```javascript	
	constructor() {
		super();
		this.people = [
			{
				name: "Ellen Ripley",
				yearsInCompany: 10			
			}, {
				name: "Bruce Banner",			
				yearsInCompany: 2			
			}, {
				name: "Éowyn",
				yearsInCompany: 5
			}					
		];						
	}
```

*** 

Y pasamos a la ficha del listado el valor.
persona-main.js
```javascript		    
render() {	
    return html`	
		<h2>Main</h2>
		<main>			
		${this.people.map(
			person => html`<persona-ficha-listado name="${person.name}" 
				yearsInCompany="${person.yearsInCompany}"></persona-ficha-listado>`
		)}
		</main>
	`;
}    
```

Vamos a añadir la foto de la persona.

Primero añadimos la imagen como un objeto al array de personas.

persona-main.js
```javascript
constructor() {
	super();
				
	this.people = [
		{
			name: "Ellen Ripley",
			yearsInCompany: 10,
			photo: {
				"src": "./img/persona.jpg",
				"alt": "Ellen Ripley"
			}
		}, {
			name: "Bruce Banner",		
			yearsInCompany: 2,
			photo: {
				"src": "./img/persona.jpg",
				"alt": "Bruce Banner"
			}
		}, {
			name: "Éowyn",
			yearsInCompany: 5,
			photo: {
				"src": "./img/persona.jpg",
				"alt": "Éowyn"
			}
		}
	];										
}
```
***

A continuación le pasamos al componente listado la imagen.

**IMPORTANTE** Al tratarse de un tipo de datos complejo, tendremos 
que pasar el valor como una propiedad, o no funcionará.

persona-main.js
```javascript
render() {	
	return html`	
		<h2>Main</h2>
		<main>			
		${this.people.map(
			person => html`<persona-ficha-listado name="${person.name}" 
				yearsInCompany="${person.yearsInCompany}" .photo=${person.photo}></persona-ficha-listado>`
		)}
		</main>
	`;
}    
```

***

Añadimos la propiedad photo a la ficha del listado.

persona-ficha-listado.js
```javascript
static get properties() {
	return {
		name: {type: String},
		yearsInCompany: {type: Number},
		photo: {type: Object}
	};
}
```

Y modificamos la plantilla de listado.

persona-ficha-listado.js
```javascript
render() {
	return html`
		<div>
			<label for="fname">Nombre</label>			
			<input type="text" id="fname" name="fname" value="${this.name}"/>
			<br />
			<label for="yearsInCompany">Años en la empresa</label>
			<input type="text" name="yearsInCompany" value="${this.yearsInCompany}"></input>
			<br />
			<img src="${this.photo.src}" height="200" width="200" alt="${this.photo.alt}">
			<br />
		</div>
	`;
}
```

***

**NO PONER EN DIAPOSITIVAS**
##### PRÁCTICA PARA ALUMNOS Ejercicio LTEX - Añadir propiedad canTeach a persona - 30 min
**NO PONER EN DIAPOSITIVAS**

Ahora vamos a añadir una propiedad que indicará si una persona 
	puede dar clase o no.

Añadimos la propiedad al array de personas.

persona-main.js
```javascript
constructor() {
	super();
		
	this.people = [
		{
			name: "Ellen Ripley",
			yearsInCompany: 10,
			photo: {
				"src": "./img/persona.jpg",
				"alt": "Ellen Ripley"
			},
			canTeach: false
		}, {
			name: "Bruce Banner",		
			yearsInCompany: 2,
			photo: {
				"src": "./img/persona.jpg",
				"alt": "Bruce Banner"
			},
			canTeach: true
		}, {
			name: "Éowyn",
			yearsInCompany: 5,
			photo: {
				"src": "./img/persona.jpg",
				"alt": "Éowyn"
			},
			canTeach: true
		}
	];							
}
```

Añadimos la propiedad a la ficha del listado.

persona-ficha-listado.js
```javascript
static get properties() {
	return {
		name: {type: String},
		age: {type: Number},
		image: {type: Object},
		canTeach: {type: Boolean}
	};
}
```

Y la pintamos en la plantilla con un condicional, 
para que solo se muestre si la persona puede dar clase.

persona-ficha-listado.js
```javascript
render() {
    return html`
		<div>
			<label for="fname">Nombre</label>			
			<input type="text" id="fname" name="fname" value="${this.name}"/>
			<br />
			<label for="age">Años en la empresa</label>
			<input type="text" name="yearsInCompany" value="${this.yearsInCompany}"></input>
			<br />
			<img src="${this.photo.src}" height="200" width="200" alt="${this.photo.alt}">
			<br />
			${this.canTeach === true ? html`<strong>Puede dar clase</strong>` : ""}
		</div>
	`;
  }    
```

Nos falta añadirlo a la plantilla principal para pasarlo a la ficha del listado.

Tendremos que enviarlo como propiedad o el comportamiento no será el esperado.

persona-main.js
```javascript
render() {	
	return html`
		<h2>Main</h2>
		<main>			
		${this.people.map(
			person => 
				html`<persona-ficha-listado 
						name="${person.name}" 
						yearsInCompany="${person.yearsInCompany}"
						.photo="${person.photo}"
						.canTeach="${person.canTeach}" >
				</persona-ficha-listado>`
		)}
		</main>
	`;
}    
```

####### Prueba API REST
==========================================================

El listado de personas que tenemos en nuestra App obtiene sus datos 
directamente de un array. En la práctica, estos datos pueden venir de 
varios orígenes distintos que no estén directamente en nuestra aplicación,
sino que vengan del exterior. 

Lo interesante de trabajar con componentes y una estructura modular es que,
con una correcta organización del paso de datos, podríamos cambiar el origen 
de los mismos sin tener que alterar su presentación (siempre y cuando 
estemos presentando datos de la misma naturaleza).

Vamos a ver con un componente de ejemplo como podríamos obtener los datos de 
una API REST.

Empezaremos creando el nuevo componente test-api de la forma habitual.

test-api.js
```javascript
import {LitElement, html} from 'lit-element';

class TestApi extends LitElement {

    static get properties() {
		return {
		};
	}
	
	constructor() {
        super();
	}

    render() {
        return html `
            <div>Test Api</div>
        `
    }
}

customElements.define("test-api", TestApi);
```

Y lo añadimos al index.html para revisar que funciona (si es el único 
	componente que ponemos en la plantilla será más sencillo de revisar).
		
La API que usaremos para hacer la prueba es la Star Wars API, alojada en 
	https://swapi.dev/ . Esta API nos permite obtener datos relacionados con 
	el universo de Star Wars. En concreto lo que haremos será obtener las 
	películas que están almacenadas en la API y mostrar su título y director. 

Añadiremos al componente la propiedad movies, que nos servirá para almacenar 
las películas y la inicializamos en el constructor. 

test-api.js
```javascript

import {LitElement, html} from 'lit-element';

class TestApi extends LitElement {

    static get properties() {
		return {
            movies: {type: Array}
		};
	}
	
	constructor() {
        super();

        this.movies = [];
	}
	
	
	// Render    
}

customElements.define("test-api", TestApi);
```

En la documentación de la API veremos que los campos de las películas 
que queremos extraer se llaman "title" y "director". Con esa información 
añadimos un bucle a la plantilla para que, de todas las películas del array,
nos pinte el título y el director, junto con un texto.

test-api.js
```javascript
import {LitElement, html} from 'lit-element';

class TestApi extends LitElement {

    // Rest of component's code.

    render() {
        return html`
            ${this.movies.map(
				movie => 
				    html`<div>La película ${movie.title}, fue dirigida por ${movie.director}</div>`
            )}
        `;
    }
}

customElements.define("test-api", TestApi);
```

Ahora tendremos que hacer la petición para obtener los datos. Usaremos 
AJAX y haremos una petición asíncrona a la URL que la documentación 
nos indica que contiene las películas usando el método GET. 
Usando la propiedad onload asignamos una función manejadora, comprobamos que 
la petición haya devuelto un código 200 y parseamos la respuesta en texto, 
que tendría que venir en formato JSON. El resultado será 
una variable Javascript con la respuesta de la API. Esta 
respuesta contiene un array con las películas, que podemos 
asignar a la propiedad movies del componente y ya tendríamos las películas 
disponibles para trabajar con ellas.

El código que realiza estas operaciones lo pondremos en una función que 
llamaremos en el constructor del componente.

test-api.js
```javascript
import {LitElement, html} from 'lit-element';

class TestApi extends LitElement {

	// Properties
    	
	constructor() {
        super();

        this.movies = [];
        this.getMovieData();
	}

	// Render

    getMovieData() {
        console.log("getMovieData");
        console.log("Obteniendo datos de las películas");

        let xhr = new XMLHttpRequest();

        xhr.onload = () => {
            if (xhr.status === 200) {
                console.log("Petición completada correctamente");
                
                let APIResponse = JSON.parse(xhr.responseText);
                                
                this.movies = APIResponse.results;
            }
        };                

        xhr.open("GET", "https://swapi.dev/api/films/");
        xhr.send();
    }
}

customElements.define("test-api", TestApi);
```

El componente quedaría:

test-api.js
```javascript
import {LitElement, html} from 'lit-element';

class TestApi extends LitElement {

    static get properties() {
		return {
            movies: {type: Array}
		};
	}
	
	constructor() {
        super();

        this.movies = [];
        this.getMovieData();
	}

    render() {
        return html`
            ${this.movies.map(
				movie => 
				    html`<div>La película ${movie.title}, fue dirigida por ${movie.director}</div>`
            )}
        `;
    }

    getMovieData() {
        console.log("getMovieData");
        console.log("Obteniendo datos de las películas");

        let xhr = new XMLHttpRequest();

        xhr.onload = () => {
            if (xhr.status === 200) {
                console.log("Petición completada correctamente");
                
                let APIResponse = JSON.parse(xhr.responseText);
                                
                this.movies = APIResponse.results;
            }
        };                

        xhr.open("GET", "https://swapi.dev/api/films/");
        xhr.send();
    }
}

customElements.define("test-api", TestApi);
```


## Estilado de componentes
==========================================================

Un buen diseño mejorará la percepción que tiene el usuario de la aplicación.

Para las empresas, especialmente las grandes, es importante contar 
	con un aspecto similar en sus aplicaciones y una experiencia 
	de usuario apropiada y reconocible.

Los Web Components permiten que, en distintas aplicaciones de la empresa, 
se reutilicen componentes que consigan ese aspecto reconocible y uniforme. 

El estilado de los componentes nos servirá para darle a los componentes 
el aspecto que sea necesario. 

POSIBLE GRÁFICO – un mismo componente en varias apps.

***

El Shadow DOM permite flexibilizar el trabajo con estilos.

Los componentes podrán así ser diseñados para que sea el “exterior” 
que los contiene el que realice la adaptación de sus estilos 
al contexto en el que se utilicen.

Por ejemplo, un componente formulario de registro, podría permitir 
que se cambien colores según dónde se vaya a utilizar.

Durante el proceso de diseño habrá que hacer el máximo hincapié 
en identificar qué partes del componente han de ser adaptadas, solo 
así se conseguirá que un componente consiga ser reutilizable.

POSIBLE GRÁFICO – el mismo componente de distinto color o forma 
en varias apps.

***

####### ESTILOS GLOBALES y ESTILOS LOCALES

Vamos a probar como se comportan los estilos.

index.html
```html
<head>
  <!-- Other head stuff -->
  <style>
    .test {
      color: red;
    }
  </style>
</head>

<body class="test">
  <!-- Body -->
</body>
```

Los estilos “pasan” al componente porque algunos son heredables.

Podemos comprobar esto en los componentes.

Los estilos en los componentes se añaden también con una función.

persona-main.js
```javascript
// Añadir css también al import.
import { LitElement, html, css } from 'lit-element';

static get styles() {
	return css`	  
		:host {					
			all: initial;
		}
	`;
}
```
***

Algunos estilos no son heredables.

index.html
```html
<head>
  <!-- Other head stuff -->
  <style>
    .test {
      border: solid red;
    }
  </style>
</head>

<body class="test">
  <!-- Body -->
</body>
```

***

####### BOOTSTRAP

El proceso de estilado es muy laborioso, especialmente conseguir un diseño 
responsive y personalizado para diversos dispositivos.

Existen frameworks CSS que facilitan el proceso.

Es una opción a considerar por ser un buen compromiso entre el tiempo 
invertido en aprender a usarlo y los resultados obtenidos.

***

Iremos a la página web de Bootstrap y lo enlazaremos en nuestra aplicación.

https://getbootstrap.com/

index.html
```html
<!-- index.html -->
<head>
  <!-- Other head stuff -->
  <!-- Enlace de Bootstrap obtenido de la página oficial -->  
</head>
```

***

Vemos que se cambian todas las tipografías de la página, al ser 
	un estilo heredado como habíamos visto antes.	
	
También podríamos poner Bootstrap en cada componente por separado.
	
Vamos a probarlo creando un nuevo componente test-bootstrap, 
siguiendo el proceso habitual.


***

test-bootstrap.js
```javascript
import { LitElement, html } from 'lit-element';

class TestBootstrap extends LitElement {
	
	static get properties() {
		return {			
		};
	}
	
	constructor() {
		super();			
	}
	
	render() {
		return html`
			<!-- Enlazar Bootstrap aquí -->
			<h3>Test Bootstrap</h3>
		`;
	}    
}

customElements.define('test-bootstrap', TestBootstrap)
```

***

Importar y añadir el componente a la página principal de la app.

index.html

```html
<head>
  <!-- Other head stuff →
	<script type="module" src="./src/test-bootstrap/test-bootstrap.js"></script>
</head>
<body>    
	<test-bootstrap></test-bootstrap>
</body>
```

***

Importamos css y añadimos unos estilos de prueba al componente.

test-bootstrap.js
```javascript
import { LitElement, html, css } from 'lit-element';

class TestBootstrap extends LitElement {
	
	// Properties
	static get styles() {
		return css`	  	
			.redbg {
				background-color: red;
			}
		
			.greenbg {
				background-color: green;
			}
		
			.bluebg {
				background-color: blue;
			}
		
			.greybg {
				background-color: grey;
			}
		`;
	}
	// Constructor and render
}

customElements.define('test-bootstrap', TestBootstrap)
```

***

Los probamos: creamos una estructura HTML para dividir el componente 
en columnas, que dividirán el espacio en partes iguales.

test-bootstrap.js
```javascript
// Modificamos solo la función render.

render() {
    return html`	
		<!-- Bootstrap link -->
		<h3>Test Bootstrap</h3>
		<div class="row greybg">
			<div class="col redbg">Col 1</div>
			<div class="col greenbg">Col 2</div>
			<div class="col bluebg">Col 3</div>
		</div>
	`;
}
```

***

También se puede asignar un ancho a las columnas.

El ancho máximo es 12.

Si se supera este ancho máximo, se hace un salto.

test-bootstrap.js
```javascript
// Modificamos solo la función render.

render() {
    return html`	
		<!-- Bootstrap link →
		<h3>Test Bootstrap</h3>
		<div class="row greybg">
			<div class="col-2 redbg">Col 1</div>
			<div class="col-3 greenbg">Col 2</div>
			<div class="col-4 bluebg">Col 3</div>
		</div>
	`;
}
```

***

También se puede aplicar más de un selector a las columnas.

Con estos selectores se precisan los diseños responsive.

Cuando esté activo se aplicará a ese y a los mayores.

test-bootstrap.js
```javascript
// Modificamos solo la función render.

render() {
    return html`	
		<!-- Bootstrap link →
		<h3>Test Bootstrap</h3>
		<div class="row greybg">
			<div class="col-2 col-sm-6 redbg">Col 1</div>
			<div class="col-3 col-sm-1 greenbg">Col 2</div>
			<div class="col-4 col-sm-1 bluebg">Col 3</div>
		</div>
	`;
}
```

***

También podemos aplicar un desplazamiento a las columnas.

test-bootstrap.js
```javascript
// Modificamos solo la función render.

render() {
    return html`	
		<!-- Bootstrap link →
		<h3>Test Bootstrap</h3>
		<div class="row greybg">
			<div class="col-2 offset-1 redbg">Col 1</div>
			<div class="col-3 offset-2 greenbg">Col 2</div>
			<div class="col-4 bluebg">Col 3</div>
		</div>
	`;
}
```

Vamos a aplicar Bootstrap ahora a nuestra aplicación.

Volvemos a incluir el componente principal en la página de inicio.

index.html	
```javascript
<body>    
	<persona-app></persona-app>
</body>
```

Enlazamos Bootstrap, igual que hemos hecho en test-bootstrap en 
los componentes persona-main y persona-ficha-listado

Modificamos el título del main y centramos el texto

persona-main.js
```javascript
	<h2 class="text-center">Personas</h2>
```

En persona-ficha-listado vamos a quitar los atributos height y width 
de la etiqueta img de la persona, que quedará tal que:

persona-ficha-listado.js
```javascript
	<img src="${this.photo.src}" alt="${this.photo.alt}">
```

Añadimos más personas al listado.

persona-main.js
```javascript
[
	// Other people up here.
	{
		name: "Turanga Leela",
		yearsInCompany: 9,
		photo: {
			"src": "./img/persona.jpg",
			"alt": "Turanga Leela"
		},
		canTeach: true
	}, {
		name: "Tyrion Lannister",
		yearsInCompany: 1,				
		photo: {
			"src": "./img/persona.jpg",
			"alt": "Tyrion Lannister"
		},
		canTeach: false
	}
];
```

Ahora vamos a preparar el diseño para que haya cuatro personas por fila.

Lo que haremos será añadir una fila en el componente principal, 
que representará el listado de personas.

Luego añadiremos otra fila, que serán las personas en si. 

Esta fila de personas la haremos de una columna para 
dispositivos más pequeños y de 4 columnas para el resto.

persona-main.js
```
render() {
    return html`
		<!-- Enlace Bootstrap -->
		<h2 class="text-center">Personas</h2>
		<div class="row" id="peopleList">			
			<div class="row row-cols-1 row-cols-sm-4">
			${this.people.map(
				person => 
					html`<persona-ficha-listado 
							name="${person.name}" 
							yearsInCompany="${person.yearsInCompany}" 
							.photo="${person.photo}"
							>
					</persona-ficha-listado>`
			)}
			</div>
		</div>					
	`;
}
```

A continuación vamos a estilar la ficha de cada persona con más detalle:

· Usaremos el componente **card** de Bootstrap.
· Cada persona tendrá un formato de "tarjeta".
· La imagen de la persona irá en la parte superior.
· Ajustaremos el tamaño de la imagen directamente a un cuadrado de 50x50.
· En el cuerpo de la tarjeta irá el nombre de la persona e información.
· Ponemos la lista como "flush" para que no salga recuadrada.

persona-ficha-listado.js
```javascript
render() {
    return html`
		<!-- Enlace de bootstrap -->
		<div class="card">
			<img src="${this.photo.src}" alt="${this.photo.alt} height="50" width="50" class="card-img-top">
			<div class="card-body">
				<h5 class="card-title">${this.name}</h5>
				<ul class="list-group list-group-flush">
					<li class="list-group-item">${this.yearsInCompany} años en la empresa</li>
				</ul>
			</div>
		</div>
	`;
  }    
```

Para seguir, añadimos una nueva propiedad **profile** 
para tener información más detallada de la persona.

Empezamos añadiendo la propiedad al array de personas
	(resto de propiedades omitidas).

persona-main.js
```javascript
this.people = [
		{				
			profile: "Lorem ipsum dolor sit amet.",
		}, {				
			profile: "Lorem ipsum.",				
		}, {				
			profile: "Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
		}, {				
			profile: "Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod.",
		}, {				
			profile: "Lorem ipsum.",
		}
	]			
}
```

Y la pasamos como atributo al componente.

persona-main.js
```javascript
render() {
    return html`
		<!-- Enlace Bootstrap -->
		<h2 class="text-center">Personas</h2>
		<div class="row" id="peopleList">
			<div class="row row-cols-1 row-cols-sm-4">
			${this.people.map(
				person => 
					html`<persona-ficha-listado 
						name="${person.name}" 
						yearsInCompany="${person.yearsInCompany}"
						profile="${person.profile}"
						.photo="${person.photo}"
						>
					</persona-ficha-listado>`
				)
			}
			</div>
		</div>					
	`;
}
```

Añadimos la propiedad en la ficha del listado.

persona-ficha-listado.js
```javascript
static get properties() {
	return {
		name: {type: String},
		age: {type: Number},
		image: {type: Object},
		profile: {type: String}		
	};
}
```

Y a la plantilla del listado.

persona-ficha-listado.js
```javascript
render() {
    return html`
		<!-- Enlace de bootstrap -->
		<div class="card">
			<img src="${this.photo.src}" alt="${this.photo.alt} height="50" width="50" class="card-img-top">
			<div class="card-body">
				<h5 class="card-title">${this.name}</h5>
				<p class="card-text">${this.profile}</p>
				<ul class="list-group list-group-flush">
					<li class="list-group-item">${this.yearsInCompany} años en la empresa</li>
				</ul>
			</div>
		</div>
	`;
}    
```

Añadimos h-100 al contenedor principal de la tarjeta para que 
	queden todas igual de altas.

persona-ficha-listado.js
```javascript
render() {
    return html`
		<!-- Enlace de bootstrap -->
		<div class="card h-100">
			<img src="${this.photo.src}" alt="${this.photo.alt} height="50" width="50" class="card-img-top">
			<div class="card-body">
				<h5 class="card-title">${this.name}</h5>
				<p class="card-text">${this.profile}</p>
				<ul class="list-group list-group-flush">
					<li class="list-group-item">${this.yearsInCompany} años en la empresa</li>
				</ul>
			</div>
		</div>
	`;
}    
```

## EVENTOS
==========================================================

En esta parte del curso iremos añadiendo funcionalidad a nuestra aplicación, 
	al tiempo que vamos mejorando su diseño.

Para conseguir esta funcionalidad más compleja de forma desacoplada 
	utilizaremos eventos, que nos permitirán pasar datos entre componentes.

Recordemos que los eventos se lanzan cuando se produce un suceso 
	determinado en la aplicación.

Los eventos pueden ser nativos, propios del navegador, o custom, 
que crearemos nosotros para enviar datos cuando se de una situación 
determinada en la ejecución de nuestra aplicación.

Los eventos nos van a permitir la comunicación entre los distintos componentes
	y su gestión.

Los componentes se comunican con el exterior lanzando eventos y 
	enviando información en ellos.

Los componentes se pueden modificar desde el exterior cambiando 
	el valor de sus propiedades.

***

Empezaremos con un ejemplo básico, con una estructura de componentes 
	diferente, y luego aplicaremos lo aprendido a nuestra app.
	
En el ejemplo veremos el paso de información en los dos sentidos:

· Partiremos de un componente **emisor-evento**, que 
	lanzará un evento con datos.
· Este evento será recogido por otro componente, **gestor-evento**, 
	que actuará de mediador.
· Por último, los datos que ha recogido **gestor-evento**, 
	se enviarán a otro componente **receptor-evento** 
	que los mostrará en su plantilla.

***

Creamos el componente emisor evento de la forma habitual.

emisor-evento.js
```javascript
import { LitElement, html } from 'lit-element';

class EmisorEvento extends LitElement {
	
	static get properties() {
		return {			
		};
	}
	
	constructor() {
		super();			
	}
	
	render() {
		return html`	
			<h3>Emisor Evento</h3>
		`;
	}    
}

customElements.define('emisor-evento', EmisorEvento)
```

Lo enlazaremos en el index.html y lo añadiremos a la plantilla, 
quitando para este ejemplo el componente persona-app.

index.html
```javascript
<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
  <meta name="Description" content="Put your description here.">
  <base href="/">

  <style>
    html,
    body {
      margin: 0;
      padding: 0;
      font-family: sans-serif;
      background-color: #ededed;    
    }
    
  </style>
  <title>base-litelement</title>
</head>

<script type="module" src="./src/emisor-evento/emisor-evento.js"></script>

<body >
  <emisor-evento></emisor-evento>
</body>

</html>
```

Refactorizamos el código del emisor-evento:

· Añadimos un botón del que capturamos su evento click.
· En la función manejadora asociada al evento, lanzamos un 
	evento custom con datos.
· Los datos de este evento llegarán a gestor-evento y se 
	enviarán a receptor-evento.	

emisor-evento.js
```javascript
import { LitElement, html } from 'lit-element';

class EmisorEvento extends LitElement {
	
	// Other functions.
	
	render() {
		return html`	
			<h1>Emisor Evento</h1>
			<button @click="${this.sendEvent}">No pulsar</button>
		`;
	}
	
	sendEvent(e) {
		console.log("Pulsado el botón");
		console.log(e);
		
		this.dispatchEvent(
			new CustomEvent(
				"test-event",
				{
					"detail" : {
						"course" : "TechU",
						"year" : 2020
					}
				}
			)
		);
	}
}

customElements.define('emisor-evento', EmisorEvento)
```

Creamos el componente gestor-evento de la forma habitual.

gestor-evento.js
```javascript
import { LitElement, html } from 'lit-element';

class GestorEvento extends LitElement {
	
	static get properties() {
		return {			
		};
	}
	
	constructor() {
		super();
	}
	
	render() {
		return html`	
			<h1>Gestor Evento</h1>			
		`;
	}	
}

customElements.define('gestor-evento', GestorEvento)
```

Y lo enlazamos también en el index.html para probarlo. 

Quitamos el componente emisor-evento.

index.html
```html
<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
  <meta name="Description" content="Put your description here.">
  <base href="/">

  <style>
    html,
    body {
      margin: 0;
      padding: 0;
      font-family: sans-serif;
      background-color: #ededed;    
    }
    
  </style>
  <title>base-litelement</title>
</head>

<script type="module" src="./src/gestor-evento/gestor-evento.js" ></script>

<body >
  <gestor-evento></gestor-evento>
</body>

</html>
```

El componente gestor-evento va a actuar como **mediador** entre los 
	componentes emisor evento y receptor evento.
	
Gestor evento contendrá ambos componentes en su plantilla.

Empezaremos añadiendo emisor evento a gestor evento. 

gestor-evento.js
```javascript
import { LitElement, html } from 'lit-element';
import '../emisor-evento/emisor-evento.js';

class GestorEvento extends LitElement {
	
	static get properties() {
		return {			
		};
	}
	
	constructor() {
		super();
	}
	
	render() {
		return html`	
			<h1>Gestor Evento</h1>
			<emisor-evento></emisor-evento>
		`;
	}	
}

customElements.define('gestor-evento', GestorEvento)
```

Una vez comprobamos que vemos los dos componentes, capturamos 
	el evento "test-event" de emisor-evento y añadimos una 
	función manejadora para procesarlo.

gestor-evento.js
```javascript
import { LitElement, html } from 'lit-element';
import '../emisor-evento/emisor-evento.js';

class GestorEvento extends LitElement {
	
	static get properties() {
		return {			
		};
	}
	
	constructor() {
		super();
	}
	
	render() {
		return html`	
			<h1>Gestor Evento</h1>
			<emisor-evento @test-event="${this.processEvent}"></emisor-evento>
		`;
	}
		
	processEvent(e) {
		console.log("Capturado evento del emisor");
		console.log(e.detail);
	}
}

customElements.define('gestor-evento', GestorEvento)
```

Creamos el componente receptor evento de la forma habitual.

receptor-evento.js
```javascript
import { LitElement, html } from 'lit-element';

class ReceptorEvento extends LitElement {
	
	static get properties() {
		return {			
		};
	}
	
	constructor() {
		super();			
	}
	
	render() {
		return html`	
			<h3>Receptor Evento</h3>			
		`;
	}		
}

customElements.define('receptor-evento', ReceptorEvento)
```

Y lo añadimos a gestor evento para probar que funciona.

gestor-evento.js
```javascript
import { LitElement, html } from 'lit-element';
import '../emisor-evento/emisor-evento.js';
import '../receptor-evento/receptor-evento.js';

class GestorEvento extends LitElement {
	
	static get properties() {
		return {			
		};
	}
	
	constructor() {
		super();
	}
	
	render() {
		return html`	
			<h1>Gestor Evento</h1>
			<emisor-evento @test-event="${this.processEvent}"></emisor-evento>
			<receptor-evento></receptor-evento>
		`;
	}
		
	processEvent(e) {
		console.log("Capturado evento del emisor");
		console.log(e.detail);
	}
}

customElements.define('gestor-evento', GestorEvento)
```


Añadimos a receptor evento propiedades para recoger los datos 
	que vienen en el evento lanzado por emisor evento.

Además, añadimos a la plantilla html y data binding para pintar 
	el valor de esas propiedades.
	
receptor-evento.js
```javascript
import { LitElement, html } from 'lit-element';

class ReceptorEvento extends LitElement {
	
	static get properties() {
		return {
			course: {type: String},
			year: {type: String}
		};
	}
	
	constructor() {
		super();			
	}
	
	render() {
		return html`	
			<h3>Receptor Evento</h3>		
			<h5>Este curso es de ${this.course}</h5>
			<h5>y estamos en el año ${this.year}</h5>
		`;
	}
}

customElements.define('receptor-evento', ReceptorEvento)
```

Desde la función manejadora del gestor, asignamos los valores 
	de las propiedades al receptor, al que hemos añadido 
	una id para seleccionarlo.

gestor-evento.js
```javascript
import { LitElement, html } from 'lit-element';
import '../emisor-evento/emisor-evento.js';
import '../receptor-evento/receptor-evento.js';

class GestorEvento extends LitElement {
	
	// Other functions.
	
	render() {
		return html`	
			<h1>Gestor Evento</h1>
			<emisor-evento @test-event="${this.processEvent}"></emisor-evento>
			<receptor-evento id="receiver"></receptor-evento>
		`;
	}
		
	processEvent(e) {
		console.log("Capturado evento del emisor");
		console.log(e.detail);
		
		this.shadowRoot.getElementById("receiver").course = e.detail.course;
		this.shadowRoot.getElementById("receiver").year = e.detail.year;
	}
}

customElements.define('gestor-evento', GestorEvento)
```

###### RESTO DE FUNCIONALIDAD DE LA APP DE EVENTOS

##### BORRADO DE UN ELEMENTO DEL LISTADO

Vamos a ampliar la funcionalidad de nuestra app utilizando eventos.

Para empezar vamos a implementar el borrado de una persona del listado.

Añadimos un footer al card de Bootstrap y el botón para borrar.

persona-ficha-listado.js
```javascript
render() {
    return html`
		<!-- Enlace Bootstrap -->
		<div class="card h-100">
			<img src="${this.photo.src}" alt="${this.photo.alt} height="50" width="50" class="card-img-top">
				<div class="card-body">
					<h5 class="card-title">${this.name}</h5>
					<p class="card-text">${this.profile}</p>
					<ul class="list-group list-group-flush">
						<li class="list-group-item">${this.yearsInCompany} años en la empresa</li>
					</ul>
				</div>
			<div class="card-footer">
				<button class="btn btn-danger col-5"><strong>X</strong></button>
			</div>				
		</div>
	`;
  }    
```


A partir de aquí, analicemos el objetivo y los pasos para conseguirlo:

· Queremos borrar una persona.
· "Borrar" una persona significa, a nivel lógico, que ya no estará en el array 
	que tenemos en el componente principal, persona-main y no se pintará en el 
	listado.
· Para borrar la persona concreto que queremos necesitamos un identificador, 
	que será el nombre de la persona en nuestro caso.
· El botón borrar lo tenemos en la ficha de la propia persona, así que lo 
	que tenemos que hacer es, de alguna manera, enviar el nombre 
	de la persona en el que se pulsa el botón borrar, que es un 
	persona-ficha-listado, al componente persona-main.
· Para ello usaremos eventos nativos y custom.

Los componentes se comunican con el exterior lanzando eventos, que pueden  
	ser recogidos por otros componentes.

Un componente puede ser modificado desde el exterior cambiando el valor 
	de propiedades.
	
Entonces, desde el componente persona-ficha-listado, lanzaremos un evento 
	con la información necesaria para que persona-main, que recogerá el evento,
	pueda modificar el listado de personas.
	
Una vez se haya modificado el listado, se volverá a pintar 
	automáticamente y veremos el resultado en pantalla.

Empezaremos recogiendo el click del usuario en el botón borrar de una persona 
	en concreto.
	
Este evento es **click** y es un evento **nativo**.

persona-ficha-listado.js
```javascript
render() {
		return html`
			<!-- Enlace Bootstrap -->
			<div class="card h-100">
				<img src="${this.photo.src}" alt="${this.photo.alt} height="50" width="50" class="card-img-top">
				<div class="card-body">
					<h5 class="card-title">${this.name}</h5>
					<p class="card-text">${this.profile}</p>
					<ul class="list-group list-group-flush">
						<li class="list-group-item">${this.yearsInCompany} años en la empresa</li>
					</ul>
				</div>
				<div class="card-footer">
					<button @click="${this.deletePerson}" class="btn btn-danger col-5"><strong>X</strong></button>
				</div>				
			</div>
		`;
	}    
```

Y añadimos la función manejadora del evento, que lanzará un evento 
	**custom**, al que llamaremos **delete-person** con la información 
	necesaria para que la persona pueda ser borrada.

persona-ficha-listado.js
```javascript
deletePerson(e) {	
	console.log("deletePerson en persona-ficha-listado");
	console.log("Se va a borrar la persona de nombre " + this.name); 
	
	this.dispatchEvent(
		new CustomEvent("delete-person", {
				detail: {
					name: this.name
				}
			}
		)
	);
}
```

Ahora, en el componente principal, tendremos que recoger el evento
	y asignarle también una función manejadora.

persona-main.js
```javascript
render() {
    return html`
		<!-- Enlace Bootstrap -->
		<h2 class="text-center">Personas</h2>
		<div class="row" id="peopleList">			
			<div class="row row-cols-1 row-cols-sm-4">
				${this.people.map(
					person => 
					html`<persona-ficha-listado 
							name="${person.name}" 
							yearsInCompany="${person.yearsInCompany}" 
							profile="${person.profile}" 
							.photo="${person.photo}"							
							@delete-person="${this.deletePerson}">
						</persona-ficha-listado>`
				)}
			</div>
		</div>					
	`;
}    
```

Será esta función manejadora la que realice el borrado.

persona-main.js
```javascript
deletePerson(e) {
	  console.log("deletePerson en persona-main");
	  console.log("Se va a borrar la persona de nombre " + e.detail.name);
	  
	  this.people = this.people.filter(
		person => person.name != e.detail.name
	  );
}
```

##### AÑADIR UN ELEMENTO AL LISTADO

Ahora implementaremos la posibilidad de añadir una nueva persona al listado.

Para conseguirlo, dividiremos el proceso en varias partes.

Primero vamos a añadir una barra lateral a nuestro diseño.

En ella pondremos el botón para añadir una persona y nos servirá para 
	más funcionalidad futura.

Empezamos creando el nuevo componente persona-sidebar de la forma habitual.

persona-sidebar.js
```javascript
import { LitElement, html } from 'lit-element';

class PersonaSidebar extends LitElement {
	
	static get properties() {
		return {			
		};
	}
	
	constructor() {
		super();			
	}
	
	render() {
		return html`		
			<!-- Enlace Bootstrap -->
			<aside>
				<section>				
					<div class="mt-5">
						<button class="w-100 btn bg-success" style="font-size: 50px"><strong>+</strong></button>
					<div>				
				</section>
			</aside>
		`;
	}    
}

customElements.define('persona-sidebar', PersonaSidebar)
```

Posicionamos la barra en el lateral izquierdo, modificamos la estructura 
de toda la app en el componente principal.

persona-app.js
```javascript
import { LitElement, html } from 'lit-element';
import '../persona-header/persona-header.js';
import '../persona-main/persona-main.js';
import '../persona-footer/persona-footer.js';
import '../persona-sidebar/persona-sidebar.js';

class PersonaApp extends LitElement {
	
	static get properties() {
		return {			
		};
	}
	
	constructor() {
		super();			
	}
	
	render() {
		return html`
			<!-- Enlace Bootstrap -->
			<persona-header></persona-header>
			<div class="row">
				<persona-sidebar class="col-2"></persona-sidebar>
				<persona-main class="col-10"></persona-main>
			</div>			
			<persona-footer></persona-footer>
		`;
	}    
}

customElements.define('persona-app', PersonaApp)
```


Para almacenar una nueva persona, necesitamos primero un formulario en el 
que introducir los datos.

Creamos este nuevo componente: persona-form.

persona-form.js
```javascript
import { LitElement, html } from 'lit-element';

class PersonaForm extends LitElement {
	
	static get properties() {
		return {			
		};
	}
	
	constructor() {
		super();				
	}
	
	render() {
		return html`	
			<!-- Enlace Bootstrap -->		
			<div>
				<form>
					<div class="form-group">
						<label>Nombre Completo</label>
						<input type="text" id="personFormName" class="form-control" placeholder="Nombre Completo"/>
					<div>
					<div class="form-group">
						<label>Perfil</label>
						<textarea class="form-control" placeholder="Perfil" rows="5"></textarea>
					<div>
					<div class="form-group">
						<label>Años en la empresa</label>
						<input type="text" class="form-control" placeholder="Años en la empresa"/>			
					<div>
					<button class="btn btn-primary"><strong>Atrás</strong></button>
					<button class="btn btn-success"><strong>Guardar</strong></button>
				</form>
			</div>
		`;
	}       
}

customElements.define('persona-form', PersonaForm)
```

Lo importamos y añadimos al componente principal y comprobamos que funciona.

persona-main.js
```javascript 
render() {
	return html`
		<!-- Enlace Bootstrap -->		
		<h2 class="text-center">Personas</h2>
		<div class="row" id="peopleList">			
			<div class="row row-cols-1 row-cols-sm-4">
				${this.people.map(
					person => 
					html`<persona-ficha-listado 
							name="${person.name}" 
							yearsInCompany="${person.yearsInCompany}" 
							profile="${person.profile}" 
							.photo="${person.photo}"
							@delete-person="${this.deletePerson}">
						</persona-ficha-listado>`
				)}
			</div>
		</div>
		<div class="row">
			<persona-form id="personForm">
			</persona-form>
		</div>
	`;
}
```

Ahora vamos a hacer que solo se vea el formulario o el listado de personas 
según la situación:

· Por defecto se mostrará el listado de personas.
· Cuando se pulse el botón de añadir una persona, se mostrará el formulario 
	y se ocultará el listado.
· Cuando en el formulario se pulse el botón de guardar o atrás, se volverá a 
	mostrar el listado.

Empezamos ocultando el formulario de la persona añadiéndole la clase d-none.

Añadimos también clases para ponerle un borde de color.

persona-main.js
```javascript
render() {
	return html`
		<!-- Enlace Bootstrap -->
		<h2 class="text-center">Personas</h2>
		<div class="row" id="peopleList">			
			<div class="row row-cols-1 row-cols-sm-4">
				${this.people.map(
					person => 
					html`<persona-ficha-listado 
							name="${person.name}" 
							yearsInCompany="${person.yearsInCompany}" 
							profile="${person.profile}" 
							.photo="${person.photo}"
							@delete-person="${this.deletePerson}">
						</persona-ficha-listado>`
				)}
			</div>
		</div>
		<div class="row">
			<persona-form id="personForm" class="d-none border rounded border-primary">
			</persona-form>
		</div>
	`;
}
```


En la barra lateral, capturamos el evento click en el botón de crear una persona.

persona-sidebar.js
```javascript
render() {
    return html`	
		<!-- Enlace Bootstrap -->
		<aside>
			<section>				
				<div class="mt-5">
					<button class="w-100 btn bg-success" style="font-size: 50px" @click="${this.newPerson}"><strong>+</strong></button>
				<div>				
			</section>
		</aside>		
	`;
}
```

Y añadimos la función manejadora que lanzará el evento.

persona-sidebar.js
```javascript
newPerson(e) {
	console.log("newPerson en persona-sidebar");
	console.log("Se va a crear una nueva persona");
	  
	this.dispatchEvent(new CustomEvent("new-person", {})); 
}
```

Este evento será recogido en el componente que contiene al sidebar, que es 
el principal de la aplicación: persona-app.

persona-app.js
```javascript
render() {
	return html`
		<!-- Enlace Bootstrap -->
		<persona-header></persona-header>
		<div class="row">
			<persona-sidebar class="col-2" @new-person="${this.newPerson}"></persona-sidebar>
			<persona-main class="col-10"></persona-main>
		</div>			
		<persona-footer></persona-footer>
	`;
}    
```

Ahora, para conseguir el objetivo:

· Añadiremos una propiedad Boolean showPersonForm a persona-main, que por 
	defecto tendrá valor false.
· Usando la función updated, estaremos controlando el valor de showPersonForm:
	cuando sea false, mostraremos el listado de personas; cuando sea true, el 
	formulario.
· El mostrar/ocultar estará gestionado por funciones en persona-main.

Empezamos añadiendo showPersonForm.

persona-main.js
```javascript
static get properties() {
	return {			
		people: {type: Array},
		showPersonForm: {type: Boolean}
	};
}			
```

Y en el constructor la ponemos a false por defecto.

persona-main.js
```javascript
constructor() {
	super();
	
	// People array.
		
	this.showPersonForm = false;
}
```

Añadimos la función updated.

persona-main.js
```javascript
updated(changedProperties) {
	console.log("updated");	
	if (changedProperties.has("showPersonForm")) {
		console.log("Ha cambiado el valor de la propiedad showPersonForm en persona-main");
		if (this.showPersonForm === true) {
			this.showPersonFormData();
		} else {
			this.showPersonList();
	    }
    }
}
```

Y las dos funciones asociadas.

persona-main.js
```javascript
showPersonList() {
	console.log("showPersonList");
	console.log("Mostrando listado de personas");
	this.shadowRoot.getElementById("peopleList").classList.remove("d-none");
	this.shadowRoot.getElementById("personForm").classList.add("d-none");	  
}
    
showPersonFormData() {
	console.log("showPersonFormData");
	console.log("Mostrando formulario de persona");
	this.shadowRoot.getElementById("personForm").classList.remove("d-none");	  
	this.shadowRoot.getElementById("peopleList").classList.add("d-none");	 	  
}
```

Por último, añadimos la función manejadora del evento click en el 
componente principal, que pondrá en marcha el cambio en persona-main.

persona-app.js
```
newPerson(e) {
	console.log("newPerson en PersonaApp");	
	this.shadowRoot.querySelector("persona-main").showPersonForm = true; 	  	
}
```

Continuamos: añadimos funcionalidad al botón atrás del formulario, 
	capturamos el evento click.

persona-form.js
```
render() {
	return html`	
		<!-- Enlace Bootstrap -->		
		<div>
			<form>
				<div class="form-group">
					<label>Nombre Completo</label>
					<input type="text" id="personFormName" class="form-control" placeholder="Nombre Completo"/>
				<div>
				<div class="form-group">
					<label>Perfil</label>
					<textarea class="form-control" placeholder="Perfil" rows="5"></textarea>
				<div>
				<div class="form-group">
					<label>Años en la empresa</label>
					<input type="text" class="form-control" placeholder="Años en la empresa"/>
				<div>
				<button @click="${this.goBack}" class="btn btn-primary"><strong>Atrás</strong></button>
				<button class="btn btn-success"><strong>Guardar</strong></button>
			</form>
		</div>			
	`;
}       
```

La función manejadora lanzará un evento para informar de que se quiere 
	cerrar el formulario.

persona-form.js
```javascript
goBack(e) {
	console.log("goBack");	  
	e.preventDefault();	
	this.dispatchEvent(new CustomEvent("persona-form-close",{}));
}
```

El evento persona-form-close será recogido en el componente principal.

persona-main.js
```javascript
<div class="row">
	<persona-form id="personForm" class="d-none border rounded border-primary"
		@persona-form-close="${this.personFormClose}">
	</persona-form>
</div>
```

Y la función manejadora actualizará la propiedad, lo que 
	desencadenará a través de updated que se actualice la plantilla.

persona-main.js
```
personFormClose() {
	console.log("personFormClose");
	console.log("Se ha cerrado el formulario de la persona");
	  
	this.showPersonForm = false;	
}
```

Ahora vamos a continuar con el proceso de guardado de una persona nueva.

La clave estará en capturar el evento click del botón guardar y,
	a partir de ahí, iniciar el proceso de guardado.
	
Tendremos que recoger los datos del formulario y con ellos, 
crear una persona nueva que se pintará en el listado.

Capturamos el evento click del botón guardar.

persona-form.js
```
render() {
		return html`	
			<!-- Enlace Bootstrap -->		
			<div>
				<form>
					<div class="form-group">
						<label>Nombre Completo</label>
						<input type="text" id="personFormName" class="form-control" placeholder="Nombre Completo"/>
					<div>
					<div class="form-group">
						<label>Perfil</label>
						<textarea class="form-control" placeholder="Perfil" rows="5"></textarea>
					<div>
					<div class="form-group">
						<label>Años en la empresa</label>
						<input type="text" class="form-control" placeholder="Años en la empresa"/>			
					<div>
					<button @click="${this.goBack}" class="btn btn-primary"><strong>Atrás</strong></button>
					<button @click="${this.storePerson}" class="btn btn-success"><strong>Guardar</strong></button>
				</form>
			</div>			
		`;
	}       	
```

Ahora vamos a recoger y enviar la información de la persona.

Lo haremos en un objeto y la enviaremos en un evento 
	(asumiremos siempre la misma imagen por defecto).

Empezamos añadiendo la propiedad person en el formulario.

persona-form.js
```javascript
static get properties() {
	return {			
		person: {type: Object}
	};
}
```

Inicializamos el objeto persona en el constructor.

persona-form.js
```javascript
constructor() {
	super();		
	
	this.person = {};		
}
```

Cuando se actualicen los valores de los inputs de texto, 
	actualizaremos el objeto persona con el nuevo valor.

La plantilla quedaría.

person-form.js
```javascript
render() {
		return html`	
		<!-- Enlace Bootstrap -->		
			<div>
				<form>
					<div class="form-group">
						<label>Nombre Completo</label>
						<input type="text" @input="${this.updateName}" id="personFormName" class="form-control" placeholder="Nombre Completo"/>
					<div>
					<div class="form-group">
						<label>Perfil</label>
						<textarea @input="${this.updateProfile}" class="form-control" placeholder="Perfil" rows="5"></textarea>
					<div>
					<div class="form-group">
						<label>Años en la empresa</label>
						<input type="text" @input="${this.updateYearsInCompany}" class="form-control" placeholder="Años en la empresa"/>
					<div>
					<button @click="${this.goBack}" class="btn btn-primary"><strong>Atrás</strong></button>
					<button @click="${this.storePerson}" class="btn btn-success"><strong>Guardar</strong></button>
				</form>
			</div>			
		`;
	}       	
```

Añadimos las funciones manejadoras que actualizan el valor de las propiedades.

persona-form.js
```javascript
updateName(e) {
	console.log("updateName");
	console.log("Actualizando la propiedad name con el valor " + e.target.value);
	this.person.name = e.target.value;
}
	
updateProfile(e) {
	console.log("updateProfile");
	console.log("Actualizando la propiedad profile con el valor " + e.target.value);
	this.person.profile = e.target.value;
}
	
updateYearsInCompany(e) {
	console.log("updateYearsInCompany");
	console.log("Actualizando la propiedad yearsInCompany con el valor " + e.target.value);
	this.person.yearsInCompany = e.target.value;
}
```

Y la función manejadora del click en el botón guardar, que prepara un 
	objeto para enviar junto con el evento.

persona-form.js
```javascript
storePerson(e) {
	console.log("storePerson");
	e.preventDefault();
		
	this.person.photo = {
		"src": "./img/persona.jpg",
		"alt": "Persona"
	};
			
	console.log("La propiedad name vale " + this.person.name);
	console.log("La propiedad profile vale " + this.person.profile);
	console.log("La propiedad yearsInCompany vale " + this.person.yearsInCompany);	
			
	this.dispatchEvent(new CustomEvent("persona-form-store", {
		detail: {
			person:  {
					name: this.person.name,
					profile: this.person.profile,
					yearsInCompany: this.person.yearsInCompany,
					photo: this.person.photo
				}
			}
		})
	);
}
```

Recogemos el evento de creación de la persona en persona-main.

persona-main.js
```javascript

<!-- Rest of template -->
<div class="row">
	<persona-form id="personForm" class="d-none border rounded border-primary"
		@persona-form-close="${this.personFormClose}"
		@persona-form-store="${this.personaFormStore}" >
	</persona-form>
</div>
```

Y la función manejadora del evento, que guardará la nueva persona.

persona-main.js
```javascript
personaFormStore(e) {
	console.log("personaFormStore");
	console.log("Se va a almacenar una persona");	
	  			  		
	this.people.push(e.detail.person);
	  
	console.log("Persona almacenada");	
   		
	this.showPersonForm = false;
}	
```

##### INFORMACIÓN Y EDICIÓN DE UN ELEMENTO DEL LISTADO

Continuamos añadiendo funcionalidad: vamos a añadir un botón 
	para que se pueda consultar la información de una persona en el formulario.
	
Empezaremos añadiendo el botón al footer de la ficha de la persona, asociándole 
una función manejadora al evento click.	

persona-ficha-listado.js
```javascript
render() {
	return html`
		<!-- Enlace Bootstrap -->			
		<div class="card h-100">
			<img src="${this.photo.src}" alt="${this.photo.alt} height="50" width="50" class="card-img-top">
			<div class="card-body">
				<h5 class="card-title">${this.name}</h5>
				<p class="card-text">${this.profile}</p>
				<ul class="list-group list-group-flush">
					<li class="list-group-item">${this.yearsInCompany} años en la empresa</li>
				</ul>
			</div>
			<div class="card-footer">
				<button @click="${this.deletePerson}" class="btn btn-danger col-5"><strong>X</strong></button>
				<button @click="${this.moreInfo}" class="btn btn-info col-5 offset-1"><strong>Info</strong></button>
			</div>				
		</div>
	`;
}
```

Usaremos como identificador de la persona su nombre, que enviaremos 
	en un evento lanzándolo en la función manejadora asociada 
	al evento click.

persona-ficha-listado.js
```javascript
moreInfo(e) {
	console.log("moreInfo");
	console.log("Se ha pedido más información de la persona " + this.name);	  
	  
	this.dispatchEvent(
		new CustomEvent("info-person", {
			detail: {
				name: this.name,				
			}					 
		})
	); 
}
```

Capturamos el evento en el componente principal. 

persona-main.js
```javascript
render() {	
    return html`	
		<!-- Enlace Bootstrap -->	
		<h2 class="text-center">Personas</h2>
		<div class="row" id="peopleList">			
			<div class="row row-cols-1 row-cols-sm-4">
				${this.people.map(
					person => 
					html`<persona-ficha-listado 
							name="${person.name}" 
							yearsInCompany="${person.yearsInCompany}" 
							profile="${person.profile}" 
							.photo="${person.photo}"
							@delete-person="${this.deletePerson}"
							@info-person="${this.infoPerson}">
						</persona-ficha-listado>`
				)}
			</div>
		</div>
		<div class="row">
			<persona-form id="personForm" class="d-none border rounded border-primary"
				@persona-form-close="${this.personFormClose}"
				@persona-form-store="${this.personFormStore}" >
			</persona-form>
		</div>		
	`;
}    
```

En la función manejadora localizaremos la persona de la que estamos pidiendo 
	información y se la pasaremos directamente al formulario como valor 
	de una propiedad.

persona-main.js
```javascript
infoPerson(e) {	  
	console.log("infoPerson en persona-main");
	console.log("Se ha pedido más información de la persona " + e.detail.name);
	
	let chosenPerson = this.people.filter(
		person => person.name === e.detail.name
	)
	  
	this.shadowRoot.getElementById("personForm").person = chosenPerson[0];	  	  
	this.showPersonForm = true;  	  
}
```

En este punto podremos ver el formulario, pero necesitamos que se muestren 
	los datos en cada campo de texto para lo que los enlazaremos 
	en los inputs.

persona-form.js
```
render() {
	return html`
		<!-- Enlace Bootstrap -->
		<div>
			<form>
				<div class="form-group">
					<label>Nombre Completo</label>
					<input type="text" @input="${this.updateName}" .value="${this.person.name}" id="personFormName" class="form-control" placeholder="Nombre Completo"/>
				<div>
				<div class="form-group">
					<label>Perfil</label>
					<textarea @input="${this.updateProfile}" .value="${this.person.profile}" class="form-control" placeholder="Perfil" rows="5"></textarea>
				<div>
				<div class="form-group">
					<label>Años en la empresa</label>
					<input type="text" @input="${this.updateYearsInCompany}" .value="${this.person.yearsInCompany}" class="form-control" placeholder="Años en la empresa"/>			
				<div>
				<button @click="${this.goBack}" class="btn btn-primary"><strong>Atrás</strong></button>
				<button @click="${this.storePerson}" class="btn btn-success"><strong>Guardar</strong></button>
			</form>
		</div>			
	`;
}
```	

Antes de seguir avanzando al botón guardar, si volvemos a probar 
el resto de funcionalidades que ya teníamos implementadas, nos 
encontraremos con que los cambios que hemos hecho pueden dejar la 
app en un estado que no es el que buscamos.

Si después de consultar la información de cualquier persona, le damos al botón 
de añadir una persona, nos encontraremos la información de la último persona 
que hayamos consultado en el formulario. 

Vamos a solucionar esto.

Una solución sería añadir en la función manejadora del click en botón atrás, 
goBack, código para inicializar el valor de los elementos del formulario. 

Como este código sería casi el mismo que hay en el constructor, lo podríamos
sacar a una función aparte y llamarla.

persona-form.js
```javascript
resetFormData() {
	console.log("resetFormData");
	this.person = {};
	this.person.name = "";
	this.person.profile = "";
	this.person.yearsInCompany = "";
}
```	

Y la llamamos en el constructor.

persona-form.js
```javascript
constructor() {
	super();		
	
	this.resetFormData();
}
```

Y en la función goBack.

persona-form.js
```javascript
goBack(e) {
	console.log("goBack");	  
	e.preventDefault();
	this.resetFormData();
	this.dispatchEvent(new CustomEvent("cheese-form-close",{}));	
}
```

Seguimos con la funcionalidad para permitir editar los datos de una
	persona en el formulario.
	
Asumiremos que el identificador único de una persona es su nombre.
	Lo usaremos para localizar la persona que queremos actualizar y, por lo 
	tanto, no se podrá modificar en el formulario.

Para hacer este cambio en el formulario, necesitaremos distinguir 
	el uso que le estemos dando: edición o creación.

Usaremos una propiedad boolean para indicar si el formulario 
	se está usando para edición.

Indicamos al formulario cuando se pulse el botón de más información 
	de una persona, que lo que haremos será editar una persona.

persona-main.js
```javascript
infoPerson(e) {	  
	console.log("infoPerson en persona-main");
	console.log("Se ha pedido más información de la persona " + e.detail.name);
	
	let chosenPerson = this.people.filter(
		person => person.name === e.detail.name
	)
  
	this.shadowRoot.getElementById("personForm").person = chosenPerson[0];	  	  
	this.shadowRoot.getElementById("personForm").editingPerson = true;
	this.showPersonForm = true;  	  
}
```

Añadimos la propiedad editingPerson al formulario.

pesona-form.js
```javascript
static get properties() {
	return {			
		person: {type: Object},
		editingPerson: {type: Boolean}
	};
}
```
La inicializamos a false por defecto dentro de la función resetFormData, 
para que así el formulario vuelva al estado inicial tras usarlo.

persona-form.js
```javascript
resetFormData() {
	console.log("resetFormData");
	this.person = {};
	this.person.name = "";
	this.person.profile = "";
	this.person.yearsInCompany = "";
		
	this.editingPerson = false;
}
```

Y hacemos que en la plantilla no se pueda editar el nombre si estamos 
	editando la persona.

persona-form.js
```javascript
render() {
	return html`	
		<!-- Enlace Bootstrap -->
		<div>
			<form>
				<div class="form-group">
					<label>Nombre Completo</label>
					<input type="text" @input="${this.updateName}" .value="${this.person.name}" ?disabled="${this.editingPerson}" id="personFormName" class="form-control" placeholder="Nombre Completo"/>
				<div>
				<div class="form-group">
					<label>Perfil</label>
					<textarea @input="${this.updateProfile}" .value="${this.person.profile}" class="form-control" placeholder="Perfil" rows="5"></textarea>
				<div>
				<div class="form-group">
					<label>Años en la empresa</label>
					<input type="text" @input="${this.updateYearsInCompany}" .value="${this.person.yearsInCompany}" class="form-control" placeholder="Años en la empresa"/>
				<div>
				<button @click="${this.goBack}" class="btn btn-primary"><strong>Atrás</strong></button>
				<button @click="${this.storePerson}" class="btn btn-success"><strong>Guardar</strong></button>
			</form>
		</div>			
	`;
}
```

Refactorizamos el código del guardado de la persona para indicar 
	al formulario que no estamos editando una persona. Enviamos 
	la propiedad editingPerson en el evento de guardado para 
	que, a la hora de ir a guardar, el componente receptor sepa 
	si era una edición o no.

persona-form.js
```javascript

storePerson(e) {
	console.log("storePerson");
	e.preventDefault();
		
	this.person.photo = {
		"src": "./img/persona.jpg",
		"alt": "Persona"
	};
			
	console.log("La propiedad name vale " + this.person.name);
	console.log("La propiedad profile vale " + this.person.profile);
	console.log("La propiedad yearsInCompany vale " + this.person.yearsInCompany);	
			
	this.dispatchEvent(new CustomEvent("persona-form-store",{
		detail: {
			person:  {
					name: this.person.name,
					profile: this.person.profile,
					yearsInCompany: this.person.yearsInCompany,
					photo: this.person.photo
				},
				editingPerson: this.editingPerson
			}
		})
	);
}
```

Y usamos el valor de la propiedad en el componente receptor del 
	evento para decidir	si el proceso será de guardado o actualización.

persona-main.js
```javascript
personFormStore(e) {
	console.log("personFormStore");	
	console.log(e.detail.person);		
	  			  		
	if (e.detail.editingPerson === true) {
		console.log("Se va a actualizar la persona de nombre " + e.detail.person.name);
		let indexOfPerson = 
			this.people.findIndex(
				person => person.name === e.detail.person.name
			);
		if (indexOfPerson >= 0) {
			console.log("Persona encontrada");
			this.people[indexOfPerson] = e.detail.person;
		}
	} else {		  
		console.log("Se va a almacenar una persona nueva");
		this.people.push(e.detail.person);
	}	  	  	  			  				
		
	console.log("Proceso terminado.");
	console.log(this.people);
  		
	this.showPersonForm = false;
}
```

##### ESTADÍSTICAS: CONTADOR DE ELEMENTOS

Añadiremos a continuación un contador que indique cuantas personas tenemos en
el listado, que situaremos en la barra lateral.

Para conseguirlo necesitamos que el número de personas que hay en el array 
llegue a la barra lateral, pero el array está en el componente persona-main.

Aquí podríamos optar por varios caminos, vamos a:

· Cada vez que se actualice el array de personas, lanzar un evento.
· Este evento será recogido por el componente principal, persona-app.
· Persona-app "sabe" que hay alguna otra parte de nuestra aplicación que
	necesita el valor del array actualizado para extraer información.
· En lugar de hacer que el propio persona-app procese el array, o enviar 
	ese array directamente a persona-sidebar, lo que haremos será crear 
	un componente nuevo, persona-stats, que recibirá el valor actualizado 
	del array y de ahí extraerá información.
· Este componente tendrá una particularidad además: no tendrá plantilla. 
	Se dedicará solo a procesar el array de personas.
· De esta forma además conseguimos liberar de responsabilidades a persona-sidebar.
· Cuando persona-stats tenga valores nuevos que presentar, lanzará un evento, 
	que será recogido por persona-app y que enviará la información a 
	persona-sidebar, que solo tendrá que mostrarla en su plantilla.


Empezaremos lanzando un evento cada vez que se actualicen las personas.

persona-main.js
```javascript
updated(changedProperties) {
	console.log("updated");	
	if (changedProperties.has("showPersonForm")) {
		console.log("Ha cambiado el valor de la propiedad showPersonForm en persona-main");
		if (this.showPersonForm === true) {
			this.showPersonFormData();
		} else {
			this.showPersonList();
		}
	}
		
	if (changedProperties.has("people")) {
		console.log("Ha cambiado el valor de la propiedad people en persona-main");
		this.dispatchEvent(new CustomEvent("updated-people", {
			detail: {
				people: this.people
			}
			})
		)
	}
}
```

Si en este punto hacemos pruebas para ver que se está lanzando el evento, 
nos encontraremos que:

· En el caso del borrado de una persona el evento se lanza.
· Pero en los casos de actualización de una persona y añadir una persona nueva, 
	el evento no se lanza. 
	
Que el evento no se lance significa que la propiedad "people", esto es, 
el array de personas en persona-main, no se está actualizando, pero 
hemos podido comprobar hasta ahora que sí es así. 

El motivo tiene que ver con cómo LitElement evalua un array como 
	candidato a considerar la propiedad como cambiada. En el caso del 
	borrado funciona porque estamos igualando la propiedad people
	al resultado de la función filter, que devuelve un array nuevo y 
	LitElement lo considera como cambiado, cosa que no ocurre en los otros 
	dos casos. Vamos a solucionarlo.
	
En el caso de la actualización, podemos usar la función map que, 
	de forma similar a filter, devuelve un array nuevo.

Para cuando vayamos a añadir una persona nueva, podemos usar la "spread syntax" 
de Javascript, de forma que directamente igualaremos el array de personas al 
array actual más un elemento al final.

persona-main.js
```javascript

personFormStore(e) {
	console.log("personFormStore");	
	console.log(e.detail.person);		
	  			  		
	if (e.detail.editingPerson === true) {
		console.log("Se va a actualizar la persona de nombre " + e.detail.person.name);
		
		this.people = this.people.map(
			person => person.name === e.detail.person.name 
				? person = e.detail.person : person);
	} else {		  
		console.log("Se va a almacenar una persona nueva");
		this.people = [...this.people, e.detail.person];
	}	  	  	  			  				
		
	console.log("Proceso terminado.");
	console.log(this.people);
  		
	this.showPersonForm = false;
}
```

A continuación crearemos el componente persona-stats.js de la 
	forma habitual. Le pondremos una plantilla de prueba.
	
persona-stats.js
```javascript
import { LitElement, html } from 'lit-element';

class PersonaStats extends LitElement {
	
	static get properties() {
		return {			
		};
	}
	
	constructor() {
		super();			
	}
	
	render() {
		return html`	
			<h1>Prueba Persona Stats</h1>
		`;
	}    
}

customElements.define('persona-stats', PersonaStats)
```

Lo incluiremos en persona-app para probar que funciona primero.

persona-app.js
```javascript
import { LitElement, html } from 'lit-element';
import '../persona-header/persona-header.js';
import '../persona-main/persona-main.js';
import '../persona-footer/persona-footer.js';
import '../persona-sidebar/persona-sidebar.js';
import '../persona-stats/persona-stats.js';

// Other component code.

	render() {
		return html`
		<!-- Enlace Bootstrap -->
		<persona-header></persona-header>
		<div class="row">
			<persona-sidebar class="col-2" @new-person="${this.newPerson}"></persona-sidebar>
			<persona-main class="col-10"></persona-main>
		</div>			
		<persona-footer></persona-footer>
		<persona-stats></persona-stats>
		`;
	}    
	
// Other component code.
```

Una vez comprobamos que funciona quitamos la función render y 
	añadimos una propiedad people, que inicializamos en el constructor.  

persona-stats.js
```javascript
import { LitElement, html } from 'lit-element';

class PersonaStats extends LitElement {
	
	static get properties() {
		return {			
			people: {type: Array}
		};
	}
	
	constructor() {
		super();
		
		this.people = [];
	}	
}

customElements.define('persona-stats', PersonaStats)
```

Cuando se actualice el valor de esta propiedad se llamará a una función 
	para sacar información del array de personas.
	
persona-stats.js
```javascript
updated(changedProperties) {
	console.log("updated en persona-stats");
	console.log(changedProperties);		
		
	if (changedProperties.has("people")) {
		console.log("Ha cambiado el valor de la propiedad people en persona-stats");
			
		let peopleStats = this.gatherPeopleArrayInfo(this.people);
		this.dispatchEvent(new CustomEvent("updated-people-stats", {
			detail: {
				peopleStats: peopleStats
			}
		}))
	}
}
```


Del array de personas se sacará su longitud y se enviará en un evento.

persona-stats.js
```javascript
gatherPeopleArrayInfo(people) {
	console.log("gatherPeopleArrayInfo");
		
	let peopleStats = {};
	peopleStats.numberOfPeople = people.length;
		
	return peopleStats;
}
```

Preparamos el componente persona-sidebar para recibir los datos. Añadimos la 
propiedad peopleStats y la inicializamos. 

persona-sidebar.js
```javascript
import { LitElement, html } from 'lit-element';

class PersonaSidebar extends LitElement {		
	
	static get properties() {
		return {
			peopleStats: {type: Object}
		};
	}
	
	constructor() {
		super();

		this.peopleStats = {};
	}
	
	// ...
}

customElements.define('persona-sidebar', PersonaSidebar)
```

Y la pintamos en la plantilla.

persona-sidebar.js
```javascript		

render() {
	return html`		
		<!-- Enlace Bootstrap -->
		<aside>
			<section>				
				<div>
					Hay <span class="badge badge-pill badge-primary">${this.peopleStats.numberOfPeople}</span> personas
				<div>			
				<div class="mt-5">
					<button class="w-100 btn bg-success" style="font-size: 50px" @click="${this.newPerson}"><strong>+</strong></button>
				<div>				
			</section>
		</aside>
	`;
}    
```

Ahora pasamos a persona-sidebar el valor del número de personas desde persona-app 
cuando llegue el evento lanzado desde persona-stats.

persona-app.js
```javascript
peopleStatsUpdated(e) {
	console.log("peopleStatsUpdated");
	console.log(e.detail);
	this.shadowRoot.querySelector("persona-sidebar").peopleStats = e.detail.peopleStats;
}
```

Necesitamos preparar también persona-app para recibir el array de personas 
	actualizado desde persona-main. Añadimos la propiedad people.	

persona-app.js
```javascript	
static get properties() {
	return {			
		people: {type: Array}
	};
}
```

Capturamos el evento de actualización de las personas que viene de persona-main.

persona-app.js
```javascript	
render() {
	return html`
		<!-- Enlace Bootstrap -->
		<persona-header></persona-header>
		<div class="row">
			<persona-sidebar class="col-2" @new-person="${this.newPerson}"></persona-sidebar>
			<persona-main @updated-people="${this.updatePeople}" class="col-10"></persona-main>
		</div>			
		<persona-footer></persona-footer>
		<persona-stats @updated-people-stats="${this.peopleStatsUpdated}"></persona-stats>
	`;
}    
```

Añadimos la función manejadora, que actualizará el valor 
	de la propiedad people.

persona-app.js
```javascript
updatePeople(e) {
	console.log("updatePeople");
	this.people = e.detail.people;		
}
```


Y la función updated para que cuando haya cambios en el valor 
	del array de personas, lo enviemos a persona-stats para que 
	se vuelvan a calcular las estadísticas.

persona-app.js
```javascript
updated(changedProperties) {
	console.log("updated en persona-app");
	console.log(changedProperties);		
		
	if (changedProperties.has("people")) {		
		console.log("Ha cambiado el valor de la propiedad people en persona-app");
		this.shadowRoot.querySelector("persona-stats").people = this.people;
	}
}
```