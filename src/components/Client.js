import client from '@sanity/client';

export default client({
  projectId: 'o6if6vet',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2021-09-25',
});
