// Función para activar la animación al hacer clic
function activarAnimacion(linkSelector, seccionSelector) {
    const seccion = document.querySelector(seccionSelector);

    // Espera a que el DOM se haya cargado completamente
    document.addEventListener('DOMContentLoaded', function () {
        // Activamos la animación para la carga inicial
        seccion.classList.add('animado');

        // Activamos la animación cuando se haga clic en el enlace
        const enlace = document.querySelector(linkSelector);
        enlace.addEventListener('click', function (event) {
            event.preventDefault(); // Evitar comportamiento por defecto del enlace

            // Eliminar y volver a agregar la clase animada para reiniciar la animación
            seccion.classList.remove('animado');
            void seccion.offsetWidth; // Reiniciar animación (reflujo)
            seccion.classList.add('animado');

            // Opcional: hacer scroll a la sección después de la animación
            setTimeout(function () {
                document.querySelector(seccionSelector).scrollIntoView({ behavior: 'smooth' });
            }, 15); // Esperar a que termine la animación antes de hacer scroll
        });
    });
}

// Llamar a la función para ambas secciones
activarAnimacion('a[href="#sobre_mi"]', '.nueva-seccion');
activarAnimacion('a[href="#inicio"]', '.seccion-adicional');

// Función para activar la animación de los proyectos con retraso progresivo
function activarAnimacionProyectos() {
    const proyectos = document.querySelectorAll('.proyecto');

    // Recorremos los proyectos y aplicamos la clase 'animado' para iniciar la animación con retraso
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
    e.preventDefault(); // Prevenir el comportamiento por defecto del enlace (no hace scroll inmediatamente)

    // Llamamos a la función que activa la animación
    activarAnimacionProyectos();

    // Después de un pequeño retraso, hacemos scroll suave hacia la sección "Proyectos"
    setTimeout(function () {
        document.querySelector('#proyectos').scrollIntoView({ behavior: 'smooth' });
    }, 15); // Esperamos un poco para que la animación se vea antes de hacer el scroll
});

// Activamos la animación cuando se carga la página para los proyectos visibles
window.addEventListener('load', function () {
    activarAnimacionProyectos();
});

// Script para mostrar texto con animacion
document.addEventListener('DOMContentLoaded', function () {
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
});


// Función para activar la animación de la sección de habilidades
function activarAnimacionHabilidades() {
    const habilidadesSection = document.getElementById('habilidades-tecnicas');
    // Añadir la clase 'visible' para activar la animación
    habilidadesSection.classList.add('visible');
}

// Función que se ejecuta cuando se hace clic en el enlace "habilidades"
const habilidadesLink = document.querySelector('a[href="#habilidades"]');
const habilidadesSection = document.getElementById('habilidades-tecnicas');

// Función para alternar la visibilidad y activar la animación cada vez que se hace clic
habilidadesLink.addEventListener('click', (e) => {
    e.preventDefault(); // Evitar el salto directo a la sección

    // Desplazar la página a la sección de habilidades
    document.querySelector('#habilidades').scrollIntoView({
        behavior: 'smooth'
    });

    // Ocultar la sección (removiendo la clase 'visible')
    habilidadesSection.classList.remove('visible');

    // Usamos un retraso para darle tiempo a la animación de ocultarse
    setTimeout(() => {
        // Después de un pequeño retraso, mostrar de nuevo la sección con la animación
        activarAnimacionHabilidades();
    }, 15);  // 200ms es el tiempo para que se complete la animación de ocultación
});

// Al cargar la página, activar la animación de la sección de habilidades
window.addEventListener('load', function () {
    activarAnimacionHabilidades();
});

// Script para manjeta el nav de la vista en moviles
const menuIcon = document.getElementById('menu-icon');
const menu = document.getElementById('menu');
const closeIcon = document.getElementById('close-icon');
const menuLinks = document.querySelectorAll('nav a'); // Obtener todos los enlaces del menú

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