const posts = [{ title: 'post one' }, { title: 'post two' }]

const showPosts = (cb) => {
  let card = ''
  cb()
  posts.forEach((e) => {
    card += `
    <ol class="pokemon-info">
   <li>${e.title}</li>
   </ol>
   `
  })
  document.querySelector('.output').innerHTML = card
}

const createPost = () => {
  setTimeout(() => {
    posts.push({ title: 'post three' })
    console.log(posts)
  }, 3000)
}

showPosts(createPost)

// const createPost = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       posts.push({ title: 'post three' })
//       console.log(posts)
//       resolve()
//       reject('Error!')
//     }, 3000)
//     showPosts()
//   })
// }
