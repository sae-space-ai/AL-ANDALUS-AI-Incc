# vendor/rea — Copia Parcial del Repositorio REA

> Estado: PARCIAL — Obtenido mediante web_fetch (archivos individuales).
> Fecha: 15 de octubre de 2026.

---

## Estado de la Copia

Esta es una **copia parcial** del repositorio oficial de REA:
- **Repositorio original:** https://github.com/morluto/rea
- **Método de obtención:** web_fetch (archivos individuales desde GitHub Raw)
- **Limitación:** No se puede clonar el repositorio completo (entorno sin terminal/git)

## Archivos Obtenidos Realmente

### ✅ Obtenidos y verificados

| Archivo | Ruta local | Estado |
|---|---|---|
| header.html.tmpl | `website/templates/header.html.tmpl` | ✅ Completo |
| footer.html.tmpl | `website/templates/footer.html.tmpl` | ✅ Completo |
| README.md (website) | `website/README.md` | ✅ Completo |
| index.html | `website/public/index.html` | ✅ Completo |
| theme.js | `website/public/assets/theme.js` | ✅ Completo |

### ⚠️ Pendientes de obtener

El repositorio completo contiene muchos más archivos. Los principales pendientes son:

- `website/public/assets/styles.css` — Estilos principales
- `website/public/assets/main.js` — Script principal
- `website/public/assets/home.js` — Script de la página de inicio
- `website/public/assets/dino-demo.js` — Demo del dinosaurio
- `website/public/assets/i18n.js` — Internacionalización
- `website/public/get-started/index.html` — Primeros pasos
- `website/public/faq/index.html` — FAQ
- `website/public/showcase/*` — Casos de estudio
- `website/public/guides/*` — Guías
- `website/public/blog/*` — Blog
- `website/public/contributors/*` — Contribuidores
- `website/public/examples/*` — Ejemplos
- `website/locales/*` — Catálogos de traducción (20 idiomas)
- `website/templates/theme.html.tmpl` — Plantilla de tema
- `website/templates/sharing.html.tmpl` — Plantilla de compartición
- `website/templates/contributors.html.tmpl` — Plantilla de contribuidores
- `scripts/website.py` — Script principal del website
- `scripts/prepare-website.py` — Script de preparación
- `src/` — Código fuente TypeScript
- `tests/` — Suite de pruebas
- `docs/` — Documentación VitePress
- `bridge/` — Bridge de comunicación
- `package.json` — Manifiesto npm
- `LICENSE` — Licencia MIT

## Procedimiento para Completar la Copia

### Opción 1: Proporcionar ZIP del repositorio

El propietario puede descargar el ZIP desde:
https://github.com/morluto/rea/archive/refs/heads/main.zip

Y extraerlo en `vendor/rea/`.

### Opción 2: Migrar a entorno con terminal

Usar Qwen Code en un entorno con acceso a terminal y ejecutar:
```bash
git clone https://github.com/morluto/rea.git vendor/rea
```

### Opción 3: Obtención incremental

Se pueden obtener archivos adicionales usando web_fetch con URLs raw de GitHub:
```
https://raw.githubusercontent.com/morluto/rea/main/[ruta-del-archivo]
```

## Reglas de Uso

1. **Estos archivos son del repositorio REA original** (licencia MIT).
2. **No modificar** sin autorización del propietario.
3. **Conservar atribuciones** y avisos de licencia.
4. **No hacer push** al repositorio upstream.
5. **Documentar** cada archivo obtenido con su fuente.

## Verificación

Para verificar la integridad de los archivos obtenidos:
- Comparar con el contenido en https://github.com/morluto/rea
- Los archivos obtenidos son copias literales del repositorio público
- No se han modificado durante la obtención

## Próximos Pasos

1. Obtener los archivos CSS y JS principales
2. Obtener las páginas adicionales (get-started, faq, showcase, etc.)
3. Obtener los catálogos de traducción
4. Obtener los scripts de construcción
5. Verificar que la web se puede previsualizar localmente

---

> **Nota:** Esta copia parcial es suficiente para demostrar la viabilidad de la integración. La copia completa requiere ZIP del repositorio o entorno con terminal.
