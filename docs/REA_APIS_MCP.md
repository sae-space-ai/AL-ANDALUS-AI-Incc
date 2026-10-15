# REA — APIs, MCP Y CLI

> Catálogo de interfaces y herramientas existentes en REA.
> Fecha: 15 de octubre de 2026.

---

## 1. SERVIDOR MCP

### Configuración
| Campo | Valor |
|---|---|
| Protocolo | MCP (Model Context Protocol) |
| Transporte | STDIO / NDJSON |
| Configuración | `server.json` |
| Paquete | `rea-agents` (npm) |
| Catálogo | Generado automáticamente |
| Sesiones | Archivos ZIP de dominio |

### Características del servidor MCP:
- Inicialización con catálogo de herramientas
- Gestión de sesiones con lifecycle completo
- Contratos JSON Schema para cada herramienta
- Manejo de errores con códigos tipados
- Cancellation safety
- Resource bounds (CPU, memoria, tiempo)
- Provider admission con verificación
- Startup optimizado (1,312 módulos sin Playwright)

## 2. HERRAMIENTAS MCP IDENTIFICADAS

### Análisis Nativo
| Herramienta | Función | Proveedor |
|---|---|---|
| `inspect_native_binary` | Análisis de binario nativo | Hopper/Ghidra/IDA |
| `decompile_function` | Descompilar función | Hopper/Ghidra/IDA |
| `get_call_graph` | Grafo de llamadas | Hopper/Ghidra/IDA |
| `search_bytes` | Búsqueda de patrones de bytes | Ghidra |
| `get_functions` | Listar funciones | Hopper/Ghidra/IDA |
| `get_strings` | Extraer strings | Hopper/Ghidra/IDA |
| `get_symbols` | Extraer símbolos | Hopper/Ghidra/IDA |
| `get_xrefs_to` | Referencias cruzadas | Hopper/Ghidra/IDA |
| `batch_decompile` | Descompilación por lotes | Hopper |
| `binary_overview` | Resumen del binario | Hopper |
| `swift_classes` | Clases Swift | Hopper |
| `get_objc_classes` | Clases Objective-C | Hopper |
| `get_objc_protocols` | Protocolos ObjC | Hopper |
| `analyze_swift_types` | Análisis de tipos Swift | Hopper |
| `find_xrefs_to_name` | Xrefs por nombre | Hopper |

### Análisis JavaScript/Electron
| Herramienta | Función |
|---|---|
| `analyze_javascript_application` | Análisis de app JS/Electron |
| `recover_javascript_sources` | Recuperación con Wakaru |
| `inspect_electron_fuses` | Inspección de fuses Electron |
| `inspect_javascript_artifact` | Análisis de artefacto JS |

### Análisis de Navegador
| Herramienta | Función |
|---|---|
| `launch_browser_scenario` | Lanzar escenario de navegador |
| `capture_browser_page` | Capturar página |
| `inspect_electron_page` | Inspeccionar página Electron |

### Análisis Android
| Herramienta | Función |
|---|---|
| `analyze_android_application` | Análisis de APK |
| `install_adb_package` | Instalar paquete vía ADB |
| `project_android_application_graph` | Grafo de aplicación Android |
| `analyze_android_resources` | Recursos Android (Apktool) |
| `analyze_flutter_application` | Análisis de app Flutter |

### Análisis Apple
| Herramienta | Función |
|---|---|
| `project_apple_application_graph` | Grafo de aplicación Apple |

### Análisis de Red
| Herramienta | Función |
|---|---|
| `analyze_web_network_capture` | Análisis de captura HAR/SAZ |
| `analyze_packet_capture` | Análisis de PCAP |
| `summarize_packet_capture` | Resumen de captura |
| `analyze_signal_recording` | Análisis de señales |

### Análisis .NET
| Herramienta | Función |
|---|---|
| `analyze_managed_assembly` | Análisis de assembly .NET |
| `compare_managed_members` | Comparación de miembros |

### Análisis Blockchain/WASM
| Herramienta | Función |
|---|---|
| `inspect_wasm_artifact` | Inspección WASM (WABT) |
| `inspect_evm_bytecode` | Análisis EVM (EVMole) |

### Análisis de Firmware
| Herramienta | Función |
|---|---|
| `analyze_firmware_image` | Análisis de firmware |

### Análisis de Procesos
| Herramienta | Función |
|---|---|
| `capture_process_behavior` | Captura de comportamiento |
| `compare_process_captures` | Comparación de capturas |

### Análisis de Bases de Datos
| Herramienta | Función |
|---|---|
| `inspect_sqlite_database` | Inspección SQLite |

### Análisis HarmonyOS
| Herramienta | Función |
|---|---|
| `project_harmony_application_graph` | Grafo de app HarmonyOS |

### Análisis JEB
| Herramienta | Función |
|---|---|
| `analyze_jeb_project` | Análisis de proyecto JEB |

### Herramientas de Reverse Engineering
| Herramienta | Función |
|---|---|
| `inspect_with_gdb` | Inspección con GDB |
| `inspect_with_cutter` | Inspección con Cutter |
| `inspect_with_rizin` | Inspección con Rizin |
| `inspect_with_frida` | Instrumentación Frida |

