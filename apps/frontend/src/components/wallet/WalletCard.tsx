import React from 'react';

interface WalletCardProps {
  address: string;
  balance: number;
}

export function WalletCard({ address, balance }: WalletCardProps): JSX.Element {
  return (
    <div className="p-6 border rounded-lg bg-white shadow-sm flex flex-col gap-4">
      <h3 className="text-lg font-semibold text-gray-800">Stellar Wallet</h3>
      <div>
        <p className="text-sm text-gray-500">Balance</p>
        <p className="text-3xl font-bold text-blue-600">${balance.toFixed(2)} USDC</p>
      </div>
      <div>
        <p className="text-sm text-gray-500">Address</p>
        <p className="text-xs font-mono text-gray-600 break-all">{address}</p>
      </div>
    </div>
  );
}
