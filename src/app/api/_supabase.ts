import { createClient } from '@supabase/supabase-js';

import { env } from '@/env';

const client = createClient(
  env.NEXT_PUBLIC_SUPABASE_URL,
  env.SUPABASE_SERVICE_KEY
);

export default client;
