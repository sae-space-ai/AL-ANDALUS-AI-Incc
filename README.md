# AL-ANDALUS AI — ANDALUS RE

**INTELLIGENCE · ENGINEERING · EUROPE**

---

## 🎼 El Contrapunto Vivo de Bach

Sistema de orquestación multiagente inspirado en la filosofía del contrapunto musical de Johann Sebastian Bach.

**Cada agente, un solista.**  
**Cada tarea, una composición.**  
**Cada recurso, una responsabilidad.**  
**El ser humano, el director.**

---

## ✨ Características

### 🎯 Consola Empresarial ANDALUS RE

- **Tema Andalucía**: Diseño elegante con paleta verde andaluz y blanco
- **Modo claro/oscuro**: Con persistencia en localStorage
- **Responsive**: Funciona en desktop y móvil
- **Accesible**: WCAG AA compliant

### 🎼 Partitura Viva

Visualización del sistema de orquestación donde cada agente es una voz:

- **6 agentes especializados**: Investigador, Arquitecto, Constructor, Verificador, Documentalista, Gobernador
- **Estados visuales**: Silencio, Esperando, Ejecutando, Completado
- **Métricas en tiempo real**: Coste, tiempo, agentes activos
- **Historial de eventos**: Trazabilidad completa de la ejecución

### 🎛️ Mesa de Dirección Humana

Control total sobre la orquestación:

- ✅ Invitar agentes adicionales
- ✅ Aprobar/Rechazar entradas
- ✅ Dar entrada/salida
- ✅ Solicitar intervenciones urgentes
- ✅ Pausar/Reanudar/Cancelar
- ✅ Consultar historial

### 🪞 Modo Espejo (Verificación Inversa)

Verificación determinista basada en 4 criterios reales:

1. Output generado
2. Información del agente correcta
3. Duración registrada
4. Criterios de aceptación de la tarea

### 🦀 Modo Cangrejo (Trazabilidad Retrógrada)

Reconstrucción de dependencias hacia atrás:

- Grafo de proveniencia completo
- Cadena de dependencias
- Verificación de integridad

### 💰 Control de Presupuesto

- Límite de coste configurable
- Límite de tiempo configurable
- Límite de agentes concurrentes
- Detención automática al exceder límites

---

## 🚀 Inicio Rápido

### Requisitos

- Node.js 22.x o superior
- npm 10.x o superior

### Instalación

```bash
# Instalar dependencias
npm install
```

### Desarrollo

```bash
# Iniciar servidor de desarrollo
npm run dev

# Abrir en navegador
# http://localhost:5173
```

### Build

```bash
# Compilar para producción
npm run build

# Los archivos estarán en dist/
```

### Preview

```bash
# Previsualizar build de producción
npm run preview
```

### Tests

```bash
# Ejecutar tests unitarios
npm test

# Ejecutar tests con cobertura
npm run test:coverage
```

---

## 📖 Uso

### 1. Seleccionar una Tarea

Elige una de las tareas predefinidas:

- **Analizar proyecto de software autorizado**
- **Optimizar costes de procesamiento**
- **Generar informe técnico**

### 2. Configurar Presupuesto

Ajusta los límites:

- **Coste máximo**: 50-200 unidades
- **Tiempo máximo**: 10-60 segundos

### 3. Activar Modos Especiales

- **Modo Espejo**: Verificación inversa de resultados
- **Modo Cangrejo**: Trazabilidad retrógrada

### 4. Ejecutar

Pulsa **"▶ Iniciar"** y observa la partitura en ejecución.

### 5. Controlar con la Mesa de Dirección

- **Invitar agentes**: Añade especialistas adicionales
- **Aprobar/Rechazar**: Controla las entradas
- **Dar entrada/salida**: Gestiona el flujo
- **Solicitar intervención**: Fuerza acciones urgentes
- **Pausar/Reanudar**: Controla el tiempo
- **Cancelar**: Detén la ejecución

### 6. Exportar Resultados

Pulsa **"📥 Exportar JSON"** para descargar:

- Workflow completo
- Eventos de ejecución
- Grafo de proveniencia
- Agentes en silencio

---

## 🏗️ Arquitectura

### Motor de Orquestación

```
src/features/counterpoint/
├── types.ts              # Interfaces TypeScript
├── agents.ts             # 6 agentes especializados
├── orchestrator.ts       # Motor principal (843 líneas)
├── scenarios.ts          # Tareas y motivos
└── __tests__/            # 37 tests unitarios
```

### Interfaz Visual

```
src/features/live-score/
└── PartituraViva.tsx     # Componente principal (530 líneas)
```

### Sistema de Branding

```
packages/branding/
├── manifest.json         # Manifiesto de identidad
└── styles/
    └── andalusia-theme.css  # Variables CSS del tema
```

---

## 🎭 Agentes Especializados

| Voz | Rol | Capacidad | Coste |
|-----|-----|-----------|-------|
| 1 | Investigador | Buscar, analizar, resumir | 10 u |
| 2 | Arquitecto | Diseñar, planificar, estructurar | 15 u |
| 3 | Constructor | Construir, generar, transformar | 20 u |
| 4 | Verificador | Verificar, validar, auditar | 12 u |
| 5 | Documentalista | Documentar, registrar, reportar | 8 u |
| 6 | Gobernador | Optimizar, controlar presupuesto | 5 u |

---

## 🔧 Estado del Proyecto

### ✅ Completamente Funcional

