import { ILoginSchema, IRegisterSchema } from "@/schemas/auth.schema";
import { User, SupabaseClient } from "@supabase/supabase-js";
import { IProfileResponse } from "@/types/profile.types";
import { authCallbackUrl } from "@/configs/config";
import { IAuthResponse } from "@/types/auth.types";
import { i18n } from "@/locales";

export class AuthService {
  private supabase: SupabaseClient;

  constructor(supabaseClient: SupabaseClient) {
    this.supabase = supabaseClient;
  }

  setSupabaseClient(client: SupabaseClient) {
    this.supabase = client;
  }

  async signIn(credentials: ILoginSchema): Promise<IAuthResponse> {
    try {
      const { data, error } = await this.supabase.auth.signInWithPassword({
        email: credentials.email,
        password: credentials.password,
      });

      return {
        user: data.user,
        error: error ? i18n({ key: error.code }) : null,
      };
    } catch (error) {
      return {
        user: null,
        error: error instanceof Error ? error.message : "Unknown error",
      };
    }
  }

  async signUp(registerData: IRegisterSchema): Promise<IAuthResponse> {
    try {
      const { data, error } = await this.supabase.auth.signUp({
        email: registerData.email,
        password: registerData.password,
        options: {
          emailRedirectTo: authCallbackUrl,
          data: {
            full_name: registerData.fullName,
          },
        },
      });

      if (data.user && !error) {
        return {
          user: data.user,
          error: null,
        };
      }

      return {
        user: null,
        error: error ? i18n({ key: error.code }) : null,
      };
    } catch (error) {
      return {
        user: null,
        error: error instanceof Error ? error.message : "Unknown error",
      };
    }
  }

  async signOut(): Promise<{ error: Error | null }> {
    try {
      const { error } = await this.supabase.auth.signOut();
      return {
        error: error ? new Error(error.message) : null,
      };
    } catch (error) {
      return {
        error: error instanceof Error ? error : new Error("Unknown error"),
      };
    }
  }

  async getCurrentUser(): Promise<{ user: User | null; error: Error | null }> {
    try {
      const { data, error } = await this.supabase.auth.getUser();

      if (error && error.message === "Auth session missing!") {
        return {
          user: null,
          error: null,
        };
      }

      return {
        user: data.user,
        error: error ? new Error(error.message) : null,
      };
    } catch (error) {
      return {
        user: null,
        error: error instanceof Error ? error : new Error("Unknown error"),
      };
    }
  }

  async getProfile(userId: string): Promise<IProfileResponse> {
    try {
      const { data, error } = await this.supabase
        .from("profiles")
        .select("*")
        .eq("id", userId)
        .single();

      return {
        profile: data,
        error: error ? new Error(error.message) : null,
      };
    } catch (error) {
      return {
        profile: null,
        error: error instanceof Error ? error : new Error("Unknown error"),
      };
    }
  }

  async createUserProfile(userId: string, profileData: { full_name: string }): Promise<void> {
    try {
      const { error } = await this.supabase
        .from("profiles")
        .insert({
          id: userId,
          full_name: profileData.full_name,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        })
        .select();

      if (error) {
        throw error;
      }

      const { error: checkError } = await this.supabase
        .from("profiles")
        .select("*")
        .eq("id", userId)
        .single();

      if (checkError) {
        // Error checking profile
      }
    } catch (error) {
      throw error;
    }
  }

  onAuthStateChange(callback: (event: string, session: { user: User | null } | null) => void) {
    return this.supabase?.auth?.onAuthStateChange(callback);
  }
}
