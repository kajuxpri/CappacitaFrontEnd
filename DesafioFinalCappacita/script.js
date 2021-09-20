const listarMovies = async function(){
    let xhttp = new XMLHttpRequest()
    let movies = document.getElementById('movies')
    filmes.innerHTML = ""
    let urls =[]

    for(let i = 0; i < 100; i++){
    urls.push(`https://api.themoviedb.org/3/movie/550?api_key=30fbd0f07dc9d926b525b111417b9c03${i+1}`)
    }

    let promises = []

    urls.forEach((url) =>{
        promises.push(
            fetch(url,{method:'get', mode:'cors', cache:'default'})
            .then((res)=> res.json())
            .then((data)=> data)
        )
    })

    const responses = await Promise.all(promises)
         
    responses.forEach((movie) =>{
        let nodeId = movie.id
        let img = document.createElement('img')
        img.src = pokemon.sprites.front_default
        img.className = 'img.fluid img-thumbnail'

        let xicon = document.createElement('i')
        xicon.className = 'bi bi-x-square'
        xicon.onclick = function(){
            movies.removeChild(document.getElementById(nodeId))
        }

        let id = document.createElement('p')
        id.innerHTML = `ID: ${movie.id} Nome: ${movie.name}`
        let div = document.createElement('div')
        div.className = 'col card bg.light'
        div.id = nodeId

        div.appendChild(id)
        div.appendChild(img)
        div.appendChild(xicon)

        movies.appendChild(div)
    })

}