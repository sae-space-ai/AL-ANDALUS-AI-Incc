# REA — COMPATIBILIDAD

> Compatibilidad por sistemas operativos y dependencias.
> Fecha: 15 de octubre de 2026.

---

## 1. REQUISITOS BASE

| Requisito | Versión | Notas |
|---|---|---|
| Node.js | 22.x (>=22.19), 24.x (>=24.11), 26+ | Requerido |
| npm | Incluido con Node.js | Requerido |
| Python 3 | 3.x | Solo para website |
| Git | Cualquiera | Solo para desarrollo |

## 2. COMPATIBILIDAD POR SISTEMA OPERATIVO

### Linux (x64)
| Componente | Estado | Notas |
|---|---|---|
| REA CLI | ✅ Funcional | Principal |
| REA MCP | ✅ Funcional | Principal |
| JavaScript/Electron analysis | ✅ Funcional | Requiere procps `ps` |
| Native analysis (Ghidra) | ✅ Funcional | Verificado Ubuntu 24.04 |
| Native analysis (Hopper) | ✅ Funcional | Requiere instalación |
| Native analysis (IDA) | ✅ Funcional | Requiere licencia |
| JADX | ✅ Funcional | Requiere JDK |
| Firmware (Binwalk/Unblob) | ✅ Funcional | Linux only |
| Packet captures (TShark) | ✅ Funcional | Requiere TShark 4.x + prlimit |
| Signal recordings | ✅ Funcional | Requiere sigrok-cli 0.7.2 + prlimit |
| Process capture | ✅ Funcional | Requiere PTY nativo |
| Recorded crashes | ✅ Funcional | Requiere pwntools |
| GDB | ✅ Funcional | Linux only |
| Rizin | ✅ Funcional | |
| Frida | ✅ Funcional | Verificado 17.23.2 |
| ADB | ✅ Funcional | |
| Website preview | ✅ Funcional | Requiere CairoSVG + DejaVu |
| EVM bytecode | ✅ Funcional | Linux x64 |

### macOS (x64/ARM64)
| Componente | Estado | Notas |
|---|---|---|
| REA CLI | ✅ Funcional | |
| REA MCP | ✅ Funcional | |
| JavaScript/Electron analysis | ✅ Funcional | |
| Native analysis (Hopper) | ✅ Funcional | macOS principal |
| Native analysis (Ghidra) | ✅ Funcional | |
| Native analysis (IDA) | ✅ Funcional | |
| Process capture | ✅ Funcional | Requiere PTY nativo |
| ADB | ✅ Funcional | |
| JADX | ✅ Funcional | |
| Website preview | ⚠️ Requiere ARM brew | En Apple Silicon |
| Saved Hopper databases | ⚠️ Limitado | Script-capable bridge |

### Windows (x64)
| Componente | Estado | Notas |
|---|---|---|
| REA CLI | ✅ Funcional | |
| REA MCP | ✅ Funcional | |
| JavaScript/Electron analysis | ✅ Funcional | |
| Native analysis (Ghidra) | ⚠️ P0 experimental | Windows Ghidra P0 |
| Native analysis (IDA) | ✅ Funcional | Requiere licencia |
| Native analysis (Hopper) | ❌ No disponible | Solo macOS/Linux |
| JADX | ✅ Funcional | |
| ADB | ✅ Funcional | |
| Native Windows code | ✅ Funcional | `native/windows/` |
| Process capture | ❌ No PTY nativo | |
| GDB | ❌ No soportado | Solo POSIX |
| Firmware tools | ❌ No disponible | Linux only |
| Packet captures | ❌ No verificado | |

## 3. DEPENDENCIAS POR ANÁLISIS

### Análisis Nativo
| Proveedor | Linux | macOS | Windows | Licencia |
|---|---|---|---|---|
| Hopper | ✅ | ✅ (principal) | ❌ | Comercial |
| Ghidra | ✅ | ✅ | ⚠️ P0 | Gratuito (NSA) |
| IDA Pro | ✅ | ✅ | ✅ | Comercial |
| Rizin | ✅ | ✅ | ✅ | Libre |
| Cutter | ✅ | ✅ | ✅ | Libre |
| GDB | ✅ | ✅ | ❌ | Libre |
| GNU objdump | ✅ | ✅ | ❌ | Libre |

