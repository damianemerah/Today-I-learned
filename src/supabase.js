import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://cdrgokghisyjcrnqudtl.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNkcmdva2doaXN5amNybnF1ZHRsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg4ODM4OTAsImV4cCI6MTk5NDQ1OTg5MH0.OYk7OsTRTyW-KtPmxFjQ9ZxCvyU569gOIgVL-QuXEfc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
