'use client';

import { useState } from 'react';
import Navigation from './Navigation';

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const [isNavCollapsed, setIsNavCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen">
      <Navigation onCollapseChange={setIsNavCollapsed} />
      <main className={`flex-1 transition-all duration-300 ${isNavCollapsed ? 'ml-20' : 'ml-64'}`}>
        {children}
      </main>
    </div>
  );
} 