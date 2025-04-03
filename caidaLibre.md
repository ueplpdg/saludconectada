# Ejercicios de Caída Libre

## Ejercicio 7 (Página 1) - Caída Libre con Sonido

**Enunciado:**  
Se deja caer una piedra desde un acantilado y 6 s después se oye que choca con el mar. La velocidad del sonido es de 340 m/s. ¿Qué altura tiene el acantilado?  
**R:** 150 m

**Datos:**  
- Tiempo total: \( t_{\text{total}} = 6 \, \text{s} \)  
- Velocidad del sonido: \( v_s = 340 \, \text{m/s} \)  
- Aceleración gravitacional: \( g = 9.8 \, \text{m/s}^2 \)  
- Velocidad inicial: \( v_0 = 0 \)

**Incógnita:**  
- \( h \): altura del acantilado

**Fórmulas:**  
- Caída libre: \( h = \frac{1}{2} g t_{\text{caída}}^2 \)  
- Tiempo total: \( t_{\text{total}} = t_{\text{caída}} + t_{\text{sonido}} \)  
- Tiempo del sonido: \( t_{\text{sonido}} = \frac{h}{v_s} \)

**Paso a paso:**  
1. **Definir los tiempos:**  
   \[
   t_{\text{caída}} + t_{\text{sonido}} = 6
   \]
   \[
   t_{\text{sonido}} = \frac{h}{340}
   \]
   \[
   t_{\text{caída}} + \frac{h}{340} = 6 \tag{1}
   \]

2. **Relación de la caída libre:**  
   \[
   h = \frac{1}{2} g t_{\text{caída}}^2
   \]
   \[
   h = \frac{1}{2} \cdot 9.8 \cdot t_{\text{caída}}^2 = 4.9 t_{\text{caída}}^2 \tag{2}
   \]

3. **Sustituir \( h \) en la ecuación del tiempo:**  
   \[
   t_{\text{caída}} + \frac{4.9 t_{\text{caída}}^2}{340} = 6
   \]
   Multiplicar por 340:  
   \[
   340 t_{\text{caída}} + 4.9 t_{\text{caída}}^2 = 2040
   \]
   \[
   4.9 t_{\text{caída}}^2 + 340 t_{\text{caída}} - 2040 = 0 \tag{3}
   \]

4. **Resolver la ecuación cuadrática:**  
   Discriminante:  
   \[
   \Delta = 340^2 - 4 \cdot 4.9 \cdot (-2040) = 115600 + 39984 = 155584
   \]
   \[
   \sqrt{155584} \approx 394.44
   \]
   \[
   t_{\text{caída}} = \frac{-340 \pm 394.44}{2 \cdot 4.9}
   \]
   \[
   t_1 \approx 5.555 \, \text{s}, \quad t_2 \approx -75 \, \text{s} \quad (\text{descartar})
   \]

5. **Calcular la altura:**  
   \[
   h = 4.9 \cdot (5.555)^2 \approx 151.2 \, \text{m}
   \]

6. **Verificación:**  
   - \( t_{\text{sonido}} = \frac{151.2}{340} \approx 0.445 \, \text{s} \)  
   - \( t_{\text{total}} = 5.555 + 0.445 \approx 6 \, \text{s} \)

**Respuesta:**  
\( h \approx 150 \, \text{m} \)

**Tip:** Divide el tiempo total en \( t_{\text{caída}} \) y \( t_{\text{sonido}} \). Resuelve la cuadrática con cuidado y verifica el tiempo total.

---

## Ejercicio 1 (Página 4) - Caída Libre con Sonido

**Enunciado:**  
Se deja caer una piedra desde un acantilado y se oye el choque contra el suelo 6 s después (\( v_s = 340 \, \text{m/s} \), \( g = 9.8 \, \text{m/s}^2 \)). ¿Cuál es la altura?  
**R:** 150 m

**Datos:**  
- Tiempo total: \( t_{\text{total}} = 6 \, \text{s} \)  
- Velocidad del sonido: \( v_s = 340 \, \text{m/s} \)  
- Aceleración gravitacional: \( g = 9.8 \, \text{m/s}^2 \)  
- Velocidad inicial: \( v_0 = 0 \)

**Incógnita:**  
- \( h \): altura del acantilado

**Paso a paso:**  
(Solución idéntica al Ejercicio 7 de la Página 1, ya que los datos son los mismos.)

**Respuesta:**  
\( h \approx 150 \, \text{m} \)

