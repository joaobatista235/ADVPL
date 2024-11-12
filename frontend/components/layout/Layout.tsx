import { ReactNode, useState } from 'react';
import { Sidebar } from '@/components/layout/Sidebar';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false); // Estado que acompanha o recolhimento da Sidebar

  return (
<div className="flex h-screen bg-white">
      {/* Sidebar */}
      <Sidebar onCollapseChange={setIsSidebarCollapsed} />

      {/* Conteúdo */}
      <main
        className={`flex-1 p-4 transition-all duration-300 ease-in-out overflow-auto ${
          isSidebarCollapsed ? 'md:ml-20' : 'md:ml-64'
        }`}
      >
        <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg p-6">
          {children}
        </div>
      </main>
    </div>
  );
};