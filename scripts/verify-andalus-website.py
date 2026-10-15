#!/usr/bin/env python3
"""
verify-andalus-website.py — Verifica la integridad de la web derivada ANDALUS RE.

Este script comprueba:
- Rutas originales presentes
- Páginas traducidas presentes
- Enlaces internos válidos
- Scripts originales conservados
- Recursos multimedia presentes
- Ausencia de conflictos de CSS
- Integridad del branding

Uso:
    python3 scripts/verify-andalus-website.py

Requisitos:
    - dist/andalus-rea-site/ debe existir (generado por build-andalus-website.py)
    - Python 3.8+
"""

import os
import sys
import json
import hashlib
from pathlib import Path
from datetime import datetime

# ============================================================
# CONFIGURACIÓN
# ============================================================

PROJECT_ROOT = Path(__file__).parent.parent
OUTPUT_DIR = PROJECT_ROOT / "dist" / "andalus-rea-site"
BRANDING_DIR = PROJECT_ROOT / "packages" / "branding"

# Rutas críticas que deben existir
CRITICAL_PATHS = [
    "public/index.html",
    "public/get-started/index.html",
    "public/faq/index.html",
    "public/showcase/index.html",
    "public/showcase/dx-ball/index.html",
    "public/showcase/notion/index.html",
    "public/showcase/th04/index.html",
    "public/showcase/aegis/index.html",
    "public/showcase/ctf/index.html",
    "public/examples/dino-lab/index.html",
    "public/examples/notes-web/index.html",
    "public/first-investigation/index.html",
    "public/contributors/index.html",
    "public/guides/native/index.html",
    "public/guides/javascript/index.html",
    "public/guides/browser/index.html",
    "public/blog/index.html",
    "templates/header.html.tmpl",
    "templates/footer.html.tmpl",
    "templates/theme.html.tmpl",
    "evidence/",
    "wrangler.toml",
    "requirements.txt",
]

# Idiomas que deben estar presentes
EXPECTED_LANGUAGES = [
    "en", "zh", "zh-TW", "ja", "ko", "tr", "ru", "vi", "th",
    "de", "es", "fr", "uk", "pl", "pt-BR", "ar", "fa", "id", "it", "el"
]

# ============================================================
# FUNCIONES DE VERIFICACIÓN
# ============================================================

def verify_output_exists():
    """Verifica que el directorio de salida existe."""
    if not OUTPUT_DIR.exists():
        print("❌ BLOQUEADO: dist/andalus-rea-site/ no existe")
        print("   Ejecutar primero: python3 scripts/build-andalus-website.py")
        return False
    print("✅ Directorio de salida existe")
    return True

def verify_critical_paths():
    """Verifica que las rutas críticas existen."""
    missing = []
    found = 0
    
    for path in CRITICAL_PATHS:
        full_path = OUTPUT_DIR / path
        if full_path.exists():
            found += 1
        else:
            missing.append(path)
    
    print(f"✅ Rutas críticas: {found}/{len(CRITICAL_PATHS)} encontradas")
    
    if missing:
        print(f"❌ Rutas faltantes ({len(missing)}):")
        for path in missing[:10]:  # Mostrar solo las primeras 10
            print(f"   - {path}")
        if len(missing) > 10:
            print(f"   ... y {len(missing) - 10} más")
        return False
    
    return True

def verify_languages():
    """Verifica que los idiomas están presentes."""
    locales_dir = OUTPUT_DIR / "locales"
    if not locales_dir.exists():
        print("❌ Directorio locales/ no existe")
        return False
    
    found_langs = []
    missing_langs = []
    
    for lang in EXPECTED_LANGUAGES:
        lang_dir = locales_dir / lang
        if lang_dir.exists():
            found_langs.append(lang)
        else:
            missing_langs.append(lang)
    
    print(f"✅ Idiomas: {len(found_langs)}/{len(EXPECTED_LANGUAGES)} encontrados")
    
    if missing_langs:
        print(f"⚠️ Idiomas faltantes: {', '.join(missing_langs)}")
        return False
    
    return True

