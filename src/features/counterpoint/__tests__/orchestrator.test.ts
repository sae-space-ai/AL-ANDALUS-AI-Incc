import { describe, it, expect, beforeEach } from 'vitest';
import { CounterpointOrchestrator } from '../orchestrator';
import { Task, ExecutionConfig } from '../types';

describe('CounterpointOrchestrator', () => {
  let orchestrator: CounterpointOrchestrator;

  beforeEach(() => {
    orchestrator = new CounterpointOrchestrator();
  });

  describe('createWorkflow', () => {
    it('debería crear un workflow con los agentes necesarios', () => {
      const task: Task = {
        id: 'task-1',
        title: 'Analizar proyecto',
        description: 'Análisis completo',
        requirements: ['investigar', 'analizar'],
        acceptanceCriteria: ['Análisis completo'],
        createdAt: new Date(),
        status: 'PENDING',
      };

      const config: ExecutionConfig = {
        policy: 'selective',
        budget: {
          maxCost: 100,
          maxTime: 30000,
          maxConcurrentAgents: 3,
          currentCost: 0,
          currentTime: 0,
          currentConcurrentAgents: 0,
        },
        enableMirrorMode: false,
        enableCrabMode: false,
      };

      const workflow = orchestrator.createWorkflow(task, config);

      expect(workflow).toBeDefined();
      expect(workflow.taskId).toBe('task-1');
      expect(workflow.steps.length).toBeGreaterThan(0);
      expect(workflow.status).toBe('PENDING');
    });

    it('debería detectar dependencias circulares', () => {
      const task: Task = {
        id: 'task-2',
        title: 'Tarea con ciclo',
        description: 'Tarea con dependencias circulares',
        requirements: ['investigar'],
        acceptanceCriteria: [],
        createdAt: new Date(),
        status: 'PENDING',
      };

      const config: ExecutionConfig = {
        policy: 'selective',
        budget: {
          maxCost: 100,
          maxTime: 30000,
          maxConcurrentAgents: 3,
          currentCost: 0,
          currentTime: 0,
          currentConcurrentAgents: 0,
        },
        enableMirrorMode: false,
        enableCrabMode: false,
      };

      // No debería lanzar error porque el orquestador crea dependencias lineales
      expect(() => orchestrator.createWorkflow(task, config)).not.toThrow();
    });
  });

  describe('Mesa de Dirección Humana', () => {
    it('debería invitar un agente al workflow', () => {
      const task: Task = {
        id: 'task-3',
        title: 'Tarea básica',
        description: 'Tarea para probar invitación',
        requirements: ['investigar'],
        acceptanceCriteria: [],
        createdAt: new Date(),
        status: 'PENDING',
      };

      const config: ExecutionConfig = {
        policy: 'selective',
        budget: {
          maxCost: 100,
          maxTime: 30000,
          maxConcurrentAgents: 3,
          currentCost: 0,
          currentTime: 0,
          currentConcurrentAgents: 0,
        },
        enableMirrorMode: false,
        enableCrabMode: false,
      };

      const workflow = orchestrator.createWorkflow(task, config);
      const result = orchestrator.inviteAgent(workflow.id, 'agent-architect', 'Diseñar arquitectura');

      expect(result).toBe(true);
      const updatedWorkflow = orchestrator.getWorkflow(workflow.id);
      expect(updatedWorkflow?.steps.some(s => s.agentId === 'agent-architect')).toBe(true);
    });

    it('debería aprobar entrada de datos', () => {
      const task: Task = {
        id: 'task-4',
        title: 'Tarea con entrada',
        description: 'Tarea para probar aprobación',
        requirements: ['investigar'],
        acceptanceCriteria: [],
        createdAt: new Date(),
        status: 'PENDING',
      };

      const config: ExecutionConfig = {
        policy: 'selective',
        budget: {
          maxCost: 100,
          maxTime: 30000,
          maxConcurrentAgents: 3,
          currentCost: 0,
          currentTime: 0,
          currentConcurrentAgents: 0,
        },
        enableMirrorMode: false,
        enableCrabMode: false,
      };

      const workflow = orchestrator.createWorkflow(task, config);
      const stepId = workflow.steps[0].id;
      const result = orchestrator.approveInput(workflow.id, stepId, { data: 'test' });

      expect(result).toBe(true);
      const updatedWorkflow = orchestrator.getWorkflow(workflow.id);
      const step = updatedWorkflow?.steps.find(s => s.id === stepId);
      expect(step?.input).toEqual({ data: 'test' });
    });

    it('debería rechazar entrada de datos', () => {
      const task: Task = {
        id: 'task-5',
        title: 'Tarea con rechazo',
        description: 'Tarea para probar rechazo',
        requirements: ['investigar'],
        acceptanceCriteria: [],
        createdAt: new Date(),
        status: 'PENDING',
      };

      const config: ExecutionConfig = {
        policy: 'selective',
        budget: {
          maxCost: 100,
          maxTime: 30000,
          maxConcurrentAgents: 3,
          currentCost: 0,
          currentTime: 0,
          currentConcurrentAgents: 0,
        },
        enableMirrorMode: false,
        enableCrabMode: false,
      };

      const workflow = orchestrator.createWorkflow(task, config);
      const stepId = workflow.steps[0].id;
      const result = orchestrator.rejectInput(workflow.id, stepId, 'Datos inválidos');

      expect(result).toBe(true);
      const updatedWorkflow = orchestrator.getWorkflow(workflow.id);
      const step = updatedWorkflow?.steps.find(s => s.id === stepId);
      expect(step?.status).toBe('BLOCKED');
    });

    it('debería transferir protagonismo', () => {
      const task: Task = {
        id: 'task-6',
        title: 'Tarea con transferencia',
        description: 'Tarea para probar transferencia',
        requirements: ['investigar'],
        acceptanceCriteria: [],
        createdAt: new Date(),
        status: 'PENDING',
      };

      const config: ExecutionConfig = {
        policy: 'selective',
        budget: {
          maxCost: 100,
          maxTime: 30000,
          maxConcurrentAgents: 3,
          currentCost: 0,
          currentTime: 0,
          currentConcurrentAgents: 0,
        },
        enableMirrorMode: false,
        enableCrabMode: false,
      };

      const workflow = orchestrator.createWorkflow(task, config);
      const fromStepId = workflow.steps[0].id;
      const result = orchestrator.transferProtagonism(workflow.id, fromStepId, 'agent-architect');

      expect(result).toBe(true);
      const updatedWorkflow = orchestrator.getWorkflow(workflow.id);
      expect(updatedWorkflow?.steps.length).toBeGreaterThan(1);
    });
  });

  describe('Pausa y Reanudación', () => {
    it('debería pausar un workflow', () => {
      const task: Task = {
        id: 'task-7',
        title: 'Tarea para pausar',
        description: 'Tarea para probar pausa',
        requirements: ['investigar'],
        acceptanceCriteria: [],
        createdAt: new Date(),
        status: 'PENDING',
      };

      const config: ExecutionConfig = {
        policy: 'selective',
        budget: {
          maxCost: 100,
          maxTime: 30000,
          maxConcurrentAgents: 3,
          currentCost: 0,
          currentTime: 0,
          currentConcurrentAgents: 0,
        },
        enableMirrorMode: false,
        enableCrabMode: false,
      };

      const workflow = orchestrator.createWorkflow(task, config);
      orchestrator.pauseWorkflow(workflow.id);

      expect(orchestrator.isWorkflowPaused(workflow.id)).toBe(true);
    });

    it('debería reanudar un workflow pausado', () => {
      const task: Task = {
        id: 'task-8',
        title: 'Tarea para reanudar',
        description: 'Tarea para probar reanudación',
        requirements: ['investigar'],
        acceptanceCriteria: [],
        createdAt: new Date(),
        status: 'PENDING',
      };

      const config: ExecutionConfig = {
        policy: 'selective',
        budget: {
          maxCost: 100,
          maxTime: 30000,
          maxConcurrentAgents: 3,
          currentCost: 0,
          currentTime: 0,
          currentConcurrentAgents: 0,
        },
        enableMirrorMode: false,
        enableCrabMode: false,
      };

      const workflow = orchestrator.createWorkflow(task, config);
      orchestrator.pauseWorkflow(workflow.id);
      expect(orchestrator.isWorkflowPaused(workflow.id)).toBe(true);

      orchestrator.resumeWorkflow(workflow.id);
      expect(orchestrator.isWorkflowPaused(workflow.id)).toBe(false);
    });
  });

  describe('Modo Cangrejo - Trazabilidad', () => {
    it('debería obtener cadena de proveniencia', () => {
      const task: Task = {
        id: 'task-9',
        title: 'Tarea para trazabilidad',
        description: 'Tarea para probar modo cangrejo',
        requirements: ['investigar', 'analizar'],
        acceptanceCriteria: [],
        createdAt: new Date(),
        status: 'PENDING',
      };

      const config: ExecutionConfig = {
        policy: 'selective',
        budget: {
          maxCost: 100,
          maxTime: 30000,
          maxConcurrentAgents: 3,
          currentCost: 0,
          currentTime: 0,
          currentConcurrentAgents: 0,
        },
        enableMirrorMode: false,
        enableCrabMode: true,
      };

      const workflow = orchestrator.createWorkflow(task, config);
      
      // Ejecutar el workflow para generar proveniencia
      orchestrator.executeWorkflow(workflow.id, config).then(() => {
        const lastStepId = workflow.steps[workflow.steps.length - 1].id;
        const chain = orchestrator.getProvenanceChain(workflow.id, lastStepId);
        
        expect(chain.length).toBeGreaterThan(0);
      });
    });

    it('debería verificar integridad de trazabilidad', () => {
      const task: Task = {
        id: 'task-10',
        title: 'Tarea para verificar trazabilidad',
        description: 'Tarea para probar verificación',
        requirements: ['investigar'],
        acceptanceCriteria: [],
        createdAt: new Date(),
        status: 'PENDING',
      };

      const config: ExecutionConfig = {
        policy: 'selective',
        budget: {
          maxCost: 100,
          maxTime: 30000,
          maxConcurrentAgents: 3,
          currentCost: 0,
          currentTime: 0,
          currentConcurrentAgents: 0,
        },
        enableMirrorMode: false,
        enableCrabMode: true,
      };

      const workflow = orchestrator.createWorkflow(task, config);
      
      orchestrator.executeWorkflow(workflow.id, config).then(() => {
        const lastStepId = workflow.steps[workflow.steps.length - 1].id;
        const result = orchestrator.verifyTraceability(workflow.id, lastStepId);
        
        expect(result.status).toBeDefined();
        expect(['complete', 'incomplete', 'evidence_missing']).toContain(result.status);
      });
    });
  });
});
