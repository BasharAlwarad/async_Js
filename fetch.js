// // let pokemons = [1, 2, 3]
// // import pokemons from './pokemons.json' assert { type: 'json' }

// // promises
// // const pokePromise = new Promise((resolve, reject) => {
// //   let pokemons = fetch('https://pokeapi.co/api/v2/pokemon?offset=40&limit=20')
// //   resolve(pokemons.then((res) => res.json()))
// //   reject(pokemons.catch((er) => console.error(er)))
// // })

// // pokePromise
// //   .then((res) => console.log(res))
// //   .catch(Error('ERROR: 404 NOT FOUND 😞'))

// // classes & XMLHttpRequest
// // class CustomHttp {
// //   constructor() {
// //     this.http = new XMLHttpRequest()
// //   }
// //   get(cb) {
// //     let res = this.http
// //     res.open(
// //       'GET',
// //       `https://pokeapi.co/api/v2/pokemon?offset=40&limit=20`,
// //       true
// //     )
// //     res.onerror(er=>console.error(er))
// //     res.onload=()=>{console.log(res.status)}
// //     res.onload = () => cb(JSON.parse(res.responseText))
// //     res.send()
// //   }
// // }

// // const poke = new CustomHttp()
// // poke.get((res) => console.log(res))

// // fetch
// const pok = fetch(`https://pokeapi.co/api/v2/pokemon?offset=40&limit=20`)
//   .then((res) => res.json())
//   .then((res) => console.log(res))
//   .catch((er) => console.error(er))
//   .finally('Over! 😶')

// class HttpReq {
//   async get(url, cb) {
//     // return new Promise((resolve, reject) => {
//     //   resolve(axios.get(url).then((res) => cb(res)))
//     //   reject((er) => console.error(er))
//     // })
//     // return data
//     try {
//       cb(await axios.get(url))
//     } catch (error) {
//       console.error(error.message)
//     }
//   }
// }
// // class HttpReq {
// //   get(url) {
// //     axios
// //       .get(url)
// //       .then((res) => console.log(res.data))
// //       .catch((er) => console.error(er))
// //       .finally('Over!')
// //   }
// // }

// const http = new HttpReq()
// const x = http.get(
//   `https://pokeapi.co/api/v2/pokemon?offset=40&limit=20`,
//   (res) => console.log(res)
// )

// DRY

// dont forget to create input with class .adinput
// dont forget to create button with class .adButton
// dont forget to create output div with class .output
// get teh elements form the HTML page
const input = document.querySelector('.adinput')
const button = document.querySelector('.adButton')
const output = document.querySelector('.output')

const x = [2, 3, 1]

// this fun will log all x array into the console
// but before the log will also push in the x array
// the value of the input
const addNumber = () => {
  x.push(Number(input.value))

  // for loop
  // for (let i = 0; i < x.length; i++) {
    //   console.log(x[i])
    // }
    
    // map loop
    // x.map((e) => {
      //   output.innerHTML +=  e
      // })
      
      // forEach loop
      // x.forEach(e => {
        //   console.log(e)
        // });
        
        // filter loop
  x.filter((e) => {
    if (e === 2) {
      console.log(e)
    }
  })
}
e.preventDefault()
// on the button we make event to call fun addNumber
button.addEventListener('click', addNumber)
