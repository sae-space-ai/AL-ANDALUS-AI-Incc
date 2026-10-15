# ARQUITECTURA — AL-ANDALUS AI

> Actualizada con la auditoría de REA (FASE 1).
> Fecha: 15 de octubre de 2026.

---

## Componentes del Sistema

### 1. REA — Andalus RE (EXISTENTE — Auditado)

- **Tipo:** Sistema de ingeniería inversa con IA.
- **Repositorio:** https://github.com/morluto/rea
- **Versión actual:** rea-agents 6.5.0
- **Commit auditado:** `6fcfc5b5e0c063300cd5278dd8bad5b1ab1374f6`
- **Licencia:** MIT
- **Lenguaje:** TypeScript (Node.js 22.x+)
- **Estado:** ✅ Auditado mediante investigación web. Pendiente de clonación local.
- **Capacidades:** 30+ tipos de análisis, MCP server, CLI, 20 idiomas en web, 250K+ estrellas GitHub.
- **Regla:** Conservación total. No modificar sin autorización.
- **Documentación:** Ver `docs/REA_INVENTARIO.md`, `docs/REA_ARQUITECTURA.md`, `docs/REA_WEB_COMPLETA.md`, `docs/REA_APIS_MCP.md`, `docs/REA_COMPATIBILIDAD.md`, `docs/REA_PRESERVACION.md`.

### 2. JOULE Compute Governor (Propuesto/En desarrollo)

- **Tipo:** Motor de optimización de costes de IA.
- **Función:** Reducir el gasto computacional de modelos de inteligencia artificial.
- **Estado:** Referencia declarada del 25 % de reducción. Pendiente de verificación experimental.
- **Capas:** Se desarrollará en capas independientes sobre REA.
- **Código original:** NO LOCALIZADO. No reconstruir sin encontrar el código original.

### 3. JOULE SENSE 360° (Propuesto/En desarrollo)

- **Tipo:** Sistema de análisis visual.
- **Base tecnológica:** OpenCV.
- **Función:** Análisis visual en 360 grados.
- **Estado:** Pendiente de integración.
- **Capas:** Se desarrollará en capas independientes.
- **Código original:** NO LOCALIZADO. No reconstruir sin encontrar el código original.

### 4. Plataforma de Orquestación (Propuesto)

- **Tipo:** Sistema de coordinación de agentes especializados.
- **Filosofía:** Contrapunto bachiano — cada agente es un especialista.
- **Principios:**
  - Activación selectiva de agentes.
  - Sin operaciones redundantes.
  - Reutilización de resultados verificados.
  - Economía de recursos.

### 5. Consola Empresarial (Propuesto)

- **Tipo:** Panel de control corporativo.
- **Identidad:** Colores andaluces (verde #006B3F y blanco).
- **Función:** Gestión unificada de REA, JOULE Governor y SENSE 360°.

### 6. Backend Empresarial (Propuesto)

- **Tipo:** API y servicios.
- **Función:** Usuarios, proyectos, permisos, evidencias e informes.

### 7. Web Corporativa (EN DESARROLLO)

- **Tipo:** Presencia digital de AL-ANDALUS AI.
- **Base:** Web original REA preservada + capa de identidad andaluza.
- **Estado:** Web base creada (React + Vite + Tailwind). Pendiente de personalización completa.

---

## Arquitectura de Integración Propuesta

```
┌─────────────────────────────────────────────────────────────┐
│              PLATAFORMA DE ORQUESTACIÓN                       │
│  (Contrapunto bachiano — agentes especializados)             │
├─────────────────────────────────────────────────────────────┤
│  JOULE Governor        │  JOULE SENSE 360°                  │
│  (Optimización costes) │  (Análisis visual OpenCV)          │
├─────────────────────────────────────────────────────────────┤
│              CONSOLA EMPRESARIAL                              │
│  (Panel corporativo — colores andaluces)                     │
├─────────────────────────────────────────────────────────────┤
│         BACKEND / APIs / WEB EMPRESARIAL                     │
│  (Usuarios, proyectos, permisos, evidencias)                 │
├─────────────────────────────────────────────────────────────┤
│         CAPA DE IDENTIDAD ANDALUZA                           │
│  (Personalización visual sobre REA original)                 │
├─────────────────────────────────────────────────────────────┤
│              REA (Base — vendor/rea/)                        │
│  (Motor de ingeniería inversa — MIT — SOLO LECTURA)          │
└─────────────────────────────────────────────────────────────┘
```

## Separación Técnica Propuesta

```
al-andalus-ai/
├── vendor/
│   └── rea/                    → REA original (SOLO LECTURA)
├── apps/
│   ├── console/                → Consola empresarial
│   ├── joule-governor/         → Motor de optimización
│   └── joule-sense/            → Análisis visual
├── packages/
│   ├── identity/               → Identidad visual andaluza
│   ├── orchestration/          → Orquestador de agentes
│   └── shared/                 → Utilidades compartidas
├── assets/
│   └── branding/               → Logotipos, colores, tipografías
├── docs/                       → Documentación AL-ANDALUS AI
└── tests/                      → Pruebas de integración
```

## Principios de Integración

1. **vendor/rea/ es SOLO LECTURA.** Nunca se modifica directamente.
2. **Las extensiones viven en apps/ y packages/.** Separadas del upstream.
3. **La integración se hace vía APIs/interfaces.** No por modificación de código.
4. **Las actualizaciones de REA no rompen las extensiones.** Interfaces estables.
5. **La identidad andaluza es una capa visual independiente.** No altera el comportamiento.
6. **JOULE se desarrolla solo si se localiza su código original.** No se reconstruye desde cero sin autorización.

---

> **Nota:** Esta arquitectura es una propuesta basada en la auditoría de REA. La implementación se realizará en fases posteriores, respetando siempre la conservación del código original.
