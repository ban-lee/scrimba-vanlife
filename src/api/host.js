import { checkResponse } from './utils';

export async function getHostVans() {
  const res = await fetch('/api/host/vans');
  checkResponse(res, 'Failed to fetch vans for host');

  const json = await res.json();
  return json.vans;
}

export async function getHostVan(vanId) {
  const res = await fetch(`/api/host/vans/${vanId}`);
  checkResponse(res, `Failed to fetch van [${vanId}] for host`);

  const json = await res.json();
  return json.vans[0];
}
