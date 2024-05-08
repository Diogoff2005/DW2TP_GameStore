import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://teuhpzscqxznjacgdtih.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRldWhwenNjcXh6bmphY2dkdGloIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM5NDgxOTEsImV4cCI6MjAyOTUyNDE5MX0.pX7REZ-wmliJwRpAHaBHvf63QcnEPusUBJlyWwisX9E";

export const supabase = createClient(supabaseUrl, supabaseKey);