**Tip:** Igual que el anterior. Especificar \( g = 9.8 \, \text{m/s}^2 \) no cambia el resultado.

---

## Ejercicio 2 (Página 5) - Lanzamiento Vertical hacia Arriba

**Enunciado:**  
Desde lo alto de un edificio de 80 m se lanza una pelota hacia arriba con \( v_0 = 20 \, \text{m/s} \) (\( g = 10 \, \text{m/s}^2 \)). ¿En cuántos segundos toca el suelo?  
**Opciones:**  
1) 4 s  
2) 5 s  
3) 6 s  
4) 7 s  

**Datos:**  
- Altura inicial: \( h_0 = 80 \, \text{m} \)  
- Velocidad inicial: \( v_0 = 20 \, \text{m/s} \) (hacia arriba)  
- Aceleración gravitacional: \( g = 10 \, \text{m/s}^2 \)

**Incógnita:**  
- \( t \): tiempo hasta tocar el suelo

**Fórmulas:**  
- Posición: \( y = h_0 + v_0 t - \frac{1}{2} g t^2 \)

**Paso a paso:**  
1. **Definir el sistema:**  
   - Positivo hacia arriba.  
   - \( y = 0 \) en el suelo, \( y_0 = 80 \, \text{m} \).  
   \[
   0 = 80 + 20 t - \frac{1}{2} \cdot 10 \cdot t^2
   \]
   \[
   0 = 80 + 20 t - 5 t^2
   \]

2. **Resolver la ecuación cuadrática:**  
   \[
   5 t^2 - 20 t - 80 = 0
   \]
   \[
   t^2 - 4 t - 16 = 0
   \]
   Discriminante:  
   \[
   \Delta = (-4)^2 - 4 \cdot 1 \cdot (-16) = 16 + 64 = 80
   \]
   \[
   \sqrt{80} \approx 8.944
   \]
   \[
   t = \frac{4 \pm 8.944}{2}
   \]
   \[
   t_1 \approx 6.472 \, \text{s}, \quad t_2 \approx -2.472 \, \text{s} \quad (\text{descartar})
   \]

3. **Ajustar a opciones:**  
   \( t \approx 6.472 \, \text{s} \), redondeado a 6 s.

**Respuesta:**  
\( t = 6 \, \text{s} \) (opción 3)

**Tip:** Define el sistema de coordenadas y ajusta los signos. Descarta tiempos negativos.

---

## Ejercicio 3 (Página 5) - Caída Libre desde 150 m

**Enunciado:**  
Desde 150 m de altura se deja caer una pelota (\( g = 9.8 \, \text{m/s}^2 \)). Determinar: tiempo total, velocidad a los 4 s, altura restante a los 4 s.  
**Opciones:**  
1) 5.53 s; 39.2 m/s; 78.4 m  
2) 5.53 s; 29.4 m/s; 71.6 m  
3) 5.53 s; 39.2 m/s; 71.6 m  
4) 5.53 s; 39.2 m/s; 150 m  

**Datos:**  
- Altura inicial: \( h = 150 \, \text{m} \)  
- Velocidad inicial: \( v_0 = 0 \)  
- Aceleración gravitacional: \( g = 9.8 \, \text{m/s}^2 \)  
- Tiempo específico: \( t = 4 \, \text{s} \)

**Incógnitas:**  
- Tiempo total: \( t_{\text{total}} \)  
- Velocidad a 4 s: \( v \)  
- Altura restante a 4 s: \( h_{\text{restante}} \)

**Fórmulas:**  
- Tiempo total: \( h = \frac{1}{2} g t^2 \)  
- Velocidad: \( v = g t \)  
- Altura caída: \( h_{\text{caída}} = \frac{1}{2} g t^2 \)  
- Altura restante: \( h_{\text{restante}} = h - h_{\text{caída}} \)

**Paso a paso:**  
1. **Tiempo total:**  
   \[
   150 = \frac{1}{2} \cdot 9.8 \cdot t^2
   \]
   \[
   150 = 4.9 t^2
   \]
   \[
   t^2 = \frac{150}{4.9} \approx 30.612
   \]
   \[
   t \approx 5.53 \, \text{s}
   \]

2. **Velocidad a 4 s:**  
   \[
   v = 9.8 \cdot 4 = 39.2 \, \text{m/s}
   \]

