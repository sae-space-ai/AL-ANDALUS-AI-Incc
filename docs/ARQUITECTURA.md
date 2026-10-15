# ARQUITECTURA — AL-ANDALUS AI

## Componentes del Sistema

### 1. REA — Andalus RE (Existente)

- **Tipo:** Sistema de IA de código abierto.
- **Repositorio:** https://github.com/morluto/rea
- **Estado:** Existente. Pendiente de auditoría completa.
- **Componentes conocidos:** Código, páginas, subpáginas, documentación, traducciones, APIs, módulos, funcionalidades, demostraciones, CLI, MCP, scripts, licencias.
- **Regla:** Conservación total. No modificar sin autorización.

### 2. JOULE Compute Governor (Propuesto/En desarrollo)

- **Tipo:** Motor de optimización de costes de IA.
- **Función:** Reducir el gasto computacional de modelos de inteligencia artificial.
- **Estado:** Referencia declarada del 25 % de reducción. Pendiente de verificación experimental.
- **Capas:** Se desarrollará en capas independientes sobre REA.

### 3. JOULE SENSE 360° (Propuesto/En desarrollo)

- **Tipo:** Sistema de análisis visual.
- **Base tecnológica:** OpenCV.
- **Función:** Análisis visual en 360 grados.
- **Estado:** Pendiente de integración.
- **Capas:** Se desarrollará en capas independientes.

### 4. Plataforma de Orquestación (Propuesto)

- **Tipo:** Sistema de coordinación de agentes especializados.
- **Filosofía:** Contrapunto bachiano — cada agente es un especialista.
- **Principios:**
  - Activación selectiva de agentes.
  - Sin operaciones redundantes.
  - Reutilización de resultados verificados.
  - Economía de recursos.

## Diagrama de Capas (Propuesto)

```
┌─────────────────────────────────────────┐
│         PLATAFORMA DE ORQUESTACIÓN       │
├─────────────────────────────────────────┤
│  JOULE Governor  │  JOULE SENSE 360°    │
├─────────────────────────────────────────┤
│           CONSOLA EMPRESARIAL            │
├─────────────────────────────────────────┤
│         BACKEND / APIs / WEB             │
├─────────────────────────────────────────┤
│              REA (Base)                  │
└─────────────────────────────────────────┘
```

## Separación de Responsabilidades

| Componente | Responsabilidad | Estado |
|---|---|---|
| REA | Motor de IA base | Existente |
| JOULE Governor | Optimización de costes | En desarrollo |
| JOULE SENSE 360° | Análisis visual | Propuesto |
| Orquestación | Coordinación de agentes | Propuesto |
| Web corporativa | Presencia digital | En desarrollo |
| Consola empresarial | Panel de control | Propuesto |

## Dependencias Externas

- OpenCV (para JOULE SENSE 360°)
- Modelos de IA (para JOULE Governor)
- GitHub (repositorio de REA)

## Notas Técnicas

- No se han verificado aún las capacidades reales de REA en este entorno.
- Los porcentajes de optimización son declaraciones del propietario, no benchmarks verificados.
- Toda integración respetará la licencia original de REA.
