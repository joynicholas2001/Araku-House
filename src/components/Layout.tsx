import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:order-0 p-2">
        Skip to content
      </a>
      <main id="main-content" className="flex-grow">{children}</main>
    </div>
  );
};

export default Layout;