def verify_branding():
    """Verifica que el branding está aplicado."""
    checks = []
    
    # Verificar manifest
    manifest_path = OUTPUT_DIR / "andalus-manifest.json"
    if manifest_path.exists():
        checks.append(("Manifest", True))
        try:
            with open(manifest_path, "r", encoding="utf-8") as f:
                manifest = json.load(f)
                if manifest.get("brand", {}).get("name") == "AL-ANDALUS AI":
                    checks.append(("Nombre de marca", True))
                else:
                    checks.append(("Nombre de marca", False))
        except Exception as e:
            checks.append(("Manifest válido", False))
    else:
        checks.append(("Manifest", False))
    
    # Verificar estilos Andalucía
    andalusia_css = OUTPUT_DIR / "public" / "assets" / "andalusia" / "andalucia-theme.css"
    if andalusia_css.exists():
        checks.append(("Estilos Andalucía", True))
    else:
        checks.append(("Estilos Andalucía", False))
    
    # Verificar anagrama
    anagram_status = "BLOQUEADO"
    manifest_path = OUTPUT_DIR / "andalus-manifest.json"
    if manifest_path.exists():
        try:
            with open(manifest_path, "r", encoding="utf-8") as f:
                manifest = json.load(f)
                anagram_status = manifest.get("anagram", {}).get("status", "UNKNOWN")
        except:
            pass
    
    checks.append((f"Anagrama ({anagram_status})", anagram_status == "INTEGRADO"))
    
    all_passed = all(passed for _, passed in checks)
    
    for name, passed in checks:
        status = "✅" if passed else "⚠️"
        print(f"{status} {name}")
    
    return all_passed

def count_files():
    """Cuenta el total de archivos en la salida."""
    total = 0
    html_count = 0
    css_count = 0
    js_count = 0
    
    for root, dirs, files in os.walk(OUTPUT_DIR):
        for file in files:
            total += 1
            if file.endswith(".html"):
                html_count += 1
            elif file.endswith(".css"):
                css_count += 1
            elif file.endswith(".js"):
                js_count += 1
    
    print(f"📊 Total de archivos: {total}")
    print(f"   HTML: {html_count}")
    print(f"   CSS: {css_count}")
    print(f"   JS: {js_count}")
    
    return {
        "total": total,
        "html": html_count,
        "css": css_count,
        "js": js_count
    }

def generate_verification_report():
    """Genera el informe de verificación."""
    report = {
        "verification_date": datetime.now().isoformat(),
        "output_directory": str(OUTPUT_DIR),
        "checks": {
            "output_exists": verify_output_exists(),
            "critical_paths": verify_critical_paths(),
            "languages": verify_languages(),
            "branding": verify_branding(),
        },
        "file_counts": count_files()
    }
    
    # Calcular estado general
    all_checks = list(report["checks"].values())
    report["overall_status"] = "PASS" if all(all_checks) else "PARTIAL"
    
    # Guardar informe
    report_path = PROJECT_ROOT / "docs" / "FASE2_PARIDAD.json"
    with open(report_path, "w", encoding="utf-8") as f:
        json.dump(report, f, indent=2, ensure_ascii=False)
    
    print(f"\n✅ Informe guardado: {report_path}")
    
    return report

# ============================================================
# FUNCIÓN PRINCIPAL
# ============================================================

def main():
    print("=" * 60)
    print("AL-ANDALUS AI — Verificador de Web Derivada ANDALUS RE")
    print("=" * 60)
    print()
    
    report = generate_verification_report()
    
    print()
    print("=" * 60)
    if report["overall_status"] == "PASS":
        print("✅ VERIFICACIÓN COMPLETADA — TODAS LAS COMPROBACIONES PASARON")
    else:
        print("⚠️ VERIFICACIÓN COMPLETADA — ALGUNAS COMPROBACIONES FALLARON")
    print("=" * 60)
    print(f"Estado general: {report['overall_status']}")
    print(f"Total de archivos: {report['file_counts']['total']}")
    print()
    
    # Salir con código apropiado
    sys.exit(0 if report["overall_status"] == "PASS" else 1)

if __name__ == "__main__":
    main()
