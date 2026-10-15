/**
 * PARTITURA VIVA — INTERFAZ PRINCIPAL
 * 
 * Visualización del sistema de orquestación contrapuntística.
 * Muestra la ejecución de agentes como una partitura polifónica.
 */

import { useState, useEffect } from 'react';
import { CounterpointOrchestrator } from '../counterpoint/orchestrator';
import { DEMO_TASKS, MOTIFS } from '../counterpoint/scenarios';
import { Task, Workflow, ExecutionConfig, ExecutionState, Agent } from '../counterpoint/types';
import { getAllAgents } from '../counterpoint/agents';

// ============================================================
// COMPONENTE PRINCIPAL
// ============================================================

export default function PartituraViva() {
  const [orchestrator] = useState(() => new CounterpointOrchestrator());
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [workflow, setWorkflow] = useState<Workflow | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [showMirrorMode, setShowMirrorMode] = useState(true);
  const [showCrabMode, setShowCrabMode] = useState(false);
  const [budget, setBudget] = useState({
    maxCost: 100,
    maxTime: 30000,
    maxConcurrentAgents: 3,
    currentCost: 0,
    currentTime: 0,
    currentConcurrentAgents: 0,
  });

  const allAgents = getAllAgents();

  // ============================================================
  // CONTROLES DE EJECUCIÓN
  // ============================================================

  const handleStart = async () => {
    if (!selectedTask) return;

    const config: ExecutionConfig = {
      policy: 'selective',
      budget: { ...budget },
      enableMirrorMode: showMirrorMode,
      enableCrabMode: showCrabMode,
    };

    try {
      const newWorkflow = orchestrator.createWorkflow(selectedTask, config);
      setWorkflow(newWorkflow);
      setIsRunning(true);

      const result = await orchestrator.executeWorkflow(newWorkflow.id, config);
      console.log('Resultado:', result);
      
      setBudget(config.budget);
      setIsRunning(false);
    } catch (error) {
      console.error('Error en ejecución:', error);
      setIsRunning(false);
    }
  };

  const handlePause = () => {
    if (!workflow) return;
    
    if (isPaused) {
      orchestrator.resumeWorkflow(workflow.id);
      setIsPaused(false);
    } else {
      orchestrator.pauseWorkflow(workflow.id);
      setIsPaused(true);
    }
  };

  const handleCancel = () => {
    if (workflow) {
      orchestrator.cancelWorkflow(workflow.id);
      setIsRunning(false);
      setIsPaused(false);
    }
  };

  const handleReset = () => {
    setWorkflow(null);
    setSelectedTask(null);
    setIsRunning(false);
    setIsPaused(false);
    setBudget({
      maxCost: 100,
      maxTime: 30000,
      maxConcurrentAgents: 3,
      currentCost: 0,
      currentTime: 0,
      currentConcurrentAgents: 0,
    });
  };

  const handleExport = () => {
    if (!workflow) return;

    const data = {
      workflow,
      events: orchestrator.getEvents(),
      provenance: orchestrator.getProvenanceGraph(workflow.id),
      silentAgents: orchestrator.getSilentAgents(workflow.id),
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `partitura-viva-${workflow.id}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // ============================================================
  // RENDERIZADO
  // ============================================================

  return (
    <section id="partitura-viva" className="py-20 md:py-32" style={{ backgroundColor: 'var(--andalusia-bg)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center mb-12">
          <span className="font-semibold text-sm tracking-wider uppercase" style={{ color: 'var(--andalusia-green)' }}>
            Consola Empresarial
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4" style={{ color: 'var(--andalusia-text)' }}>
            Partitura Viva
          </h2>
          <p className="max-w-3xl mx-auto text-lg leading-relaxed" style={{ color: 'var(--andalusia-text-secondary)' }}>
            Cada agente tiene una voz. Cada intervención tiene su momento.
            <br />
            Cada silencio evita trabajo innecesario. La armonía nace de la coordinación.
          </p>
        </div>

        {/* Aviso de demostración */}
        <div className="mb-8 p-4 rounded-lg" style={{ backgroundColor: 'var(--andalusia-surface)', border: '2px solid var(--andalusia-green)' }}>
          <p className="text-sm font-semibold mb-2" style={{ color: 'var(--andalusia-green)' }}>
            ⚙️ DEMOSTRACIÓN DETERMINISTA
          </p>
          <p className="text-sm" style={{ color: 'var(--andalusia-text-secondary)' }}>
            Esta es una demostración del sistema de orquestación. Los agentes son simulaciones locales, no modelos de IA reales.
            Las integraciones con REA y JOULE están pendientes de implementación.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Panel izquierdo: Configuración */}
          <div className="lg:col-span-1 space-y-6">
            {/* Selección de tarea */}
            <div className="andalusia-card p-6">
              <h3 className="font-semibold text-lg mb-4" style={{ color: 'var(--andalusia-text)' }}>
                1. Seleccionar Tarea
              </h3>
              <div className="space-y-3">
                {DEMO_TASKS.map(task => (
                  <button
                    key={task.id}
                    onClick={() => setSelectedTask(task)}
                    className={`w-full text-left p-3 rounded-lg transition-all ${
                      selectedTask?.id === task.id
                        ? 'ring-2'
                        : 'hover:bg-opacity-50'
                    }`}
                    style={{
                      backgroundColor: selectedTask?.id === task.id ? 'var(--andalusia-green)' : 'var(--andalusia-surface)',
                      color: selectedTask?.id === task.id ? 'white' : 'var(--andalusia-text)',
                    }}
                  >
                    <p className="font-semibold text-sm">{task.title}</p>
                    <p className="text-xs mt-1 opacity-75">{task.description}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Configuración de presupuesto */}
            <div className="andalusia-card p-6">
              <h3 className="font-semibold text-lg mb-4" style={{ color: 'var(--andalusia-text)' }}>
                2. Presupuesto
              </h3>
              <div className="space-y-3">
                <div>
                  <label className="text-sm font-medium" style={{ color: 'var(--andalusia-text)' }}>
                    Coste máximo: {budget.maxCost}
                  </label>
                  <input
                    type="range"
                    min="50"
                    max="200"
                    value={budget.maxCost}
                    onChange={(e) => setBudget({ ...budget, maxCost: Number(e.target.value) })}
                    className="w-full mt-1"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium" style={{ color: 'var(--andalusia-text)' }}>
                    Tiempo máximo: {budget.maxTime / 1000}s
                  </label>
                  <input
                    type="range"
                    min="10000"
                    max="60000"
                    step="5000"
                    value={budget.maxTime}
                    onChange={(e) => setBudget({ ...budget, maxTime: Number(e.target.value) })}
                    className="w-full mt-1"
                  />
                </div>
              </div>
            </div>

            {/* Modos especiales */}
            <div className="andalusia-card p-6">
              <h3 className="font-semibold text-lg mb-4" style={{ color: 'var(--andalusia-text)' }}>
                3. Modos Especiales
              </h3>
              <div className="space-y-3">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={showMirrorMode}
                    onChange={(e) => setShowMirrorMode(e.target.checked)}
                    className="w-4 h-4"
                  />
                  <span className="text-sm" style={{ color: 'var(--andalusia-text)' }}>
                    Modo Espejo (verificación inversa)
                  </span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={showCrabMode}
                    onChange={(e) => setShowCrabMode(e.target.checked)}
                    className="w-4 h-4"
                  />
                  <span className="text-sm" style={{ color: 'var(--andalusia-text)' }}>
                    Modo Cangrejo (trazabilidad retrógrada)
                  </span>
                </label>
              </div>
            </div>

            {/* Controles */}
            <div className="andalusia-card p-6">
              <h3 className="font-semibold text-lg mb-4" style={{ color: 'var(--andalusia-text)' }}>
                4. Controles
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={handleStart}
                  disabled={!selectedTask || isRunning}
                  className="px-4 py-2 rounded-lg font-semibold text-sm transition-all disabled:opacity-50"
                  style={{ backgroundColor: 'var(--andalusia-green)', color: 'white' }}
                >
                  ▶ Iniciar
                </button>
                <button
                  onClick={handlePause}
                  disabled={!isRunning}
                  className="px-4 py-2 rounded-lg font-semibold text-sm transition-all disabled:opacity-50"
                  style={{ backgroundColor: 'var(--andalusia-border)', color: 'var(--andalusia-text)' }}
                >
                  {isPaused ? '▶ Reanudar' : '⏸ Pausar'}
                </button>
                <button
                  onClick={handleCancel}
                  disabled={!isRunning}
                  className="px-4 py-2 rounded-lg font-semibold text-sm transition-all disabled:opacity-50"
                  style={{ backgroundColor: '#dc2626', color: 'white' }}
                >
                  ⏹ Cancelar
                </button>
                <button
                  onClick={handleReset}
                  className="px-4 py-2 rounded-lg font-semibold text-sm transition-all"
                  style={{ backgroundColor: 'var(--andalusia-border)', color: 'var(--andalusia-text)' }}
                >
                  🔄 Reiniciar
                </button>
                <button
                  onClick={handleExport}
                  disabled={!workflow}
                  className="col-span-2 px-4 py-2 rounded-lg font-semibold text-sm transition-all disabled:opacity-50"
                  style={{ backgroundColor: 'var(--andalusia-green)', color: 'white' }}
                >
                  📥 Exportar JSON
                </button>
              </div>
            </div>
          </div>

          {/* Panel central: Partitura visual */}
          <div className="lg:col-span-2">
            <div className="andalusia-card p-6 min-h-[600px]">
              <h3 className="font-semibold text-lg mb-6" style={{ color: 'var(--andalusia-text)' }}>
                Partitura de Ejecución
              </h3>

              {!workflow ? (
                <div className="flex items-center justify-center h-96">
                  <p className="text-center" style={{ color: 'var(--andalusia-text-tertiary)' }}>
                    Selecciona una tarea y pulsa "Iniciar" para ver la partitura
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {/* Agentes como voces */}
                  {allAgents.map((agent, index) => {
                    const step = workflow.steps.find(s => s.agentId === agent.id);
                    const isActive = step?.status === 'RUNNING';
                    const isCompleted = step?.status === 'SUCCEEDED';
                    const isWaiting = step?.status === 'WAITING' || step?.status === 'PENDING';
                    const isSilent = !step;

                    return (
                      <div key={agent.id} className="flex items-center gap-4">
                        <div className="w-32 flex-shrink-0">
                          <p className="font-semibold text-sm" style={{ color: 'var(--andalusia-text)' }}>
                            Voz {index + 1}: {agent.name}
                          </p>
                          <p className="text-xs" style={{ color: 'var(--andalusia-text-tertiary)' }}>
                            {agent.role}
                          </p>
                        </div>

                        <div className="flex-1 h-12 rounded-lg relative overflow-hidden" style={{ backgroundColor: 'var(--andalusia-bg)' }}>
                          {isSilent ? (
                            <div className="absolute inset-0 flex items-center justify-center">
                              <span className="text-xs" style={{ color: 'var(--andalusia-text-tertiary)' }}>
                                Silencio (no necesario)
                              </span>
                            </div>
                          ) : isWaiting ? (
                            <div className="absolute inset-0 flex items-center px-4" style={{ backgroundColor: 'var(--andalusia-border)' }}>
                              <span className="text-xs font-medium" style={{ color: 'var(--andalusia-text)' }}>
                                Esperando...
                              </span>
                            </div>
                          ) : isActive ? (
                            <div className="absolute inset-0 flex items-center px-4 animate-pulse" style={{ backgroundColor: 'var(--andalusia-green)' }}>
                              <span className="text-xs font-medium text-white">
                                ▶ Ejecutando: {step?.action}
                              </span>
                            </div>
                          ) : isCompleted ? (
                            <div className="absolute inset-0 flex items-center px-4" style={{ backgroundColor: 'var(--andalusia-green)', opacity: 0.7 }}>
                              <span className="text-xs font-medium text-white">
                                ✓ Completado
                              </span>
                            </div>
                          ) : null}
                        </div>

                        {step?.cost && (
                          <div className="w-16 text-right">
                            <p className="text-xs font-medium" style={{ color: 'var(--andalusia-text)' }}>
                              {step.cost} u
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}

                  {/* Métricas */}
                  <div className="mt-8 pt-6 border-t" style={{ borderColor: 'var(--andalusia-border)' }}>
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <p className="text-xs" style={{ color: 'var(--andalusia-text-tertiary)' }}>Coste total</p>
                        <p className="text-2xl font-bold" style={{ color: 'var(--andalusia-green)' }}>
                          {workflow.totalCost} u
                        </p>
                      </div>
                      <div>
                        <p className="text-xs" style={{ color: 'var(--andalusia-text-tertiary)' }}>Tiempo total</p>
                        <p className="text-2xl font-bold" style={{ color: 'var(--andalusia-green)' }}>
                          {(workflow.totalTime / 1000).toFixed(1)}s
                        </p>
                      </div>
                      <div>
                        <p className="text-xs" style={{ color: 'var(--andalusia-text-tertiary)' }}>Agentes activos</p>
                        <p className="text-2xl font-bold" style={{ color: 'var(--andalusia-green)' }}>
                          {workflow.steps.filter(s => s.status === 'SUCCEEDED').length} / {allAgents.length}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Panel de Historial */}
                  <div className="mt-6 pt-6 border-t" style={{ borderColor: 'var(--andalusia-border)' }}>
                    <h4 className="font-semibold text-sm mb-3" style={{ color: 'var(--andalusia-text)' }}>
                      Historial de Ejecución
                    </h4>
                    <div className="space-y-2 max-h-48 overflow-y-auto">
                      {orchestrator.getWorkflowEvents(workflow.id).length === 0 ? (
                        <p className="text-xs" style={{ color: 'var(--andalusia-text-tertiary)' }}>
                          No hay eventos registrados
                        </p>
                      ) : (
                        orchestrator.getWorkflowEvents(workflow.id).map((event, i) => (
                          <div key={i} className="text-xs p-2 rounded" style={{ backgroundColor: 'var(--andalusia-bg)' }}>
                            <span className="font-mono" style={{ color: 'var(--andalusia-text-tertiary)' }}>
                              {event.timestamp.toLocaleTimeString()}
                            </span>
                            <span className="ml-2 font-medium" style={{ color: 'var(--andalusia-green)' }}>
                              [{event.type}]
                            </span>
                            <span className="ml-2" style={{ color: 'var(--andalusia-text)' }}>
                              {event.message}
                            </span>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
