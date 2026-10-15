# FASE 2 — PENDIENTES

> Bloqueos, errores y decisiones necesarias.
> Fecha: 15 de octubre de 2026.

---

## 1. BLOQUEOS CRÍTICOS

### BLOQUEO-001: Anagrama Oficial No Disponible

**Prioridad:** 🔴 CRÍTICO  
**Descripción:** El archivo gráfico del anagrama original no se encuentra en ninguna carpeta autorizada.  
**Carpetas buscadas:**
- `assets/reference/`
- `assets/`
- `branding/`
- `inputs/`

**Resultado:** No encontrado.

**Impacto:**
- La identidad visual está incompleta
- El espacio reservado muestra texto "AA" en lugar del anagrama
- No se puede declarar la fase como COMPLETADA

**Acción requerida:**
- El propietario debe proporcionar el archivo `AL_ANDALUS_AI_ANAGRAMA_APROBADO.png`
- Una vez proporcionado, calcular SHA-256 y registrar en manifest.json
- Integrar en la web corporativa y en la web derivada

**Solución temporal:**
- Espacio reservado con iniciales "AA"
- Aviso visible en el Hero
- Sistema preparado para integración futura

### BLOQUEO-002: Clonación de vendor/rea

**Prioridad:** 🟡 ALTO  
**Descripción:** No se puede clonar el repositorio REA en este entorno (sin terminal/git).  
**Impacto:**
- No se puede construir la web derivada
- No se puede verificar la preservación de páginas originales
- Los scripts de construcción están creados pero no ejecutados

**Acción requerida:**
- Proporcionar entorno con terminal
- Ejecutar: `git clone https://github.com/morluto/rea.git vendor/rea`

**Solución temporal:**
- Scripts de construcción y verificación creados
- Documentación completa de lo que se preservará
- Arquitectura de integración diseñada

### BLOQUEO-003: Código Original de JOULE No Localizado

**Prioridad:** 🟡 ALTO  
**Descripción:** No se ha localizado el código fuente de JOULE Compute Governor ni JOULE SENSE 360°.  
**Impacto:**
- No se pueden integrar estos módulos
- No se puede verificar la reducción del 25% declarada
- Los productos aparecen como "pendiente de localizar código"

**Acción requerida:**
- El propietario debe proporcionar o indicar la ubicación del código original
- No reconstruir sin autorización

**Solución temporal:**
- Productos listados con estado honesto
- Arquitectura preparada para integración futura

## 2. DECISIONES PENDIENTES

### DEC-PEND-001: Dominio para la Web Derivada

**Descripción:** La web derivada de REA necesita un dominio propio.  
**Opciones:**
- Usar un subdominio de al-andalus.ai (si existe)
- Registrar un nuevo dominio
- Usar GitHub Pages temporalmente

**Estado:** No decidida  
**Acción:** Consultar con el propietario

### DEC-PEND-002: Integración del Anagrama en la Web Derivada

**Descripción:** Cómo integrar el anagrama en la web derivada de REA.  
**Opciones:**
- Reemplazar el logo de REA en el header
- Añadir como badge adicional
- Usar solo en la página "Acerca de"

**Estado:** Pendiente del archivo gráfico  
**Acción:** Esperar anagrama y decidir

### DEC-PEND-003: Traducciones de Cadenas Corporativas

**Descripción:** Las cadenas "AL-ANDALUS AI" y "ANDALUS RE" deben traducirse a los 20 idiomas.  
**Estado:** No iniciado  
**Acción:** Crear traducciones cuando se integre en la web derivada

## 3. ERRORES DETECTADOS

### ERROR-001: SVG de Microchip Inventado en FASE 0/1

**Descripción:** En las fases anteriores se creó un SVG de microchip como anagrama.  
**Problema:** Viola la regla de no inventar anagrama.  
**Solución:** Reemplazado por espacio reservado con texto "AA" en FASE 2.  
**Estado:** ✅ CORREGIDO

## 4. MEJORAS FUTURAS

### MEJORA-001: Componentes de Branding Reutilizables

**Descripción:** Crear componentes React reutilizables para el branding.  
**Ubicación sugerida:** `packages/branding/components/`  
**Componentes propuestos:**
- `<Anagrama />` — Con fallback cuando no esté disponible
- `<TemaToggle />` — Toggle de tema claro/oscuro
- `<MarcaHeader />` — Cabecera corporativa
- `<MarcaFooter />` — Pie corporativo

**Estado:** No iniciado  
**Prioridad:** Media

### MEJORA-002: Guía de Estilo Visual

**Descripción:** Crear una guía de estilo visual completa.  
**Contenido propuesto:**
- Uso del anagrama
- Paleta de colores
- Tipografía
- Ejemplos de aplicación
- Do's and Don'ts

**Estado:** No iniciado  
**Prioridad:** Baja (pendiente del anagrama)

### MEJORA-003: Pruebas de Navegador Automatizado

**Descripción:** Implementar pruebas con Playwright o Cypress.  
**Objetivo:** Verificar automáticamente la web derivada.  
**Estado:** No iniciado  
**Prioridad:** Media (pendiente de clonación)

## 5. PRÓXIMOS PASOS

### Inmediatos (requieren acción del propietario)

1. **Proporcionar anagrama oficial** → Desbloquea BLOQUEO-001
2. **Proporcionar entorno con terminal** → Desbloquea BLOQUEO-002
3. **Indicar ubicación de código JOULE** → Desbloquea BLOQUEO-003

### Una vez desbloqueados

1. Integrar anagrama en web corporativa
2. Clonar vendor/rea
3. Ejecutar scripts de construcción
4. Verificar preservación de páginas
5. Construir web derivada completa
6. Ejecutar pruebas de navegador

### FASE 3 (pendiente de completar FASE 2)

- No iniciar hasta que FASE 2 esté COMPLETADA
- Requiere anagrama integrado
- Requiere web derivada construida y verificada

---

> **Estado:** 3 bloqueos críticos identificados. 3 decisiones pendientes. 1 error corregido. 3 mejoras futuras propuestas.