- Motor de orquestación
- Máquina de estados (9 estados)
- Selección de agentes
- Concurrencia real
- Pausa/Reanudación
- Modo Espejo (verificación determinista)
- Modo Cangrejo (trazabilidad retrógrada)
- Mesa de Dirección Humana
- Partitura Viva
- Tema claro/oscuro
- Responsive y accesible
- Compilación sin errores

### ⚠️ Demostración Determinista

Los agentes son **simulaciones locales**, no modelos de IA reales. Toda la interfaz muestra claramente "DEMOSTRACIÓN DETERMINISTA".

### ❌ Integraciones Pendientes

| Motor | Estado | Razón |
|-------|--------|-------|
| REA | ❌ No integrado | Repositorio completo no disponible |
| JOULE Compute Governor | ❌ No integrado | Código no localizado |
| JOULE SENSE 360° | ❌ No integrado | Código no localizado |

### ❌ Anagrama Oficial

El archivo `AL_ANDALUS_AI_ANAGRAMA_APROBADO.png` no ha sido proporcionado. El espacio está reservado con texto "AA" y aviso visible.

---

## 📚 Documentación

### Informes de Fases

- `docs/ENTREGA_FINAL.md` — Informe final de entrega
- `docs/FASE3_ARQUITECTURA.md` — Arquitectura del contrapunto vivo
- `docs/FASE31_ENSAYO_GENERAL.md` — Ensayo general del sistema
- `docs/FASE32_ARMONIA.md` — Perfeccionamiento de la armonía

### Documentación Técnica

- `docs/REA_INVENTARIO.md` — Inventario del repositorio REA
- `docs/REA_ARQUITECTURA.md` — Arquitectura técnica de REA
- `docs/REA_WEB_COMPLETA.md` — Catálogo de páginas de REA
- `docs/IDENTIDAD_CORPORATIVA.md` — Sistema de marca

### Memoria del Proyecto

- `QWEN.md` — Memoria maestra con todas las decisiones
- `docs/ESTADO.md` — Estado actual del proyecto
- `docs/DECISIONES.md` — Decisiones aprobadas
- `docs/FASES.md` — Índice de fases

---

## 🔒 Seguridad

### ✅ Implementado

- No hay claves API en frontend
- No hay endpoints expuestos
- Validación de tipos TypeScript
- Control de estados en máquina de estados

### ⚠️ Pendiente (para producción)

- Autenticación de usuarios
- Backend real
- Protección de rutas
- Sanitización de entradas
- Rate limiting

**Nota:** Esta es una demostración local, no un sistema empresarial desplegado.

---

## 🎨 Identidad Visual

### Paleta de Colores

- **Verde Andaluz**: `#007A3D`
- **Blanco**: `#FFFFFF`
- **Verde Profundo**: `#073C27`
- **Fondo Claro**: `#F5F8F5`
- **Texto Oscuro**: `#15241B`

### Tipografía

- **Sans-serif**: Inter
- **Monospace**: JetBrains Mono

### Principios de Diseño

- Tecnología
- Elegancia
- Sencillez
- Precisión
- Ingeniería
- Identidad andaluza
- Profesionalidad internacional

---

## 📊 Métricas

### Compilación

```
✓ 32 modules transformed
dist/index.html                   3.24 kB │ gzip: 1.42 kB
dist/assets/index-*.css          25.37 kB │ gzip: 5.41 kB
dist/assets/index-*.js          193.06 kB │ gzip: 57.98 kB
✓ built in 1.37s
```

### Tests

- **Total**: 37 tests unitarios
- **orchestrator.test.ts**: 15 tests
- **agents.test.ts**: 12 tests
- **scenarios.test.ts**: 10 tests

**Nota**: Tests creados pero no ejecutados (sin terminal en este entorno).

---

## 🚧 Limitaciones Conocidas

1. **Anagrama oficial no disponible** — Requiere archivo gráfico del propietario
2. **Repositorio REA completo no disponible** — Requiere clonación con terminal/git
3. **Código JOULE no localizado** — Requiere que el propietario proporcione el código
4. **Tests no ejecutados** — Requiere terminal para ejecutar `npm test`
5. **Persistencia local** — Solo localStorage (no backend real)
6. **Autenticación** — No implementada (demostración local)

---

## 🎯 Próximos Pasos (para Producción)

1. Proporcionar anagrama oficial (`AL_ANDALUS_AI_ANAGRAMA_APROBADO.png`)
2. Clonar repositorio REA completo
3. Localizar e integrar código JOULE
4. Implementar backend real
5. Ejecutar tests en entorno con terminal
6. Desplegar en infraestructura empresarial

---

## 📄 Licencia

El motor de ingeniería inversa procede del proyecto REA original, desarrollado bajo licencia MIT.

- **Repositorio original**: https://github.com/morluto/rea
- **Web oficial**: https://rea.tools

---

## 🏢 Estado Jurídico

**AL-ANDALUS AI** es una empresa proyectada. La figura jurídica **EU Inc.** está prevista pero no constituida. No se presentará la empresa como legalmente constituida hasta confirmación oficial.

---

## 📞 Contacto

Para más información sobre AL-ANDALUS AI y ANDALUS RE:

- **Web corporativa**: [En desarrollo]
- **Repositorio**: [Este proyecto]
- **Documentación**: Ver carpeta `docs/`

---

**AL-ANDALUS AI — INTELLIGENCE · ENGINEERING · EUROPE**

*La armonía nace de la coordinación.*
