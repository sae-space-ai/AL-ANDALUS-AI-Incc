/**
 * ESCENARIOS DE DEMOSTRACIÓN
 * 
 * Tareas predefinidas para demostrar el sistema de orquestación.
 * Todas son simulaciones deterministas.
 */

import { Task, Motif } from './types';

// ============================================================
// TAREAS DE DEMOSTRACIÓN
// ============================================================

export const DEMO_TASKS: Task[] = [
  {
    id: 'task-1',
    title: 'Analizar proyecto de software autorizado',
    description: 'Realizar un análisis completo de un proyecto de software, elaborando una propuesta de mejora y verificándola.',
    requirements: ['investigar', 'analizar', 'diseñar', 'construir', 'verificar', 'documentar'],
    acceptanceCriteria: [
      'Análisis completo del proyecto',
      'Propuesta de mejora documentada',
      'Verificación de viabilidad',
      'Documentación final entregada',
    ],
    createdAt: new Date(),
    status: 'PENDING',
  },
  {
    id: 'task-2',
    title: 'Optimizar costes de procesamiento',
    description: 'Analizar y optimizar los costes computacionales de un flujo de trabajo, manteniendo la calidad.',
    requirements: ['analizar', 'optimizar', 'presupuesto', 'verificar'],
    acceptanceCriteria: [
      'Análisis de costes actual',
      'Propuesta de optimización',
      'Verificación de ahorro sin pérdida de calidad',
      'Informe final',
    ],
    createdAt: new Date(),
    status: 'PENDING',
  },
  {
    id: 'task-3',
    title: 'Generar informe técnico',
    description: 'Investigar un tema técnico y generar un informe completo con evidencias.',
    requirements: ['investigar', 'analizar', 'documentar', 'verificar'],
    acceptanceCriteria: [
      'Investigación exhaustiva',
      'Análisis de hallazgos',
      'Informe documentado',
      'Verificación de exactitud',
    ],
    createdAt: new Date(),
    status: 'PENDING',
  },
];

// ============================================================
// MOTIVOS REUTILIZABLES
// ============================================================

export const MOTIFS: Motif[] = [
  {
    id: 'motif-analyze',
    name: 'Analizar artefacto autorizado',
    description: 'Patrón para analizar un artefacto de software de forma sistemática.',
    version: '1.0.0',
    expectedInputs: ['artefacto', 'permisos'],
    steps: [
      { agentRole: 'researcher', action: 'Investigar contexto del artefacto' },
      { agentRole: 'architect', action: 'Diseñar plan de análisis' },
      { agentRole: 'builder', action: 'Ejecutar análisis' },
      { agentRole: 'verifier', action: 'Validar resultados' },
      { agentRole: 'documenter', action: 'Documentar hallazgos' },
    ],
    expectedOutputs: ['informe_analisis', 'evidencias'],
    verificationCriteria: ['Análisis completo', 'Evidencias verificadas', 'Documentación clara'],
  },
  {
    id: 'motif-optimize',
    name: 'Optimizar recursos',
    description: 'Patrón para optimizar el uso de recursos computacionales.',
    version: '1.0.0',
    expectedInputs: ['flujo_trabajo', 'presupuesto'],
    steps: [
      { agentRole: 'researcher', action: 'Analizar uso actual' },
      { agentRole: 'governor', action: 'Evaluar oportunidades de ahorro' },
      { agentRole: 'architect', action: 'Diseñar optimización' },
      { agentRole: 'builder', action: 'Implementar cambios' },
      { agentRole: 'verifier', action: 'Verificar ahorro sin pérdida de calidad' },
    ],
    expectedOutputs: ['propuesta_optimizacion', 'ahorro_estimado'],
    verificationCriteria: ['Ahorro demostrado', 'Calidad mantenida', 'Implementación viable'],
  },
  {
    id: 'motif-document',
    name: 'Generar documentación técnica',
    description: 'Patrón para crear documentación técnica completa.',
    version: '1.0.0',
    expectedInputs: ['tema', 'audiencia'],
    steps: [
      { agentRole: 'researcher', action: 'Investigar tema' },
      { agentRole: 'architect', action: 'Estructurar documentación' },
      { agentRole: 'documenter', action: 'Redactar contenido' },
      { agentRole: 'verifier', action: 'Revisar exactitud' },
    ],
    expectedOutputs: ['documento_tecnico'],
    verificationCriteria: ['Contenido exacto', 'Estructura clara', 'Audiencia objetivo alcanzada'],
  },
];

// ============================================================
// FUNCIONES DE AYUDA
// ============================================================

export function getDemoTaskById(id: string): Task | undefined {
  return DEMO_TASKS.find(t => t.id === id);
}

export function getMotifById(id: string): Motif | undefined {
  return MOTIFS.find(m => m.id === id);
}

export function getAllDemoTasks(): Task[] {
  return [...DEMO_TASKS];
}

export function getAllMotifs(): Motif[] {
  return [...MOTIFS];
}
