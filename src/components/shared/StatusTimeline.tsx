import React from 'react';
import { Check, Clock, CircleDollarSign, Ticket, FileCheck, PartyPopper } from 'lucide-react';
import { EventStatus } from '@/lib/mockData';

interface TimelineStep {
  id: EventStatus | 'created';
  label: string;
  icon: React.ReactNode;
  description: string;
}

const steps: TimelineStep[] = [
  { 
    id: 'created', 
    label: 'Creado', 
    icon: <FileCheck className="w-4 h-4" />,
    description: 'Evento publicado y aval bloqueado'
  },
  { 
    id: 'funding', 
    label: 'Financiación', 
    icon: <CircleDollarSign className="w-4 h-4" />,
    description: 'Abierto a inversión'
  },
  { 
    id: 'active', 
    label: 'Activo', 
    icon: <Ticket className="w-4 h-4" />,
    description: 'Ventas en curso'
  },
  { 
    id: 'claiming', 
    label: 'Reclamación', 
    icon: <Clock className="w-4 h-4" />,
    description: 'Distribución de beneficios'
  },
  { 
    id: 'completed', 
    label: 'Completado', 
    icon: <PartyPopper className="w-4 h-4" />,
    description: 'Evento finalizado'
  },
];

const statusOrder: Record<EventStatus | 'created', number> = {
  created: 0,
  funding: 1,
  active: 2,
  claiming: 3,
  completed: 4,
  failed: 4,
};

interface StatusTimelineProps {
  currentStatus: EventStatus;
}

const StatusTimeline: React.FC<StatusTimelineProps> = ({ currentStatus }) => {
  const currentIndex = statusOrder[currentStatus];

  return (
    <div className="relative">
      {/* Progress line */}
      <div className="absolute top-5 left-5 right-5 h-0.5 bg-border" />
      <div 
        className="absolute top-5 left-5 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-500"
        style={{ 
          width: `calc(${(currentIndex / (steps.length - 1)) * 100}% - 20px)` 
        }}
      />

      {/* Steps */}
      <div className="relative flex justify-between">
        {steps.map((step, index) => {
          const isCompleted = index < currentIndex;
          const isCurrent = index === currentIndex;
          const isPending = index > currentIndex;

          return (
            <div key={step.id} className="flex flex-col items-center">
              <div 
                className={`
                  w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300
                  ${isCompleted ? 'bg-primary text-primary-foreground' : ''}
                  ${isCurrent ? 'bg-primary text-primary-foreground ring-4 ring-primary/30 animate-pulse-glow' : ''}
                  ${isPending ? 'bg-muted text-muted-foreground' : ''}
                `}
              >
                {isCompleted ? <Check className="w-4 h-4" /> : step.icon}
              </div>
              <span className={`
                mt-2 text-sm font-medium
                ${isCurrent ? 'text-primary' : ''}
                ${isPending ? 'text-muted-foreground' : ''}
              `}>
                {step.label}
              </span>
              <span className="text-xs text-muted-foreground text-center max-w-[100px] mt-1 hidden md:block">
                {step.description}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StatusTimeline;
