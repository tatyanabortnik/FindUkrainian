// export const getTranslation = (content) => {
//   return fetch('http://localhost:3000/translate', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       html: content,
//       to: 'uk',
//       from: 'en',
//     }),
//   })
//     .then((res) => {
//       if (!res.ok) {
//         throw new Error('Failed to fetch businesses');
//       }
//       return res.json();
//     })
//     .catch((error) => {
//       console.error(`Failed to fetch businesses: ${error}`);
//       throw error;
//     });
// };
