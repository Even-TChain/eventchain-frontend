import React, { createContext, useContext, useState, useCallback } from 'react';

interface WalletContextType {
  isConnected: boolean;
  address: string | null;
  network: string;
  balance: number;
  userType: 'organizer' | 'investor' | null;
  kycStatus: 'pending' | 'approved' | 'rejected';
  connect: () => Promise<void>;
  disconnect: () => void;
  setUserType: (type: 'organizer' | 'investor') => void;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export const WalletProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState<string | null>(null);
  const [network, setNetwork] = useState('Polygon');
  const [balance, setBalance] = useState(0);
  const [userType, setUserTypeState] = useState<'organizer' | 'investor' | null>(null);
  const [kycStatus, setKycStatus] = useState<'pending' | 'approved' | 'rejected'>('approved');

  const connect = useCallback(async () => {
    // Simulate wallet connection
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Mock connected state
    setIsConnected(true);
    setAddress('0x742d35Cc6634C0532925a3b844Bc454e4438f44e');
    setNetwork('Polygon');
    setBalance(15420.50);
  }, []);

  const disconnect = useCallback(() => {
    setIsConnected(false);
    setAddress(null);
    setBalance(0);
    setUserTypeState(null);
  }, []);

  const setUserType = useCallback((type: 'organizer' | 'investor') => {
    setUserTypeState(type);
  }, []);

  return (
    <WalletContext.Provider value={{
      isConnected,
      address,
      network,
      balance,
      userType,
      kycStatus,
      connect,
      disconnect,
      setUserType,
    }}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => {
  const context = useContext(WalletContext);
  if (context === undefined) {
    throw new Error('useWallet must be used within a WalletProvider');
  }
  return context;
};
