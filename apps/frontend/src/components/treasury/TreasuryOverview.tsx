import React from 'react';

export function TreasuryOverview(): JSX.Element {
  return (
    <div className="p-6 border rounded-lg bg-white shadow-sm">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Treasury Positions</h3>
      <div className="flex flex-col gap-3">
        <div className="flex justify-between border-b pb-2">
          <span>Stellar Mainnet Vault</span>
          <span className="font-semibold">$50,000.00 USDC</span>
        </div>
        <div className="flex justify-between border-b pb-2">
          <span>Stellar Testnet Wallet</span>
          <span className="font-semibold">$74,500.00 USDC</span>
        </div>
        <div className="flex justify-between">
          <span>Total Allocation</span>
          <span className="font-bold text-blue-600">$124,500.00 USDC</span>
        </div>
      </div>
    </div>
  );
}
