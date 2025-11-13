


function PokemonList({pokeList, addToTeam}){
    return(
        <>
            <h1>PokemonList</h1>
            {pokeList.map(pokemon=> (
                <li key={pokemon.name}><button onClick={()=> addToTeam(pokemon)}>{pokemon.name}</button></li>
            ))}
        </>
    )
}

export default PokemonList