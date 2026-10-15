# MIGRACIÓN A QWEN CODE CON TERMINAL

> Guía completa para migrar el proyecto AL-ANDALUS AI a un entorno con terminal.
> Fecha: 15 de octubre de 2026

---

## ¿Por qué migrar?

El proyecto actual está desarrollado en un entorno web que tiene limitaciones:

❌ **No disponible en este entorno:**
- Terminal directa (no puedo ejecutar comandos shell)
- Git (no puedo clonar repositorios)
- Python (no puedo ejecutar scripts .py)
- Descompresión de archivos ZIP
- Cálculo de hashes SHA-256
- Pruebas de navegador automatizado

✅ **Disponible en este entorno:**
- Edición de archivos
- Build npm (React + Vite)
- Búsqueda web
- Obtención de archivos individuales

**Consecuencia:** No puedo construir la web derivada completa de REA ni integrar el anagrama oficial sin terminal.

---

## Procedimiento de Migración

### Paso 1: Descargar el Proyecto Actual

**Opción A: Desde esta interfaz web**

Si la plataforma lo permite, descarga todo el proyecto como ZIP.

**Opción B: Copiar archivos manualmente**

Crea una nueva carpeta y copia estos archivos:

```bash
mkdir al-andalus-ai
cd al-andalus-ai

# Copiar estructura de carpetas
mkdir -p docs packages/branding/styles scripts src vendor/rea
```

Luego copia el contenido de cada archivo desde esta interfaz.

### Paso 2: Obtener Recursos Faltantes

#### 2.1 Anagrama Oficial

El propietario debe proporcionar el archivo:
- **Nombre:** `AL_ANDALUS_AI_ANAGRAMA_APROBADO.png`
- **Ubicación:** `assets/reference/` o `branding/` o `inputs/`

```bash
mkdir -p assets/reference
# Copiar el archivo proporcionado por el propietario
cp /ruta/al/archivo/AL_ANDALUS_AI_ANAGRAMA_APROBADO.png assets/reference/
```

#### 2.2 Repositorio REA Completo

```bash
# Descargar repositorio REA
cd vendor
wget https://github.com/morluto/rea/archive/refs/heads/main.zip
unzip main.zip
mv rea-main rea
rm main.zip

# Verificar que está completo
cd rea
ls -la
# Debe mostrar: src/, website/, docs/, scripts/, tests/, package.json, etc.

# Verificar commit
git rev-parse HEAD
# Debe mostrar: 6fcfc5b5e0c063300cd5278dd8bad5b1ab1374f6
```

### Paso 3: Instalar Dependencias

```bash
# Volver a la raíz del proyecto
cd ../..

# Instalar dependencias de REA
cd vendor/rea
npm install

# Volver a la raíz
cd ../..

# Instalar dependencias del proyecto principal
npm install
```

### Paso 4: Verificar Entorno

```bash
# Verificar Git
git --version
# Esperado: git version 2.x.x

# Verificar Node.js
node --version
# Esperado: v22.x.x o superior

# Verificar npm
npm --version
# Esperado: 10.x.x o superior

# Verificar Python
python3 --version
# Esperado: Python 3.8+

# Verificar estructura del proyecto
tree -L 2 -d
# Debe mostrar la estructura completa
```

### Paso 5: Construir Web Derivada

```bash
# Construir website de REA (verificación)
cd vendor/rea
python3 scripts/website.py check
# Debe completarse sin errores

# Volver a la raíz
cd ../..

# Construir web derivada ANDALUS RE
python3 scripts/build-andalus-website.py
# Debe generar dist/andalus-rea-site/

# Verificar integridad
python3 scripts/verify-andalus-website.py
# Debe mostrar todas las comprobaciones PASSED
```

### Paso 6: Calcular SHA-256 del Anagrama

```bash
# Calcular hash del anagrama
sha256sum assets/reference/AL_ANDALUS_AI_ANAGRAMA_APROBADO.png
# Copiar el hash resultante

# Editar manifest.json y añadir el hash
nano packages/branding/manifest.json
# Añadir en la sección "integrity":
# "sha256_anagram": "hash_aquí"
# "verified": true
```

