import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ddcdhztrqdmfhirtwioy.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRkY2RoenRycWRtZmhpcnR3aW95Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc1MDIyMDUsImV4cCI6MjAzMzA3ODIwNX0.Qsxza8OmqcQmXcYu3mo6nLm7tFDo9ENMnTU2mRhUP6M'
export const supabase = createClient(supabaseUrl, supabaseKey)