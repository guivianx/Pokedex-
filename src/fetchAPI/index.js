const getPokemons = async () => {

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=442&offset=0`)
        const data = await response.json()
        const pokemons = data.results.map((pokemon) => {
            return pokemon.name
        })
        
        return pokemons

    } catch (error) {
        alert('ERRO NA APLICAÇÃO')
        console.log('error in API ', error)
    }

}

const getDataPokemons = async (name) => {

    name = name.toLowerCase()
    
    try {

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        const data = await response.json()
        let dados = {
            weight: data.weight,
            height: data.height,
            image: data.sprites.other.home.front_default,
            name: data.name,
            type1: data.types[0]?.type.name,
            type2: data.types[1]?.type.name,
            id: data.id,
            abilities: data.abilities,
            moves: data.moves
        }
        return dados

    } catch (error) {
        alert('ERRO NA APLICAÇÃO')
        console.log('error in get data API ', error)
    }
}

const listName = await getPokemons()

let promises = []

listName.forEach(pokemon => {
    promises.push(getDataPokemons(pokemon))
})

let data = []

data = await Promise.all(promises)


const getAbilityData = async (url) => {
    try {
        const response = await fetch(url)
        return await response.json()

    } catch (error) {
        alert('ERRO NA APLICAÇÃO')
        console.log('error in get data API ', error)
    }

}

export { data, getAbilityData }