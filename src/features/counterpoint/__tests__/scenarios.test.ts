import { describe, it, expect } from 'vitest';
import { DEMO_TASKS, MOTIFS, getDemoTaskById, getMotifById, getAllDemoTasks, getAllMotifs } from '../scenarios';

describe('Escenarios', () => {
  describe('DEMO_TASKS', () => {
    it('debería tener al menos 3 tareas de demostración', () => {
      expect(DEMO_TASKS.length).toBeGreaterThanOrEqual(3);
    });

    it('cada tarea debería tener campos requeridos', () => {
      DEMO_TASKS.forEach(task => {
        expect(task.id).toBeDefined();
        expect(task.title).toBeDefined();
        expect(task.description).toBeDefined();
        expect(task.requirements).toBeDefined();
        expect(Array.isArray(task.requirements)).toBe(true);
        expect(task.acceptanceCriteria).toBeDefined();
        expect(Array.isArray(task.acceptanceCriteria)).toBe(true);
      });
    });
  });

  describe('MOTIFS', () => {
    it('debería tener al menos 3 motivos reutilizables', () => {
      expect(MOTIFS.length).toBeGreaterThanOrEqual(3);
    });

    it('cada motivo debería tener campos requeridos', () => {
      MOTIFS.forEach(motif => {
        expect(motif.id).toBeDefined();
        expect(motif.name).toBeDefined();
        expect(motif.description).toBeDefined();
        expect(motif.version).toBeDefined();
        expect(motif.expectedInputs).toBeDefined();
        expect(Array.isArray(motif.expectedInputs)).toBe(true);
        expect(motif.steps).toBeDefined();
        expect(Array.isArray(motif.steps)).toBe(true);
        expect(motif.expectedOutputs).toBeDefined();
        expect(Array.isArray(motif.expectedOutputs)).toBe(true);
        expect(motif.verificationCriteria).toBeDefined();
        expect(Array.isArray(motif.verificationCriteria)).toBe(true);
      });
    });

    it('cada paso del motivo debería tener agente y acción', () => {
      MOTIFS.forEach(motif => {
        motif.steps.forEach(step => {
          expect(step.agentRole).toBeDefined();
          expect(step.action).toBeDefined();
        });
      });
    });
  });

  describe('getDemoTaskById', () => {
    it('debería encontrar tarea por ID', () => {
      const task = getDemoTaskById('task-1');
      expect(task).toBeDefined();
      expect(task?.id).toBe('task-1');
    });

    it('debería devolver undefined para ID inexistente', () => {
      const task = getDemoTaskById('task-inexistente');
      expect(task).toBeUndefined();
    });
  });

  describe('getMotifById', () => {
    it('debería encontrar motivo por ID', () => {
      const motif = getMotifById('motif-analyze');
      expect(motif).toBeDefined();
      expect(motif?.id).toBe('motif-analyze');
    });

    it('debería devolver undefined para ID inexistente', () => {
      const motif = getMotifById('motif-inexistente');
      expect(motif).toBeUndefined();
    });
  });

  describe('getAllDemoTasks', () => {
    it('debería devolver todas las tareas', () => {
      const tasks = getAllDemoTasks();
      expect(tasks.length).toBe(DEMO_TASKS.length);
    });
  });

  describe('getAllMotifs', () => {
    it('debería devolver todos los motivos', () => {
      const motifs = getAllMotifs();
      expect(motifs.length).toBe(MOTIFS.length);
    });
  });
});
