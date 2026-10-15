# REA — PRESERVACIÓN

> Reglas y pruebas para garantizar que no perdemos funcionalidades.
> Fecha: 15 de octubre de 2026.

---

## 1. PRINCIPIO IRRENUNCIABLE

**CONSERVAR TODAS LAS FUNCIONALIDADES EXISTENTES DE REA.**

Ninguna operación de AL-ANDALUS AI debe eliminar, sustituir o degradar ninguna capacidad original de REA.

## 2. REGLAS DE PRESERVACIÓN

### 2.1 Reglas de Oro
1. **Nunca modificar archivos originales de REA sin autorización.**
2. **Nunca hacer push al repositorio upstream.**
3. **Nunca borrar ramas del upstream.**
4. **Nunca reescribir la historia del upstream.**
5. **Desarrollar en capas independientes.**
6. **Registrar el commit exacto del upstream.**
7. **Verificar el estado limpio del upstream antes y después.**

### 2.2 Separación de Capas
```
vendor/rea/          → Código original REA (SOLO LECTURA)
apps/                → Aplicaciones empresariales AL-ANDALUS AI
packages/            → Paquetes compartidos
docs/                → Documentación AL-ANDALUS AI (este proyecto)
```

### 2.3 Reglas de Integración
- Las extensiones empresariales viven FUERA de vendor/rea/
- La integración se realiza mediante APIs/interfaces
- Las actualizaciones de REA no deben romper las extensiones
- Las extensiones no deben modificar el comportamiento de REA

## 3. MECANISMOS DE PRESERVACIÓN

### 3.1 Registro del Commit Original
```bash
# Registrar commit al clonar
git -C vendor/rea rev-parse HEAD > docs/rea-commit.txt

# Verificar en cualquier momento
git -C vendor/rea rev-parse HEAD
```

### 3.2 Estado Limpio del Upstream
```bash
# Verificar que no hay modificaciones
git -C vendor/rea status --short
# Debe estar vacío
```

### 3.3 Inventario de Archivos
```bash
# Generar inventario
find vendor/rea -type f | sort > docs/rea-file-inventory.txt
wc -l docs/rea-file-inventory.txt

# Comparar con versión anterior
diff docs/rea-file-inventory.txt docs/rea-file-inventory-previous.txt
```

### 3.4 Hashes de Archivos Relevantes
```bash
# Generar hashes de archivos clave
find vendor/rea/src -name "*.ts" -exec sha256sum {} \; > docs/rea-src-hashes.txt
find vendor/rea/website/public -name "*.html" -exec sha256sum {} \; > docs/rea-web-hashes.txt
```

### 3.5 Comprobación de Rutas Web
```bash
# Verificar que las páginas del website existen
for page in index.html get-started/index.html faq/index.html showcase/index.html; do
  test -f vendor/rea/website/public/$page && echo "✅ $page" || echo "❌ $page"
done
```

### 3.6 Comprobación de Traducciones
```bash
# Verificar que los catálogos PO existen
for lang in en zh zh-TW ja ko tr ru vi th de es fr uk pl pt-BR ar fa id it el; do
  test -d vendor/rea/website/locales/$lang && echo "✅ $lang" || echo "❌ $lang"
done
```

### 3.7 Comprobación de Módulos
```bash
# Verificar que src/ tiene la estructura esperada
for dir in domain application infrastructure; do
  test -d vendor/rea/src/$dir && echo "✅ src/$dir" || echo "❌ src/$dir"
done
```

### 3.8 Comprobación de Comandos CLI
```bash
# Verificar que el package.json tiene los binarios esperados
grep -q '"bin"' vendor/rea/package.json && echo "✅ bin configurado" || echo "❌ bin faltante"
```

### 3.9 Comprobación de Contratos MCP
```bash
# Verificar que server.json existe
test -f vendor/rea/server.json && echo "✅ server.json" || echo "❌ server.json faltante"

# Verificar que mcp-contracts.md existe
test -f vendor/rea/docs/mcp-contracts.md && echo "✅ mcp-contracts.md" || echo "❌ faltante"
```

### 3.10 Comprobación de Licencias
```bash
# Verificar que la licencia MIT existe
test -f vendor/rea/LICENSE && echo "✅ LICENSE" || echo "❌ LICENSE faltante"
grep -q "MIT" vendor/rea/LICENSE && echo "✅ MIT license" || echo "❌ No es MIT"

# Verificar THIRD_PARTY_NOTICES
test -f vendor/rea/THIRD_PARTY_NOTICES.md && echo "✅ THIRD_PARTY_NOTICES" || echo "❌ faltante"
```

