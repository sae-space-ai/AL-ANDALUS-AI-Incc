/**
 * MOTOR DE ORQUESTACIÓN CONTRAPUNTÍSTICA
 * 
 * Núcleo TypeScript independiente de la representación visual.
 * Implementa la máquina de estados, planificación y ejecución.
 */

import {
  Task,
  Workflow,
  WorkflowStep,
  ExecutionState,
  ExecutionEvent,
  ExecutionResult,
  Budget,
  VerificationResult,
  ProvenanceGraph,
  ProvenanceNode,
  ExecutionConfig,
  Agent,
  AgentRole,
} from './types';
import { findAgentsForRequirements, getAgentById } from './agents';

// ============================================================
// TRANSICIONES VÁLIDAS DE ESTADO
// ============================================================

const VALID_TRANSITIONS: Record<ExecutionState, ExecutionState[]> = {
  PENDING: ['READY', 'CANCELLED'],
  READY: ['RUNNING', 'CANCELLED'],
  RUNNING: ['WAITING', 'VERIFYING', 'SUCCEEDED', 'FAILED', 'CANCELLED'],
  WAITING: ['READY', 'RUNNING', 'CANCELLED'],
  VERIFYING: ['SUCCEEDED', 'FAILED', 'CANCELLED'],
  SUCCEEDED: [],
  FAILED: ['READY', 'CANCELLED'],
  BLOCKED: ['READY', 'CANCELLED'],
  CANCELLED: [],
};

// ============================================================
// MOTOR DE ORQUESTACIÓN
// ============================================================

export class CounterpointOrchestrator {
  private workflows: Map<string, Workflow> = new Map();
  private events: ExecutionEvent[] = [];
  private provenanceGraphs: Map<string, ProvenanceGraph> = new Map();
  private pausedWorkflows: Set<string> = new Set();

  // ============================================================
  // VALIDACIÓN DE TRANSICIONES
  // ============================================================

  private isValidTransition(from: ExecutionState, to: ExecutionState): boolean {
    return VALID_TRANSITIONS[from]?.includes(to) ?? false;
  }

  private transitionState(step: WorkflowStep, newState: ExecutionState): void {
    if (!this.isValidTransition(step.status, newState)) {
      throw new Error(
        `Transición inválida: ${step.status} → ${newState} (paso ${step.id})`
      );
    }
    step.status = newState;
  }

  // ============================================================
  // REGISTRO DE EVENTOS
  // ============================================================