### Herramientas de Comparación
| Herramienta | Función |
|---|---|
| `compare_functions` | Comparar funciones |
| `compare_application_inventories` | Comparar inventarios |

### Herramientas de Diagnóstico
| Herramienta | Función |
|---|---|
| `binary_session` | Sesión de análisis binario |
| `doctor` | Diagnóstico del sistema |

### Análisis de Crashes
| Herramienta | Función |
|---|---|
| `analyze_recorded_crash` | Análisis de crash grabado |

### Binarios Especiales
| Herramienta | Función |
|---|---|
| `inspect_go_binary` | Análisis de binario Go |
| `inspect_rust_binary` | Análisis de binario Rust |
| `diagnose_binary_layout` | Diagnóstico de layout ELF |

## 3. COMANDOS CLI

### Comandos principales
| Comando | Función |
|---|---|
| `rea setup` | Configuración inicial |
| `rea update` | Actualización |
| `rea --help` | Ayuda |
| `rea --version` | Versión |
| `rea doctor` | Diagnóstico |

### Comandos de análisis
| Comando | Función |
|---|---|
| `rea analyze-javascript-application` | Análisis JS/Electron |
| `rea inspect-native-binary` | Análisis nativo |
| `rea analyze-android-application` | Análisis APK |
| `rea analyze-managed-assembly` | Análisis .NET |
| `rea inspect-wasm-artifact` | Análisis WASM |
| `rea inspect-evm-bytecode` | Análisis EVM |
| `rea inspect-sqlite-database` | Análisis SQLite |
| `rea analyze-firmware-image` | Análisis firmware |
| `rea analyze-web-network-capture` | Análisis HAR/SAZ |
| `rea analyze-packet-capture` | Análisis PCAP |
| `rea capture-process-behavior` | Captura de proceso |

### Comandos MCP
| Comando | Función |
|---|---|
| `rea mcp doctor` | Diagnóstico MCP |
| `rea mcp serve` | Servidor MCP |

### Comandos de Reverse Engineering
| Comando | Función |
|---|---|
| `rea inspect-with-gdb` | Inspección GDB |
| `rea inspect-with-cutter` | Inspección Cutter |
| `rea inspect-with-rizin` | Inspección Rizin |

### Opciones de salida
| Formato | Descripción |
|---|---|
| `--json` | Salida JSON |
| `--yaml` | Salida YAML |
| `--toon` | Salida TOON |

### Códigos de salida
| Código | Significado |
|---|---|
| 0 | Éxito |
| 1 | Error general |
| 141 | SIGPIPE (reader cerró) |

## 4. CONTRATOS DE DATOS

### Evidence (Evidencia)
```json
{
  "identity": "semantic-identity",
  "producer": "provider-name",
  "findings": [...],
  "limitations": [...],
  "provenance": {...}
}
```

### Sesiones MCP
- Formato: ZIP
- Contenido: Evidencia + metadatos
- Lifecycle: create → use → retire

### Errores
- Schema: `docs/error-contract.schema.json`
- Códigos tipados
- Remediation incluida
- Resource constraints diferenciados

## 5. CLIENTES SOPORTADOS

| Cliente | Configuración | Estado |
|---|---|---|
| Claude Code | Automática con setup | ✅ Implementado |
| OpenAI Codex | Automática con setup | ✅ Implementado |
| Cursor | Automática con setup | ✅ Implementado |
| Gemini CLI | Automática con setup | ✅ Implementado |
| Grok Build | Automática con setup | ✅ Implementado |
| Workbuddy | Automática con setup | ✅ Implementado |
| DSH | Automática con setup | ✅ Implementado |
| Kimi | Automática con setup | ✅ Implementado |
| Droid | Automática con setup | ✅ Implementado |
| Qoder | Automática con setup | ✅ Implementado |
| Trae | Automática con setup | ✅ Implementado |
| Zcode | Automática con setup | ✅ Implementado |
| Devin | JSON configuration dialect | ✅ Implementado |
| Manual MCP | Registro manual | ✅ Documentado |

## 6. SKILLS (HABILIDADES)

- Ubicación: `.agents/skills/`
- Versión actual: 40+
- Se instalan con `npx rea-agents setup`
- Instrucciones de investigación por tipo
- skills.sh: `https://skills.sh/morluto/rea/reverse-engineer-anything`

## 7. DOCUMENTACIÓN DE CONTRATOS

| Archivo | Contenido |
|---|---|
| `docs/mcp-contracts.md` | Contratos MCP + catálogo generado |
| `docs/mcp-prompts.md` | Prompts para agentes |
| `docs/cli.md` | Comandos CLI y Evidence |
| `docs/tool-design.md` | Diseño de herramientas |
| `docs/client-configuration.md` | Configuración de clientes |
| `docs/client-verification.md` | Verificación de clientes |
| `docs/error-contract.schema.json` | Schema de errores |
| `docs/browser-scenario-contract.md` | Contrato de escenarios browser |

---

> **Nota:** Este catálogo se basa en la investigación del repositorio público. El catálogo completo de herramientas MCP se genera automáticamente desde el código fuente (docs/mcp-contracts.md). La verificación local completa requiere clonación.
