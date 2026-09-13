import React, { useState } from 'react';
import { Project } from '../types';
import { X, ExternalLink, Terminal, Play, RotateCcw, CheckCircle2, AlertTriangle, ShieldCheck } from 'lucide-react';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#fef9ed] text-[#1d1c15] shadow-2xl border-2 border-black flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#1c1b1b] text-white p-5 sm:p-7 md:p-8 flex items-start justify-between border-b-2 border-black">
          <div>
            <div className="flex items-center gap-3 text-[#ff8255] font-mono-code text-xs font-bold mb-2">
              <span>{project.num}</span>
              <span>•</span>
              <span className="text-[#cac6c4]">{project.category}</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
              {project.title}
            </h2>
            <p className="font-inter text-xs sm:text-sm text-[#cac6c4] mt-2 max-w-2xl leading-relaxed">
              {project.deepDive.tagline}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-10 h-10 rounded-none bg-white/10 hover:bg-[#a23e16] text-white flex items-center justify-center transition-colors shrink-0 min-w-[40px] min-h-[40px]"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-4 sm:p-7 md:p-8 space-y-6 sm:space-y-8">
          {/* Architecture Summary */}
          <div className="bg-[#f2eee2] p-4 sm:p-6 border-l-4 border-[#a23e16]">
            <h4 className="font-mono-code text-xs uppercase text-[#a23e16] font-bold tracking-wider mb-2">
              // ARCHITECTURAL BLUEPRINT
            </h4>
            <p className="font-inter text-sm sm:text-base text-[#1d1c15] leading-relaxed">
              {project.deepDive.architecture}
            </p>
          </div>

          {/* Interactive Simulation Panel */}
          {project.deepDive.interactiveType && (
            <div className="border border-black/15 bg-white p-4 sm:p-5 shadow-xs">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-black/10">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#a23e16] animate-pulse"></span>
                  <span className="font-mono-code text-[11px] sm:text-xs font-bold text-[#1d1c15] uppercase tracking-wider">
                    INTERACTIVE TELEMETRY LAB // {project.title.toUpperCase()}
                  </span>
                </div>
                <span className="font-mono-code text-[10px] sm:text-[11px] text-[#444748]">STATUS: LIVE</span>
              </div>

              {project.deepDive.interactiveType === 'terminal' && <TerminalSimulator />}
              {project.deepDive.interactiveType === 'vision' && <VisionSimulator />}
              {project.deepDive.interactiveType === 'analytics' && <AnalyticsSimulator />}
              {project.deepDive.interactiveType === 'network' && <NetworkSimulator />}
              {project.deepDive.interactiveType === 'nutrition' && <NutritionSimulator />}
              {project.deepDive.interactiveType === 'kanban' && <KanbanSimulator />}
            </div>
          )}

          {/* Key Engineering Highlights */}
          <div>
            <h4 className="font-display text-lg sm:text-xl font-bold text-black mb-3 sm:mb-4">
              Key Engineering Milestones
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.deepDive.highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="p-3.5 sm:p-4 bg-[#f8f3e7] border border-black/5 flex items-start gap-3"
                >
                  <span className="font-mono-code text-xs text-[#a23e16] font-bold mt-0.5">
                    0{index + 1}
                  </span>
                  <span className="font-inter text-xs sm:text-sm text-[#1d1c15] leading-relaxed">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Specifications Matrix */}
          <div>
            <h4 className="font-display text-lg sm:text-xl font-bold text-black mb-3 sm:mb-4">
              Component &amp; Tool Stack
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              {project.deepDive.stackDetails.map((group) => (
                <div key={group.category} className="p-3.5 sm:p-4 bg-[#f2eee2] border border-black/5">
                  <div className="font-mono-code text-[11px] uppercase tracking-wider text-[#a23e16] font-bold mb-2">
                    {group.category}
                  </div>
                  <ul className="space-y-1 font-mono-code text-xs text-[#1d1c15]">
                    {group.tools.map((tool) => (
                      <li key={tool} className="flex items-center gap-1.5">
                        <span className="text-[#858383]">•</span> {tool}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Actions */}
          <div className="pt-6 border-t border-black/10 flex flex-wrap items-center justify-between gap-4">
            <div className="font-mono-code text-xs text-[#444748]">
              Role: <strong className="text-black">{project.deepDive.role}</strong> • Period:{' '}
              <strong className="text-black">{project.deepDive.period}</strong>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              {project.liveUrl && !project.hideWebsiteButton && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-2.5 bg-[#a23e16] text-white hover:bg-black font-inter text-xs uppercase font-bold tracking-wider transition-colors flex items-center justify-center gap-2 min-h-[42px]"
                >
                  <span>VISIT LIVE DEPLOYMENT</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              {project.linkUrl && (
                <a
                  href={project.linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-2.5 bg-black text-white hover:bg-[#a23e16] font-inter text-xs uppercase font-bold tracking-wider transition-colors flex items-center justify-center gap-2 min-h-[42px]"
                >
                  <span>OPEN GITHUB REPO</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 bg-[#e7e2d7] hover:bg-[#dedace] text-black font-inter text-xs uppercase font-bold tracking-wider transition-colors"
              >
                DISMISS
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Interactive Terminal Simulator for Encephalon OS
const TerminalSimulator: React.FC = () => {
  const [history, setHistory] = useState<string[]>([
    'Encephalon OS Kernel v0.9.1-tui (arm64/x86_64)',
    'Type "help" for a list of internal commands.',
  ]);
  const [inputVal, setInputVal] = useState('');

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim();
    if (!cmd) return;

    let response = '';
    switch (cmd.toLowerCase()) {
      case 'help':
        response = 'Commands: help, uname, ps, sysinfo, mem, ls, clear';
        break;
      case 'uname':
        response = 'Linux encephalon-core 5.15.0 #1 PREEMPT TUI-20MB x86_64 GNU/Linux';
        break;
      case 'ps':
        response = 'PID  TTY      TIME     CMD\n  1  tty1     00:00:01 encephalon_init\n 42  tty1     00:00:00 tui_curses\n 89  tty1     00:00:00 sqlite_wal';
        break;
      case 'sysinfo':
        response = 'OS: Encephalon OS | RAM Allocated: 18.4MB / 20.0MB | Storage: 4.2MB SQLite WAL';
        break;
      case 'mem':
        response = 'Memory: Total=20MB, Used=18.4MB, Free=1.6MB, Buffer Cache=1.2MB';
        break;
      case 'ls':
        response = 'bin/   dev/   etc/   proc/   sys/   var/   encephalon.db   shell.py';
        break;
      case 'clear':
        setHistory([]);
        setInputVal('');
        return;
      default:
        response = `encephalon: command not found: ${cmd}. Type "help"`;
    }

    setHistory((prev) => [...prev, `encephalon@tui:~$ ${cmd}`, response]);
    setInputVal('');
  };

  return (
    <div className="bg-[#141414] text-[#dedace] p-4 font-mono-code text-xs rounded-none border border-black space-y-2">
      <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[11px] text-[#858383]">
        <div className="flex items-center gap-2">
          <Terminal className="w-3.5 h-3.5 text-[#ff8255]" />
          <span>Encephalon OS TUI Shell — Virtual Console</span>
        </div>
        <span>RAM: 18.4MB</span>
      </div>

      <div className="max-h-48 overflow-y-auto space-y-1 select-text">
        {history.map((line, idx) => (
          <pre key={idx} className="whitespace-pre-wrap font-mono-code text-xs leading-tight">
            {line}
          </pre>
        ))}
      </div>

      <form onSubmit={handleCommand} className="flex items-center gap-2 pt-2 border-t border-white/10">
        <span className="text-[#ff8255]">buddyos@tui:~$</span>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="type 'help' or 'sysinfo'..."
          className="flex-1 bg-transparent border-none outline-none text-white font-mono-code text-xs focus:ring-0 placeholder:text-white/30"
        />
        <button
          type="submit"
          className="px-2 py-0.5 bg-[#a23e16] text-white text-[10px] uppercase font-bold"
        >
          EXEC
        </button>
      </form>
    </div>
  );
};

// Interactive Vision defect inspection simulator
const VisionSimulator: React.FC = () => {
  const [selectedSample, setSelectedSample] = useState<'pcb' | 'metal' | 'bearing'>('metal');
  const [threshold, setThreshold] = useState(78);
  const [isInspecting, setIsInspecting] = useState(false);
  const [inspected, setInspected] = useState(true);

  const runInspect = () => {
    setIsInspecting(true);
    setTimeout(() => {
      setIsInspecting(false);
      setInspected(true);
    }, 400);
  };

  const sampleData = {
    metal: {
      name: 'Cold-Rolled Sheet Metal (Batch #A90)',
      defect: 'Surface Micro-Crack [Length: 2.3mm]',
      confidence: '97.4%',
      severity: 'CRITICAL',
      coords: 'x: 184, y: 112, w: 68, h: 24',
    },
    pcb: {
      name: 'SMD Solder Bridge (Motherboard Rev 3)',
      defect: 'Bridge Void [Pin 14-15]',
      confidence: '95.1%',
      severity: 'MODERATE',
      coords: 'x: 92, y: 140, w: 32, h: 28',
    },
    bearing: {
      name: 'High-Tensile Ball Bearing Housing',
      defect: 'Pitting Corrosion [Area: 1.8mm²]',
      confidence: '98.2%',
      severity: 'WARNING',
      coords: 'x: 148, y: 88, w: 44, h: 44',
    },
  };

  const current = sampleData[selectedSample];

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="font-mono-code text-xs font-bold text-[#444748]">TEST SPECIMEN:</span>
          {(['metal', 'pcb', 'bearing'] as const).map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => {
                setSelectedSample(s);
                runInspect();
              }}
              className={`px-3 py-1 font-mono-code text-xs uppercase font-bold transition-colors ${
                selectedSample === s ? 'bg-[#a23e16] text-white' : 'bg-[#e7e2d7] text-black'
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <span className="font-mono-code text-xs text-[#444748]">Threshold: {threshold}%</span>
          <input
            type="range"
            min="50"
            max="95"
            value={threshold}
            onChange={(e) => setThreshold(Number(e.target.value))}
            className="w-24 accent-[#a23e16]"
          />
          <button
            type="button"
            onClick={runInspect}
            disabled={isInspecting}
            className="px-3 py-1 bg-black hover:bg-[#a23e16] text-white font-mono-code text-xs font-bold uppercase transition-colors"
          >
            {isInspecting ? 'ANALYZING...' : 'RE-SCAN'}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center bg-[#141414] p-4 text-[#dedace]">
        {/* Synthetic Frame Viewport */}
        <div className="md:col-span-6 relative aspect-video bg-[#1e1e1e] border border-white/10 flex items-center justify-center overflow-hidden">
          {/* Simulated Industrial Surface Pattern */}
          <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#ff8255_1px,transparent_1px)] [background-size:12px_12px]"></div>

          {/* Bounding box indicator */}
          <div className="relative z-10 w-32 h-20 border-2 border-[#ff8255] bg-[#ff8255]/10 flex flex-col justify-between p-1 animate-pulse">
            <span className="font-mono-code text-[9px] bg-[#ff8255] text-black px-1 font-bold w-fit">
              DEFECT DETECTED {current.confidence}
            </span>
            <span className="font-mono-code text-[9px] text-[#ff8255] self-end">
              {current.coords}
            </span>
          </div>

          <div className="absolute bottom-2 left-2 font-mono-code text-[10px] text-white/50">
            FRAME: 1080P // INFERENCE: 34MS // PYTORCH
          </div>
        </div>

        {/* Analytical Diagnostics Output */}
        <div className="md:col-span-6 space-y-2 font-mono-code text-xs">
          <div className="text-[#858383] uppercase text-[10px]">INSPECTION DIAGNOSTIC REPORT</div>
          <div className="text-white font-bold">{current.name}</div>
          <div className="flex items-center gap-2">
            <span className="text-[#858383]">Anomaly:</span>
            <span className="text-[#ff8255] font-semibold">{current.defect}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#858383]">Severity:</span>
            <span
              className={`px-1.5 py-0.5 font-bold text-[10px] ${
                current.severity === 'CRITICAL'
                  ? 'bg-red-500 text-white'
                  : 'bg-amber-500 text-black'
              }`}
            >
              {current.severity}
            </span>
            <span className="text-[#858383]">Score: {current.confidence}</span>
          </div>
          <div className="pt-2 text-[11px] text-[#868381] border-t border-white/10">
            OpenCV morphological filter passed. QA analytical report auto-dispatched to factory supervisor ledger.
          </div>
        </div>
      </div>
    </div>
  );
};

// Interactive Analytics Simulator for Byzlytics
const AnalyticsSimulator: React.FC = () => {
  const [timeframe, setTimeframe] = useState<'30D' | '90D' | '1Y'>('30D');

  return (
    <div className="space-y-4 font-mono-code text-xs">
      <div className="flex items-center justify-between">
        <span className="text-[#444748]">KPI FORECASTING &amp; AGENTIC SYNTHESIS</span>
        <div className="flex gap-2">
          {(['30D', '90D', '1Y'] as const).map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTimeframe(t)}
              className={`px-2.5 py-1 font-bold ${
                timeframe === t ? 'bg-black text-white' : 'bg-[#e7e2d7] text-black'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <div className="p-3 bg-[#f8f3e7] border border-black/5">
          <div className="text-[#444748] text-[10px]">INVENTORY TURNOVER</div>
          <div className="text-xl font-bold font-syne text-black">6.4x</div>
          <div className="text-[#a23e16] text-[10px] font-bold">+18.2% vs target</div>
        </div>
        <div className="p-3 bg-[#f8f3e7] border border-black/5">
          <div className="text-[#444748] text-[10px]">STOCKOUT PROBABILITY</div>
          <div className="text-xl font-bold font-syne text-black">1.2%</div>
          <div className="text-green-700 text-[10px] font-bold">-4.1% reduction</div>
        </div>
        <div className="p-3 bg-[#f8f3e7] border border-black/5">
          <div className="text-[#444748] text-[10px]">AI REPORT CONFIDENCE</div>
          <div className="text-xl font-bold font-syne text-[#a23e16]">99.4%</div>
          <div className="text-[#444748] text-[10px]">Gemini 2.5 Flash</div>
        </div>
      </div>

      <div className="p-3 bg-[#1c1b1b] text-white border border-black/10">
        <span className="text-[#ff8255] text-[10px] block mb-1 font-bold">
          SYNTHESIZED EXECUTIVE DIGEST:
        </span>
        <p className="font-inter text-xs text-[#dedace] leading-relaxed">
          "Regional safety stock levels for SKU-402 can be reduced by 14% without exceeding 2%
          stockout tolerance. Projected annual holding cost savings: $42,800."
        </p>
      </div>
    </div>
  );
};

// Interactive Network Simulator for SCCL
const NetworkSimulator: React.FC = () => {
  const vlans = [
    { id: '10', name: 'Admin & ERP Backbone', subnet: '10.20.10.0/24', status: 'ONLINE', ping: '2ms' },
    { id: '20', name: 'Open-Cast Mine Telemetry', subnet: '10.20.20.0/24', status: 'ONLINE', ping: '5ms' },
    { id: '30', name: 'Environmental Gas Sensors', subnet: '10.20.30.0/24', status: 'ONLINE', ping: '4ms' },
    { id: '40', name: 'Heavy Machinery GPS Fleet', subnet: '10.20.40.0/24', status: 'ONLINE', ping: '8ms' },
  ];

  return (
    <div className="space-y-3 font-mono-code text-xs">
      <div className="text-[#444748] font-bold">SCCL INDUSTRIAL ENTERPRISE TOPOLOGY MATRIX</div>
      <div className="divide-y divide-black/10 border border-black/10 bg-[#f8f3e7]">
        {vlans.map((v) => (
          <div key={v.id} className="p-2.5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="px-1.5 py-0.5 bg-[#141414] text-white text-[10px] font-bold">
                VLAN {v.id}
              </span>
              <span className="font-bold text-black">{v.name}</span>
            </div>
            <div className="flex items-center gap-4 text-[#444748] text-[11px]">
              <span>{v.subnet}</span>
              <span className="text-green-700 font-bold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-600 animate-pulse"></span>
                {v.status} ({v.ping})
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Interactive Nutrition Simulator for NutriMate
const NutritionSimulator: React.FC = () => {
  const [selectedMeal, setSelectedMeal] = useState('Hostel Thali (Dal + Roti + Rice + Sabzi)');
  return (
    <div className="space-y-3 font-mono-code text-xs">
      <div className="flex items-center justify-between">
        <span className="text-[#444748] font-bold">HOSTEL MEAL MACRO CALCULATOR</span>
        <span className="text-[#a23e16]">Open Food Facts API Linked</span>
      </div>
      <div className="p-3 bg-[#f8f3e7] border border-black/10 space-y-2">
        <div className="font-bold text-black">{selectedMeal}</div>
        <div className="grid grid-cols-4 gap-2 text-center pt-2">
          <div className="p-2 bg-white border border-black/5">
            <div className="text-[10px] text-[#858383]">CALORIES</div>
            <div className="font-bold text-sm text-black">620 kcal</div>
          </div>
          <div className="p-2 bg-white border border-black/5">
            <div className="text-[10px] text-[#858383]">PROTEIN</div>
            <div className="font-bold text-sm text-[#a23e16]">22g</div>
          </div>
          <div className="p-2 bg-white border border-black/5">
            <div className="text-[10px] text-[#858383]">CARBS</div>
            <div className="font-bold text-sm text-black">88g</div>
          </div>
          <div className="p-2 bg-white border border-black/5">
            <div className="text-[10px] text-[#858383]">FATS</div>
            <div className="font-bold text-sm text-black">16g</div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Interactive Kanban Simulator for Eisenhower Tasks
const KanbanSimulator: React.FC = () => {
  const [tasks, setTasks] = useState([
    { id: '1', title: 'Tune YOLOv8 model hyperparameters', quadrant: 'Urgent & Important' },
    { id: '2', title: 'Write FastAPI test suites for Byzlytics', quadrant: 'Important / Not Urgent' },
    { id: '3', title: 'Audit Singareni switch fiber log', quadrant: 'Urgent / Not Important' },
  ]);

  return (
    <div className="space-y-3 font-mono-code text-xs">
      <div className="text-[#444748] font-bold">REAL-TIME EISENHOWER SYNCHRONIZATION</div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {tasks.map((task) => (
          <div key={task.id} className="p-3 bg-[#f8f3e7] border border-black/10 flex flex-col justify-between">
            <div className="font-inter text-xs text-black font-semibold mb-2">{task.title}</div>
            <span className="text-[10px] px-2 py-0.5 bg-[#a23e16] text-white font-bold w-fit">
              {task.quadrant}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
