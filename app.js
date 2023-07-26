// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector('#container')
const baseUrl =  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"


for( let i=1;i<=151;i++){
    const pokemon = document.createElement('div')
    const label = document.createElement('span')
    const image = document.createElement('img')
    image.src = `${baseUrl}${i}.png`
    label.innerText = `${i}`
    pokemon.appendChild(image)
    pokemon.appendChild(label)
    container.appendChild(pokemon)
}
