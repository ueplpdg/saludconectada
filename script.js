// Mostrar secciones con animación
function mostrarSeccion(seccion) {
    document.querySelectorAll('.seccion').forEach(el => {
        el.style.display = 'none';
        el.classList.remove('visible');
    });
    const activeSection = document.getElementById(seccion);
    activeSection.style.display = 'block';
    setTimeout(() => activeSection.classList.add('visible'), 50);
}

// Función para unirse a la videollamada con el código único del médico o nutricionista
function unirseVideollamada(roomCode) {
    const domain = 'meet.jit.si';
    const options = {
        roomName: roomCode,
        width: '100%',
        height: 600,
        parentNode: document.querySelector('#jitsi-container'),
        interfaceConfigOverwrite: { SHOW_JITSI_WATERMARK: false }
    };
    new JitsiMeetExternalAPI(domain, options);
    document.getElementById('jitsi-container').style.display = 'block';
}

// Agregar recordatorios con animación
function agregarRecordatorio() {
    const input = document.getElementById('nuevoRecordatorio');
    const recordatorios = document.getElementById('recordatorios');
    if (input.value.trim()) {
        const li = document.createElement('li');
        li.className = 'list-group-item fade-in';
        li.textContent = input.value;
        recordatorios.appendChild(li);
        input.value = '';
    }
}

// Salud Mental: Agendar Cita (simulación)
function agendarCita() {
    alert('Funcionalidad de agendar cita aún no implementada.');
}

// Salud Mental: Prueba de Autoevaluación
function pruebaAutoevaluacion() {
    const section = document.getElementById('autoevaluation-section');
    if (section.style.display === 'none' || !section.style.display) {
        section.style.display = 'block';
        document.getElementById('evaluation-result').innerHTML = '';
    } else {
        section.style.display = 'none';
    }

    // Manejar el envío del formulario
    const form = document.getElementById('mental-health-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            // Obtener las respuestas
            const q1 = parseInt(document.querySelector('input[name="q1"]:checked').value);
            const q2 = parseInt(document.querySelector('input[name="q2"]:checked').value);
            const q3 = parseInt(document.querySelector('input[name="q3"]:checked').value);
            const q4 = parseInt(document.querySelector('input[name="q4"]:checked').value);

            // Calcular puntajes
            const depressionScore = q1 + q2; // PHQ-2 (depresión)
            const anxietyScore = q3 + q4;    // GAD-2 (ansiedad)
            const totalScore = depressionScore + anxietyScore;

            // Determinar diagnóstico preliminar
            let diagnosis = '';
            let recommendations = [];

            if (totalScore <= 3) {
                diagnosis = 'Tu salud mental parece estar en buen estado. ¡Sigue cuidándote!';
                recommendations = [
                    'Mantén una rutina equilibrada de sueño y actividad física.',
                    'Practica técnicas de relajación como la meditación.',
                    'Habla con alguien de confianza si algo te preocupa.'
                ];
            } else if (totalScore <= 6) {
                diagnosis = 'Hay signos leves de estrés, ansiedad o depresión. Podrías beneficiarte de apoyo adicional.';
                recommendations = [
                    'Prueba ejercicios de respiración profunda o meditación diaria.',
                    'Considera hablar con un amigo o familiar.',
                    'Si los síntomas persisten, consulta a un profesional.'
                ];
            } else {
                diagnosis = 'Se detectan síntomas significativos de ansiedad o depresión. Te recomendamos buscar ayuda profesional.';
                recommendations = [
                    'Contacta a un psicólogo o psiquiatra lo antes posible.',
                    'Evita aislarte; busca apoyo de seres queridos.',
                    'Prueba técnicas de relajación mientras buscas ayuda.'
                ];
            }

            // Mostrar resultados
            const resultDiv = document.getElementById('evaluation-result');
            resultDiv.innerHTML = `
                <h6>Resultados de la Autoevaluación</h6>
                <p><strong>Diagnóstico Preliminar:</strong> ${diagnosis}</p>
                <h6>Recomendaciones:</h6>
                <ul class="list-group">
                    ${recommendations.map(rec => `<li class="list-group-item">${rec}</li>`).join('')}
                </ul>
                <p><em>Nota: Esta es una evaluación preliminar. Para un diagnóstico preciso, consulta a un profesional de la salud mental.</em></p>
            `;

            // Opcional: Ocultar el formulario después de enviar
            form.style.display = 'none';
        });
    }
}

// Salud Mental: Diario de Emociones
function saveDiary() {
    const entry = document.getElementById('diary').value;
    localStorage.setItem('diary_' + new Date().toISOString(), entry);
    document.getElementById('diary-result').textContent = 'Entrada guardada.';
}

// Prevención: Calculadora de Riesgos
document.getElementById('risk-calculator').addEventListener('submit', (e) => {
    e.preventDefault();
    const age = parseInt(document.getElementById('age').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Convertir cm a m
    const imc = weight / (height * height);
    let risk = `Tu IMC es ${imc.toFixed(2)}. `;
    let recommendation = '';
    const customRecommendations = document.getElementById('custom-recommendations');
    customRecommendations.innerHTML = ''; // Limpiar recomendaciones anteriores

    // Determinar categoría de IMC y mensaje
    if (imc < 18.5) {
        risk += 'Estás por debajo del peso normal.';
        recommendation = [
            'Consulta a un médico para evaluar tu estado nutricional.',
            'Aumenta el consumo de calorías saludables (frutos secos, aguacate).',
            'Incorpora entrenamiento de fuerza para ganar masa muscular.'
        ];
    } else if (imc < 25) {
        risk += 'Tu peso es normal. ¡Excelente trabajo!';
        recommendation = [
            'Continúa con una dieta equilibrada y ejercicio regular.',
            'Monitorea tu peso periódicamente.',
            'Prueba nuevas recetas saludables para mantener la variedad.'
        ];
    } else if (imc < 30) {
        risk += 'Tienes sobrepeso.';
        recommendation = [
            'Reduce el consumo de alimentos procesados y azúcares.',
            'Incorpora 30-60 minutos de actividad física diaria.',
            'Consulta a un nutricionista para un plan personalizado.'
        ];
    } else {
        risk += 'Tienes obesidad.';
        recommendation = [
            'Busca apoyo médico para un plan de pérdida de peso seguro.',
            'Evita dietas extremas; enfócate en cambios sostenibles.',
            'Inicia con caminatas diarias y aumenta la intensidad gradualmente.'
        ];
    }

    // Mostrar resultado
    document.getElementById('risk-result').textContent = risk;

    // Mostrar recomendaciones personalizadas
    recommendation.forEach(rec => {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = rec;
        customRecommendations.appendChild(li);
    });

    // Mostrar plan genérico (opcional)
    document.getElementById('prevention-plan').textContent = 'Plan de Prevención: Sigue los hábitos saludables y las recomendaciones personalizadas.';
});

// Mostrar "Consulta" por defecto al cargar
mostrarSeccion('consulta');
