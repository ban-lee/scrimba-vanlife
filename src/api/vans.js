import { checkResponse } from './utils';

export async function getAllVans() {
  const res = await fetch('/api/vans');
  checkResponse(res, 'Failed to fetch vans');

  const json = await res.json();
  return json.vans;
}

export async function getVan(id) {
  const res = await fetch(`/api/vans/${id}`);
  checkResponse(res, `Failed to fetch van [${id}]`);

  const json = await res.json();
  return json.vans;
}
