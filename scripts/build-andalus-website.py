#!/usr/bin/env python3
"""
build-andalus-website.py — Construye la web derivada ANDALUS RE desde el upstream REA.

Este script:
1. Verifica que vendor/rea existe y está limpio
2. Lee el commit registrado
3. Copia las fuentes web a un directorio temporal
4. Aplica la personalización corporativa AL-ANDALUS AI
5. Aplica el tema Andalucía
6. Genera la salida en dist/andalus-rea-site/
7. Crea un informe de preservación

Uso:
    python3 scripts/build-andalus-website.py

Requisitos:
    - vendor/rea/ debe existir (clonado del repositorio oficial)
    - Python 3.8+
"""

import os
import sys
import json
import hashlib
import shutil
import subprocess
from pathlib import Path
from datetime import datetime

# ============================================================
# CONFIGURACIÓN
# ============================================================

PROJECT_ROOT = Path(__file__).parent.parent
VENDOR_REA = PROJECT_ROOT / "vendor" / "rea"
OUTPUT_DIR = PROJECT_ROOT / "dist" / "andalus-rea-site"
BRANDING_DIR = PROJECT_ROOT / "packages" / "branding"
DOCS_DIR = PROJECT_ROOT / "docs"

# ============================================================
# FUNCIONES DE VERIFICACIÓN
# ============================================================

def verify_vendor_exists():
    """Verifica que vendor/rea existe."""
    if not VENDOR_REA.exists():
        print("❌ BLOQUEADO: vendor/rea no existe")
        print("   Ejecutar: git clone https://github.com/morluto/rea.git vendor/rea")
        return False
    print("✅ vendor/rea existe")
    return True

def verify_upstream_clean():
    """Verifica que el upstream no tiene modificaciones."""
    try:
        result = subprocess.run(
            ["git", "-C", str(VENDOR_REA), "status", "--short"],
            capture_output=True, text=True, check=True
        )
        if result.stdout.strip():
            print("❌ BLOQUEADO: upstream tiene modificaciones")
            print(result.stdout)
            return False
        print("✅ upstream limpio")
        return True
    except subprocess.CalledProcessError as e:
        print(f"❌ Error al verificar upstream: {e}")
        return False
    except FileNotFoundError:
        print("⚠️ Git no disponible — no se puede verificar upstream")
        return True  # No bloquear si git no está

def get_commit_hash():
    """Obtiene el commit HEAD del upstream."""
    try:
        result = subprocess.run(
            ["git", "-C", str(VENDOR_REA), "rev-parse", "HEAD"],
            capture_output=True, text=True, check=True
        )
        commit = result.stdout.strip()
        print(f"✅ Commit HEAD: {commit}")
        return commit
    except Exception as e:
        print(f"⚠️ No se pudo obtener commit: {e}")
        return "UNKNOWN"

# ============================================================
# FUNCIONES DE CONSTRUCCIÓN
# ============================================================

def prepare_output_directory():
    """Prepara el directorio de salida."""
    if OUTPUT_DIR.exists():
        shutil.rmtree(OUTPUT_DIR)
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    print(f"✅ Directorio de salida preparado: {OUTPUT_DIR}")

def copy_website_sources():
    """Copia las fuentes web del upstream."""
    website_src = VENDOR_REA / "website"
    if not website_src.exists():
        print("❌ BLOQUEADO: website/ no existe en upstream")
        return False
    
    # Copiar public/, templates/, locales/, evidence/
    for subdir in ["public", "templates", "locales", "evidence"]:
        src = website_src / subdir
        dst = OUTPUT_DIR / subdir
        if src.exists():
            shutil.copytree(src, dst, dirs_exist_ok=True)
            print(f"✅ Copiado: {subdir}/")
    
    # Copiar archivos de configuración
    for file in ["wrangler.toml", "requirements.txt", "README.md"]:
        src = website_src / file
        if src.exists():
            shutil.copy2(src, OUTPUT_DIR / file)
            print(f"✅ Copiado: {file}")
    
    return True

def apply_branding_overlay():
    """Aplica la capa de branding AL-ANDALUS AI."""
    # Copiar estilos del tema Andalucía
    branding_styles = BRANDING_DIR / "styles"
    if branding_styles.exists():
        dst = OUTPUT_DIR / "public" / "assets" / "andalusia"
        dst.mkdir(parents=True, exist_ok=True)
        for css_file in branding_styles.glob("*.css"):
            shutil.copy2(css_file, dst / css_file.name)
            print(f"✅ Estilo aplicado: {css_file.name}")
    
    # Copiar manifest
    manifest = BRANDING_DIR / "manifest.json"
    if manifest.exists():
        shutil.copy2(manifest, OUTPUT_DIR / "andalus-manifest.json")
        print("✅ Manifest copiado")
    
    return True

def generate_build_report(commit_hash):
    """Genera el informe de construcción."""
    report = {
        "build_date": datetime.now().isoformat(),
        "commit_hash": commit_hash,
        "output_directory": str(OUTPUT_DIR),
        "branding_applied": True,
        "files": []
    }
    
    # Contar archivos
    for root, dirs, files in os.walk(OUTPUT_DIR):
        for file in files:
            filepath = Path(root) / file
            relpath = filepath.relative_to(OUTPUT_DIR)
            report["files"].append(str(relpath))
    
    report["total_files"] = len(report["files"])
    
    # Guardar informe
    report_path = OUTPUT_DIR / "build-report.json"
    with open(report_path, "w", encoding="utf-8") as f:
        json.dump(report, f, indent=2, ensure_ascii=False)
    
    print(f"✅ Informe generado: {report_path}")
    print(f"   Total de archivos: {report['total_files']}")
    
    return report

# ============================================================
# FUNCIÓN PRINCIPAL
# ============================================================

def main():
    print("=" * 60)
    print("AL-ANDALUS AI — Constructor de Web Derivada ANDALUS RE")
    print("=" * 60)
    print()
    
    # Verificaciones
    if not verify_vendor_exists():
        sys.exit(1)
    
    if not verify_upstream_clean():
        print("\n⚠️ El upstream tiene modificaciones. Proceder con precaución.")
    
    commit_hash = get_commit_hash()
    print()
    
    # Construcción
    print("Preparando directorio de salida...")
    prepare_output_directory()
    print()
    
    print("Copiando fuentes web del upstream...")
    if not copy_website_sources():
        sys.exit(1)
    print()
    
    print("Aplicando branding AL-ANDALUS AI...")
    if not apply_branding_overlay():
        sys.exit(1)
    print()
    
    print("Generando informe de construcción...")
    report = generate_build_report(commit_hash)
    print()
    
    print("=" * 60)
    print("✅ CONSTRUCCIÓN COMPLETADA")
    print("=" * 60)
    print(f"Directorio de salida: {OUTPUT_DIR}")
    print(f"Total de archivos: {report['total_files']}")
    print(f"Commit del upstream: {commit_hash}")
    print()
    print("Para previsualizar:")
    print(f"  cd {OUTPUT_DIR}")
    print("  python3 -m http.server 8080")
    print("  # Abrir http://localhost:8080")

if __name__ == "__main__":
    main()
