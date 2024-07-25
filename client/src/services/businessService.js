const baseUrl = import.meta.env.VITE_APP_API_BASE_URL

console.log(baseUrl)

export const getBusinesses = () => {
  return fetch(baseUrl + '/businesses')
    .then((res) => {
      if (!res.ok) {
        throw new Error('Failed to fetch businesses')
      }
      return res.json()
    })
    .catch((error) => {
      console.error(`Failed to fetch businesses: ${error}`)
      throw error
    })
}

export const getCategories = () => {
  return fetch(baseUrl + '/categories')
    .then((res) => {
      if (!res.ok) {
        throw new Error('Failed to fetch categories')
      }
      return res.json()
    })
    .catch((error) => {
      console.error(`Failed to fetch categories: ${error}`)
      throw error
    })
}
