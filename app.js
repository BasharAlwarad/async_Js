// const http = new customHTTP()

// http.get('https://jsonplaceholder.typicode.com/posts', (err, res) => {
//   console.log(err ? err : res)
// })

const posts = [
  { title: 'post one', body: 'this is post one' },
  { title: 'post two', body: 'this is post two' },
  { title: 'post three', body: 'this is post three' },
]

const createPosts = (post) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      posts.push(post)
      let err
      if (!err) {
        res()
      } else {
        rej(Error('ERROR: 404 not found!👹'))
      }
    }, 2000)
  })
}

const getPosts = () => {
  setTimeout(() => {
    let output = ''
    posts.forEach((e) => {
      output += `
      <li>${e.title}</li>
      <li>${e.body}</li>
      `
    })
    document.body.innerHTML = output
    console.log(posts)
  }, 1000)
}

// createPosts({ title: 'post four', body: 'this is post four' })
//   .then(getPosts)
//   .then(console.log('hi there! 😄'))
//   .then(() => {
//     setTimeout(() => {
//       console.log('hello after half a sec ⏲️')
//     }, 500)
//   })
//   .catch((err) => console.error(err))
//   .finally(console.log('Over and out! 😵'))
