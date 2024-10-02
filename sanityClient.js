import { createClient } from '@sanity/client';

const client = createClient({
  projectId: '966gk5sg', 
  dataset: 'production', 
  useCdn: true, 
  apiVersion: '2023-08-28', 
});

export default client;
