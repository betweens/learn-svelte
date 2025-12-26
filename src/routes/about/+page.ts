import type { PageLoad } from './$types';

export const load: PageLoad = async ({ data, fetch }) => {
  const res = await fetch('/api/counter');
  const cdata = await res.json();

  console.log('client load rerun');

  return {
    clientCount: cdata.count,
    serverCount: data.serverCount
  };
};
