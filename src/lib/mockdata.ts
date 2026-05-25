// Mock data for the blockchain event financing platform

export type EventStatus = 'funding' | 'active' | 'claiming' | 'completed' | 'failed';
export type KYCStatus = 'pending' | 'approved' | 'rejected';
export type UserType = 'organizer' | 'investor';

export interface BudgetItem {
  id: string;
  category: string;
  description: string;
  amount: number;
}

export interface Event {
  id: string;
  name: string;
  description: string;
  date: string;
  location: string;
  organizerId: string;
  organizerName: string;
  status: EventStatus;
  budget: BudgetItem[];
  totalBudget: number;
  currentFunding: number;
  fundingDeadline: string;
  stablecoin: string;
  collateralAmount: number;
  collateralLocked: boolean;
  ticketPrice: number;
  drinkPrice: number;
  expectedAttendees: number;
  imageUrl?: string;
  investments: Investment[];
  finalReport?: FinalReport;
}

export interface Investment {
  id: string;
  investorId: string;
  investorAddress: string;
  eventId: string;
  amount: number;
  percentage: number;
  timestamp: string;
  claimed: boolean;
}

export interface FinalReport {
  ipfsHash: string;
  totalRevenue: number;
  ticketsSold: number;
  drinksSold: number;
  expenses: number;
  netProfit: number;
  distributionPerToken: number;
}

export interface User {
  id: string;
  walletAddress: string;
  type: UserType;
  kycStatus: KYCStatus;
  name: string;
}

// Mock Budget Categories
export const budgetCategories = [
  { id: 'security', name: 'Seguridad', icon: '🛡️' },
  { id: 'sanitation', name: 'Baños/Sanitarios', icon: '🚿' },
  { id: 'bar', name: 'Barra/Bebidas', icon: '🍹' },
  { id: 'djs', name: 'DJs/Artistas', icon: '🎧' },
  { id: 'sound', name: 'Sonido/Iluminación', icon: '🔊' },
  { id: 'staff', name: 'Staff/Personal', icon: '👥' },
  { id: 'permits', name: 'Permisos/Licencias', icon: '📋' },
  { id: 'venue', name: 'Venue/Espacio', icon: '🏟️' },
  { id: 'marketing', name: 'Marketing', icon: '📢' },
  { id: 'other', name: 'Otros', icon: '📦' },
];

