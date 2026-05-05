import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';
import EventCard from '@/components/shared/EventCard';
import { mockEvents } from '@/lib/mockData';
import { 
  ArrowRight, 
  Shield, 
  Eye, 
  Zap, 
  TrendingUp,
  AlertTriangle,
  Users,
  Building
} from 'lucide-react';

const Index: React.FC = () => {
  const featuredEvents = mockEvents.filter(e => e.status === 'funding').slice(0, 3);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-20" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm mb-8 animate-fade-in">
              <Zap className="w-4 h-4" />
              Financiación descentralizada de eventos
            </div>

            {/* Main heading */}
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '100ms' }}>
              Financia eventos.
              <br />
              <span className="gradient-text">Transparencia total.</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: '200ms' }}>
              Conectamos organizadores de eventos con inversores a través de blockchain. 
              Presupuestos públicos, avales bloqueados y distribución automática de ingresos.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '300ms' }}>
              <Link to="/events">
                <Button variant="neon" size="xl" className="w-full sm:w-auto">
                  Ver Eventos
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/connect">
                <Button variant="glass" size="xl" className="w-full sm:w-auto">
                  Crear Evento
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-16 animate-fade-in" style={{ animationDelay: '400ms' }}>
              {[
                { value: '$205K', label: 'Financiado' },
                { value: '12', label: 'Eventos activos' },
                { value: '847', label: 'Inversores' },
              ].map((stat) => (
                <div key={stat.label} className="stat-card">
                  <p className="font-display text-3xl font-bold gradient-text">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-primary rounded-full" />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold mb-4">¿Cómo funciona?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Un modelo transparente que beneficia a organizadores e inversores
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Organizer */}
            <div className="glass-card p-8 hover:border-primary/30 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6">
                <Building className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">Para Organizadores</h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-primary mt-0.5" />
                  <span>Completa KYC y bloquea un aval en stablecoins</span>
                </li>
                <li className="flex items-start gap-3">
                  <Eye className="w-5 h-5 text-primary mt-0.5" />
                  <span>Publica presupuesto detallado y transparente</span>
                </li>
                <li className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-primary mt-0.5" />
                  <span>Recibe financiación sin endeudarte</span>
                </li>
              </ul>
              <Link to="/connect" className="block mt-6">
                <Button variant="outline" className="w-full">
                  Crear mi evento
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>

            {/* Investor */}
            <div className="glass-card p-8 hover:border-secondary/30 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">Para Inversores</h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <Eye className="w-5 h-5 text-secondary mt-0.5" />
                  <span>Evalúa eventos con presupuestos 100% públicos</span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-secondary mt-0.5" />
                  <span>Aval del organizador protege tu inversión</span>
                </li>
                <li className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-secondary mt-0.5" />
                  <span>Participa proporcionalmente en los ingresos</span>
                </li>
              </ul>
              <Link to="/events" className="block mt-6">
                <Button variant="outline" className="w-full">
                  Explorar eventos
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Warning */}
      <section className="py-12 bg-destructive/5 border-y border-destructive/20">
        <div className="container mx-auto px-4">
          <div className="flex items-start gap-4 max-w-4xl mx-auto">
            <AlertTriangle className="w-8 h-8 text-destructive shrink-0 mt-1" />
            <div>
              <h3 className="font-display text-xl font-bold text-destructive mb-2">
                Advertencia de Riesgos
              </h3>
              <p className="text-muted-foreground">
                Invertir en eventos conlleva riesgos significativos. El éxito de un evento depende de 
                múltiples factores externos. No invertir más de lo que estés dispuesto a perder. 
                Esta plataforma <strong>no garantiza retornos</strong>. El aval del organizador 
                mitiga pero no elimina el riesgo. Lee los términos completos antes de invertir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-display text-4xl font-bold mb-2">Eventos en Financiación</h2>
              <p className="text-muted-foreground">Descubre oportunidades de inversión activas</p>
            </div>
            <Link to="/events">
              <Button variant="ghost" className="gap-2">
                Ver todos
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredEvents.length > 0 ? (
              featuredEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))
            ) : (
              mockEvents.slice(0, 3).map((event) => (
                <EventCard key={event.id} event={event} />
              ))
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              ¿Listo para empezar?
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Conecta tu wallet y forma parte del futuro de la financiación de eventos
            </p>
            <Link to="/connect">
              <Button variant="neon" size="xl" className="animate-pulse-glow">
                Conectar Wallet
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
