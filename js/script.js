// Evaluación de Hábitos Alimenticios
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM cargado, buscando formulario...');
    const nutritionForm = document.getElementById('nutrition-form');
    
    if (nutritionForm) {
        console.log('Formulario encontrado, agregando evento submit...');
        nutritionForm.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('Formulario enviado, procesando respuestas...');

            // Obtener respuestas
            const mealsPerDay = document.getElementById('meals-per-day').value;
            const waterIntake = document.getElementById('water-intake').value;
            const fruitVegetable = document.getElementById('fruit-vegetable').value;
            const processedFood = document.getElementById('processed-food').value;

            console.log('Respuestas:', { mealsPerDay, waterIntake, fruitVegetable, processedFood });

            // Calcular un puntaje simple basado en las respuestas
            let score = 0;
            let recommendations = [];

            // Evaluar comidas al día
            if (mealsPerDay === '3' || mealsPerDay === '4-5') {
                score += 2;
            } else if (mealsPerDay === '1-2') {
                score -= 1;
                recommendations.push('Intenta aumentar a 3-5 comidas al día para mantener un metabolismo estable.');
            } else {
                recommendations.push('Evita comer demasiadas veces al día; 3-5 comidas balanceadas son ideales.');
            }

            // Evaluar consumo de agua
            if (waterIntake === '2-3L' || waterIntake === 'more-3L') {
                score += 2;
            } else if (waterIntake === 'less-1L') {
                score -= 1;
                recommendations.push('Aumenta tu consumo de agua a al menos 2 litros al día para mantenerte hidratado.');
            } else {
                recommendations.push('Intenta llegar a 2-3 litros de agua al día para una hidratación óptima.');
            }

            // Evaluar consumo de frutas y verduras
            if (fruitVegetable === '4-5' || fruitVegetable === '6+') {
                score += 2;
            } else if (fruitVegetable === '0-1') {
                score -= 1;
                recommendations.push('Incorpora más frutas y verduras en tu dieta; apunta a 5 porciones al día.');
            } else {
                recommendations.push('Aumenta tu consumo de frutas y verduras a 4-5 porciones diarias.');
            }

            // Evaluar consumo de alimentos procesados
            if (processedFood === 'rarely' || processedFood === 'never') {
                score += 2;
            } else if (processedFood === 'daily') {
                score -= 1;
                recommendations.push('Reduce el consumo de alimentos procesados; opta por alimentos frescos y naturales.');
            } else {
                recommendations.push('Intenta disminuir la frecuencia de alimentos procesados a "rara vez".');
            }

            // Generar mensaje general basado en el puntaje
            let message = '';
            if (score >= 6) {
                message = '¡Tus hábitos alimenticios son excelentes! Sigue así para mantener una vida saludable.';
            } else if (score >= 2) {
                message = 'Tus hábitos alimenticios son buenos, pero hay áreas que puedes mejorar.';
            } else {
                message = 'Tus hábitos alimenticios necesitan atención. Sigue estas recomendaciones para mejorar tu salud.';
            }

            // Mostrar resultado
            const resultDiv = document.getElementById('nutrition-result');
            if (resultDiv) {
                console.log('Mostrando resultado...');
                resultDiv.innerHTML = `
                    <div class="alert alert-info">
                        <h5>Resultado de la Evaluación</h5>
                        <p>${message}</p>
                        ${recommendations.length > 0 ? '<h6>Recomendaciones:</h6><ul>' + recommendations.map(rec => `<li>${rec}</li>`).join('') + '</ul>' : ''}
                    </div>
                `;
            } else {
                console.error('No se encontró el elemento #nutrition-result');
            }

            // Limpiar formulario
            nutritionForm.reset();
        });
    } else {
        console.error('No se encontró el formulario con id="nutrition-form"');
    }
});


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
function unirseVideollamada(roomCode, containerId = 'jitsi-container') {
    const domain = 'meet.jit.si';
    const options = {
        roomName: roomCode,
        width: '100%',
        height: 600,
        parentNode: document.querySelector(`#${containerId}`),
        interfaceConfigOverwrite: { SHOW_JITSI_WATERMARK: false }
    };
    new JitsiMeetExternalAPI(domain, options);
    document.getElementById(containerId).style.display = 'block';
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

// Salud Mental: Agendar Cita (eliminamos la simulación)
function agendarCitaPsicologia() {
    // Mostrar la sección "Agendar Cita"
    mostrarSeccion('citas');

    // Preseleccionar la especialidad "Psicología - Gabriela Salazar"
    const specialistSelect = document.getElementById('specialist');
    if (specialistSelect) {
        specialistSelect.value = 'Psicología - Gabriela Salazar';
    }

    // Limpiar el campo de fecha y el resultado previo
    const dateInput = document.getElementById('appointment-date');
    const resultDiv = document.getElementById('appointment-result');
    if (dateInput) dateInput.value = '';
    if (resultDiv) resultDiv.innerHTML = '';
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

// Inicializar Flatpickr para el calendario
document.addEventListener('DOMContentLoaded', function() {
    // Asegurarnos de que el elemento existe antes de inicializar Flatpickr
    const dateInput = document.getElementById('appointment-date');
    if (dateInput) {
        flatpickr(dateInput, {
            enableTime: true,
            dateFormat: "Y-m-d H:i",
            minDate: "today",
            time_24hr: true,
            minuteIncrement: 30, // Intervalos de 30 minutos
            // No usamos disable ni enable para simplificar; validaremos manualmente
            onChange: function(selectedDates, dateStr, instance) {
                console.log("Fecha seleccionada:", dateStr); // Depuración
                checkAvailability(dateStr);
            },
            onReady: function(selectedDates, dateStr, instance) {
                console.log("Flatpickr inicializado correctamente"); // Depuración
            }
        });
    } else {
        console.error("El elemento #appointment-date no se encontró en el DOM");
    }

    // Manejar el formulario de citas
    const form = document.getElementById('appointment-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            const specialist = document.getElementById('specialist').value;
            const dateTime = document.getElementById('appointment-date').value;

            if (!specialist || !dateTime) {
                alert('Por favor, selecciona un especialista y una fecha/hora.');
                return;
            }

            // Validar que sea un día laborable (lunes a viernes)
            const selectedDate = new Date(dateTime);
            const day = selectedDate.getDay();
            if (day === 0 || day === 6) {
                alert('Por favor, selecciona un día laborable (lunes a viernes).');
                return;
            }

            // Validar horario (9:00 a 17:00)
            const hour = selectedDate.getHours();
            if (hour < 9 || hour >= 17) {
                alert('Por favor, selecciona un horario entre las 9:00 y las 17:00.');
                return;
            }

            // Verificar disponibilidad
            const appointments = JSON.parse(localStorage.getItem('appointments')) || [];
            const isTaken = appointments.some(appointment => 
                appointment.specialist === specialist && appointment.dateTime === dateTime
            );

            if (isTaken) {
                alert('Lo siento, ese horario ya está ocupado. Por favor, selecciona otro.');
                return;
            }

            // Generar código único para el paciente
            const patientCode = 'PAC-' + Math.random().toString(36).substr(2, 9).toUpperCase();

            // Guardar la cita
            const appointment = {
                specialist: specialist,
                dateTime: dateTime,
                patientCode: patientCode,
                createdAt: new Date().toISOString()
            };
            appointments.push(appointment);
            localStorage.setItem('appointments', JSON.stringify(appointments));

            // Mostrar resultado
            const resultDiv = document.getElementById('appointment-result');
            resultDiv.innerHTML = `
                <div class="alert alert-success">
                    <h5>Cita Agendada Exitosamente</h5>
                    <p><strong>Especialista:</strong> ${specialist}</p>
                    <p><strong>Fecha y Hora:</strong> ${dateTime}</p>
                    <p><strong>Código Único:</strong> ${patientCode}</p>
                    <p>Guarda este código para referencia futura.</p>
                </div>
            `;

            // Limpiar formulario
            form.reset();
            document.getElementById('appointment-date').value = '';
        });
    } else {
        console.error("El elemento #appointment-form no se encontró en el DOM");
    }
});

// Función para verificar disponibilidad
function checkAvailability(dateTime) {
    const specialist = document.getElementById('specialist').value;
    if (!specialist || !dateTime) return;

    const appointments = JSON.parse(localStorage.getItem('appointments')) || [];
    const isTaken = appointments.some(appointment => 
        appointment.specialist === specialist && appointment.dateTime === dateTime
    );

    const resultDiv = document.getElementById('appointment-result');
    if (isTaken) {
        resultDiv.innerHTML = `
            <div class="alert alert-warning">
                <p>El horario seleccionado ya está ocupado. Por favor, elige otro.</p>
            </div>
        `;
    } else {
        resultDiv.innerHTML = '';
    }
}
