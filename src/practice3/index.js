export const getPoetry = () => {
  return fetch('https://v1.jinrishici.com/all.json')
    .then(res => {
      if(res.status == 200) {
        return res.json()
      }
      return Promise.reject()
    })
    .then(data => {
      const { origin, author, content } = data;
      return [origin, author, content];
    })
    .catch(err => {
      console.log(err)
    })
} 