  private logEvent(
    type: ExecutionEvent['type'],
    message: string,
    stepId?: string,
    agentId?: string,
    data?: any
  ): void {
    this.events.push({
      id: `event-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      timestamp: new Date(),
      type,
      stepId,
      agentId,
      message,
      data,
    });
  }

  // ============================================================
  // DETECCIÓN DE CICLOS
  // ============================================================

  private detectCycles(steps: WorkflowStep[]): boolean {
    const graph = new Map<string, string[]>();
    
    for (const step of steps) {
      graph.set(step.id, step.dependencies);
    }

    const visited = new Set<string>();
    const recursionStack = new Set<string>();

    const hasCycle = (nodeId: string): boolean => {
      if (recursionStack.has(nodeId)) return true;
      if (visited.has(nodeId)) return false;

      visited.add(nodeId);
      recursionStack.add(nodeId);

      const dependencies = graph.get(nodeId) || [];
      for (const dep of dependencies) {
        if (hasCycle(dep)) return true;
      }

      recursionStack.delete(nodeId);
      return false;
    };

    for (const step of steps) {
      if (hasCycle(step.id)) return true;
    }

    return false;
  }

  // ============================================================
  // PLANIFICACIÓN DE FLUJO DE TRABAJO
  // ============================================================

  createWorkflow(task: Task, config: ExecutionConfig): Workflow {
    const agents = findAgentsForRequirements(task.requirements);
    
    if (agents.length === 0) {
      throw new Error('No se encontraron agentes para los requisitos de la tarea');
    }

    // Construir pasos según la política
    const steps: WorkflowStep[] = [];
    let previousStepId: string | null = null;

    if (config.policy === 'full') {
      // Política A: Activar todos los agentes
      for (const agent of agents) {
        const stepId = `step-${task.id}-${agent.role}`;
        steps.push({
          id: stepId,
          taskId: task.id,
          agentId: agent.id,
          action: `Ejecutar como ${agent.name}`,
          dependencies: previousStepId ? [previousStepId] : [],
          status: 'PENDING',
        });
        previousStepId = stepId;
      }
    } else {
      // Política B: Solo agentes necesarios según dependencias
      const requiredRoles = this.analyzeRequiredRoles(task);
      const selectedAgents = agents.filter(a => requiredRoles.includes(a.role));
      
      for (const agent of selectedAgents) {
        const stepId = `step-${task.id}-${agent.role}`;
        steps.push({
          id: stepId,
          taskId: task.id,
          agentId: agent.id,
          action: `Ejecutar como ${agent.name}`,
          dependencies: previousStepId ? [previousStepId] : [],
          status: 'PENDING',
        });
        previousStepId = stepId;
      }
    }

    // Detectar ciclos
    if (this.detectCycles(steps)) {
      throw new Error('Dependencias circulares detectadas en el flujo de trabajo');
    }

    const workflow: Workflow = {
      id: `workflow-${task.id}-${Date.now()}`,
      taskId: task.id,
      steps,
      status: 'PENDING',
      totalCost: 0,
      totalTime: 0,
      createdAt: new Date(),
    };

    this.workflows.set(workflow.id, workflow);
    this.logEvent('workflow_completed', `Flujo de trabajo creado: ${workflow.id}`);

    return workflow;
  }

  private analyzeRequiredRoles(task: Task): AgentRole[] {
    const roles: Set<AgentRole> = new Set();

    for (const requirement of task.requirements) {
      const lowerReq = requirement.toLowerCase();
      
      if (lowerReq.includes('investigar') || lowerReq.includes('buscar') || lowerReq.includes('analizar')) {
        roles.add('researcher');
      }
      if (lowerReq.includes('diseñar') || lowerReq.includes('arquitectura') || lowerReq.includes('planificar')) {
        roles.add('architect');
      }
      if (lowerReq.includes('construir') || lowerReq.includes('generar') || lowerReq.includes('implementar')) {
        roles.add('builder');
      }
      if (lowerReq.includes('verificar') || lowerReq.includes('validar') || lowerReq.includes('probar')) {
        roles.add('verifier');
      }
      if (lowerReq.includes('documentar') || lowerReq.includes('registrar')) {
        roles.add('documenter');
      }
      if (lowerReq.includes('optimizar') || lowerReq.includes('presupuesto') || lowerReq.includes('coste')) {
        roles.add('governor');
      }
    }

    // Siempre incluir verificador si hay otros agentes
    if (roles.size > 0) {
      roles.add('verifier');
    }

    return Array.from(roles);
  }

  // ============================================================
  // EJECUCIÓN DE PASOS
  // ============================================================

  async executeStep(workflowId: string, stepId: string, config: ExecutionConfig): Promise<void> {
    const workflow = this.workflows.get(workflowId);
    if (!workflow) throw new Error(`Flujo de trabajo no encontrado: ${workflowId}`);

    const step = workflow.steps.find(s => s.id === stepId);
    if (!step) throw new Error(`Paso no encontrado: ${stepId}`);

    const agent = getAgentById(step.agentId);
    if (!agent) throw new Error(`Agente no encontrado: ${step.agentId}`);

    // Verificar dependencias
    const dependenciesReady = step.dependencies.every(depId => {
      const depStep = workflow.steps.find(s => s.id === depId);
      return depStep?.status === 'SUCCEEDED';
    });

    if (!dependenciesReady) {
      this.transitionState(step, 'WAITING');
      this.logEvent('step_started', `Paso ${stepId} esperando dependencias`, stepId, agent.id);
      return;
    }

    // Verificar presupuesto
    if (config.budget.currentCost + agent.costPerOperation > config.budget.maxCost) {
      this.transitionState(step, 'BLOCKED');
      this.logEvent('budget_exceeded', `Presupuesto excedido para paso ${stepId}`, stepId, agent.id);
      throw new Error('Presupuesto insuficiente');
    }

    // Ejecutar paso
    this.transitionState(step, 'RUNNING');
    step.startedAt = new Date();
    this.logEvent('step_started', `Ejecutando paso ${stepId} con ${agent.name}`, stepId, agent.id);
    this.logEvent('agent_activated', `Agente ${agent.name} activado`, stepId, agent.id);

    // Simular ejecución (en producción aquí iría la lógica real)
    await this.simulateExecution(step, agent);

    // Verificar si Modo Espejo está habilitado
    if (config.enableMirrorMode) {
      this.transitionState(step, 'VERIFYING');
      const verificationResult = await this.verifyStep(step, agent);
      step.verificationResult = verificationResult;

      if (verificationResult.passed) {
        this.transitionState(step, 'SUCCEEDED');
        this.logEvent('verification_passed', `Verificación exitosa para paso ${stepId}`, stepId, agent.id);
      } else {
        this.transitionState(step, 'FAILED');
        this.logEvent('verification_failed', `Verificación fallida para paso ${stepId}`, stepId, agent.id);
      }
    } else {
      this.transitionState(step, 'SUCCEEDED');
    }

    step.completedAt = new Date();
    step.duration = step.completedAt.getTime() - step.startedAt.getTime();
    step.cost = agent.costPerOperation;

    // Actualizar presupuesto
    config.budget.currentCost += agent.costPerOperation;
    config.budget.currentTime += step.duration;
    workflow.totalCost += step.cost;
    workflow.totalTime += step.duration;

    // Registrar proveniencia
    this.recordProvenance(workflow.id, step, agent);

    this.logEvent('step_completed', `Paso ${stepId} completado`, stepId, agent.id);
  }

  private async simulateExecution(step: WorkflowStep, agent: Agent): Promise<void> {
    // Simular tiempo de ejecución (100-500ms)
    await new Promise(resolve => setTimeout(resolve, 100 + Math.random() * 400));

    // Generar output de demostración
    step.output = {
      agentId: agent.id,
      agentRole: agent.role,
      action: step.action,
      timestamp: new Date().toISOString(),
      result: `Resultado simulado de ${agent.name}`,
      confidence: 0.85 + Math.random() * 0.15,
    };
  }

  // ============================================================
  // VERIFICACIÓN (MODO ESPEJO)
  // ============================================================

  private async verifyStep(step: WorkflowStep, agent: Agent): Promise<VerificationResult> {
    // Simular verificación
    await new Promise(resolve => setTimeout(resolve, 50));

    const passed = Math.random() > 0.1; // 90% de probabilidad de pasar

    return {
      stepId: step.id,
      criteria: 'Criterios de aceptación cumplidos',
      passed,
      evidence: passed ? 'Evidencia verificada' : 'Evidencia insuficiente',
      verifiedAt: new Date(),
      verifiedBy: 'agent-verifier',
    };
  }

  // ============================================================
  // PROVENIENCIA (MODO CANGREJO)
  // ============================================================

  private recordProvenance(workflowId: string, step: WorkflowStep, agent: Agent): void {
    if (!this.provenanceGraphs.has(workflowId)) {
      this.provenanceGraphs.set(workflowId, { nodes: [], edges: [] });
    }

    const graph = this.provenanceGraphs.get(workflowId)!;

    const node: ProvenanceNode = {
      stepId: step.id,
      agentId: agent.id,
      input: step.input,
      output: step.output,
      dependencies: step.dependencies,
      timestamp: new Date(),
    };

    graph.nodes.push(node);

    for (const depId of step.dependencies) {
      graph.edges.push({ from: depId, to: step.id });
    }
  }

  getProvenanceGraph(workflowId: string): ProvenanceGraph | undefined {
    return this.provenanceGraphs.get(workflowId);
  }

  // ============================================================
  // CONTROLES DE EJECUCIÓN
  // ============================================================

  async executeWorkflow(workflowId: string, config: ExecutionConfig): Promise<ExecutionResult> {
    const workflow = this.workflows.get(workflowId);
    if (!workflow) throw new Error(`Flujo de trabajo no encontrado: ${workflowId}`);

    workflow.status = 'RUNNING';

    // Ejecución concurrente con soporte de pausa
    const executing = new Set<string>();
    const maxConcurrent = config.budget.maxConcurrentAgents;

    while (true) {
      // Verificar pausa
      while (this.pausedWorkflows.has(workflowId)) {
        await new Promise(resolve => setTimeout(resolve, 100));
      }

      // Verificar cancelación (verificar si algún paso fue cancelado)
      const anyCancelled = workflow.steps.some(s => s.status === 'CANCELLED');
      if (anyCancelled) {
        break;
      }

      // Encontrar pasos listos para ejecutar
      const readySteps = workflow.steps.filter(step => {
        if (step.status !== 'PENDING' && step.status !== 'WAITING') return false;
        if (executing.has(step.id)) return false;
        
        // Verificar dependencias
        const depsReady = step.dependencies.every(depId => {
          const dep = workflow.steps.find(s => s.id === depId);
          return dep?.status === 'SUCCEEDED';
        });
        
        return depsReady;
      });

      // Verificar si todos los pasos están completados
      const allDone = workflow.steps.every(
        s => s.status === 'SUCCEEDED' || s.status === 'FAILED' || s.status === 'CANCELLED' || s.status === 'BLOCKED'
      );

      if (allDone && executing.size === 0) {
        break;
      }

      // Ejecutar pasos en paralelo hasta el límite de concurrencia
      const toExecute = readySteps.slice(0, maxConcurrent - executing.size);

      if (toExecute.length === 0) {
        // No hay pasos listos, esperar un poco
        await new Promise(resolve => setTimeout(resolve, 50));
        continue;
      }

      // Ejecutar pasos en paralelo
      const promises = toExecute.map(async step => {
        executing.add(step.id);
        try {
          await this.executeStep(workflowId, step.id, config);
        } catch (error) {
          // El paso falló, pero continuamos con los demás
          console.error(`Error en paso ${step.id}:`, error);
        } finally {
          executing.delete(step.id);
        }
      });

      await Promise.all(promises);
    }

    // Determinar estado final
    const allSucceeded = workflow.steps.every(s => s.status === 'SUCCEEDED');
    const anyFailed = workflow.steps.some(s => s.status === 'FAILED');
    const anyCancelled = workflow.steps.some(s => s.status === 'CANCELLED');

    if (!anyCancelled) {
      workflow.status = allSucceeded ? 'SUCCEEDED' : (anyFailed ? 'FAILED' : 'SUCCEEDED');
      workflow.completedAt = new Date();
    } else {
      workflow.status = 'CANCELLED';
    }

    return {
      taskId: workflow.taskId,
      workflowId: workflow.id,
      status: allSucceeded ? 'success' : (anyFailed ? 'failure' : 'partial'),
      outputs: Object.fromEntries(
        workflow.steps.map(s => [s.id, s.output])
      ),
      totalCost: workflow.totalCost,
      totalTime: workflow.totalTime,
      stepsCompleted: workflow.steps.filter(s => s.status === 'SUCCEEDED').length,
      stepsFailed: workflow.steps.filter(s => s.status === 'FAILED').length,
      verificationResults: workflow.steps
        .filter(s => s.verificationResult)
        .map(s => s.verificationResult!),
      events: this.events,
    };
  }

  pauseWorkflow(workflowId: string): void {
    this.pausedWorkflows.add(workflowId);
    this.logEvent('workflow_paused', `Flujo pausado: ${workflowId}`, undefined, undefined, { workflowId });
  }

  resumeWorkflow(workflowId: string): void {
    this.pausedWorkflows.delete(workflowId);
    this.logEvent('workflow_resumed', `Flujo reanudado: ${workflowId}`, undefined, undefined, { workflowId });
  }

  isWorkflowPaused(workflowId: string): boolean {
    return this.pausedWorkflows.has(workflowId);
  }

  cancelWorkflow(workflowId: string): void {
    const workflow = this.workflows.get(workflowId);
    if (!workflow) return;

    for (const step of workflow.steps) {
      if (step.status !== 'SUCCEEDED' && step.status !== 'FAILED') {
        this.transitionState(step, 'CANCELLED');
      }
    }

    workflow.status = 'CANCELLED';
    this.logEvent('workflow_completed', `Flujo de trabajo cancelado: ${workflowId}`);
  }

  // ============================================================
  // CONSULTAS
  // ============================================================

  getWorkflow(workflowId: string): Workflow | undefined {
    return this.workflows.get(workflowId);
  }

  getAllWorkflows(): Workflow[] {
    return Array.from(this.workflows.values());
  }

  getEvents(): ExecutionEvent[] {
    return [...this.events];
  }

  getSilentAgents(workflowId: string): Agent[] {
    const workflow = this.workflows.get(workflowId);
    if (!workflow) return [];

    const activatedAgentIds = new Set(workflow.steps.map(s => s.agentId));
    const allAgents = Object.values(AGENTS);

    return allAgents.filter(a => !activatedAgentIds.has(a.id));
  }

  getWorkflowEvents(workflowId: string): ExecutionEvent[] {
    const workflow = this.workflows.get(workflowId);
    if (!workflow) return [];

    // Filtrar eventos relacionados con este workflow
    const stepIds = new Set(workflow.steps.map(s => s.id));
    return this.events.filter(e => {
      // Incluir eventos sin stepId (como workflow_completed)
      if (!e.stepId) return true;
      // Incluir eventos de pasos de este workflow
      return stepIds.has(e.stepId);
    });
  }
}

// ============================================================
// IMPORTAR AGENTES (para getSilentAgents)
// ============================================================

import { AGENTS } from './agents';