### Paso 7: Integrar Anagrama en la Web

```bash
# Copiar anagrama a la web derivada
cp assets/reference/AL_ANDALUS_AI_ANAGRAMA_APROBADO.png dist/andalus-rea-site/assets/

# Editar las plantillas para usar el anagrama real
# (Los scripts de construcción pueden hacer esto automáticamente)
```

### Paso 8: Previsualizar Web Derivada

```bash
# Servir la web derivada
cd dist/andalus-rea-site
python3 -m http.server 8080

# Abrir en el navegador
# http://localhost:8080
```

### Paso 9: Abrir en Qwen Code

```bash
# Volver a la raíz del proyecto
cd ../..

# Abrir en Qwen Code
qwen-code .
```

---

## Estructura Esperada del Proyecto

```
al-andalus-ai/
├── QWEN.md                          # Memoria maestra
├── README.md                        # Documentación principal
├── index.html                       # HTML principal
├── package.json                     # Dependencias npm
├── package-lock.json                # Lock file
├── tsconfig.json                    # Configuración TypeScript
├── vite.config.js                   # Configuración Vite
│
├── assets/
│   └── reference/
│       └── AL_ANDALUS_AI_ANAGRAMA_APROBADO.png  # Anagrama oficial
│
├── docs/                            # Documentación (20+ archivos)
│   ├── ARQUITECTURA.md
│   ├── DECISIONES.md
│   ├── ESTADO.md
│   ├── FASES.md
│   ├── IDENTIDAD_CORPORATIVA.md
│   ├── PROYECTO.md
│   ├── REA_INVENTARIO.md
│   ├── REA_ARQUITECTURA.md
│   ├── REA_WEB_COMPLETA.md
│   ├── REA_APIS_MCP.md
│   ├── REA_COMPATIBILIDAD.md
│   ├── REA_PRESERVACION.md
│   ├── FASE2_IMPLEMENTACION.md
│   ├── FASE2_PRESERVACION.md
│   ├── FASE2_PRUEBAS.md
│   ├── FASE2_PENDIENTES.md
│   ├── FASE2_PARIDAD.json
│   ├── FASE21_RECUPERACION.md
│   ├── FASE22_INTEGRACION.md
│   └── MIGRACION_QWEN_CODE.md      # Este archivo
│
├── packages/
│   └── branding/
│       ├── manifest.json            # Manifiesto de identidad
│       └── styles/
│           └── andalusia-theme.css  # Variables CSS del tema
│
├── scripts/
│   ├── build-andalus-website.py     # Constructor de web derivada
│   └── verify-andalus-website.py    # Verificador de integridad
│
├── src/
│   ├── App.tsx                      # Aplicación React principal
│   ├── index.css                    # Estilos globales
│   └── main.tsx                     # Punto de entrada React
│
├── vendor/
│   └── rea/                         # Repositorio REA completo
│       ├── src/                     # Código fuente TypeScript
│       ├── website/                 # Website completo
│       │   ├── public/              # HTML, CSS, JS
│       │   ├── templates/           # Plantillas
│       │   ├── locales/             # Traducciones (20 idiomas)
│       │   └── evidence/            # Evidencia de casos
│       ├── docs/                    # Documentación VitePress
│       ├── scripts/                 # Scripts Python
│       ├── tests/                   # Suite de pruebas
│       ├── bridge/                  # Bridge de comunicación
│       ├── package.json             # Dependencias REA
│       ├── LICENSE                  # Licencia MIT
│       └── README.md                # README de REA
│
└── dist/                            # Output de builds
    ├── index.html                   # Web corporativa React
    ├── assets/                      # Assets compilados
    └── andalus-rea-site/            # Web derivada de REA
        ├── index.html
        ├── get-started/
        ├── faq/
        ├── showcase/
        ├── guides/
        ├── blog/
        ├── contributors/
        ├── examples/
        ├── assets/
        │   └── AL_ANDALUS_AI_ANAGRAMA_APROBADO.png
        ├── zh-CN/                   # Traducción china
        ├── ja/                      # Traducción japonesa
        ├── ko/                      # Traducción coreana
        ├── es/                      # Traducción española
        ├── fr/                      # Traducción francesa
        ├── de/                      # Traducción alemana
        ├── ru/                      # Traducción rusa
        └── ...                      # Otros 13 idiomas
```

