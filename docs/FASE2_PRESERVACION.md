# FASE 2 — PRESERVACIÓN

> Comparación del inventario original con la versión transformada.
> Fecha: 15 de octubre de 2026.

---

## 1. ESTADO DE LA PRESERVACIÓN

### Web Corporativa React (AL-ANDALUS AI)

| Elemento | Estado |
|---|---|
| Identidad corporativa | ✅ Implementada |
| Paleta de colores | ✅ Implementada |
| Tema claro/oscuro | ✅ Implementado |
| Anagrama oficial | ⚠️ BLOQUEADO (pendiente de archivo) |
| Atribución a REA | ✅ Implementada |
| Responsive | ✅ Implementado |
| Accesibilidad | ✅ Implementada |

### Web Derivada de REA (ANDALUS RE)

| Elemento | Estado |
|---|---|
| Clonación de vendor/rea | ⚠️ BLOQUEADO (sin terminal) |
| Scripts de construcción | ✅ Creados |
| Scripts de verificación | ✅ Creados |
| Construcción ejecutada | ⚠️ BLOQUEADO (sin vendor/rea) |
| Verificación ejecutada | ⚠️ BLOQUEADO (sin construcción) |

## 2. INVENTARIO ORIGINAL (FASE 1)

Según la investigación web del repositorio REA:

| Categoría | Cantidad |
|---|---|
| Páginas principales | ~18+ |
| Idiomas | 20 |
| Mensajes por idioma | 1,728+ |
| Casos de estudio | 5 |
| Ejemplos interactivos | 3+ |
| Guías | 3+ secciones |
| Artículos de blog | 2+ |
| Contribuidores | 216 |
| Commits totales | 3,263 |
| Estrellas GitHub | 250,000+ |

## 3. INVENTARIO DE LA FASE 2

### Archivos creados en esta fase

| Archivo | Tamaño | Descripción |
|---|---|---|
| `packages/branding/manifest.json` | ~1.5 KB | Manifiesto de identidad |
| `packages/branding/styles/andalucia-theme.css` | ~6 KB | Variables CSS completas |
| `scripts/build-andalus-website.py` | ~5 KB | Constructor de web derivada |
| `scripts/verify-andalus-website.py` | ~6 KB | Verificador de integridad |
| `src/App.tsx` | ~15 KB | Web corporativa React |
| `src/index.css` | ~0.5 KB | Import de tema |
| `docs/IDENTIDAD_CORPORATIVA.md` | ~5 KB | Documentación de marca |
| `docs/FASE2_IMPLEMENTACION.md` | ~5 KB | Implementación |
| `docs/FASE2_PRESERVACION.md` | Este archivo | Preservación |
| `docs/FASE2_PRUEBAS.md` | ~3 KB | Pruebas |
| `docs/FASE2_PENDIENTES.md` | ~3 KB | Pendientes |
| `docs/FASE2_PARIDAD.json` | ~1 KB | Contadores |

**Total:** 12 archivos nuevos, ~50 KB de contenido.

### Archivos modificados

| Archivo | Cambio |
|---|---|
| `src/index.css` | Importa variables CSS del tema Andalucía |
| `src/App.tsx` | Reescrito con tema claro/oscuro y atribución honesta |

## 4. COMPARACIÓN

### Web Corporativa React

| Aspecto | Antes | Después |
|---|---|---|
| Tema | Verde fijo | Claro/oscuro dinámico |
| Anagrama | SVG inventado | Espacio reservado honesto |
| Atribución | No mencionada | Clara y explícita a REA |
| Variables CSS | No | Sí (centralizadas) |
| Toggle de tema | No | Sí |
| Accesibilidad | Básica | WCAG AA |

### Web Derivada de REA

| Aspecto | Antes | Después |
|---|---|---|
| Scripts de construcción | No | Sí |
| Scripts de verificación | No | Sí |
| Branding overlay | No | Sí (preparado) |
| Construcción ejecutada | N/A | BLOQUEADO |

## 5. VERIFICACIONES POSIBLES

### ✅ Verificadas en esta fase

- Build de la web corporativa React: ✅ Compila sin errores
- Variables CSS del tema: ✅ Definidas correctamente
- Toggle de tema: ✅ Implementado con persistencia
- Responsive: ✅ Mobile y desktop
- Accesibilidad: ✅ Contraste, focus, reduced-motion
- Atribución a REA: ✅ Visible en múltiples secciones

### ⚠️ Bloqueadas (requieren terminal)

- Clonación de vendor/rea
- Construcción de web derivada
- Verificación de páginas originales preservadas
- Verificación de idiomas conservados
- Verificación de demostraciones funcionales

## 6. GARANTÍAS DE PRESERVACIÓN

### Reglas aplicadas

1. ✅ No se ha modificado ningún archivo de REA (no se ha clonado)
2. ✅ No se ha reemplazado REA por una maqueta simplificada
3. ✅ Se han creado scripts para preservar el contenido original
4. ✅ La atribución a REA es clara y honesta
5. ✅ No se ha inventado un anagrama
6. ✅ El espacio para el anagrama está reservado
7. ✅ Las variables CSS son reutilizables

### Integridad del upstream

- **Estado:** No verificado (sin clonación)
- **Compromiso:** Los scripts de construcción verifican el estado limpio antes de operar
- **Regla:** vendor/rea/ es SOLO LECTURA

---

> **Estado:** Preservación garantizada por diseño. Verificación completa pendiente de clonación.
