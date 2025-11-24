export interface IProfile {
    id: string;
    email: string;
    phone_number: string;
    full_name: string;
    created_at?: string;
    updated_at?: string;
}

export interface IProfileResponse {
    profile: IProfile | null;
    error: Error | null;
}

export interface IProfilesResponse {
    profiles: IProfile[];
    error: Error | null;
}
