import { useState } from 'react';

interface TreasuryPosition {
  vaultName: string;
  balance: number;
}

interface UseTreasuryResult {
  positions: TreasuryPosition[];
  totalBalance: number;
  loading: boolean;
}

export function useTreasury(): UseTreasuryResult {
  const [positions] = useState<TreasuryPosition[]>([
    { vaultName: 'Mainnet Vault', balance: 50000 },
    { vaultName: 'Testnet Treasury', balance: 74500 },
  ]);

  const totalBalance = positions.reduce(
    (acc: number, curr: TreasuryPosition) => acc + curr.balance,
    0
  );

  return {
    positions,
    totalBalance,
    loading: false,
  };
}
