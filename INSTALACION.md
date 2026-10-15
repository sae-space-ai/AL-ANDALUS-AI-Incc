# Guía de Instalación — AL-ANDALUS AI

## Requisitos del Sistema

### Windows

- **Sistema Operativo**: Windows 10 o superior (64-bit)
- **Node.js**: Versión 22.x o superior
- **npm**: Versión 10.x o superior (incluido con Node.js)
- **Espacio en disco**: 500 MB mínimo
- **RAM**: 4 GB mínimo (8 GB recomendado)
- **Navegador**: Chrome, Firefox, Edge o Safari (última versión)

### macOS

- **Sistema Operativo**: macOS 12 (Monterey) o superior
- **Node.js**: Versión 22.x o superior
- **npm**: Versión 10.x o superior
- **Espacio en disco**: 500 MB mínimo
- **RAM**: 4 GB mínimo (8 GB recomendado)

### Linux

- **Distribución**: Ubuntu 20.04+, Fedora 34+, Debian 11+ o equivalente
- **Node.js**: Versión 22.x o superior
- **npm**: Versión 10.x o superior
- **Espacio en disco**: 500 MB mínimo
- **RAM**: 4 GB mínimo (8 GB recomendado)

---

## Instalación de Node.js

### Windows

1. **Descargar Node.js**
   - Visitar: https://nodejs.org/
   - Descargar la versión LTS (22.x o superior)
   - Ejecutar el instalador `.msi`

2. **Verificar instalación**
   ```powershell
   node --version
   npm --version
   ```

### macOS

1. **Usando Homebrew (recomendado)**
   ```bash
   brew install node@22
   ```

2. **Usando instalador oficial**
   - Visitar: https://nodejs.org/
   - Descargar la versión LTS para macOS
   - Ejecutar el instalador `.pkg`

3. **Verificar instalación**
   ```bash
   node --version
   npm --version
   ```

### Linux (Ubuntu/Debian)

1. **Usando NodeSource**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

2. **Usando nvm (recomendado)**
   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
   source ~/.bashrc
   nvm install 22
   nvm use 22
   ```

3. **Verificar instalación**
   ```bash
   node --version
   npm --version
   ```

---

## Instalación del Proyecto

### 1. Descargar el Proyecto

**Opción A: Desde ZIP**
```bash
# Extraer el archivo AL_ANDALUS_AI_PLATAFORMA_ENTREGA.zip
# Navegar a la carpeta del proyecto
cd al-andalus-ai
```

**Opción B: Desde Git**
```bash
git clone <repositorio>
cd al-andalus-ai
```

### 2. Instalar Dependencias

```bash
npm install
```

Esto instalará todas las dependencias necesarias:
- React 18.2.0
- Vite 6.3.5
- TypeScript 5.7.0
- Tailwind CSS 4.1.7
- Vitest (para tests)

**Tiempo estimado**: 2-5 minutos dependiendo de la conexión

### 3. Verificar Instalación

```bash
# Verificar que todo se instaló correctamente
npm run build
```

Si no hay errores, la instalación fue exitosa.

---

## Uso del Proyecto

### Modo Desarrollo

```bash
npm run dev
```

- Servidor local en: `http://localhost:5173`
- Recarga automática al cambiar código
- Ideal para desarrollo y pruebas

### Modo Producción

```bash
# Compilar para producción
npm run build

# Los archivos se generan en la carpeta dist/
```

### Previsualizar Build

```bash
npm run preview
```

- Servidor local en: `http://localhost:4173`
- Sirve los archivos compilados de `dist/`

### Ejecutar Tests

```bash
# Ejecutar todos los tests
npm test

# Ejecutar tests con cobertura
npm run test:coverage

# Ejecutar tests en modo watch
npm run test:watch
```

---

## Estructura del Proyecto

```
al-andalus-ai/
├── src/                          # Código fuente
│   ├── App.tsx                   # Componente principal
│   ├── main.tsx                  # Punto de entrada
│   ├── index.css                 # Estilos globales
│   └── features/
│       ├── counterpoint/         # Motor de orquestación
│       │   ├── types.ts          # Tipos TypeScript
│       │   ├── agents.ts         # Agentes especializados
│       │   ├── orchestrator.ts   # Motor principal
│       │   ├── scenarios.ts      # Escenarios de demo
│       │   └── __tests__/        # Tests unitarios
│       └── live-score/           # Interfaz visual
│           └── PartituraViva.tsx # Partitura Viva
├── packages/
│   └── branding/                 # Sistema de branding
│       ├── manifest.json
│       └── styles/
│           └── andalusia-theme.css
├── scripts/                      # Scripts de construcción
├── docs/                         # Documentación
├── vendor/                       # Dependencias externas
├── dist/                         # Build de producción
├── node_modules/                 # Dependencias npm
├── package.json                  # Configuración npm
├── tsconfig.json                 # Configuración TypeScript
├── vite.config.js                # Configuración Vite
├── vitest.config.ts              # Configuración Vitest
└── README.md                     # Este archivo
```

---

## Solución de Problemas

### Error: "node: command not found"

**Causa**: Node.js no está instalado o no está en el PATH

