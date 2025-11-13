


function PokemonTeam({pokeTeam}){
    return(
        <>
            <h1>PokemonTeam</h1>
            {pokeTeam.map(pokemon => (
                <h3>{pokemon.name}</h3>
            ))}

        </>
    )
}

export default PokemonTeam