'use client';

import { usePathname } from 'next/navigation';
import Header from './Header';
import Footer from './Footer';

const authRoutes = ['/login', '/register', '/forgot-password'];

export default function ConditionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAuthPage = authRoutes.includes(pathname);

  if (isAuthPage) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
