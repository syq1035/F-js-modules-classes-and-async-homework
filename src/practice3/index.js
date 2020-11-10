// export const getPoetry = () => {
//   return fetch('https://v1.jinrishici.com/all.json')
//     .then(res => {
//       if(res.status == 200) {
//         return res.json()
//       }
//       return Promise.reject()
//     })
//     .then(data => {
//       const { origin, author, content } = data;
//       return [origin, author, content];
//     })
//     .catch(err => {
//       console.log(err)
//     })
// } 

export const getPoetry = async () => {
  const res = await fetch('https://v1.jinrishici.com/all.json')
  if(res.status == 200) {
    const { origin, author, content } = await res.json();
    return [origin, author, content];
  } else {
    return new Error("error")
  }
} 

