import type { User } from "@supabase/supabase-js";
import { IProfile } from "@/types/profile.types";

export interface IAuthResponse {
    user: User | null;
    error: string | null;
}

export interface IAuthProfileResponse {
    profile: IProfile | null;
    error: string | null;
}
