<div id="top"></div>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="#">
    <img src="https://campus.threepoints.com/branding/themes/DBS2020/login/img/Logo_3P_White.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">01-bootcamp-fullstackmaster</h3>

  <p align="center">
    Dockerizacion de una api restfull con nodejs, express, mongoDB
    <br />
    <a href="https://github.com/jleonestevez/01-bootcamp-fullstackmaster"><strong>Explora el detalle »</strong></a>
    <br />
    <br />
    <a href="https://github.com/jleonestevez/01-bootcamp-fullstackmaster">Ver Demo</a>
    ·
    <a href="https://github.com/jleonestevez/01-bootcamp-fullstackmaster/issues">Reportar Bug</a>
    ·
    <a href="https://github.com/jleonestevez/01-bootcamp-fullstackmaster/issues">Enviar Nuevas funcionalidades</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Tabla de Contenidos</summary>
  <ol>
    <li>
      <a href="#acerca-del-proyecto">Acerca del Proyecto</a>
      <ul>
        <li><a href="#built-with">Tecnologias</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Empezando</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Instalación</a></li>
      </ul>
    </li>
    <li><a href="#usage">Uso</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECTa -->
## Acerca del Proyecto

[//]: # ([![Product Name Screen Shot][product-screenshot]]&#40;https://example.com&#41;)

La prueba consta de varios apartados donde se pide al alumno que desarrolle desde cero un proyecto sencillo de Nodejs para, continuación, dockerizar la solución.
Todo esto siguiendo un sencillo control de versiones del proyecto haciendo uso de Git y GitHub.

Ejercicios a realizar
1. Instalar un IDE en vuestra máquina. De acuerdo con las preferencias del profesorado del Máster, recomienda Visual Studio Code, pero se permite flexibilidad en la elección. (0.5 puntos)
2. Crearse un perfil de GitHub. (0.5 puntos)
3. Crearse un repo personal en GitHub para que aparezca como perfil público.
   (0.5 puntos)
4. Desplegar una base de datos de MongoDB en un container de Docker con
   persistencia. Crear una database y una colección o colecciones para almacenar documentos. (2 puntos)
   a. Crear algunos documentos en la(s) colección(es) que se ha(n) creado. Pueden tener los mismos campos que los que se vieron en clase o tener la estructura que se desee.
   b. Se puede rellenar la base de datos con mecanismo de llamada a alguna API o se pueden meter a mano o facilitar mockeados.
5. Crear una API sencilla con Nodejs (3 puntos) que sea capaz de:
   a. Conectarse al mongo dockerizado
   b. Crear una ruta que, mediante un GET, devuelva todos los documentos en
   una colección
   threepoints.com
   Partner académico:

c. Definir una ruta que, mediante un GET, devuelva sólo los documentos que cumplen la condición en base a un query sobre uno o varios campos de un documento.
d. Definir una ruta con método PUT que modifique alguno de los campos de un documento (el cual debe cumplir alguna condición o query). Los códigos 4xx se dejan a su elección. Los códigos 2xx deben ser, como mínimo, los siguientes:
i. If not found, create a new document in the database. (return 201 Created)
ii. If found, target keyword(s) to be successfully modified (200 OK)
e. Definir una ruta con método DELETE que elimine el(los) documento(s) que cumplan alguna condición o query. Los códigos 4xx se dejan a su
elección. Los códigos 2xx deben ser, como mínimo, los siguientes: i. If not found, do nothing. (204 No Content)
ii. If found, document deleted (200 OK)
6. Dockerizar la API del punto 5. (1 punto)
7. Subir a un repo público de GitHub el repositorio creado para realizar el punto 5 y 6. El repositorio debe ir acompañado de un README.md que contenga una descripción e instrucciones para poder usar el código en otra máquina. (2.5 puntos)
   a. Se pide que el alumno intente trabajar haciendo uso de, al menos, una rama.
   b. De esta manera, se pide que se realice al menos una Pull Request mínimamente documentada y un mergeo a main antes de entregar la actividad. Por ello, también se pide no borrar la rama tras el mergeo.




<p align="right">(<a href="#top">regresar to top</a>)</p>



### Tecnologias

* [Docker](https://www.docker.com/)
* [NodeJs](https://nodejs.org/es/)
* [Express](https://expressjs.com/es/)
* [MongoDB](https://www.mongodb.com/es)


<p align="right">(<a href="#top">regresar to top</a>)</p>



<!-- GETTING STARTED -->
## Empezando



### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Get a free API Key at [https://example.com](https://example.com)
2. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `config.js`
   ```js
   const API_KEY = 'ENTER YOUR API';
   ```

<p align="right">(<a href="#top">regresar to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#top">regresar to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [x] Crear DockerFile Api
- [x] Crear DockerFile Mongo con Datos persistentes
- [x] Crear Docker Compose
- [X] Crear Api
- [ ] Agregar Metodos Get, Post, Put, Delete


Ve [Bugs Reportados](https://github.com/jleonestevez/01-bootcamp-fullstackmaster/issues) para obtener una lista completa de las características propuestas (y los problemas conocidos)..

<p align="right">(<a href="#top">regresar to top</a>)</p>




<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">regresar to top</a>)</p>



<!-- CONTACT -->
## Contact

Jose Estevez  - josefelixe@gmail.com

Link del Proyecto: [https://github.com/jleonestevez/01-bootcamp-fullstackmaster](https://github.com/jleonestevez/01-bootcamp-fullstackmaster)

<p align="right">(<a href="#top">regresar to top</a>)</p>



<p align="right">(<a href="#top">regresar to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/jleonestevez/01-bootcamp-fullstackmaster.svg?style=for-the-badge
[contributors-url]:https://github.com/jleonestevez/01-bootcamp-fullstackmaster/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/jleonestevez/01-bootcamp-fullstackmaster.svg?style=for-the-badge
[forks-url]: https://github.com/jleonestevez/01-bootcamp-fullstackmaster/network/members
[stars-shield]: https://img.shields.io/github/stars/jleonestevez/01-bootcamp-fullstackmaster.svg?style=for-the-badge
[stars-url]: https://github.com/jleonestevez/01-bootcamp-fullstackmaster/stargazers
[issues-shield]: https://img.shields.io/github/issues/jleonestevez/01-bootcamp-fullstackmaster.svg?style=for-the-badge 
[issues-url]: https://github.com/jleonestevez/01-bootcamp-fullstackmaster/issues 
[license-shield]: https://img.shields.io/github/license/jleonestevez/01-bootcamp-fullstackmaster.svg?style=for-the-badge
[license-url]: https://github.com/jleonestevez/01-bootcamp-fullstackmaster/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/jose-estevez-0b9a4729/
[product-screenshot]: images/screenshot.png