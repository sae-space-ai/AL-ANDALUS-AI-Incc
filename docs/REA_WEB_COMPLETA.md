# REA — WEB COMPLETA

> Catálogo de páginas, idiomas, recursos y demostraciones del sitio web rea.tools.
> Fecha: 15 de octubre de 2026.

---

## 1. RESUMEN CUANTITATIVO

| Elemento | Cantidad | Estado |
|---|---|---|
| Páginas principales | ~18+ | Verificado vía web |
| Idiomas soportados | 20 | Verificado |
| Mensajes por idioma | 1,728+ | Verificado |
| Casos de estudio | 5 | Verificado |
| Guías de análisis | 3+ secciones | Verificado |
| Ejemplos interactivos | 3+ | Verificado |
| Artículos de blog | 2+ | Verificado |
| Contribuidores listados | 216 | Verificado |
| Viewports probados | 15 | Verificado |

## 2. PÁGINAS PRINCIPALES

### 2.1 Página de Inicio (`/`)
- Introducción a REA
- Prompt de instalación copiable
- Tres pasos de overview
- Ejemplos: Dinosaurio y Calculadora
- Casos de estudio destacados
- Enlaces a guías de análisis
- Tema claro/oscuro persistente

### 2.2 Get Started (`/get-started/`)
- Configuración de agente
- Primer resultado CLI
- Guías de proveedores
- Enlaces por plataforma (Windows, macOS, Linux)

### 2.3 FAQ (`/faq/`)
- Respuestas con `<details>` nativo
- Fragment IDs estables
- Funciona sin JavaScript

### 2.4 First Investigation (`/first-investigation/`)
- Investigación guiada de Notes
- De setup a verificación CSV
- ZIP descargable con ejemplo

### 2.5 Contributors (`/contributors/`)
- Grid alfabético buscable
- 216 contribuidores
- Snapshot con fecha
- Avatares de GitHub
- Funciona sin JavaScript

## 3. CASOS DE ESTUDIO (SHOWCASE)

### 3.1 Índice (`/showcase/`)
Lista de todos los casos de estudio.

### 3.2 DX-Ball (`/showcase/dx-ball/`)
- Reconstrucción de cálculo de sound-pan
- 3,205 casos originales x86
- 63 bytes de función compilada reproducidos
- Commit de referencia: `a55dca27ec0a07018c1b2c95ae2be027f7d8c3c4`

### 3.3 Notion (`/showcase/notion/`)
- Electron clipboard bridge
- Rich clipboard format
- Inspección de módulo empaquetado

### 3.4 TH04 (`/showcase/th04/`)
- Cálculo de bullet-ring en DOS 16-bit
- PC-98 game
- Verificación con compilador histórico

### 3.5 Aegis (`/showcase/aegis/`)
- APK Android 3.4.3
- Cálculo de login-code (RFC 6238)
- Reloj ajustable interactivo
- REA 6.1.0

### 3.6 CTF (`/showcase/ctf/`)
- DownUnderCTF 2023
- Masked-squares flag checker
- solve.py descargable (Python + z3-solver)

## 4. EJEMPLOS INTERACTIVOS

### 4.1 Dinosaur Lab (`/examples/dino-lab/`)
- Mini-juego con velocidad ajustable
- Regla de aceleración recuperada
- Verificación contra juego original
- Slider de velocidad
- Funciona sin JavaScript (SVG estático)

### 4.2 Notes Browser App (`/examples/notes-web/`)
- App de navegador para ejemplo Notes
- Descarga CSV desde JSON
- noindex (no indexable)

### 4.3 Calculadora Interactiva
- Regla de porcentaje inspectada
- Prueba con + y ×
- Basada en hallazgos de REA

## 5. GUÍAS DE ANÁLISIS (`/guides/`)

### 5.1 Native (`/guides/native/`)
- Programas de código máquina
- Hopper, Ghidra, IDA

### 5.2 JavaScript/Electron (`/guides/javascript/`)
- Módulos, rutas, IPC
- ASAR, aplicaciones empaquetadas

### 5.3 Browser (`/guides/browser/`)
- Actividad de navegador
- Capturas de pantalla
- Network observations

## 6. BLOG (`/blog/`)

### 6.1 Índice (`/blog/`)
Artículos sobre métodos de reconstrucción, ports, mods y reverse engineering.

