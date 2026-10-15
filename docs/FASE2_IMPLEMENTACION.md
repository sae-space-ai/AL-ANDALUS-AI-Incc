# FASE 2 — IMPLEMENTACIÓN

> Archivos creados y cambios realizados.
> Fecha: 15 de octubre de 2026.

---

## 1. ARCHIVOS CREADOS

### Sistema de Branding (`packages/branding/`)

| Archivo | Descripción |
|---|---|
| `packages/branding/manifest.json` | Manifiesto de identidad corporativa |
| `packages/branding/styles/andalucia-theme.css` | Variables CSS del tema Andalucía (claro/oscuro) |

### Scripts de Construcción (`scripts/`)

| Archivo | Descripción |
|---|---|
| `scripts/build-andalus-website.py` | Constructor de web derivada desde upstream REA |
| `scripts/verify-andalus-website.py` | Verificador de integridad de la web derivada |

### Documentación (`docs/`)

| Archivo | Descripción |
|---|---|
| `docs/IDENTIDAD_CORPORATIVA.md` | Sistema de marca completo |
| `docs/FASE2_IMPLEMENTACION.md` | Este archivo |
| `docs/FASE2_PRESERVACION.md` | Comparación de inventario |
| `docs/FASE2_PRUEBAS.md` | Resultados de pruebas |
| `docs/FASE2_PENDIENTES.md` | Bloqueos y decisiones pendientes |
| `docs/FASE2_PARIDAD.json` | Contadores y diferencias |

### Web Corporativa (`src/`)

| Archivo | Descripción |
|---|---|
| `src/App.tsx` | Aplicación React con tema Andalucía |
| `src/index.css` | Importa variables CSS del tema |

## 2. CAMBIOS REALIZADOS

### Web Corporativa React

**Antes (FASE 0/1):**
- Diseño básico con verde corporativo
- Sin soporte de tema oscuro
- SVG de microchip inventado como anagrama

**Después (FASE 2):**
- Sistema de tema claro/oscuro completo (Andalucía Light/Dark)
- Variables CSS centralizadas
- Toggle de tema con persistencia en localStorage
- Soporte para prefers-color-scheme
- Espacio reservado honesto para anagrama (sin inventar)
- Sección "Acerca de" con atribución clara a REA
- Footer con atribución al proyecto original
- Aviso visible sobre anagrama pendiente

### Paleta de Colores

**Tokens implementados:**
- Verde andaluz: `#007A3D`
- Blanco: `#FFFFFF`
- Verde profundo: `#073C27`
- Fondo claro: `#F5F8F5`
- Gris de borde: `#D8E3DA`
- Texto oscuro: `#15241B`

### Componentes

**Navbar:**
- Toggle de tema (sol/luna)
- Responsive (mobile/desktop)
- Transición al hacer scroll
- Marca visible

**Hero:**
- Espacio reservado para anagrama (texto "AA" temporal)
- Aviso claro sobre anagrama pendiente
- Lema corporativo
- CTAs principales

**Products:**
- 3 productos: ANDALUS RE, JOULE Governor, JOULE SENSE 360°
- Atribución a REA upstream
- Estado honesto de cada producto

**Philosophy:**
- Contrapunto de Bach
- 4 principios fundamentales

**About:**
- Atribución clara a REA
- Enlace al repositorio original
- Licencia MIT
- Estado jurídico honesto

**Footer:**
- Atribución a REA
- Aviso legal
- Estado jurídico

## 3. SCRIPTS DE CONSTRUCCIÓN

### build-andalus-website.py

**Función:** Construye la web derivada ANDALUS RE desde el upstream REA.

**Proceso:**
1. Verifica que vendor/rea existe
2. Verifica que el upstream está limpio
3. Obtiene el commit HEAD
4. Prepara directorio de salida
5. Copia fuentes web del upstream
6. Aplica branding overlay
7. Genera informe de construcción

**Requisito:** vendor/rea debe existir (clonado manualmente).

**Estado:** ✅ Script creado, listo para ejecutar cuando se tenga el repositorio.

### verify-andalus-website.py

**Función:** Verifica la integridad de la web derivada.

**Comprobaciones:**
- Rutas críticas presentes
- Idiomas conservados (20)
- Branding aplicado
- Conteo de archivos

**Estado:** ✅ Script creado, listo para ejecutar.

## 4. DECISIONES DE DISEÑO

### ¿Por qué no se inventó un anagrama?

El propietario dio instrucciones explícitas:
> "NO INVENTES OTRO ANAGRAMA. NO UTILICES UN ICONO DE CPU SIMILAR. NO GENERES UNA IMAGEN SUSTITUTIVA."

**Solución implementada:**
- Espacio reservado con texto "AA" (iniciales)
- Aviso visible en el Hero
- Sistema preparado para integrar el anagrama oficial cuando se proporcione
- Sin engaño visual

### ¿Por qué React para la web corporativa?

- Entorno ya configurado (Vite + React + Tailwind)
- Permite tema claro/oscuro dinámico
- Componentes reutilizables
- Build optimizado

**Nota:** La web derivada de REA mantiene su sistema original (HTML + Python + gettext).

### ¿Por qué se atribuye explícitamente a REA?

Regla del propietario:
> "Conservar atribuciones, licencia y avisos originales. No atribuir a AL-ANDALUS AI la autoría exclusiva de funciones creadas por otros desarrolladores."

**Implementación:**
- Sección "Acerca de" con enlace al repositorio original
- Footer con atribución
- Mención de licencia MIT
- Distinción clara entre lo que procede de REA y lo que hemos desarrollado

## 5. COMPATIBILIDAD

| Navegador | Estado |
|---|---|
| Chrome/Edge | ✅ |
| Firefox | ✅ |
| Safari | ✅ |
| Mobile | ✅ Responsive |

**Accesibilidad:**
- Contraste WCAG AA
- Soporte para prefers-color-scheme
- Soporte para prefers-reduced-motion
- Navegación por teclado
- Focus visible

---

> **Estado:** Implementación completada. Anagrama BLOQUEADO (pendiente de archivo oficial).
