import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Users, TrendingUp } from 'lucide-react';
import { Event, getStatusLabel, getStatusBgColor, formatCurrency } from '@/lib/mockData';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const fundingPercentage = (event.currentFunding / event.totalBudget) * 100;

  return (
    <Link to={`/events/${event.id}`}>
      <div className="glass-card overflow-hidden group hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_hsl(142_76%_52%/0.1)]">
        {/* Image placeholder with gradient overlay */}
        <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30" />
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-card to-transparent" />
          
          {/* Status badge */}
          <Badge 
            className={`absolute top-4 right-4 ${getStatusBgColor(event.status)} border`}
          >
            {getStatusLabel(event.status)}
          </Badge>
          
          {/* Event icon */}
          <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-card/80 backdrop-blur-sm flex items-center justify-center">
            <span className="text-2xl">🎧</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="font-display font-bold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-1">
            {event.name}
          </h3>
          
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {event.description}
          </p>

          {/* Meta info */}
          <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mb-4">
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {new Date(event.date).toLocaleDateString('es-ES', { 
                day: 'numeric', 
                month: 'short' 
              })}
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              {event.location.split(',')[0]}
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-3 h-3" />
              {event.expectedAttendees.toLocaleString()}
            </div>
          </div>

          {/* Funding progress */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Financiado</span>
              <span className="font-semibold">
                <span className="text-primary">{formatCurrency(event.currentFunding)}</span>
                <span className="text-muted-foreground"> / {formatCurrency(event.totalBudget)} USDC</span>
              </span>
            </div>
            <Progress value={fundingPercentage} className="h-2" />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>{fundingPercentage.toFixed(1)}% completado</span>
              <div className="flex items-center gap-1 text-primary">
                <TrendingUp className="w-3 h-3" />
                {event.investments.length} inversores
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
