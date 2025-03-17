// Mostrar secciones con animación
function mostrarSeccion(seccion) {
    document.querySelectorAll('.seccion').forEach(el => {
        el.style.display = 'none';
        el.classList.remove('visible');
    });
    const activeSection = document.getElementById(seccion);
    activeSection.style.display = 'block';
    setTimeout(() => activeSection.classList.add('visible'), 50); // Efecto de entrada
}

// Iniciar videollamada (Jitsi Meet con servidor privado)
document.addEventListener('DOMContentLoaded', function() {
    const startCallButton = document.getElementById('iniciarVideollamadaBtn');
    const jitsiContainer = document.getElementById('jitsi-container');

    startCallButton.addEventListener('click', function() {
        const domain = 'meet.jit.si/salaDelDoctor2025'; // Reemplaza con tu dominio
        const roomName = 'salaDelDoctor2025'; // Sala dedicada al doctor
        const options = {
            roomName: roomName,
            width: '100%',
            height: 500,
            parentNode: jitsiContainer,
        };
        const api = new JitsiMeetExternalAPI(domain, options);
    });
});

// Agregar recordatorios con animación
function agregarRecordatorio() {
    const input = document.getElementById('nuevoRecordatorio');
    const recordatorios = document.getElementById('recordatorios');
    if (input.value.trim()) {
        const li = document.createElement('li');
        li.className = 'list-group-item fade-in';
        li.textContent = input.value;
        li.style.animation = 'fadeIn 0.5s ease-in';
        recordatorios.appendChild(li);
        input.value = '';
    }
}

// Inicializar mapa (si tienes API Key)
function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8
    });
    new google.maps.Marker({
        position: { lat: -34.397, lng: 150.644 },
        map: map,
        title: 'Zona rural atendida'
    });
}

// Mostrar "Consulta" por defecto al cargar
mostrarSeccion('consulta');

// Añadir animación CSS al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.seccion');
    sections.forEach(section => {
        section.classList.add('visible');
    });
});