### Análisis JavaScript/Electron
| Herramienta | Linux | macOS | Windows | Licencia |
|---|---|---|---|---|
| Node.js (built-in) | ✅ | ✅ | ✅ | Libre |
| Wakaru | ✅ | ✅ | ✅ | Libre |

### Análisis Android
| Herramienta | Linux | macOS | Windows | Licencia |
|---|---|---|---|---|
| JADX | ✅ | ✅ | ✅ | Apache 2.0 |
| ADB | ✅ | ✅ | ✅ | Apache 2.0 |
| Apktool | ✅ | ✅ | ✅ | Apache 2.0 |

### Análisis de Red
| Herramienta | Linux | macOS | Windows | Licencia |
|---|---|---|---|---|
| TShark 4.x | ✅ | ⚠️ | ❌ | GPL |
| mitmdump | ✅ | ⚠️ | ❌ | Apache 2.0 |
| sigrok-cli | ✅ | ❌ | ❌ | GPL |
| prlimit | ✅ | ❌ | ❌ | Linux-only |

### Análisis de Firmware
| Herramienta | Linux | macOS | Windows | Licencia |
|---|---|---|---|---|
| Binwalk | ✅ | ❌ | ❌ | MIT |
| Unblob | ✅ | ❌ | ❌ | Libre |

### Análisis Blockchain
| Herramienta | Linux | macOS | Windows | Licencia |
|---|---|---|---|---|
| WABT 1.0.42 | ✅ | ✅ | ✅ | Apache 2.0 |
| EVMole | ✅ | ✅ | ✅ | Libre |

### Instrumentación
| Herramienta | Linux | macOS | Windows | Licencia |
|---|---|---|---|---|
| Frida 17.x | ✅ | ✅ | ✅ | Libre |
| pwntools | ✅ | ❌ | ❌ | Linux x64 |

## 4. REQUISITOS ESPECIALES

### Linux
- `procps` compatible `ps` en PATH (para JavaScript/Electron analysis)
- `prlimit` para resource bounds (TShark, sigrok)
- PTY nativo para process capture
- Cairo + DejaVu Sans para social cards del website

### macOS (Apple Silicon)
- ARM brew en `/opt/homebrew/`
- No mezclar con Intel brew en `/usr/local/`
- CairoSVG requiere ARM native library
- `DYLD_LIBRARY_PATH` para preview

### Windows
- `native/windows/` para operaciones nativas
- Ghidra P0 experimental
- Sin Hopper
- Sin GDB/Cutter/Rizin integrados

## 5. VERSIONES PINNED

| Herramienta | Versión | Notas |
|---|---|---|
| Node.js | >=22.19, >=24.11, 26+ | .nvmrc |
| WABT | 1.0.42 | Caller-supplied |
| TShark | 4.x | Linux verificado |
| sigrok-cli | 0.7.2 | Linux |
| Frida | 17.23.2 | Verificado |
| Wrangler | 4.149.0 | Website preview |
| Hopper | 6.6.0 | Última verificada |

## 6. LIMITACIONES CONOCIDAS

| Limitación | Plataforma | Detalle |
|---|---|---|
| Sin Hopper | Windows | No disponible |
| Sin GDB | Windows | Solo POSIX |
| Sin firmware tools | macOS/Windows | Linux only |
| Sin prlimit | macOS/Windows | Linux only |
| Sin process PTY | Windows | Sin PTY nativo |
| Ghidra Windows | Windows | P0 experimental |
| Saved Hopper DB | macOS | Requiere script bridge |
| RPM metadata | Linux | Mismatch tracked (#3578) |
| Bun global update | <1.2.17 | Requiere upgrade manual |

---

> **Nota:** Esta compatibilidad se basa en la documentación del repositorio público. La verificación real en cada plataforma requiere ejecución local.
