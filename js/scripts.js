document.addEventListener('DOMContentLoaded', function () {
    // Función para activar la animación al hacer clic
    function activarAnimacion(linkSelector, seccionSelector) {
        const seccion = document.querySelector(seccionSelector);
        const enlace = document.querySelector(linkSelector);

        // Activamos la animación para la carga inicial
        seccion.classList.add('animado');

        // Activamos la animación cuando se haga clic en el enlace
        enlace.addEventListener('click', function (event) {
            event.preventDefault(); // Evitar comportamiento por defecto del enlace

            // Eliminar y volver a agregar la clase animada para reiniciar la animación
            seccion.classList.remove('animado');
            void seccion.offsetWidth; // Reiniciar animación (reflujo)
            seccion.classList.add('animado');

            // Opcional: hacer scroll a la sección después de la animación
            setTimeout(function () {
                seccion.scrollIntoView({ behavior: 'smooth' });
            }, 15); // Esperar a que termine la animación antes de hacer scroll
        });
    }

    // Llamar a la función para ambas secciones
    activarAnimacion('a[href="#sobre_mi"]', '.nueva-seccion');
    activarAnimacion('a[href="#inicio"]', '.seccion-adicional');

    // Función para activar la animación de los proyectos con retraso progresivo
    function activarAnimacionProyectos() {
        const proyectos = document.querySelectorAll('.proyecto');
        proyectos.forEach((proyecto, index) => {
            // Eliminamos la clase 'animado' y forzamos el reflujo para reiniciar la animación
            proyecto.classList.remove('animado');
            void proyecto.offsetWidth; // Forzamos un reflujo

            // Aplicamos la clase 'animado' con un retraso progresivo
            proyecto.style.animationDelay = `${index * 0.2}s`;
            proyecto.classList.add('animado');
        });
    }

    // Función que se ejecuta cuando se hace clic en el enlace "Proyectos"
    document.querySelector('#proyectos-link').addEventListener('click', function (e) {
        e.preventDefault(); // Prevenir el comportamiento por defecto del enlace

        // Llamamos a la función que activa la animación
        activarAnimacionProyectos();

        // Después de un pequeño retraso, hacemos scroll suave hacia la sección "Proyectos"
        setTimeout(function () {
            document.querySelector('#proyectos').scrollIntoView({ behavior: 'smooth' });
        }, 15); // Esperamos un poco para que la animación se vea antes de hacer el scroll
    });

    // Al cargar la página, activar la animación de la sección de proyectos visibles
    window.addEventListener('load', activarAnimacionProyectos);

    // Script para mostrar texto con animación
    const texto = "Bienvenido a mi portafolio";
    const elemento = document.getElementById("texto-animado");
    let i = 0;

    function escribirLetra() {
        if (i < texto.length) {
            elemento.innerHTML += texto.charAt(i);
            i++;
            setTimeout(escribirLetra, 100); // Retraso de 100 ms entre cada letra
        }
    }

    escribirLetra(); // Inicia la animación

    // Función para activar la animación de la sección de habilidades
    function activarAnimacionHabilidades() {
        const habilidadesSection = document.getElementById('habilidades-tecnicas');
        habilidadesSection.classList.add('visible');
    }

    // Función para alternar la visibilidad y activar la animación cada vez que se hace clic
    document.querySelector('a[href="#habilidades"]').addEventListener('click', function (e) {
        e.preventDefault(); // Evitar el salto directo a la sección

        const habilidadesSection = document.getElementById('habilidades-tecnicas');
        document.querySelector('#habilidades').scrollIntoView({ behavior: 'smooth' });

        // Primero oculta la sección y luego la vuelve a mostrar con animación
        habilidadesSection.classList.remove('visible');
        setTimeout(activarAnimacionHabilidades, 15); // Retraso de 15ms para asegurar que el cambio de clase se vea
    });

    // Al cargar la página, activar la animación de la sección de habilidades
    window.addEventListener('load', activarAnimacionHabilidades);

    // Script para manejar el nav en móviles
    const menuIcon = document.getElementById('menu-icon');
    const menu = document.getElementById('menu');
    const closeIcon = document.getElementById('close-icon');
    const menuLinks = document.querySelectorAll('nav a');

    // Función para mostrar/ocultar el menú al hacer clic en el ícono de hamburguesa
    menuIcon.addEventListener('click', function () {
        menu.classList.add('show'); // Mostrar el menú
    });

    // Función para cerrar el menú al hacer clic en el ícono de cierre
    closeIcon.addEventListener('click', function () {
        menu.classList.remove('show'); // Ocultar el menú
    });

    // Función para cerrar el menú al hacer clic en cualquier enlace
    menuLinks.forEach(link => {
        link.addEventListener('click', function () {
            menu.classList.remove('show'); // El menú se cierra cuando se hace clic en un enlace
        });
    });
});
