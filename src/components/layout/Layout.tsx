import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header will go here */}
      <main className="flex-grow">{children}</main>
      {/* Footer will go here */}
    </div>
  );
};

export default Layout; 