## 4. SCRIPT DE VERIFICACIÓN AUTOMÁTICA

```bash
#!/bin/bash
# docs/verify-rea-preservation.sh
# Verifica la integridad del repositorio REA

set -e

REA_DIR="vendor/rea"
EXPECTED_COMMIT="6fcfc5b5e0c063300cd5278dd8bad5b1ab1374f6"

echo "=== VERIFICACIÓN DE PRESERVACIÓN REA ==="
echo ""

# 1. Verificar que el directorio existe
if [ ! -d "$REA_DIR" ]; then
  echo "❌ BLOQUEADO: $REA_DIR no existe"
  echo "   Ejecutar: git clone https://github.com/morluto/rea.git $REA_DIR"
  exit 1
fi
echo "✅ Directorio $REA_DIR existe"

# 2. Verificar commit
ACTUAL_COMMIT=$(git -C $REA_DIR rev-parse HEAD 2>/dev/null || echo "UNKNOWN")
if [ "$ACTUAL_COMMIT" = "$EXPECTED_COMMIT" ]; then
  echo "✅ Commit coincide: $ACTUAL_COMMIT"
else
  echo "⚠️ Commit diferente: $ACTUAL_COMMIT (esperado: $EXPECTED_COMMIT)"
fi

# 3. Verificar estado limpio
STATUS=$(git -C $REA_DIR status --short 2>/dev/null)
if [ -z "$STATUS" ]; then
  echo "✅ Upstream limpio (sin modificaciones)"
else
  echo "❌ Upstream modificado:"
  echo "$STATUS"
fi

# 4. Verificar archivos clave
KEY_FILES="LICENSE README.md package.json server.json src/ website/ docs/ tests/"
for f in $KEY_FILES; do
  if [ -e "$REA_DIR/$f" ]; then
    echo "✅ $f"
  else
    echo "❌ $f FALTANTE"
  fi
done

# 5. Verificar idiomas del website
LANGS="en zh ja ko es fr de"
for lang in $LANGS; do
  if [ -d "$REA_DIR/website/locales/$lang" ]; then
    echo "✅ Idioma $lang"
  else
    echo "⚠️ Idioma $lang no encontrado"
  fi
done

echo ""
echo "=== VERIFICACIÓN COMPLETADA ==="
```

## 5. PROTOCOLO DE ACTUALIZACIÓN

Cuando se necesite actualizar REA:

1. **Registrar estado actual:**
   ```bash
   git -C vendor/rea rev-parse HEAD > docs/rea-commit-anterior.txt
   ```

2. **Actualizar upstream:**
   ```bash
   git -C vendor/rea pull origin main
   ```

3. **Registrar nuevo commit:**
   ```bash
   git -C vendor/rea rev-parse HEAD > docs/rea-commit.txt
   ```

4. **Verificar estado limpio:**
   ```bash
   git -C vendor/rea status --short
   ```

5. **Ejecutar pruebas:**
   ```bash
   cd vendor/rea && npm run check:fast
   ```

6. **Verificar que las extensiones empresariales siguen funcionando.**

7. **Documentar el cambio en docs/ESTADO.md.**

## 6. INDICADORES DE PÉRDIDA

Si se detecta cualquiera de estos indicadores, DETENER y alertar:

| Indicador | Gravedad |
|---|---|
| Archivo de src/ eliminado | 🔴 CRÍTICO |
| Archivo de website/ eliminado | 🔴 CRÍTICO |
| Traducción eliminada | 🟡 ALTO |
| Test eliminado | 🟡 ALTO |
| Licencia modificada | 🔴 CRÍTICO |
| Contrato MCP modificado sin autorización | 🔴 CRÍTICO |
| Commit del upstream diferente sin registro | 🟡 ALTO |
| Estado del upstream no limpio | 🔴 CRÍTICO |

## 7. ESTADO ACTUAL DE PRESERVACIÓN

| Elemento | Estado |
|---|---|
| Repositorio clonado localmente | ⚠️ PENDIENTE (requiere terminal) |
| Commit registrado | ✅ `6fcfc5b5e0c063300cd5278dd8bad5b1ab1374f6` |
| Inventario generado | ✅ Basado en investigación web |
| Upstream verificado limpio | ⚠️ PENDIENTE (requiere clonación) |
| Pruebas ejecutadas | ⚠️ PENDIENTE (requiere clonación) |
| Extensiones empresariales | ⚠️ NO INICIADO |

---

> **Estado: PARCIALMENTE VERIFICADO.** La preservación completa requiere clonación del repositorio en un entorno con terminal. Los datos documentados son precisos según la investigación web del 15 de octubre de 2026.
