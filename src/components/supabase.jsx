import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://teuhpzscqxznjacgdtih.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRldWhwenNjcXh6bmphY2dkdGloIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxMzk0ODE5MSwiZXhwIjoyMDI5NTI0MTkxfQ.xFACl8kfTZfLJHWiaox7NFatBfhpvakku_gwiUAMMH4";

export const supabase = createClient(supabaseUrl, supabaseKey);