// Mock Events
export const mockEvents: Event[] = [
  {
    id: 'event-1',
    name: 'Neon Nights Festival',
    description: 'La experiencia de música electrónica más grande del año. 12 horas de música non-stop con los mejores DJs internacionales.',
    date: '2025-03-15',
    location: 'Warehouse District, Barcelona',
    organizerId: 'org-1',
    organizerName: 'ElectroEvents SA',
    status: 'funding',
    budget: [
      { id: 'b1', category: 'DJs/Artistas', description: 'Headliners internacionales x3', amount: 45000 },
      { id: 'b2', category: 'Sonido/Iluminación', description: 'Sistema Funktion-One + mapping', amount: 25000 },
      { id: 'b3', category: 'Seguridad', description: 'Equipo de 30 personas', amount: 8000 },
      { id: 'b4', category: 'Venue/Espacio', description: 'Alquiler nave industrial', amount: 15000 },
      { id: 'b5', category: 'Baños/Sanitarios', description: '20 unidades portátiles premium', amount: 3000 },
      { id: 'b6', category: 'Barra/Bebidas', description: 'Stock inicial + montaje', amount: 12000 },
      { id: 'b7', category: 'Staff/Personal', description: 'Barras, limpieza, técnicos', amount: 6000 },
      { id: 'b8', category: 'Permisos/Licencias', description: 'Ayuntamiento + SGAE', amount: 4000 },
      { id: 'b9', category: 'Marketing', description: 'Campaña digital + cartelería', amount: 7000 },
    ],
    totalBudget: 125000,
    currentFunding: 78500,
    fundingDeadline: '2025-02-15',
    stablecoin: 'USDC',
    collateralAmount: 25000,
    collateralLocked: true,
    ticketPrice: 45,
    drinkPrice: 8,
    expectedAttendees: 3000,
    investments: [
      { id: 'inv-1', investorId: 'inv-user-1', investorAddress: '0x742d...3f8a', eventId: 'event-1', amount: 25000, percentage: 20, timestamp: '2025-01-15', claimed: false },
      { id: 'inv-2', investorId: 'inv-user-2', investorAddress: '0x8a3b...9c2d', eventId: 'event-1', amount: 35000, percentage: 28, timestamp: '2025-01-18', claimed: false },
      { id: 'inv-3', investorId: 'inv-user-3', investorAddress: '0x1f5e...7a4c', eventId: 'event-1', amount: 18500, percentage: 14.8, timestamp: '2025-01-20', claimed: false },
    ],
  },
  {
    id: 'event-2',
    name: 'Sunset Rooftop Sessions',
    description: 'Sesiones exclusivas de house y techno en la azotea más alta de Madrid con vistas 360°.',
    date: '2025-04-20',
    location: 'Sky Terrace, Madrid',
    organizerId: 'org-1',
    organizerName: 'ElectroEvents SA',
    status: 'active',
    budget: [
      { id: 'b1', category: 'DJs/Artistas', description: 'DJs nacionales x2', amount: 8000 },
      { id: 'b2', category: 'Sonido/Iluminación', description: 'Setup premium compacto', amount: 5000 },
      { id: 'b3', category: 'Seguridad', description: 'Equipo de 8 personas', amount: 2000 },
      { id: 'b4', category: 'Venue/Espacio', description: 'Alquiler terraza', amount: 6000 },
      { id: 'b5', category: 'Barra/Bebidas', description: 'Stock premium', amount: 4000 },
      { id: 'b6', category: 'Marketing', description: 'Influencers + RRSS', amount: 3000 },
    ],
    totalBudget: 28000,
    currentFunding: 28000,
    fundingDeadline: '2025-03-20',
    stablecoin: 'USDC',
    collateralAmount: 5600,
    collateralLocked: true,
    ticketPrice: 35,
    drinkPrice: 12,
    expectedAttendees: 400,
    investments: [
      { id: 'inv-4', investorId: 'inv-user-1', investorAddress: '0x742d...3f8a', eventId: 'event-2', amount: 14000, percentage: 50, timestamp: '2025-02-10', claimed: false },
      { id: 'inv-5', investorId: 'inv-user-4', investorAddress: '0x5c7a...2e1b', eventId: 'event-2', amount: 14000, percentage: 50, timestamp: '2025-02-15', claimed: false },
    ],
  },
  {
    id: 'event-3',
    name: 'Underground Techno Marathon',
    description: '24 horas de techno puro en un bunker secreto. Solo para los más valientes.',
    date: '2024-12-01',
    location: 'Bunker Secreto, Valencia',
    organizerId: 'org-2',
    organizerName: 'Dark Sounds Collective',
    status: 'completed',
    budget: [
      { id: 'b1', category: 'DJs/Artistas', description: 'Rotación de 12 DJs', amount: 20000 },
      { id: 'b2', category: 'Sonido/Iluminación', description: 'Sound system industrial', amount: 15000 },
      { id: 'b3', category: 'Seguridad', description: 'Equipo especializado', amount: 5000 },
      { id: 'b4', category: 'Venue/Espacio', description: 'Bunker privado', amount: 8000 },
      { id: 'b5', category: 'Otros', description: 'Decoración + ambientación', amount: 4000 },
    ],
    totalBudget: 52000,
    currentFunding: 52000,
    fundingDeadline: '2024-11-01',
    stablecoin: 'USDC',
    collateralAmount: 10400,
    collateralLocked: false,
    ticketPrice: 55,
    drinkPrice: 10,
    expectedAttendees: 1500,
    investments: [
      { id: 'inv-6', investorId: 'inv-user-1', investorAddress: '0x742d...3f8a', eventId: 'event-3', amount: 26000, percentage: 50, timestamp: '2024-10-01', claimed: true },
      { id: 'inv-7', investorId: 'inv-user-2', investorAddress: '0x8a3b...9c2d', eventId: 'event-3', amount: 26000, percentage: 50, timestamp: '2024-10-05', claimed: true },
    ],
    finalReport: {
      ipfsHash: 'QmX7bVbZTG3...abc123',
      totalRevenue: 135000,
      ticketsSold: 1450,
      drinksSold: 8500,
      expenses: 52000,
      netProfit: 83000,
      distributionPerToken: 1.596,
    },
  },
];

// Mock Users
export const mockUsers: User[] = [
  {
    id: 'org-1',
    walletAddress: '0x3a5d...8f2c',
    type: 'organizer',
    kycStatus: 'approved',
    name: 'ElectroEvents SA',
  },
  {
    id: 'inv-user-1',
    walletAddress: '0x742d...3f8a',
    type: 'investor',
    kycStatus: 'approved',
    name: 'Crypto Capital Fund',
  },
];

// Helper functions
export const getStatusColor = (status: EventStatus): string => {
  switch (status) {
    case 'funding': return 'text-info';
    case 'active': return 'text-warning';
    case 'claiming': return 'text-primary';
    case 'completed': return 'text-success';
    case 'failed': return 'text-destructive';
    default: return 'text-muted-foreground';
  }
};

export const getStatusBgColor = (status: EventStatus): string => {
  switch (status) {
    case 'funding': return 'bg-info/20 border-info/50';
    case 'active': return 'bg-warning/20 border-warning/50';
    case 'claiming': return 'bg-primary/20 border-primary/50';
    case 'completed': return 'bg-success/20 border-success/50';
    case 'failed': return 'bg-destructive/20 border-destructive/50';
    default: return 'bg-muted';
  }
};

export const getStatusLabel = (status: EventStatus): string => {
  switch (status) {
    case 'funding': return 'En Financiación';
    case 'active': return 'Activo';
    case 'claiming': return 'Reclamando';
    case 'completed': return 'Completado';
    case 'failed': return 'Fallido';
    default: return status;
  }
};

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('es-ES', {
    style: 'decimal',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

export const formatAddress = (address: string): string => {
  if (address.length <= 10) return address;
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};
