class customHTTP {
  constructor() {
    this.http = new XMLHttpRequest()
  }

  // Make an HTTP GET request
//   get(cb) {
//     let res = this.http
//     res.open('GET', 'https://pokeapi.co/api/v2/pokemon?offset=40&limit=6', true)
//     res.onload = () => res.status === 200 && cb(res.responseText)
//     res.send()
//   }
// }
  get() {
    new Promise((resolve, reject) => {
      
    })
    let res = this.http
    res.open('GET', 'https://pokeapi.co/api/v2/pokemon?offset=40&limit=6', true)
    res.onload = () => res.status === 200 && cb(res.responseText)
    res.send()
  }
}

const http = new customHTTP()

console.log(http.get((res) => console.log(JSON.parse(res).results)))

