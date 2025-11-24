"use client";

import { useState, useEffect } from "react";
import { SupabaseProvider } from "@/contexts/supabase-context";
import { AuthProvider } from "@/contexts/auth-context";
import { Spinner } from "@/components/ui/spinner";

export default function Providers({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!isClient) {
    return (
      <SupabaseProvider>
          <AuthProvider>{children}</AuthProvider>
      </SupabaseProvider>
    );
  }

  if (isLoading) {
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <Spinner className="size-12" />
      </div>
    );
  }

  return (
    <SupabaseProvider>
        <AuthProvider>{children}</AuthProvider>
    </SupabaseProvider>
  );
}
