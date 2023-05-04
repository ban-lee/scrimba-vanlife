export function checkResponse(res, message) {
  if (res.ok) return;

  throw {
    status: res.status,
    statusText: res.statusText,
    message,
  }
}
