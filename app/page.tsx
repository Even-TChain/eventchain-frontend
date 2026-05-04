import { Button } from '@/components/ui/button';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CustodyExplainer } from '@/components/CustodyExplainer';
import { EventCard } from '@/components/EventCard';
import { EscrowCard } from '@/components/EscrowCard';
import { ArrowRight, Shield, Zap, Eye, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

const featuredEvents = [
  {
    id: '1',
    title: 'Festival de Música Electrónica 2025',
    date: '15 Mar 2025',
    location: 'Madrid, España',
    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&auto=format',
    investmentGoal: 50000,
    currentInvestment: 35000,
    expectedReturn: 18,
    investors: 124,
  },
  {
    id: '2',
    title: 'Conferencia Tech Summit',
    date: '22 Abr 2025',
    location: 'Barcelona, España',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format',
    investmentGoal: 30000,
    currentInvestment: 28500,
    expectedReturn: 12,
    investors: 89,
  },
  {
    id: '3',
    title: 'Exposición Arte Digital NFT',
    date: '10 May 2025',
    location: 'Valencia, España',
    image: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=800&auto=format',
    investmentGoal: 25000,
    currentInvestment: 12000,
    expectedReturn: 22,
    investors: 56,
  },
];

const features = [
  {
    icon: Shield,
    title: 'Custodia On-Chain',
    description: 'Tus fondos quedan en smart contracts verificables, no en nuestra plataforma.',
  },
  {
    icon: Lock,
    title: 'Aval del Organizador',
    description: 'El organizador deposita un aval que se libera solo si cumple sus compromisos.',
  },
  {
    icon: Eye,
    title: 'Transparencia Total',
    description: 'Cada transacción y estado del fondo es visible públicamente en blockchain.',
  },
  {
    icon: Zap,
    title: 'Ejecución Automática',
    description: 'Las reglas del contrato se ejecutan automáticamente sin intervención humana.',
  },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-1/4 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
          <div className="absolute bottom-20 right-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm text-accent mb-6 animate-fade-in">
              <Shield className="h-4 w-4" />
              Inversión en eventos con custodia blockchain
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              Eventos reales.{' '}
              <span className="gradient-text">Inversión transparente.</span>{' '}
              Reglas en blockchain.
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
              Invierte en eventos verificados con la seguridad de smart contracts. 
              Tus fondos están protegidos por código, no por promesas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button variant="hero" size="xl" asChild>
                <Link to="/eventos">
                  Explorar eventos
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <a href="#como-funciona">
                  ¿Cómo funciona?
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="rounded-2xl border border-border bg-card p-6 hover:border-accent/50 hover:shadow-lg transition-all"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 mb-4">
                  <feature.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custody Explainer */}
      <div id="como-funciona">
        <CustodyExplainer />
      </div>

      {/* Example Escrow */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Ejemplo de Fondo en Custodia
              </h2>
              <p className="text-muted-foreground">
                Así se visualiza un fondo de evento activo en EventChain
              </p>
            </div>
            <EscrowCard
              investorFunds={35000}
              organizerBond={10000}
              pendingReturns={6300}
              contractAddress="0x1a2b...9c8d"
              status="active"
            />
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">
                Eventos destacados
              </h2>
              <p className="text-muted-foreground">
                Oportunidades de inversión verificadas y con custodia on-chain
              </p>
            </div>
            <Button variant="outline" asChild className="hidden sm:flex">
              <Link to="/eventos">
                Ver todos
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredEvents.map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Button variant="outline" asChild>
              <Link to="/eventos">
                Ver todos los eventos
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Invierte con confianza en eventos reales
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Conecta tu wallet y explora oportunidades de inversión respaldadas 
              por smart contracts auditados.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/eventos">
                Comenzar ahora
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