3. **Altura restante a 4 s:**  
   \[
   h_{\text{caída}} = \frac{1}{2} \cdot 9.8 \cdot 4^2 = 4.9 \cdot 16 = 78.4 \, \text{m}
   \]
   \[
   h_{\text{restante}} = 150 - 78.4 = 71.6 \, \text{m}
   \]

**Respuesta:**  
\( 5.53 \, \text{s}; 39.2 \, \text{m/s}; 71.6 \, \text{m} \) (opción 3)

**Tip:** Divide el problema en partes: tiempo total, velocidad y altura. Usa \( g \) dado.

---

## Ejercicio 4 (Página 5) - Lanzamiento Vertical hacia Arriba

**Enunciado:**  
Se dispara una bala verticalmente hacia arriba con \( v_0 = 400 \, \text{m/s} \) (\( g = 9.8 \, \text{m/s}^2 \)). ¿Cuál es su velocidad tras medio minuto?  
**Opciones:**  
1) 0 m/s  
2) 10 m/s  
3) 1 m/s  
4) 100 m/s  

**Datos:**  
- Velocidad inicial: \( v_0 = 400 \, \text{m/s} \)  
- Aceleración gravitacional: \( g = 9.8 \, \text{m/s}^2 \)  
- Tiempo: \( t = 30 \, \text{s} \)

**Incógnita:**  
- \( v \): velocidad a 30 s

**Fórmulas:**  
- Velocidad: \( v = v_0 - g t \)

**Paso a paso:**  
1. **Calcular velocidad:**  
   \[
   v = 400 - 9.8 \cdot 30 = 400 - 294 = 106 \, \text{m/s}
   \]

2. **Verificar:**  
   \[
   t_{\text{máx}} = \frac{400}{9.8} \approx 40.816 \, \text{s}
   \]
   A 30 s, la bala aún sube (\( v > 0 \)).

3. **Ajustar a opciones:**  
   \( 106 \approx 100 \, \text{m/s} \).

**Respuesta:**  
\( v \approx 100 \, \text{m/s} \) (opción 4)

**Tip:** Calcula el tiempo a la altura máxima para saber si la bala está subiendo o bajando.

---

## Ejercicio 5 (Página 5) - Altura Máxima

**Enunciado:**  
Para la bala anterior, ¿cuál es la altura máxima?  
**Opciones:**  
1) 4000 m  
2) 8000 m  
3) 1000 m  
4) 5000 m  

**Datos:**  
- \( v_0 = 400 \, \text{m/s} \)  
- \( g = 9.8 \, \text{m/s}^2 \)

**Incógnita:**  
- \( h_{\text{máx}} \)

**Fórmulas:**  
- Altura máxima: \( h_{\text{máx}} = \frac{v_0^2}{2 g} \)

**Paso a paso:**  
1. **Calcular altura máxima:**  
   \[
   h_{\text{máx}} = \frac{400^2}{2 \cdot 9.8} = \frac{160000}{19.6} \approx 8163.27 \, \text{m}
   \]

2. **Ajustar a opciones:**  
   \( 8163.27 \approx 8000 \, \text{m} \).

**Respuesta:**  
\( h_{\text{máx}} \approx 8000 \, \text{m} \) (opción 2)

**Tip:** Usa la fórmula directa para la altura máxima. Verifica el valor de \( g \).

---

## Ejercicio 6 (Página 5) - Caída Libre Simple

**Enunciado:**  
Una pelota cae desde un edificio y tarda 4 s en llegar al suelo (\( g = 10 \, \text{m/s}^2 \)). ¿Cuál es la altura del edificio?  
**Opciones:**  
1) 45 m  
2) 80 m  
3) 16 m  
4) 120 m  

**Datos:**  
- Tiempo: \( t = 4 \, \text{s} \)  
- Aceleración gravitacional: \( g = 10 \, \text{m/s}^2 \)  
- Velocidad inicial: \( v_0 = 0 \)

**Incógnita:**  
- \( h \): altura del edificio

**Fórmulas:**  
- \( h = \frac{1}{2} g t^2 \)

**Paso a paso:**  
1. **Calcular altura:**  
   \[
   h = \frac{1}{2} \cdot 10 \cdot 4^2
   \]
   \[
   h = 5 \cdot 16 = 80 \, \text{m}
   \]

**Respuesta:**  
\( h = 80 \, \text{m} \) (opción 2)

**Tip:** Usa el valor de \( g \) dado. Cuidado con asumir \( g = 9.8 \).
