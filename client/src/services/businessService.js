const baseUrl = 'http://localhost:3000/businesses';

export const getBusinesses = () => {
  return fetch(baseUrl)
    .then((res) => {
      if (!res.ok) {
        throw new Error('Failed to fetch businesses');
      }
      return res.json();
    })
    .catch((error) => {
      console.error(`Failed to fetch businesses: ${error}`);
      throw error;
    });
};
