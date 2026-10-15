# REA — ARQUITECTURA TÉCNICA

> Documento basado en la investigación del repositorio oficial.
> Fecha: 15 de octubre de 2026.

---

## 1. VISIÓN GENERAL

REA (Reverse Engineer Anything) es un sistema de ingeniería inversa basado en TypeScript que conecta agentes de IA con herramientas de análisis mediante el protocolo MCP (Model Context Protocol). Su arquitectura permite inspeccionar binarios nativos, aplicaciones JavaScript/Electron, sitios web, capturas de red, assemblies .NET, APKs Android y más.

## 2. ARQUITECTURA DE CAPAS

```
┌─────────────────────────────────────────────────────────────┐
│                    AGENTES DE IA (Clientes)                   │
│  Claude Code · Codex · Cursor · Gemini · Grok · otros MCP   │
├─────────────────────────────────────────────────────────────┤
│                    SERVIDOR MCP (STDIO)                       │
│  server.json · Catálogo de herramientas · Sesiones ZIP       │
├─────────────────────────────────────────────────────────────┤
│                    CLI (rea)                                  │
│  Comandos de análisis · Evidencia · Snapshots · Export       │
├─────────────────────────────────────────────────────────────┤
│              CAPA DE DOMINIO (src/)                           │
│  Binary analysis · JavaScript · Browser · Network · Process  │
├─────────────────────────────────────────────────────────────┤
│              PROVEEDORES DE ANÁLISIS                          │
│  Hopper · Ghidra · IDA · JADX · Rizin · Frida · Cutter      │
│  Binwalk · Unblob · WABT · EVMole · TShark · pwntools       │
├─────────────────────────────────────────────────────────────┤
│              BRIDGE (bridge/)                                 │
│  Comunicación con herramientas nativas externas              │
├─────────────────────────────────────────────────────────────┤
│              NATIVE (native/windows/)                         │
│  Código nativo específico de plataforma                      │
└─────────────────────────────────────────────────────────────┘
```

## 3. COMPONENTES PRINCIPALES

### 3.1 Servidor MCP
- Protocolo: STDIO/NDJSON
- Configuración: `server.json`
- Catálogo generado: `docs/mcp-contracts.md`
- Sesiones: Archivos ZIP con evidencias
- Contratos: JSON Schema para cada herramienta

### 3.2 CLI
- Paquete: `rea-agents` (npm)
- Comando principal: `rea`
- Formatos de salida: JSON, YAML, TOON
- Evidencia: Sistema de snapshots con proveniencia

### 3.3 Bridge
- Carpeta: `bridge/`
- Función: Comunicación entre REA y herramientas nativas
- Protocolo: NDJSON sobre STDIO
- Autenticación: Bridge authentication para seguridad

### 3.4 Sistema de Evidencia
- Cada resultado incluye evidencia y limitaciones
- Proveniencia de cada hallazgo
- Snapshots reproducibles
- Identidad semántica de Evidence

### 3.5 Sistema de Proveedores
- Abstracción común para múltiples motores
- Selección automática según formato
- Gestión de sesiones y limpieza
- Manejo de timeouts y cancelación

## 4. FLUJO DE ANÁLISIS

```
1. Agente → REA (MCP/CLI): Solicitud de análisis
2. REA: Identifica formato y selecciona proveedor
3. REA: Inicia proveedor (Hopper/Ghidra/IDA/etc.)
4. Proveedor: Analiza el objetivo
5. REA: Recopila evidencia con proveniencia
6. REA: Aplica políticas de admisión y límites
7. REA → Agente: Resultado con evidencia y limitaciones
8. Agente: Usa hallazgos para explicar/reconstruir
```

## 5. SISTEMA DE AGENTES (HABILIDADES)

- Carpeta: `.agents/skills/`
- Instrucciones de investigación para agentes
- Versión de skill: 40+ (actual)
- Se instala con `npx rea-agents setup`
- Incluye instrucciones por tipo de análisis

## 6. ARQUITECTURA DE PRUEBAS

```
tests/
├── boundary/        # Pruebas de límite entre componentes
│   ├── cli/         # Tests de CLI
│   ├── mcp/         # Tests de MCP
│   └── sdk/         # Tests de SDK
├── source/          # Pruebas de lógica de negocio
└── [fixtures]       # Datos de prueba
```

- Framework: Vitest
- Mutation testing: Stryker (configuraciones múltiples)
- Cobertura: Duplicación < 3.5%
- Lanes de verificación: fast, full, real-provider

## 7. ARQUITECTURA DEL WEBSITE

```
website/
├── public/          # HTML fuente (inglés)
├── locales/         # Catálogos PO (20 idiomas)
├── templates/       # Parciales HTML compartidos
│   ├── header.html.tmpl
│   ├── footer.html.tmpl
│   ├── theme.html.tmpl
│   ├── sharing.html.tmpl
│   └── contributors.html.tmpl
├── evidence/        # Evidencia de casos de estudio
├── _site/           # Output generado (no versionado)
├── wrangler.toml    # Cloudflare Workers
└── requirements.txt # Python dependencies
```

### Sistema de build:
1. `scripts/prepare-website.py` — Genera todas las ediciones
2. `scripts/website.py` — Servidor de preview y checks
3. Python + gettext PO para traducciones
4. Sin framework frontend, sin bundler, sin npm

### Hosting:
- Producción: Cloudflare Workers (rea.tools)
- Mirror: GitHub Pages (morluto.github.io/rea)
- Publicación sincronizada: `.github/workflows/website-pages.yml`

## 8. ARQUITECTURA DE CI/CD

```
.github/workflows/
├── website-pages.yml   # Publicación website (manual, main)
├── pages.yml           # VitePress docs (manual, sin deploy)
└── [otros workflows]   # CI, releases, verificación
```

### Calidad:
- Static checks (format, lint, typecheck)
- Docs checks (VitePress build, links)
- Source tests (Vitest)
- Boundary tests (CLI, MCP, SDK)
- Real provider tests (opcional, requiere herramientas)
- Mutation testing (Stryker)
- Duplication check (jscpd < 3.5%)

## 9. MODELO DE DATOS

### Evidence (Evidencia)
- Identidad semántica
- Proveniencia del productor
- Límites y limitaciones
- Snapshots reproducibles

### Sessions (Sesiones MCP)
- Archivos ZIP
- Formato de dominio
- Contratos de entrada/salida
- Gestión de lifecycle

### Artifacts (Artefactos)
- Binarios, APKs, capturas
- Digests y hashes
- Clasificación por formato
- Proveniencia de fuente

## 10. EXTENSIBILIDAD

### Añadir nuevo proveedor:
1. Implementar interfaz de proveedor en src/
2. Registrar en el sistema de selección
3. Añadir contratos MCP
4. Documentar en docs/
5. Añadir tests boundary

### Añadir nuevo tipo de análisis:
1. Definir dominio en src/domain/
2. Implementar comandos CLI
3. Implementar herramientas MCP
4. Añadir guía en docs/
5. Añadir página en website/

## 11. SEGURIDAD

- No ejecución de código del objetivo
- Análisis local (no se sube nada)
- Provider admission con verificación
- Cleanup ownership estricto
- Resource bounds (CPU, memoria, tiempo)
- Cancellation safety
- DISCLAIMER.md para uso responsable

---

> **Nota:** Esta arquitectura se basa en la investigación del repositorio público. La verificación completa del código fuente requiere clonación local.
