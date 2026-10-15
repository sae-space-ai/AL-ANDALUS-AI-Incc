# REA — INVENTARIO COMPLETO

> Auditoría realizada mediante investigación web del repositorio oficial.
> Fecha: 15 de octubre de 2026.
> Estado: PARCIALMENTE VERIFICADO (investigación remota, sin clonación local).

---

## 1. IDENTIFICACIÓN DEL REPOSITORIO

| Campo | Valor |
|---|---|
| URL oficial | https://github.com/morluto/rea |
| Web pública | https://rea.tools |
| Paquete npm | `rea-agents` (última versión: 6.5.0) |
| Licencia | MIT |
| Lenguaje principal | TypeScript |
| Runtime | Node.js 22.x (>=22.19), 24.x (>=24.11), 26+ |
| Gestor de paquetes | npm |
| Estrellas GitHub | 250,000+ |
| Commits totales | 3,263 |
| Ramas | 125 |
| Tags | 36 |
| Contribuidores | 216+ |

## 2. ÚLTIMO COMMIT REGISTRADO

| Campo | Valor |
|---|---|
| Hash SHA | `6fcfc5b5e0c063300cd5278dd8bad5b1ab1374f6` |
| Fecha | 15 de octubre de 2026 |
| Autores | kaoru0822-kitauji, claude |
| Descripción | fix(browser): keep malformed Electron CDP inventories incomplete (#3901) |
| Rama | main |

## 3. ESTRUCTURA DE CARPETAS PRINCIPALES

```
rea/
├── .agents/skills/          # Instrucciones de habilidades para agentes
├── .github/                 # Workflows CI/CD, templates de issues/PRs
├── .husky/                  # Git hooks
├── bridge/                  # Bridge de comunicación con herramientas nativas
├── docs/                    # Documentación VitePress + guías técnicas
│   ├── .vitepress/          # Configuración VitePress
│   ├── assets/              # Imágenes y recursos docs
│   ├── readme/              # READMEs traducidos (20 idiomas)
│   ├── releases/            # Notas de versión
│   ├── specs/               # Especificaciones técnicas
│   └── [40+ archivos .md]   # Guías por dominio
├── experiments/             # Experimentos de análisis
│   └── analysis-efficiency/ # Mediciones de eficiencia
├── licenses/                # Textos de licencias de terceros
├── native/windows/          # Código nativo para Windows
├── scripts/                 # Scripts de build, website, CI
├── src/                     # Código fuente principal (TypeScript)
├── tests/                   # Suite de pruebas
├── third_party/             # Dependencias de terceros
├── website/                 # Sitio web público
│   ├── evidence/            # Evidencia de casos de estudio
│   ├── locales/             # Catálogos PO (20 idiomas)
│   ├── public/              # HTML/CSS/JS estáticos
│   ├── templates/           # Plantillas HTML compartidas
│   └── [archivos config]    # wrangler.toml, requirements.txt, etc.
├── AGENTS.md                # Instrucciones para agentes de IA
├── CHANGELOG.md             # Registro de cambios
├── CONTRIBUTING.md          # Guía de contribución
├── DISCLAIMER.md            # Aviso de uso responsable
├── LICENSE                  # Licencia MIT
├── README.md                # README principal
├── SECURITY.md              # Política de seguridad
├── THIRD_PARTY_NOTICES.md   # Avisos de terceros
├── install.sh               # Script de instalación
├── package.json             # Manifiesto npm
├── server.json              # Configuración MCP server
├── tsconfig.json            # Configuración TypeScript
├── vitest.config.ts         # Configuración Vitest
└── turbo.json               # Configuración Turborepo
```

## 4. MÓDULOS Y CAPACIDADES IDENTIFICADAS

### Análisis Nativo (Binarios)
- **Proveedores:** Hopper, Ghidra, IDA Pro
- **Formatos:** ELF, PE, Mach-O, raw binaries
- **Arquitecturas:** x86, x64, ARM, AArch64, MIPS, PowerPC, RISC-V, 6502, PSP (Allegrex)
- **Capacidades:** Pseudocódigo, ensamblado, strings, símbolos, llamadas, referencias, búsqueda de patrones

### Análisis JavaScript/Electron
- Módulos, imports, source maps
- Rutas, IPC, add-ons nativos
- ASAR, Electron fuses
- Recuperación con Wakaru

### Análisis de Navegador
- Page structure, scripts, network
- CDP (Chrome DevTools Protocol)
- Screenshots, observaciones

### Análisis .NET
- Metadata, CIL instructions
- Native dependencies
- Build comparisons

### Análisis Android
- APK, manifest, clases
- JADX (headless)
- ADB (dispositivos)
- Apktool (recursos)
- Flutter (Dart snapshots)

### Análisis Apple
- Bundle anatomy, plists
- dyld, rpath dependencies

### Análisis de Firmware
- Binwalk, Unblob
- Extracción de regiones

### Análisis de Red
- HAR, SAZ (Fiddler)
- PCAP (TShark)
- HTTP/3 (mitmproxy)
- Signal recordings (sigrok-cli)

### Análisis Blockchain
- EVM bytecode (EVMole)
- WASM artifacts (WABT)

### Análisis de Bases de Datos
- SQLite offline
- Tablas, columnas, índices, vistas

### Análisis de Procesos
- Terminal output, interacciones
- PTY nativo (Linux/macOS)
- Frida instrumentation

### Herramientas de Reverse Engineering
- GDB (debugger persistente)
- Cutter (bridge integration)
- Rizin
- GNU objdump

### Otros
- Go binaries (compiler version, modules)
- Rust binaries (cargo-auditable)
- HarmonyOS (HAP, HSP, App Pack)
- JEB projects
- Recorded crashes (Linux)
- Offline ELF layout (pwntools)

## 5. HERRAMIENTAS CLI IDENTIFICADAS

| Comando | Función |
|---|---|
| `rea setup` | Registro de agente y instalación |
| `rea update` | Actualización de REA |
| `rea --help` | Ayuda general |
| `rea analyze-javascript-application` | Análisis JS/Electron |
| `rea mcp doctor` | Diagnóstico MCP |
| Comandos nativos | Análisis con Hopper/Ghidra/IDA |
| Comandos reverse | GDB, Cutter, Rizin |
| Comandos browser | Observación de navegador |
| Comandos process | Captura de procesos |

## 6. SERVIDOR MCP

- **Protocolo:** MCP (Model Context Protocol) vía STDIO
- **Configuración:** server.json
- **Catálogo de herramientas:** Generado automáticamente (docs/mcp-contracts.md)
- **Sesiones:** Gestión con archivos ZIP
- **Contratos:** JSON Schema para entrada/salida
- **Integraciones:** Claude Code, Codex, Cursor, Gemini CLI, Grok Build, y más

## 7. AGENTES SOPORTADOS

- Claude Code
- OpenAI Codex
- Cursor
- Gemini CLI
- Grok Build
- Workbuddy
- DSH
- Kimi
- Droid
- Qoder
- Trae
- Zcode
- Devin
- Y otros clientes MCP compatibles

## 8. SISTEMA DE PRUEBAS

| Herramienta | Uso |
|---|---|
| Vitest | Framework de pruebas principal |
| Stryker | Mutation testing |
| jscpd | Detección de duplicación (umbral 3.5%) |
| oxlint | Linting |
| oxfmt | Formateo |
| Knip | Detección de código muerto |

## 9. DOCUMENTACIÓN (docs/)

### Archivos principales identificados:
- installation.md
- cli.md
- mcp-contracts.md
- mcp-prompts.md
- architecture.mermaid
- roadmap.md
- testing.md
- releasing.md
- CONTRIBUTING.md (raíz)
- SECURITY.md (raíz)
- DISCLAIMER.md (raíz)

### Guías por dominio (40+ archivos):
- native-investigation.md
- javascript-application-workflows.md
- browser-observation.md
- managed-code-analysis.md
- android-analysis.md
- adb-device-analysis.md
- apple-application-analysis.md
- flutter-analysis.md
- firmware-analysis.md
- web-network-captures.md
- packet-captures.md
- pcap-analysis.md
- signal-recordings.md
- process-capture.md
- evm-bytecode.md
- wasm-artifacts.md
- sqlite-databases.md
- recorded-crashes.md
- binary-diagnostics.md
- go-binaries.md
- rust-binaries.md
- raw-binary.md
- frida-instrumentation.md
- reverse-engineering-tools.md
- ghidra-provider.md
- ida-provider.md
- ghidra-dos.md, ghidra-mips.md, ghidra-ppc.md, ghidra-psp.md, ghidra-riscv.md, ghidra-nativeaot.md
- jeb-analysis.md
- apktool-resource-analysis.md
- harmony-analysis.md
- http3-capture-lab.md
- electron-fuses.md, electron-observation.md
- javascript-recovery.md, javascript-artifact-reconstruction.md
- javascript-application-graph.md
- javascript-runtime-observation.md
- javascript-runtime-reconciliation.md
- browser-scenario-contract.md
- client-configuration.md, client-verification.md
- tool-design.md
- error-contract.schema.json
- reconstruction-obligation-ledgers.md
- reconstruction-readiness.md
- migration-6.2.md
- user-visible-errors.csv

### READMEs traducidos (20 idiomas):
- Inglés (original)
- 简体中文 (zh)
- 繁體中文 (zh-TW)
- 日本語 (ja)
- 한국어 (ko)
- Türkçe (tr)
- Русский (ru)
- Tiếng Việt (vi)
- ไทย (th)
- Deutsch (de)
- Español (es)
- Français (fr)
- Українська (uk)
- Polski (pl)
- Português (Brasil) (pt-BR)
- العربية (ar)
- فارسی (fa)
- Bahasa Indonesia (id)
- Italiano (it)
- Ελληνικά (el)

## 10. WEBSITE (website/)

### Tecnología:
- HTML + CSS + JavaScript vanilla (sin framework)
- Python para mantenimiento y build
- gettext PO para traducciones
- VitePress para docs técnicos
- Cloudflare Workers para hosting (rea.tools)
- GitHub Pages como mirror

### Páginas principales identificadas:
- `public/index.html` — Página de inicio
- `public/examples/dino-lab/index.html` — Laboratorio de velocidad del dinosaurio
- `public/first-investigation/index.html` — Primera investigación guiada
- `public/showcase/index.html` — Índice de casos de estudio
- `public/showcase/aegis/index.html` — Caso Aegis Android
- `public/showcase/dx-ball/index.html` — Caso DX-Ball
- `public/showcase/notion/index.html` — Caso Notion
- `public/showcase/th04/index.html` — Caso TH04
- `public/showcase/ctf/index.html` — Caso DownUnderCTF
- `public/get-started/index.html` — Primeros pasos
- `public/faq/index.html` — Preguntas frecuentes
- `public/contributors/index.html` — Directorio de contribuidores
- `public/guides/` — Guías de análisis
- `public/blog/index.html` — Blog
- `public/blog/touhou-reconstruction/index.html` — Ensayo Touhou
- `public/blog/reverse-engineering-models/index.html` — Modelos de RE
- `public/examples/` — Ejemplos descargables
- `public/assets/` — Estilos, figuras, favicon

### Traducciones:
- 20 idiomas completos
- 1,728+ mensajes por idioma
- Catálogos PO en `website/locales/`
- Validación: Chromium acceptance cubrió 20 idiomas, 15 viewports

### Recursos:
- Figuras SVG explicativas
- Social card (1200×630)
- Favicon
- CSS compartido
- Scripts de interacción (dino-speed, aegis-otp, etc.)
- ZIP descargables generados dinámicamente

## 11. CONFIGURACIÓN Y BUILD

| Archivo | Función |
|---|---|
| package.json | Dependencias y scripts npm |
| tsconfig.json | Configuración TypeScript |
| tsconfig.build.json | Configuración de build |
| vitest.config.ts | Configuración de pruebas |
| turbo.json | Turborepo (monorepo) |
| stryker.config.mjs | Mutation testing |
| knip.json | Dead code detection |
| .oxlintrc.json | Linting |
| .oxfmtrc.json | Formateo |
| .jscpd.json | Detección de duplicación |
| .nvmrc | Versión Node.js |
| .npmrc | Configuración npm |
| .gitattributes | Atributos Git |
| .gitignore | Ignorados Git |
| .gitmodules | Submódulos |
| release-please-config.json | Releases automáticos |
| server.json | Configuración MCP server |
| install.sh | Instalador shell |
| website/wrangler.toml | Cloudflare Workers config |
| website/requirements.txt | Dependencias Python website |

## 12. DEPENDENCIAS EXTERNAS IDENTIFICADAS

### Proveedores de análisis (requieren instalación propia):
- Hopper Disassembler
- Ghidra (NSA)
- IDA Pro / Hex-Rays
- JADX
- Rizin
- Cutter
- GDB
- Frida
- Binwalk
- Unblob
- WABT (WebAssembly Binary Toolkit)
- EVMole
- Apktool
- JEB
- TShark (Wireshark)
- sigrok-cli
- pwntools (Python)
- mitmdump/mitmproxy
- ADB (Android Debug Bridge)
- GNU objdump
- Wakaru (recuperación JS)

### Herramientas de desarrollo:
- Node.js 22.x+ / 24.x+ / 26+
- npm
- Python 3 (para website)
- CairoSVG + DejaVu Sans (social cards)
- Cloudflare Wrangler
- GitHub CLI (gh)

## 13. BLOQUEOS Y LIMITACIONES DE ESTA AUDITORÍA

| Elemento | Estado | Razón |
|---|---|---|
| Clonación local del repositorio | ⚠️ BLOQUEADO | Entorno web sin terminal/git |
| Verificación de commit exacto local | ⚠️ BLOQUEADO | Sin clonación |
| Ejecución de `npm install` en REA | ⚠️ BLOQUEADO | Sin clonación |
| Ejecución de tests de REA | ⚠️ BLOQUEADO | Sin clonación |
| Verificación de CLI commands | ⚠️ BLOQUEADO | Sin instalación |
| Verificación de MCP server | ⚠️ BLOQUEADO | Sin instalación |
| Conteo exacto de archivos | ⚠️ PARCIAL | Basado en exploración web |
| Inventario completo de src/ | ⚠️ PARCIAL | Solo estructura visible |
| Inventario completo de tests/ | ⚠️ PARCIAL | Solo estructura visible |

## 14. ACCIONES NECESARIAS PARA COMPLETAR

Para completar la auditoría con verificación local se necesita:

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/morluto/rea.git vendor/rea
   ```

2. **Registrar commit exacto:**
   ```bash
   git -C vendor/rea rev-parse HEAD
   ```

3. **Verificar estado limpio:**
   ```bash
   git -C vendor/rea status --short
   ```

4. **Instalar dependencias:**
   ```bash
   cd vendor/rea && npm install
   ```

5. **Ejecutar pruebas básicas:**
   ```bash
   npm run check:fast
   ```

6. **Generar inventario de archivos:**
   ```bash
   find vendor/rea -type f | wc -l
   ```

---

> **Nota:** Este inventario se basa en la investigación exhaustiva del repositorio público en GitHub y la web rea.tools. Los datos son precisos según las fuentes consultadas el 15 de octubre de 2026. La verificación local completa requiere clonación del repositorio en un entorno con terminal.
