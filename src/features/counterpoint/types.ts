/**
 * TIPOS DEL ORQUESTADOR CONTRAPUNTÍSTICO
 * 
 * Define las interfaces para el sistema de orquestación de agentes
 * inspirado en el contrapunto de Bach.
 */

// ============================================================
// ESTADOS DE EJECUCIÓN
// ============================================================

export type ExecutionState = 
  | 'PENDING'      // Esperando inicio
  | 'READY'        // Listo para ejecutar
  | 'RUNNING'      // En ejecución
  | 'WAITING'      // Esperando dependencias
  | 'VERIFYING'    // En verificación
  | 'SUCCEEDED'    // Completado exitosamente
  | 'FAILED'       // Falló
  | 'BLOCKED'      // Bloqueado
  | 'CANCELLED';   // Cancelado

// ============================================================
// AGENTES Y CAPACIDADES
// ============================================================

export type AgentRole = 
  | 'researcher'      // Voz 1: Investigador
  | 'architect'       // Voz 2: Arquitecto
  | 'builder'         // Voz 3: Constructor
  | 'verifier'        // Voz 4: Verificador
  | 'documenter'      // Voz 5: Documentalista
  | 'governor';       // Voz 6: Gobernador Económico

export interface Agent {
  id: string;
  role: AgentRole;
  name: string;
  description: string;
  capabilities: string[];
  provider: 'REA' | 'JOULE' | 'LOCAL' | 'DEMO';
  status: 'available' | 'unavailable' | 'busy';
  costPerOperation: number; // Coste estimado en unidades simuladas
}

export interface Capability {
  id: string;
  name: string;
  description: string;
  agentId: string;
}

// ============================================================
// TAREAS Y FLUJOS DE TRABAJO
// ============================================================

export interface Task {
  id: string;
  title: string;
  description: string;
  requirements: string[];
  acceptanceCriteria: string[];
  createdAt: Date;
  status: ExecutionState;
}

export interface WorkflowStep {
  id: string;
  taskId: string;
  agentId: string;
  action: string;
  dependencies: string[]; // IDs de otros pasos
  status: ExecutionState;
  input?: any;
  output?: any;
  startedAt?: Date;
  completedAt?: Date;
  duration?: number; // milisegundos
  cost?: number;
  verificationResult?: VerificationResult;
}

export interface Workflow {
  id: string;
  taskId: string;
  steps: WorkflowStep[];
  status: ExecutionState;
  totalCost: number;
  totalTime: number;
  createdAt: Date;
  completedAt?: Date;
}

// ============================================================
// DEPENDENCIAS
// ============================================================

export interface Dependency {
  fromStepId: string;
  toStepId: string;
  type: 'data' | 'control' | 'verification';
}

// ============================================================
// EVENTOS DE EJECUCIÓN
// ============================================================

export interface ExecutionEvent {
  id: string;
  timestamp: Date;
  type: 'step_started' | 'step_completed' | 'step_failed' | 'agent_activated' | 'agent_silent' | 'verification_passed' | 'verification_failed' | 'budget_exceeded' | 'workflow_completed' | 'workflow_paused' | 'workflow_resumed' | 'agent_invited' | 'input_approved' | 'input_rejected' | 'entry_given' | 'intervention_requested' | 'protagonism_transferred' | 'exit_given';
  stepId?: string;
  agentId?: string;
  message: string;
  data?: any;
}

// ============================================================
// RESULTADOS Y VERIFICACIÓN
// ============================================================

export interface ExecutionResult {
  taskId: string;
  workflowId: string;
  status: 'success' | 'failure' | 'partial';
  outputs: Record<string, any>;
  totalCost: number;
  totalTime: number;
  stepsCompleted: number;
  stepsFailed: number;
  verificationResults: VerificationResult[];
  events: ExecutionEvent[];
}

export interface VerificationResult {
  stepId: string;
  criteria: string;
  passed: boolean;
  evidence: string;
  verifiedAt: Date;
  verifiedBy: string; // agentId
  details?: Array<{
    criterion: string;
    passed: boolean;
    evidence: string;
  }>;
}

// ============================================================
// PRESUPUESTO
// ============================================================

export interface Budget {
  maxCost: number;
  maxTime: number; // milisegundos
  maxConcurrentAgents: number;
  currentCost: number;
  currentTime: number;
  currentConcurrentAgents: number;
}

// ============================================================
// PROVENIENCIA (MODO CANGREJO)
// ============================================================

export interface ProvenanceNode {
  stepId: string;
  agentId: string;
  input: any;
  output: any;
  dependencies: string[];
  timestamp: Date;
}

export interface ProvenanceGraph {
  nodes: ProvenanceNode[];
  edges: Array<{ from: string; to: string }>;
}

// ============================================================
// MOTIVOS REUTILIZABLES
// ============================================================

export interface Motif {
  id: string;
  name: string;
  description: string;
  version: string;
  expectedInputs: string[];
  steps: Array<{
    agentRole: AgentRole;
    action: string;
  }>;
  expectedOutputs: string[];
  verificationCriteria: string[];
}

// ============================================================
// POLÍTICAS DE EJECUCIÓN
// ============================================================

export type ExecutionPolicy = 'full' | 'selective';

export interface ExecutionConfig {
  policy: ExecutionPolicy;
  budget: Budget;
  enableMirrorMode: boolean;
  enableCrabMode: boolean;
  referencePlan?: Workflow; // Para comparar con política selectiva
}
