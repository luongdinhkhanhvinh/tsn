"use client";

import { ILoginSchema, IRegisterSchema } from "@/schemas/auth.schema";
import { useEffect, useState } from "react";
import { useSupabase } from "@/contexts/supabase-context";
import { AuthService } from "@/services/auth.service";
import { IProfile } from "@/types/profile.types";
import { User } from "@supabase/supabase-js";

export function useAuthService() {
  const { supabase } = useSupabase();
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<IProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const authService = new AuthService(supabase);
        const { user, error } = await authService.getCurrentUser();
        if (error) {
          setUser(null);
          setProfile(null);
          return;
        }

        if (user) {
          setUser(user);
          const { profile, error: profileError } = await authService.getProfile(user.id);
          if (profileError) {
            setProfile(null);
            return;
          }
          setProfile(profile);
        } else {
          setUser(null);
          setProfile(null);
        }
      } catch (error) {
        setUser(null);
        setProfile(null);
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();

    const authService = new AuthService(supabase);
    const { data: { subscription } } = authService.onAuthStateChange(async (_, session) => {
      if (session?.user) {
        setUser(session.user);
        const { profile, error } = await authService.getProfile(session.user.id);
        if (error) {
          return;
        }
        setProfile(profile);
      } else {
        setUser(null);
        setProfile(null);
      }
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const signIn = async (credentials: ILoginSchema) => {
    const authService = new AuthService(supabase);
    const { user, error } = await authService.signIn(credentials);
    return { user, error };
  };

  const signUp = async (registerData: IRegisterSchema) => {
    const authService = new AuthService(supabase);
    const { user, error } = await authService.signUp(registerData);
    return { user, error };
  };

  const signOut = async () => {
    const authService = new AuthService(supabase);
    const { error } = await authService.signOut();
    return { error };
  };

  return {
    user,
    profile,
    loading,
    signIn,
    signUp,
    signOut,
  };
}
