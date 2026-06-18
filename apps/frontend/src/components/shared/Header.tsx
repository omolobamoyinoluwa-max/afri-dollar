import React from 'react';

export function Header(): JSX.Element {
  return (
    <header className="flex justify-between items-center p-6 border-b bg-white">
      <div className="flex items-center gap-2">
        <span className="text-xl font-bold text-blue-600">AfriDollar</span>
      </div>
      <nav className="flex items-center gap-4 text-sm font-medium text-gray-600">
        <a href="/dashboard" className="hover:text-blue-600">
          Dashboard
        </a>
        <a href="/wallets" className="hover:text-blue-600">
          Wallets
        </a>
        <a href="/payroll" className="hover:text-blue-600">
          Payroll
        </a>
        <a href="/fx" className="hover:text-blue-600">
          FX Rates
        </a>
      </nav>
    </header>
  );
}
