# FASE 3 — VERIFICACIÓN

> Funcionamiento de Modo Espejo y Modo Cangrejo.

---

## 1. MODO ESPEJO (Verificación Inversa)

### Función:
Comprobar el resultado desde la dirección contraria al proceso de construcción.

### Flujo:
1. Recibir resultado de una tarea
2. Leer requisitos originales
3. Identificar criterios de aceptación
4. Comprobar cada criterio con evidencias
5. Registrar coincidencias y discrepancias
6. Rechazar si faltan condiciones esenciales

### Implementación actual:
- Simulación con 90% de probabilidad de pasar
- En producción: requiere herramientas de prueba reales

## 2. MODO CANGREJO (Trazabilidad Retrógrada)

### Función:
Recorrer el resultado final hacia atrás hasta las entradas y evidencias.

### Grafo de proveniencia:
- Nodos: pasos de ejecución
- Aristas: dependencias entre pasos
- Datos: input, output, agente, timestamp

### Implementación actual:
- Grafo construido durante ejecución
- Consultable vía `orchestrator.getProvenanceGraph(workflowId)`
- Exportable en JSON

## 3. CRITERIOS DE VERIFICACIÓN

Deben ser:
- Concretos
- Deterministas
- Independientes del proceso de construcción

---

> **Nota:** La verificación real requiere herramientas de prueba, no solo una segunda respuesta de IA.
