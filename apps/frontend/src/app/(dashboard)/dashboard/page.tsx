import React from 'react';

/**
 * DashboardPage renders the main client management portal overview.
 * It displays wallets, balances, active batches, and rate conversions.
 */
export default function DashboardPage(): JSX.Element {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Business Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-6 border rounded-lg shadow-sm">
          <h2 className="text-sm font-medium text-gray-500">Wallet Balance</h2>
          <p className="text-3xl font-semibold mt-2">$124,500.00 USDC</p>
        </div>
        <div className="p-6 border rounded-lg shadow-sm">
          <h2 className="text-sm font-medium text-gray-500">Stellar Wallet</h2>
          <p className="text-sm font-semibold mt-2 truncate">GBXX...34ND</p>
        </div>
        <div className="p-6 border rounded-lg shadow-sm">
          <h2 className="text-sm font-medium text-gray-500">Active Payroll Batches</h2>
          <p className="text-3xl font-semibold mt-2">2 Batches</p>
        </div>
        <div className="p-6 border rounded-lg shadow-sm">
          <h2 className="text-sm font-medium text-gray-500">Last FX Conversion Rate</h2>
          <p className="text-3xl font-semibold mt-2">1,500 NGN / USD</p>
        </div>
      </div>
    </div>
  );
}
