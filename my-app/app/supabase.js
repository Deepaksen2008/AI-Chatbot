import { supabase } from './supabaseClient'; // Ensure this matches your client setup

async function getDataFromTable() {
  const { data, error } = await supabase
    .from('posts')
    .select('*');

  if (error) {
    console.error('Error fetching data:', error.message);
    return null;
  }

  return data;
}

export { getDataFromTable };
