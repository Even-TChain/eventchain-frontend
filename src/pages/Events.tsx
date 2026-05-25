import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import EventCard from '@/components/shared/EventCard';
import { mockEvents, EventStatus, getStatusLabel } from '@/lib/mockData';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Filter, Calendar, TrendingUp } from 'lucide-react';

const Events: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<EventStatus | 'all'>('all');

  const filteredEvents = mockEvents.filter(event => {
    const matchesSearch = event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || event.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const statusOptions: (EventStatus | 'all')[] = ['all', 'funding', 'active', 'claiming', 'completed'];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Explorar <span className="gradient-text">Eventos</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Descubre eventos en financiación y encuentra oportunidades de inversión
          </p>
        </div>
        <div className="glass-card p-4 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Buscar eventos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-background/50"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
              {statusOptions.map((status) => (
                <Button
                  key={status}
                  variant={statusFilter === status ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setStatusFilter(status)}
                  className="whitespace-nowrap"
                >
                  {status === 'all' ? 'Todos' : getStatusLabel(status)}
                </Button>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { icon: <TrendingUp className="w-5 h-5" />, value: filteredEvents.length, label: 'Eventos' },
            { icon: <Calendar className="w-5 h-5" />, value: mockEvents.filter(e => e.status === 'funding').length, label: 'En Financiación' },
            { icon: <Filter className="w-5 h-5" />, value: mockEvents.filter(e => e.status === 'active').length, label: 'Activos' },
            { icon: <TrendingUp className="w-5 h-5" />, value: mockEvents.filter(e => e.status === 'completed').length, label: 'Completados' },
          ].map((stat) => (
            <div key={stat.label} className="stat-card flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                {stat.icon}
              </div>
              <div>
                <p className="font-display font-bold text-xl">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
        {filteredEvents.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <div className="glass-card p-12 text-center">
            <p className="text-muted-foreground text-lg">
              No se encontraron eventos con los filtros seleccionados
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Events;