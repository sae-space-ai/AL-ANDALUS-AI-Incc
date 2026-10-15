import { describe, it, expect } from 'vitest';
import { findAgentForCapability, findAgentsForRequirements, getAllAgents, getAgentById } from '../agents';

describe('Agentes', () => {
  describe('findAgentForCapability', () => {
    it('debería encontrar el investigador para capacidad de investigación', () => {
      const agent = findAgentForCapability('investigar');
      expect(agent).toBeDefined();
      expect(agent?.role).toBe('researcher');
    });

    it('debería encontrar el arquitecto para capacidad de diseño', () => {
      const agent = findAgentForCapability('diseñar');
      expect(agent).toBeDefined();
      expect(agent?.role).toBe('architect');
    });

    it('debería encontrar el constructor para capacidad de construcción', () => {
      const agent = findAgentForCapability('construir');
      expect(agent).toBeDefined();
      expect(agent?.role).toBe('builder');
    });

    it('debería encontrar el verificador para capacidad de verificación', () => {
      const agent = findAgentForCapability('verificar');
      expect(agent).toBeDefined();
      expect(agent?.role).toBe('verifier');
    });

    it('debería encontrar el documentalista para capacidad de documentación', () => {
      const agent = findAgentForCapability('documentar');
      expect(agent).toBeDefined();
      expect(agent?.role).toBe('documenter');
    });

    it('debería encontrar el gobernador para capacidad de optimización', () => {
      const agent = findAgentForCapability('optimizar');
      expect(agent).toBeDefined();
      expect(agent?.role).toBe('governor');
    });

    it('debería devolver null para capacidad no reconocida', () => {
      const agent = findAgentForCapability('capacidad_inexistente');
      expect(agent).toBeNull();
    });
  });

  describe('findAgentsForRequirements', () => {
    it('debería encontrar múltiples agentes para múltiples requisitos', () => {
      const agents = findAgentsForRequirements(['investigar', 'diseñar', 'construir']);
      expect(agents.length).toBe(3);
      expect(agents.map(a => a.role)).toContain('researcher');
      expect(agents.map(a => a.role)).toContain('architect');
      expect(agents.map(a => a.role)).toContain('builder');
    });

    it('debería evitar duplicados', () => {
      const agents = findAgentsForRequirements(['investigar', 'analizar', 'buscar']);
      expect(agents.length).toBe(1);
      expect(agents[0].role).toBe('researcher');
    });

    it('debería devolver array vacío para requisitos no reconocidos', () => {
      const agents = findAgentsForRequirements(['requisito_inexistente']);
      expect(agents.length).toBe(0);
    });
  });

  describe('getAllAgents', () => {
    it('debería devolver todos los agentes registrados', () => {
      const agents = getAllAgents();
      expect(agents.length).toBe(6);
    });

    it('debería incluir todos los roles', () => {
      const agents = getAllAgents();
      const roles = agents.map(a => a.role);
      expect(roles).toContain('researcher');
      expect(roles).toContain('architect');
      expect(roles).toContain('builder');
      expect(roles).toContain('verifier');
      expect(roles).toContain('documenter');
      expect(roles).toContain('governor');
    });
  });

  describe('getAgentById', () => {
    it('debería encontrar agente por ID', () => {
      const agent = getAgentById('agent-researcher');
      expect(agent).toBeDefined();
      expect(agent?.role).toBe('researcher');
    });

    it('debería devolver undefined para ID inexistente', () => {
      const agent = getAgentById('agent-inexistente');
      expect(agent).toBeUndefined();
    });
  });
});
