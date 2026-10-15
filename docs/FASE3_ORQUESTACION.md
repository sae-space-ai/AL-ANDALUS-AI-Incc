# FASE 3 — ORQUESTACIÓN

> Máquina de estados, dependencias, selección de agentes y planificador.

---

## 1. MÁQUINA DE ESTADOS

### Estados (9):
- PENDING → READY, CANCELLED
- READY → RUNNING, CANCELLED
- RUNNING → WAITING, VERIFYING, SUCCEEDED, FAILED, CANCELLED
- WAITING → READY, RUNNING, CANCELLED
- VERIFYING → SUCCEEDED, FAILED, CANCELLED
- SUCCEEDED → (terminal)
- FAILED → READY, CANCELLED
- BLOCKED → READY, CANCELLED
- CANCELLED → (terminal)

## 2. SELECCIÓN DE AGENTES

### Algoritmo:
1. Analizar requisitos de la tarea
2. Buscar capacidades coincidentes en cada rol
3. Seleccionar agentes únicos por capacidad
4. Construir grafo de dependencias
5. Detectar ciclos (rechazar si existen)

### Políticas:
- **Full:** Todos los agentes se activan
- **Selective:** Solo agentes requeridos por dependencias

## 3. DETECCIÓN DE CICLOS

Algoritmo DFS con pila de recursión. Si se detecta un ciclo, se rechaza el workflow.

## 4. PLANIFICADOR

Construye pasos secuenciales con dependencias explícitas. Cada paso tiene:
- ID único
- Agente asignado
- Acción a ejecutar
- Dependencias (IDs de pasos anteriores)
- Estado inicial: PENDING

## 5. CONTROL DE PRESUPUESTO

Antes de ejecutar cada paso:
1. Verificar coste acumulado + coste del paso ≤ presupuesto máximo
2. Verificar tiempo acumulado + tiempo estimado ≤ tiempo máximo
3. Si excede → estado BLOCKED

---

> **Nota:** Implementación determinista. No utiliza IA externa.