**Solución**:
1. Verificar que Node.js está instalado: https://nodejs.org/
2. Reiniciar la terminal
3. En Windows, verificar que la ruta de Node.js está en el PATH del sistema

### Error: "npm: command not found"

**Causa**: npm no está instalado o no está en el PATH

**Solución**:
1. npm se instala automáticamente con Node.js
2. Reinstalar Node.js si es necesario
3. Reiniciar la terminal

### Error: "Cannot find module"

**Causa**: Las dependencias no están instaladas

**Solución**:
```bash
npm install
```

### Error: "Port 5173 already in use"

**Causa**: Otro proceso está usando el puerto 5173

**Solución**:
```bash
# Usar un puerto diferente
npm run dev -- --port 3000
```

### Error: "Build failed"

**Causa**: Error de TypeScript o configuración

**Solución**:
1. Verificar que todas las dependencias están instaladas
2. Limpiar caché: `rm -rf node_modules dist && npm install`
3. Verificar errores de TypeScript: `npm run typecheck`

### Error: "Tests failed"

**Causa**: Los tests unitarios están fallando

**Solución**:
1. Ejecutar tests con más detalle: `npm test -- --reporter=verbose`
2. Verificar que el código no tiene errores de TypeScript
3. Revisar los logs de error en la terminal

---

## Comandos Útiles

### Desarrollo

```bash
# Iniciar servidor de desarrollo
npm run dev

# Iniciar en puerto específico
npm run dev -- --port 3000

# Iniciar con host expuesto (accesible desde red local)
npm run dev -- --host
```

### Build

```bash
# Build de producción
npm run build

# Build con análisis de bundle
npm run build -- --mode production

# Preview del build
npm run preview
```

### Tests

```bash
# Ejecutar todos los tests
npm test

# Ejecutar tests específicos
npm test orchestrator

# Ejecutar tests con cobertura
npm run test:coverage

# Ejecutar tests en modo watch
npm run test:watch

# Ejecutar tests con UI
npm run test:ui
```

### TypeScript

```bash
# Verificar tipos sin compilar
npm run typecheck
```

### Limpieza

```bash
# Limpiar node_modules y dist
rm -rf node_modules dist

# Reinstalar dependencias
npm install
```

---

## Configuración Avanzada

### Variables de Entorno

Crear archivo `.env` en la raíz del proyecto:

```env
# Ejemplo de variables de entorno
VITE_APP_TITLE=AL-ANDALUS AI
VITE_API_URL=http://localhost:3000
```

Acceder en el código:

```typescript
const apiUrl = import.meta.env.VITE_API_URL;
```

### Configuración de Vite

Editar `vite.config.js`:

```javascript
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 3000,        // Cambiar puerto
    host: '0.0.0.0',   // Exponer en red local
    open: true         // Abrir navegador automáticamente
  }
});
```

### Configuración de TypeScript

Editar `tsconfig.json`:

```json
{
  "compilerOptions": {
    "strict": true,           // Modo estricto
    "noImplicitAny": true,    // No permitir any implícito
    "strictNullChecks": true  // Verificar null/undefined
  }
}
```

---

## Despliegue

### Despliegue Estático

El proyecto genera archivos estáticos en `dist/` que pueden desplegarse en cualquier servidor web:

```bash
# Compilar para producción
npm run build

# Los archivos en dist/ pueden subirse a:
# - Netlify
# - Vercel
# - GitHub Pages
# - AWS S3 + CloudFront
# - Cualquier servidor web (Apache, Nginx, etc.)
```

### Despliegue con Docker

Crear `Dockerfile`:

```dockerfile
FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

Construir y ejecutar:

```bash
docker build -t al-andalus-ai .
docker run -p 8080:80 al-andalus-ai
```

---

## Soporte

### Documentación

- `README.md` — Este archivo
- `docs/ENTREGA_FINAL.md` — Informe final de entrega
- `QWEN.md` — Memoria maestra del proyecto
- `docs/ESTADO.md` — Estado actual del proyecto

### Recursos Externos

- **React**: https://react.dev/
- **Vite**: https://vitejs.dev/
- **TypeScript**: https://www.typescriptlang.org/
- **Tailwind CSS**: https://tailwindcss.com/
- **Vitest**: https://vitest.dev/

---

## Notas Finales

### Estado del Proyecto

Este proyecto es una **demostración funcional** del sistema de orquestación contrapuntística. Los agentes son simulaciones locales, no modelos de IA reales.

### Integraciones Pendientes

- **REA**: Repositorio completo no disponible
- **JOULE Compute Governor**: Código no localizado
- **JOULE SENSE 360°**: Código no localizado
- **Anagrama oficial**: Archivo no proporcionado

### Próximos Pasos

Para convertir esta demostración en un sistema de producción:

1. Proporcionar anagrama oficial
2. Integrar repositorio REA completo
3. Integrar código JOULE
4. Implementar backend real
5. Añadir autenticación
6. Desplegar en infraestructura empresarial

---

**AL-ANDALUS AI — INTELLIGENCE · ENGINEERING · EUROPE**

*La armonía nace de la coordinación.*
