# FASE 3 — PARTITURA VIVA

> Comportamiento de la interfaz y sus controles.

---

## 1. DESCRIPCIÓN

La Partitura Viva es la interfaz principal del sistema de orquestación contrapuntística. Visualiza la ejecución de agentes como una partitura polifónica donde cada voz (agente) interviene en su momento.

## 2. ESTRUCTURA DE LA INTERFAZ

### Panel izquierdo — Configuración

| Elemento | Función |
|---|---|
| Selección de tarea | 3 tareas predefinidas |
| Presupuesto (coste) | Slider 50-200 unidades |
| Presupuesto (tiempo) | Slider 10-60 segundos |
| Modo Espejo | Checkbox de verificación inversa |
| Modo Cangrejo | Checkbox de trazabilidad retrógrada |
| Controles | Iniciar, Pausar, Cancelar, Reiniciar, Exportar |

### Panel central — Partitura visual

| Elemento | Función |
|---|---|
| 6 voces horizontales | Una por agente |
| Estados visuales | Silencio, Esperando, Ejecutando, Completado |
| Métricas | Coste total, tiempo total, agentes activos |

## 3. ESTADOS VISUALES

| Estado | Color | Significado |
|---|---|---|
| Silencio | Gris | Agente no necesario para esta tarea |
| Esperando | Borde | Dependencias no satisfechas |
| Ejecutando | Verde pulsante | Agente activo en este momento |
| Completado | Verde fijo | Paso finalizado exitosamente |

## 4. CONTROLES

| Control | Acción | Atajo |
|---|---|---|
| ▶ Iniciar | Crea workflow y ejecuta | - |
| ⏸ Pausar | Pausa ejecución | - |
| ⏹ Cancelar | Cancela workflow | - |
| 🔄 Reiniciar | Limpia estado | - |
| 📥 Exportar JSON | Descarga resultados | - |

## 5. FLUJO DE USO

```
1. Seleccionar tarea → 2. Ajustar presupuesto → 3. Activar modos
→ 4. Iniciar → 5. Observar partitura → 6. Exportar resultados
```

---

> **Nota:** Esta interfaz es una demostración determinista. Los agentes son simulaciones locales.
