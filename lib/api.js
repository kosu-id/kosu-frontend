export const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function fetcher(path, options = {}) {
  const res = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  if (!res.ok) throw new Error('Fetch error');
  return res.json();
}
