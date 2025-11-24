"use client";

import type { Session, SupabaseClient } from "@supabase/supabase-js";
import { createContext, useContext, useEffect, useState } from "react";
import { getAnonSessionId } from "@/utils/common";
import { createClient } from "@/lib/supabase/client";

interface SupabaseContextType {
  supabase: SupabaseClient;
  session: Session | null;
  userJoinTime: Date | null;
  anonSessionId: string | null;
}

const SupabaseContext = createContext<SupabaseContextType | undefined>(
  undefined
);

export function SupabaseProvider({ children }: { children: React.ReactNode }) {
  const [userJoinTime, setUserJoinTime] = useState<Date | null>(null);
  const [anonSessionId, setAnonSessionId] = useState<string | null>(null);
  const [supabase, setSupabase] = useState<SupabaseClient | null>(
    createClient()
  );
  const [session, setSession] = useState<Session | null>(null);

  const initialize = async () => {
    const client = createClient();
    const {
      data: { session },
    } = await client.auth.getSession();
    setAnonSessionId(getAnonSessionId());
    setSession(session);
    setSupabase(client);
    const now = new Date();
    setUserJoinTime(now);
  };

  useEffect(() => {
    initialize();
  }, []);

  useEffect(() => {
    const handleVisibilityChange = async () => {
      try {
        if (!document.hidden && supabase) {
          supabase.auth.startAutoRefresh();
        }
      } catch (error) {
        console.error("Error reconnection:", error);
      }
    };

    const handleFocus = async () => {};

    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("focus", handleFocus);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("focus", handleFocus);
    };
  }, [supabase]);

  const contextValue: SupabaseContextType = {
    supabase: supabase!,
    session,
    userJoinTime,
    anonSessionId,
  };

  return (
    <SupabaseContext.Provider value={contextValue}>
      {children}
    </SupabaseContext.Provider>
  );
}

export function useSupabase() {
  const context = useContext(SupabaseContext);
  if (context === undefined) {
    throw new Error("useSupabase must be used within a SupabaseProvider");
  }
  return context;
}