### 6.2 Touhou Reconstruction (`/blog/touhou-reconstruction/`)
- Ensayo sobre autonomía de agentes
- Calidad de oráculos
- TH08, TH095, TH04, PC-98
- Traducido a 20 idiomas

### 6.3 Reverse Engineering Models (`/blog/reverse-engineering-models/`)
- Modelos generales y especialización
- Evidencia histórica de TH08, TH095, TH04, TH09

## 7. IDIOMAS (20)

| Código | Idioma | Estado |
|---|---|---|
| en | English | Original |
| zh | 简体中文 | Completo |
| zh-TW | 繁體中文 | Completo |
| ja | 日本語 | Completo |
| ko | 한국어 | Completo |
| tr | Türkçe | Completo |
| ru | Русский | Completo |
| vi | Tiếng Việt | Completo |
| th | ไทย | Completo |
| de | Deutsch | Completo |
| es | Español | Completo |
| fr | Français | Completo |
| uk | Українська | Completo |
| pl | Polski | Completo |
| pt-BR | Português (Brasil) | Completo |
| ar | العربية | Completo |
| fa | فارسی | Completo |
| id | Bahasa Indonesia | Completo |
| it | Italiano | Completo |
| el | Ελληνικά | Completo (1728/1728) |

## 8. RECURSOS TÉCNICOS

### Archivos de estilo:
- CSS compartido en `public/assets/`
- Tema claro/oscuro con `data-theme`
- `assets/theme.js` para carga temprana

### Scripts:
- `dino-speed.js` — Regla de velocidad recuperada
- `dino-demo.js` — Demo del dinosaurio
- `aegis-otp.js` — Reconstrucción OTP
- `aegis-demo.js` — Demo de Aegis
- Code-step script para comparaciones
- FAQ disclosure script

### Figuras:
- SVG source mantenidos
- `rea-investigation-flow.svg`
- Diagramas de casos de estudio
- Initial layout references generados con IA

### Metadatos:
- `<title>` y meta descriptions por página
- Open Graph y Twitter cards
- Canonical URLs (rea.tools)
- Sitemap.xml generado automáticamente
- robots.txt
- Social card: 1200×630 (SVG + PNG generado)

## 9. NAVEGACIÓN Y ESTRUCTURA

### Header:
- Logo y nombre
- Navegación principal
- Selector de idioma
- Botón de tema (sol/luna)
- Enlaces: GitHub, Discord, X

### Footer:
- Enlaces comunitarios
- Enlaces de documentación
- Aviso legal

### Table of Contents:
- Visible a 1440px+
- Sticky disclosure en móvil
- Marca posición de lectura

## 10. TECNOLOGÍA DEL WEBSITE

| Aspecto | Tecnología |
|---|---|
| Markup | HTML5 semántico |
| Estilos | CSS vanilla |
| Interactividad | JavaScript vanilla |
| Traducciones | gettext PO |
| Build | Python scripts |
| Hosting prod | Cloudflare Workers |
| Hosting mirror | GitHub Pages |
| Docs técnicos | VitePress |
| Social cards | CairoSVG |
| Fuente cards | DejaVu Sans |
| Servidor local | Python http.server |
| Puerto preview | 4173 |

### Sin dependencias:
- ❌ Sin framework frontend
- ❌ Sin bundler
- ❌ Sin npm en website
- ❌ Sin JavaScript requerido para contenido

## 11. VERIFICACIÓN Y MANTENIMIENTO

### Comandos de mantenimiento:
```bash
python3 scripts/website.py check      # Verificación completa
python3 scripts/website.py sync       # Sincronizar regiones compartidas
python3 scripts/website.py serve      # Preview local
python3 scripts/website.py translations extract  # Extraer traducciones
python3 scripts/website.py new-page   # Crear nueva página
python3 scripts/website.py contributors  # Actualizar contribuidores
python3 scripts/website.py links      # Auditoría de enlaces externos
```

### Tests de mantenimiento:
- 16 tests de mantenimiento
- Validación de HTML compartido
- Validación de traducciones
- Validación de enlaces
- Validación de SEO metadata
- Validación de sitemap

---

> **Nota:** Los números reflejan el estado del repositorio el 15 de octubre de 2026. La verificación local completa requiere clonación del repositorio.
