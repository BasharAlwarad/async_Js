const data =
  // 20230227131445
  // https://pokeapi.co/api/v2/pokemon

  {
    count: 1279,
    next: 'https://pokeapi.co/api/v2/pokemon?offset=20&limit=20',
    previous: null,
    results: [
      {
        name: 'bulbasaur',
        url: 'https://pokeapi.co/api/v2/pokemon/1/',
      },
      {
        name: 'ivysaur',
        url: 'https://pokeapi.co/api/v2/pokemon/2/',
      },
      {
        name: 'venusaur',
        url: 'https://pokeapi.co/api/v2/pokemon/3/',
      },
      {
        name: 'charmander',
        url: 'https://pokeapi.co/api/v2/pokemon/4/',
      },
      {
        name: 'charmeleon',
        url: 'https://pokeapi.co/api/v2/pokemon/5/',
      },
      {
        name: 'charizard',
        url: 'https://pokeapi.co/api/v2/pokemon/6/',
      },
      {
        name: 'squirtle',
        url: 'https://pokeapi.co/api/v2/pokemon/7/',
      },
      {
        name: 'wartortle',
        url: 'https://pokeapi.co/api/v2/pokemon/8/',
      },
      {
        name: 'blastoise',
        url: 'https://pokeapi.co/api/v2/pokemon/9/',
      },
      {
        name: 'caterpie',
        url: 'https://pokeapi.co/api/v2/pokemon/10/',
      },
      {
        name: 'metapod',
        url: 'https://pokeapi.co/api/v2/pokemon/11/',
      },
      {
        name: 'butterfree',
        url: 'https://pokeapi.co/api/v2/pokemon/12/',
      },
      {
        name: 'weedle',
        url: 'https://pokeapi.co/api/v2/pokemon/13/',
      },
      {
        name: 'kakuna',
        url: 'https://pokeapi.co/api/v2/pokemon/14/',
      },
      {
        name: 'beedrill',
        url: 'https://pokeapi.co/api/v2/pokemon/15/',
      },
      {
        name: 'pidgey',
        url: 'https://pokeapi.co/api/v2/pokemon/16/',
      },
      {
        name: 'pidgeotto',
        url: 'https://pokeapi.co/api/v2/pokemon/17/',
      },
      {
        name: 'pidgeot',
        url: 'https://pokeapi.co/api/v2/pokemon/18/',
      },
      {
        name: 'rattata',
        url: 'https://pokeapi.co/api/v2/pokemon/19/',
      },
      {
        name: 'raticate',
        url: 'https://pokeapi.co/api/v2/pokemon/20/',
      },
    ],
  }

const DOM = (e) => {
  return document.querySelector(e)
}

// get pokemons from the internal data
const internalPokemons = () => {
  let list = ''
  data?.results.forEach((e) => {
    list += `
      <ul> class="pokemon-info">
      <li>${e.name}</li>
      <a href="${e.url}"  target="#">
      <li>${e.url}</li>
      </a>
      </ul>
      `
  })
  document.querySelector('.output').innerHTML = list
}

// get pokemons from the imported data
import extData from './pokemons.json' assert { type: 'json' }
const importPokemons = () => {
  let list = ''
  extData?.results.forEach((e) => {
    list += `
    <ul> class="pokemon-info">
    <li>${e.name}</li>
    <a href="${e.url}"  target="#">
    <li>${e.url}</li>
    </a>
    </url>
    `
  })
  document.querySelector('.output').innerHTML = list
}

// get pokemons from the external data
const externalPokemons = () => {
  const xhr = new XMLHttpRequest()
  console.log(xhr.readyState)
  xhr.open('GET', 'pokemons.json', true)
  console.log(xhr.readyState)
  xhr.onprogress = function () {
    console.log(xhr.readyState)
  }
  xhr.onload = function () {
    if (this.status === 200) {
      console.log(xhr.readyState)
      let { results } = JSON.parse(this.responseText)
      let list = ''
      results.forEach((e) => {
        list += `
     <ul> class="pokemon-info">
     <li>${e?.name}</li>
     <a href="${e?.url}"  target="#">
     <li>${e?.url}</li>
     </a>
     </ul>
     `
      })
      document.querySelector('.output').innerHTML = list
    }
  }
  xhr.send()
  xhr.onerror = function () {
    console.log('Requst Error!')
  }
}

// get text from external api file
const apiPokemons = () => {
  const xhr = new XMLHttpRequest()
  console.log(xhr.readyState)
  xhr.open('GET', 'https://pokeapi.co/api/v2/pokemon?offset=40&limit=20', true)
  console.log(xhr.readyState)
  xhr.onprogress = function () {
    console.log(xhr.readyState)
  }
  xhr.onload = function () {
    if (this.status === 200) {
      console.log(xhr.readyState)
      let { results } = JSON.parse(this.responseText)
  let list = ''
      results.forEach((e) => {
        list += `
     <ul> class="pokemon-info">
     <li>${e?.name}</li>
     <a href="${e?.url}"  target="#">
     <li>${e?.url}</li>
     </a>
     </ul>
     `
      })
      document.querySelector('.output').innerHTML = list
    }
  }
  xhr.send()
  xhr.onerror = function () {
    console.log('Requst Error!')
  }
}

document
  .getElementById('internalData')
  .addEventListener('click', internalPokemons)
document.getElementById('importData').addEventListener('click', importPokemons)

document
  .getElementById('externalData')
  .addEventListener('click', externalPokemons)

document.getElementById('apiData').addEventListener('click', apiPokemons)
