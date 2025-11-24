
export const supabaseRedirectUrl = process.env.NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL;
export const authCallbackUrl = `${supabaseRedirectUrl}/auth/callback`;