import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import BudgetBreakdown from '@/components/shared/BudgetBreakdown';
import StatusTimeline from '@/components/shared/StatusTimeline';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  mockEvents, 
  formatCurrency, 
  formatAddress, 
  getStatusLabel, 
  getStatusBgColor 
} from '@/lib/mockData';
import { useWallet } from '@/contexts/WalletContext';
import { 
  Calendar, 
  MapPin, 
  Users, 
  Clock, 
  Shield, 
  Lock, 
  ExternalLink,
  Ticket,
  Wine,
  TrendingUp,
  AlertTriangle,
  Check,
  ArrowLeft
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const EventDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { isConnected } = useWallet();
  const [investAmount, setInvestAmount] = useState('');
  const [showInvestDialog, setShowInvestDialog] = useState(false);

  const event = mockEvents.find(e => e.id === id);

  if (!event) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="font-display text-3xl font-bold mb-4">Evento no encontrado</h1>
          <Link to="/events">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver a eventos
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const fundingPercentage = (event.currentFunding / event.totalBudget) * 100;
  const remainingFunding = event.totalBudget - event.currentFunding;
  const daysUntilDeadline = Math.max(0, Math.ceil(
    (new Date(event.fundingDeadline).getTime() - Date.now()) / (1000 * 60 * 60 * 24)
  ));

  const handleInvest = () => {
    // Mock investment
    setShowInvestDialog(false);
    setInvestAmount('');
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Back button */}
        <Link to="/events" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Volver a eventos
        </Link>

        {/* Header */}
        <div className="glass-card p-8 mb-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Event Image */}
            <div className="lg:w-1/3">
              <div className="relative aspect-[4/3] rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl">🎧</span>
                </div>
                <Badge 
                  className={`absolute top-4 right-4 ${getStatusBgColor(event.status)} border`}
                >
                  {getStatusLabel(event.status)}
                </Badge>
              </div>
            </div>

            {/* Event Info */}
            <div className="lg:w-2/3">
              <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">
                {event.name}
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                {event.description}
              </p>

              {/* Meta info */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span>{new Date(event.date).toLocaleDateString('es-ES', { 
                    day: 'numeric', 
                    month: 'long',
                    year: 'numeric'
                  })}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Users className="w-5 h-5 text-primary" />
                  <span>{event.expectedAttendees.toLocaleString()} esperados</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Shield className="w-5 h-5 text-primary" />
                  <span>Organizado por {event.organizerName}</span>
                </div>
              </div>

              {/* Collateral status */}
              <div className={`
                inline-flex items-center gap-2 px-4 py-2 rounded-lg
                ${event.collateralLocked 
                  ? 'bg-primary/10 text-primary border border-primary/30' 
                  : 'bg-warning/10 text-warning border border-warning/30'
                }
              `}>
                <Lock className="w-4 h-4" />
                <span className="font-medium">
                  Aval: {formatCurrency(event.collateralAmount)} {event.stablecoin}
                </span>
                {event.collateralLocked && <Check className="w-4 h-4" />}
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="glass-card p-8 mb-8">
          <h2 className="font-display text-xl font-bold mb-6">Estado del Evento</h2>
          <StatusTimeline currentStatus={event.status} />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Budget Breakdown */}
            <div className="glass-card p-8">
              <h2 className="font-display text-xl font-bold mb-6">Presupuesto Detallado</h2>
              <BudgetBreakdown budget={event.budget} totalBudget={event.totalBudget} />
            </div>

            {/* Sales Info */}
            <div className="glass-card p-8">
              <h2 className="font-display text-xl font-bold mb-6">Modelo de Ingresos</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="stat-card flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Ticket className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Precio Entrada</p>
                    <p className="font-display text-2xl font-bold">
                      {event.ticketPrice}€
                    </p>
                  </div>
                </div>
                <div className="stat-card flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center">
                    <Wine className="w-7 h-7 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Precio Bebida</p>
                    <p className="font-display text-2xl font-bold">
                      {event.drinkPrice}€
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 rounded-lg bg-muted/50">
                <p className="text-sm text-muted-foreground">
                  <strong>Sistema de Ventas:</strong> El evento utilizará sistema QR + POS para todas las transacciones. 
                  Los ingresos se registran en tiempo real y se reportan al finalizar el evento.
                </p>
              </div>
            </div>

            {/* Investors */}
            <div className="glass-card p-8">
              <h2 className="font-display text-xl font-bold mb-6">
                Inversores ({event.investments.length})
              </h2>
              <div className="space-y-3">
                {event.investments.map((investment) => (
                  <div 
                    key={investment.id}
                    className="flex items-center justify-between p-4 rounded-lg bg-muted/30"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center font-mono text-sm">
                        {investment.investorAddress.slice(2, 4)}
                      </div>
                      <div>
                        <p className="font-mono text-sm">{investment.investorAddress}</p>
                        <p className="text-xs text-muted-foreground">
                          {new Date(investment.timestamp).toLocaleDateString('es-ES')}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-display font-bold text-primary">
                        {formatCurrency(investment.amount)} USDC
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {investment.percentage.toFixed(1)}% del total
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Final Report (if completed) */}
            {event.finalReport && (
              <div className="glass-card p-8 border-primary/30">
                <h2 className="font-display text-xl font-bold mb-6 flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" />
                  Reporte Final
                </h2>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <p className="text-sm text-muted-foreground">Ingresos Totales</p>
                    <p className="font-display text-2xl font-bold text-primary">
                      {formatCurrency(event.finalReport.totalRevenue)} €
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Beneficio Neto</p>
                    <p className="font-display text-2xl font-bold text-primary">
                      {formatCurrency(event.finalReport.netProfit)} €
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Entradas Vendidas</p>
                    <p className="font-display text-xl font-bold">{event.finalReport.ticketsSold}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Bebidas Vendidas</p>
                    <p className="font-display text-xl font-bold">{event.finalReport.drinksSold}</p>
                  </div>
                </div>
                <a 
                  href="#" 
                  className="inline-flex items-center gap-2 text-primary hover:underline"
                >
                  <ExternalLink className="w-4 h-4" />
                  Ver reporte completo en IPFS ({event.finalReport.ipfsHash.slice(0, 12)}...)
                </a>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Investment Card */}
            <div className="glass-card p-6 sticky top-24">
              <h3 className="font-display text-lg font-bold mb-4">Financiación</h3>
              
              {/* Progress */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Recaudado</span>
                  <span className="font-display font-bold text-primary">
                    {formatCurrency(event.currentFunding)} USDC
                  </span>
                </div>
                <Progress value={fundingPercentage} className="h-3" />
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{fundingPercentage.toFixed(1)}% completado</span>
                  <span className="text-muted-foreground">
                    Meta: {formatCurrency(event.totalBudget)} USDC
                  </span>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-3 rounded-lg bg-muted/30">
                  <p className="text-xs text-muted-foreground">Restante</p>
                  <p className="font-display font-bold">{formatCurrency(remainingFunding)}</p>
                </div>
                <div className="p-3 rounded-lg bg-muted/30">
                  <p className="text-xs text-muted-foreground">Días restantes</p>
                  <p className="font-display font-bold">{daysUntilDeadline}</p>
                </div>
                <div className="p-3 rounded-lg bg-muted/30">
                  <p className="text-xs text-muted-foreground">Inversores</p>
                  <p className="font-display font-bold">{event.investments.length}</p>
                </div>
                <div className="p-3 rounded-lg bg-muted/30">
                  <p className="text-xs text-muted-foreground">Stablecoin</p>
                  <p className="font-display font-bold">{event.stablecoin}</p>
                </div>
              </div>

              {/* Invest Button */}
              {event.status === 'funding' && (
                <Dialog open={showInvestDialog} onOpenChange={setShowInvestDialog}>
                  <DialogTrigger asChild>
                    <Button 
                      variant="neon" 
                      size="lg" 
                      className="w-full"
                      disabled={!isConnected}
                    >
                      <TrendingUp className="w-5 h-5 mr-2" />
                      {isConnected ? 'Invertir en este evento' : 'Conecta wallet para invertir'}
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="glass-card border-border/50">
                    <DialogHeader>
                      <DialogTitle className="font-display">Invertir en {event.name}</DialogTitle>
                      <DialogDescription>
                        Introduce la cantidad que deseas invertir en {event.stablecoin}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div>
                        <label className="text-sm text-muted-foreground mb-2 block">
                          Cantidad (USDC)
                        </label>
                        <Input
                          type="number"
                          placeholder="1000"
                          value={investAmount}
                          onChange={(e) => setInvestAmount(e.target.value)}
                          className="text-lg"
                        />
                        <p className="text-xs text-muted-foreground mt-2">
                          Mínimo: 100 USDC | Máximo: {formatCurrency(remainingFunding)} USDC
                        </p>
                      </div>
                      
                      {investAmount && (
                        <div className="p-4 rounded-lg bg-primary/10 border border-primary/30">
                          <p className="text-sm text-muted-foreground">Tu participación sería:</p>
                          <p className="font-display text-xl font-bold text-primary">
                            {((parseFloat(investAmount) / event.totalBudget) * 100).toFixed(2)}%
                          </p>
                        </div>
                      )}

                      <div className="flex items-start gap-2 p-3 rounded-lg bg-warning/10 border border-warning/30">
                        <AlertTriangle className="w-4 h-4 text-warning mt-0.5" />
                        <p className="text-xs text-muted-foreground">
                          Invertir en eventos conlleva riesgos. No hay garantía de retorno. 
                          Lee los términos antes de continuar.
                        </p>
                      </div>

                      <Button 
                        variant="neon" 
                        className="w-full"
                        onClick={handleInvest}
                        disabled={!investAmount || parseFloat(investAmount) < 100}
                      >
                        Confirmar Inversión
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              )}

              {!isConnected && (
                <Link to="/connect" className="block mt-4">
                  <Button variant="outline" className="w-full">
                    Conectar Wallet
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EventDetail;
