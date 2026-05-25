import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useWallet } from '@/contexts/WalletContext';
import { formatAddress, formatCurrency } from '@/lib/mockData';
import { Wallet, LogOut, ChevronDown, Zap } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Header: React.FC = () => {
  const { isConnected, address, network, balance, disconnect, userType } = useWallet();
  const location = useLocation();

  const navLinks = [
    { path: '/events', label: 'Eventos' },
    { path: '/how-it-works', label: 'Cómo Funciona' },
  ];

  if (isConnected && userType === 'organizer') {
    navLinks.push({ path: '/organizer', label: 'Dashboard' });
  }

  if (isConnected && userType === 'investor') {
    navLinks.push({ path: '/investor', label: 'Mis Inversiones' });
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:shadow-[0_0_20px_hsl(142_76%_52%/0.4)] transition-shadow duration-300">
            <Zap className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-display font-bold text-xl gradient-text">
            EventChain
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === link.path
                  ? 'text-primary bg-primary/10'
                  : 'text-muted-foreground hover:text-foreground hover:bg-accent'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Wallet Connection */}
        <div className="flex items-center gap-3">
          {isConnected ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="glass" className="gap-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-xs text-muted-foreground">{network}</span>
                  </div>
                  <span className="font-mono">{formatAddress(address || '')}</span>
                  <ChevronDown className="w-4 h-4 text-muted-foreground" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-64 glass-card">
                <div className="px-3 py-2">
                  <p className="text-xs text-muted-foreground">Balance</p>
                  <p className="font-display font-bold text-lg">
                    {formatCurrency(balance)} <span className="text-primary">USDC</span>
                  </p>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to={userType === 'organizer' ? '/organizer' : '/investor'} className="cursor-pointer">
                    Dashboard
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={disconnect} className="text-destructive cursor-pointer">
                  <LogOut className="w-4 h-4 mr-2" />
                  Desconectar
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link to="/connect">
              <Button variant="neon" className="gap-2">
                <Wallet className="w-4 h-4" />
                Conectar Wallet
              </Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