---

## Comandos Útiles en Qwen Code

### Verificación del Estado

```bash
# Verificar que vendor/rea está completo
ls vendor/rea/src/
ls vendor/rea/website/public/
ls vendor/rea/website/locales/

# Verificar commit de REA
cd vendor/rea && git rev-parse HEAD

# Verificar que el upstream está limpio
cd vendor/rea && git status --short
```

### Construcción

```bash
# Build de web corporativa React
npm run build

# Build de web derivada REA
cd vendor/rea && python3 scripts/website.py check
cd ../.. && python3 scripts/build-andalus-website.py

# Verificación
python3 scripts/verify-andalus-website.py
```

### Previsualización

```bash
# Previsualizar web corporativa React
npm run dev
# Abrir http://localhost:5173

# Previsualizar web derivada REA
cd dist/andalus-rea-site && python3 -m http.server 8080
# Abrir http://localhost:8080
```

### Pruebas

```bash
# Pruebas de REA
cd vendor/rea && npm test

# Verificación de integridad
python3 scripts/verify-andalus-website.py

# Verificación de hashes
sha256sum assets/reference/AL_ANDALUS_AI_ANAGRAMA_APROBADO.png
```

---

## Solución de Problemas

### Problema: Python no encuentra dependencias

```bash
cd vendor/rea
python3 -m pip install -r website/requirements.txt
```

### Problema: CairoSVG falla en macOS

```bash
# Instalar Cairo y DejaVu Sans
brew install cairo pkg-config
brew install --cask font-dejavu

# Verificar instalación
python3 -c "import cairosvg; print('OK')"
```

### Problema: Node.js versión incorrecta

```bash
# Usar nvm para cambiar versión
nvm install 22
nvm use 22
```

### Problema: Git no reconoce vendor/rea

```bash
# Si vendor/rea no es un repositorio git válido
cd vendor/rea
git init
git remote add origin https://github.com/morluto/rea.git
git fetch origin
git checkout main
```

---

## Checklist de Migración

- [ ] Proyecto descargado/copiado correctamente
- [ ] Anagrama oficial proporcionado y ubicado en `assets/reference/`
- [ ] Repositorio REA descargado en `vendor/rea/`
- [ ] Commit de REA verificado: `6fcfc5b5e0c063300cd5278dd8bad5b1ab1374f6`
- [ ] Dependencias de REA instaladas (`npm install` en vendor/rea)
- [ ] Dependencias del proyecto instaladas (`npm install` en raíz)
- [ ] Python 3.8+ disponible
- [ ] Git disponible
- [ ] Node.js 22+ disponible
- [ ] Web corporativa React construida (`npm run build`)
- [ ] Web derivada REA construida (`python3 scripts/build-andalus-website.py`)
- [ ] Integridad verificada (`python3 scripts/verify-andalus-website.py`)
- [ ] SHA-256 del anagrama calculado y registrado
- [ ] Anagrama integrado en la web derivada
- [ ] Previsualización funcional en http://localhost:8080
- [ ] Proyecto abierto en Qwen Code

---

## Contacto y Soporte

Si encuentras problemas durante la migración:

1. Revisa la documentación en `docs/`
2. Consulta `docs/FASE22_INTEGRACION.md` para detalles de bloqueos
3. Consulta `docs/REA_PRESERVACION.md` para reglas de preservación
4. Abre un issue en el repositorio de REA si es necesario

---

> **Nota:** Este documento es una guía para migrar el proyecto a un entorno con terminal. Una vez completada la migración, el proyecto podrá desbloquear la FASE 2 y avanzar a las siguientes fases.
