const BASE_URL = 'https://jsonplaceholder.typicode.com'

export async function apiFetch(endpoint, options = {}) {
  const token = localStorage.getItem('token')

  const resposta = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers,
    },
  })

  if (!resposta.ok) {
    throw new Error(`Erro na API: ${resposta.status}`)
  }

  return resposta.json()
}