"use client";

import { ILoginSchema, IRegisterSchema } from "@/schemas/auth.schema";
import { createContext, useContext } from "react";
import { useAuthService } from "@/hooks/use-auth-service";
import { IProfile } from "@/types/profile.types";
import { User } from "@supabase/supabase-js";

interface AuthContextType {
  loading: boolean;
  user: User | null;
  profile: IProfile | null;
  signIn: (credentials: ILoginSchema) => Promise<{ user: User | null; error: string | null }>;
  signUp: (registerData: IRegisterSchema) => Promise<{ user: User | null; error: string | null }>;
  signOut: () => Promise<{ error: Error | null }>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const authService = useAuthService();

  return(
    <AuthContext.Provider value={authService}>{children}</AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
