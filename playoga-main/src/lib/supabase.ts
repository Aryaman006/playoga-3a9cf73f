export const SUPABASE_URL = "https://xoampivltwofgecadktc.supabase.co";
export const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhvYW1waXZsdHdvZmdlY2Fka3RjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAxOTg4OTksImV4cCI6MjA4NTc3NDg5OX0.Vo2-tIrsOegAC6aYpmSwa1U6cRQUHbFxszxX2pQuKG4";

export const supabaseFetch = async (endpoint: string) => {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${endpoint}`, {
    headers: {
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
    },
  });
  if (!res.ok) throw new Error(`Supabase fetch failed: ${res.statusText}`);
  return res.json();
};
