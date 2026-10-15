/**
 * AGENTES ESPECIALIZADOS — DEMOSTRACIÓN DETERMINISTA
 * 
 * Implementa las 6 voces del contrapunto como agentes deterministas.
 * NO son modelos de IA reales. Son demostraciones del sistema de orquestación.
 */

import { Agent, AgentRole } from './types';

// ============================================================
// REGISTRO DE AGENTES
// ============================================================

export const AGENTS: Record<AgentRole, Agent> = {
  researcher: {
    id: 'agent-researcher',
    role: 'researcher',
    name: 'Investigador',
    description: 'Busca y organiza información técnica disponible.',
    capabilities: ['search', 'analyze', 'summarize', 'extract'],
    provider: 'DEMO', // Futuro: ANDALUS RE
    status: 'available',
    costPerOperation: 10,
  },
  architect: {
    id: 'agent-architect',
    role: 'architect',
    name: 'Arquitecto',
    description: 'Relaciona requisitos, dependencias y diseños técnicos.',
    capabilities: ['design', 'plan', 'dependency_analysis', 'structure'],
    provider: 'LOCAL',
    status: 'available',
    costPerOperation: 15,
  },
  builder: {
    id: 'agent-builder',
    role: 'builder',
    name: 'Constructor',
    description: 'Ejecuta acciones permitidas de construcción o generación.',
    capabilities: ['build', 'generate', 'transform', 'compile'],
    provider: 'LOCAL',
    status: 'available',
    costPerOperation: 20,
  },
  verifier: {
    id: 'agent-verifier',
    role: 'verifier',
    name: 'Verificador',
    description: 'Comprueba resultados contra criterios independientes.',
    capabilities: ['verify', 'validate', 'test', 'audit'],
    provider: 'LOCAL',
    status: 'available',
    costPerOperation: 12,
  },
  documenter: {
    id: 'agent-documenter',
    role: 'documenter',
    name: 'Documentalista',
    description: 'Registra decisiones, evidencias y resultados.',
    capabilities: ['document', 'record', 'report', 'evidence'],
    provider: 'LOCAL',
    status: 'available',
    costPerOperation: 8,
  },
  governor: {
    id: 'agent-governor',
    role: 'governor',
    name: 'Gobernador Económico',
    description: 'Determina si la ejecución puede realizarse dentro de presupuestos.',
    capabilities: ['budget_check', 'cost_analysis', 'optimization', 'policy'],
    provider: 'DEMO', // Futuro: JOULE Compute Governor
    status: 'available',
    costPerOperation: 5,
  },
};

// ============================================================
// CAPACIDADES POR ROL
// ============================================================

export const CAPABILITIES_BY_ROLE: Record<AgentRole, string[]> = {
  researcher: ['search', 'analyze', 'summarize', 'extract', 'research'],
  architect: ['design', 'plan', 'dependency_analysis', 'structure', 'architect'],
  builder: ['build', 'generate', 'transform', 'compile', 'construct'],
  verifier: ['verify', 'validate', 'test', 'audit', 'check'],
  documenter: ['document', 'record', 'report', 'evidence', 'write'],
  governor: ['budget_check', 'cost_analysis', 'optimization', 'policy', 'govern'],
};

// ============================================================
// FUNCIONES DE BÚSQUEDA
// ============================================================

/**
 * Encuentra el agente más adecuado para una capacidad requerida.
 */
export function findAgentForCapability(capability: string): Agent | null {
  const normalizedCapability = capability.toLowerCase();
  
  for (const role of Object.keys(CAPABILITIES_BY_ROLE) as AgentRole[]) {
    const capabilities = CAPABILITIES_BY_ROLE[role];
    if (capabilities.some(c => c.includes(normalizedCapability) || normalizedCapability.includes(c))) {
      return AGENTS[role];
    }
  }
  
  return null;
}

/**
 * Encuentra todos los agentes necesarios para un conjunto de requisitos.
 */
export function findAgentsForRequirements(requirements: string[]): Agent[] {
  const agentMap = new Map<string, Agent>();
  
  for (const requirement of requirements) {
    const agent = findAgentForCapability(requirement);
    if (agent) {
      agentMap.set(agent.id, agent);
    }
  }
  
  return Array.from(agentMap.values());
}

/**
 * Devuelve todos los agentes disponibles.
 */
export function getAllAgents(): Agent[] {
  return Object.values(AGENTS);
}

/**
 * Devuelve un agente por su ID.
 */
export function getAgentById(id: string): Agent | undefined {
  return Object.values(AGENTS).find(a => a.id === id);
}

/**
 * Devuelve agentes por su rol.
 */
export function getAgentsByRole(role: AgentRole): Agent {
  return AGENTS[role];
}
