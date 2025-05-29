document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const ageFilterModal = document.getElementById('ageFilterModal');
    const ageFilterYes = document.getElementById('ageFilterYes');
    const ageFilterNo = document.getElementById('ageFilterNo');

    const recheckInterval = 7200000; // 2 horas en milisegundos
    let inactivityTimer;

    const showModal = () => {
        ageFilterModal.style.display = 'flex';
        clearTimeout(inactivityTimer);
    };

    const resetInactivityTimer = () => {
        clearTimeout(inactivityTimer);
        inactivityTimer = setTimeout(showModal, recheckInterval);
    };

    const lastCheck = sessionStorage.getItem('lastAgeCheck');
    const now = Date.now();

    if (!lastCheck || now - lastCheck > recheckInterval) {
        ageFilterModal.style.display = 'flex';
    }

    ageFilterYes.addEventListener('click', function () {
        sessionStorage.setItem('lastAgeCheck', Date.now());
        ageFilterModal.style.display = 'none';
        resetInactivityTimer(); // Inicia el temporizador de inactividad
    });

    ageFilterNo.addEventListener('click', function () {
        window.location.href = 'https://www.google.com';
    });

    // Detecta actividad del usuario y reinicia el temporizador
    document.addEventListener('mousemove', resetInactivityTimer);
    document.addEventListener('keydown', resetInactivityTimer);
    document.addEventListener('click', resetInactivityTimer);

    resetInactivityTimer(); // Inicia el temporizador de inactividad al cargar la página
});


// script.js

// Variables para rastrear la posición de desplazamiento
let lastScrollTop = 0;
const navbar = document.getElementById('navbar');

// Evento de desplazamiento
window.addEventListener('scroll', function () {
    let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Mostrar la barra de navegación al desplazarse hacia arriba
    if (currentScrollTop < lastScrollTop) {
        navbar.style.top = '0'; // Mostrar la barra de navegación
    } else {
        // Ocultar la barra de navegación al desplazarse hacia abajo
        navbar.style.top = `-${navbar.offsetHeight}px`;
    }

    // Actualizar la última posición de desplazamiento
    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
});

document.addEventListener("DOMContentLoaded", function () {
    // Selecciona las secciones a animar
    const fadeElements = document.querySelectorAll('#inexorable .text-section, #inexorable .image-section, #inexorable .read-more-btn, #history .text-section, #history .image-section');

    // Configuración del Intersection Observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target); // Deja de observar una vez animado
            }
        });
    }, {
        threshold: 0.75 // Ajusta según sea necesario
    });

    // Observa cada elemento
    fadeElements.forEach(element => {
        observer.observe(element);
    });
});




// Modal de Cócteles
document.addEventListener('DOMContentLoaded', function () {
    const coctelItems = document.querySelectorAll('.coctel-item');
    const modal = document.getElementById('coctelModal');
    const closeModal = document.getElementById('modalClose');
    const coctelName = document.getElementById('coctelName');
    const ingredientesList = document.getElementById('ingredientesList');
    const metodoText = document.getElementById('metodoText');
    const coctelImage = document.getElementById('coctelImage');

    // Objeto de datos de cócteles (como se definió anteriormente)
    const coctelesData = {
        1: {
            nombre: "Lost Souls",
            ingredientes: [
                "40 ml de mezcal",
                "30 ml de Grand Marnier Cordon Rouge o licor de naranja",
                "30 ml de jugo de remolacha",
                "20 ml de jugo fresco de lima",
                "10 ml de jarabe de agave",
                "2 pizcas de chocolate amargo molido",
                "Opcional: escarchar chocolate amargo rallado en el vaso"
            ],
            metodo: "Combine todos los ingredientes en una coctelera con hielo. Agitar y colar en una copa coupette. Y, si te sientes con el antojo, adórnalo con chocolate negro rallado. Por último, pide un deseo.",
            imagen: "img/Cocteles/1.jpg"
        },
        2: {
            nombre: "Granada Margarita",
            ingredientes: [
                "50 ml de mezcal",
                "25 ml de licor de naranja",
                "25 ml de jugo de granada",
                "20 ml de jugo de lima fresco",
                "5 ml de jarabe de agave",
                "Sal para escarchar el vaso"
            ],
            metodo: "Escarchar el vaso con sal. En una coctelera, combinar el mezcal, licor de naranja, jugo de granada, jugo de lima y jarabe de agave con hielo. Agitar y colar en el vaso preparado.",
            imagen: "img/Cocteles/2.jpg"
        },
        3: {
            nombre: "Naked in Tulum",
            ingredientes: [
                "45 ml de mezcal",
                "30 ml de jugo de pepino fresco",
                "15 ml de jugo de lima",
                "10 ml de jarabe de agave",
                "Rodaja de pepino para decorar"
            ],
            metodo: "Mezclar el mezcal, jugo de pepino, jugo de lima y jarabe de agave en una coctelera con hielo. Agitar bien y colar en un vaso bajo con hielo fresco. Decorar con una rodaja de pepino.",
            imagen: "img/Cocteles/3.jpg"
        },
        4: {
            nombre: "Green Path",
            ingredientes: [
                "40 ml de mezcal",
                "30 ml de Grand Marnier Cordon Rouge o licor de naranja",
                "30 ml de jugo de remolacha",
                "20 ml de jugo fresco de lima",
                "10 ml de jarabe de agave",
                "2 pizcas de chocolate amargo molido",
                "Opcional: escarchar chocolate amargo rallado en el vaso"
            ],
            metodo: "Combine todos los ingredientes en una coctelera con hielo. Agitar y colar en una copa coupette. Y, si te sientes con el antojo, adórnalo con chocolate negro rallado. Por último, pide un deseo. negro rallado.",
            imagen: "img/Cocteles/4.jpg"
        },
        5: {
            nombre: "Explorer´s Sprits",
            ingredientes: [
                "50 ml de mezcal",
                "25 ml de licor de naranja",
                "25 ml de jugo de granada",
                "20 ml de jugo de lima fresco",
                "5 ml de jarabe de agave",
                "Sal para escarchar el vaso"
            ],
            metodo: "Escarchar el vaso con sal. En una coctelera, combinar el mezcal, licor de naranja, jugo de granada, jugo de lima y jarabe de agave con hielo. Agitar y colar en el vaso preparado.",
            imagen: "img/Cocteles/5.jpg"
        },
        6: {
            nombre: "Mezcal Mule",
            ingredientes: [
                "45 ml de mezcal",
                "30 ml de jugo de pepino fresco",
                "15 ml de jugo de lima",
                "10 ml de jarabe de agave",
                "Rodaja de pepino para decorar"
            ],
            metodo: "Mezclar el mezcal, jugo de pepino, jugo de lima y jarabe de agave en una coctelera con hielo. Agitar bien y colar en un vaso bajo con hielo fresco. Decorar con una rodaja de pepino.",
            imagen: "img/Cocteles/6.jpg"
        }
        // Añade más cócteles aquí...
    };
    

    coctelItems.forEach(item => {
        item.addEventListener('click', function () {
            const coctelId = item.getAttribute('data-coctel');
            const data = coctelesData[coctelId];

            if (data) {
                coctelName.textContent = data.nombre;
                ingredientesList.innerHTML = data.ingredientes.map(ing => `<li>${ing}</li>`).join('');
                metodoText.textContent = data.metodo;
                coctelImage.src = data.imagen;

                modal.style.display = 'flex';
            }
        });
    });

    closeModal.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});



