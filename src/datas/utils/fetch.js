const BASE_URL = 'http://localhost:3001/api/v1/user'

export async function fetchData(url, options = {}) {
  try {
    const response = await fetch(`${BASE_URL}${url}`, options)

    if (!response.ok) {
      throw new Error(`Erreur API : ${response.status}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Erreur lors de la récupération des données :', error)
    throw error
  }
}

export const post = async (url, data) => {
  const token = localStorage.getItem('token')
  const response = await fetchData(url, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  })
  return response
}
