import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://qktqnkvqrouybnliovmo.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFrdHFua3Zxcm91eWJubGlvdm1vIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI5NzY4NzgsImV4cCI6MjAwODU1Mjg3OH0.-hhp5QqWRmwjEZP-dDz_AxVT-Zt0b0USk1E10_ry1SE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
