# IDENTIDAD CORPORATIVA — AL-ANDALUS AI

> Sistema de marca, colores, usos y restricciones.
> Fecha: 15 de octubre de 2026.

---

## 1. MARCA PRINCIPAL

**Nombre:** AL-ANDALUS AI  
**Producto:** ANDALUS RE  
**Lema:** INTELLIGENCE · ENGINEERING · EUROPE

## 2. ANAGRAMA

**Estado:** ⚠️ BLOQUEADO — Archivo gráfico original no proporcionado

**Elementos del anagrama aprobado:**
- Microchip blanco
- Fondo verde andaluz
- Nombre AL-ANDALUS AI
- Lema corporativo
- Proporciones y composición originales

**Archivo esperado:** `AL_ANDALUS_AI_ANAGRAMA_APROBADO.png`

**Carpetas buscadas:**
- `assets/reference/`
- `assets/`
- `branding/`
- `inputs/`

**Resultado:** No encontrado en ninguna ubicación autorizada.

**Reglas estrictas:**
- ❌ NO inventar otro anagrama
- ❌ NO usar icono de CPU similar
- ❌ NO generar imagen sustitutiva
- ❌ NO alterar píxeles, proporciones, nombre ni lema
- ✅ Escalar proporcionalmente mediante CSS si es necesario
- ✅ Reservar espacio para integración futura

**Acción requerida:** El propietario debe proporcionar el archivo gráfico original.

## 3. PALETA DE COLORES

### Verde Andaluz
- **Principal:** `#007A3D`
- **Hover:** `#005C2E`
- **Active:** `#004D26`

### Blanco
- **Puro:** `#FFFFFF`

### Verde Profundo
- **Valor:** `#073C27`

### Fondos
- **Claro:** `#F5F8F5`
- **Superficie:** `#FFFFFF`
- **Elevado:** `#FFFFFF`

### Texto
- **Oscuro:** `#15241B`
- **Secundario:** `#3D5A47`
- **Terciario:** `#5A7A66`
- **Inverso:** `#FFFFFF`

### Bordes
- **Normal:** `#D8E3DA`
- **Fuerte:** `#B8C9BC`

## 4. TEMAS

### Andalucía Light (Modo Claro)
- Fondo: `#F5F8F5`
- Superficie: `#FFFFFF`
- Texto: `#15241B`
- Primario: `#007A3D`

### Andalucía Dark (Modo Oscuro)
- Fondo: `#073C27`
- Superficie: `#0A4D33`
- Texto: `#FFFFFF`
- Primario: `#00A854` (más brillante para contraste)

**Implementación:**
- Variables CSS en `packages/branding/styles/andalucia-theme.css`
- Soporte para `prefers-color-scheme`
- Toggle manual con persistencia en localStorage
- Transiciones suaves entre temas

## 5. TIPOGRAFÍA

**Sans-serif:** Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto  
**Monospace:** JetBrains Mono, Fira Code

## 6. PRINCIPIOS DE DISEÑO

1. **Tecnología:** Soluciones de IA de última generación
2. **Elegancia:** Diseño limpio y profesional
3. **Sencillez:** Interfaces intuitivas
4. **Precisión:** Ingeniería de calidad
5. **Identidad andaluza:** Colores y valores regionales
6. **Profesionalidad internacional:** Estándares globales

## 7. RESTRICCIONES

- ❌ No decorar excesivamente
- ❌ No convertir toda la pantalla en fondo verde
- ✅ Priorizar legibilidad
- ✅ Mantener jerarquía visual
- ✅ Garantizar navegación clara
- ✅ Cumplir WCAG AA para contraste

## 8. ATRIBUTIÓN

**Motor REA:**
- Proyecto de código abierto
- Licencia MIT
- Repositorio: https://github.com/morluto/rea
- Web oficial: https://rea.tools
- Comunidad: 250,000+ estrellas GitHub

**Regla:** Siempre atribuir al proyecto REA original. No atribuir a AL-ANDALUS AI la autoría exclusiva de funciones creadas por otros desarrolladores.

## 9. ESTADO JURÍDICO

- **Empresa:** Proyectada (no constituida)
- **Figura jurídica prevista:** EU Inc.
- **Condición:** Pendiente de constitución legal
- **Regla:** No presentar como constituida hasta confirmación oficial

## 10. ARCHIVOS DEL SISTEMA DE BRANDING

```
packages/branding/
├── manifest.json                          # Manifiesto de identidad
├── styles/
│   └── andalusia-theme.css               # Variables CSS y estilos base
├── components/                            # (Reservado para componentes)
└── README.md                              # (Pendiente de crear)
```

## 11. INTEGRACIÓN EN LA WEB

**Web corporativa React:**
- `src/App.tsx` — Aplicación principal con tema Andalucía
- `src/index.css` — Importa variables CSS del tema
- Tema claro/oscuro con toggle
- Espacio reservado para anagrama (pendiente)
- Atribución clara a REA

**Web derivada de REA (pendiente):**
- Requiere clonación de vendor/rea
- Scripts de construcción: `scripts/build-andalus-website.py`
- Scripts de verificación: `scripts/verify-andalus-website.py`
- Salida: `dist/andalus-rea-site/`

---

> **Nota:** El sistema de branding está completo pero la integración del anagrama oficial está BLOQUEADA hasta que el propietario proporcione el archivo gráfico original.
