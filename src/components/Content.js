import Character from "./Character";

const Content = ({characters}) => {
    return(
        <div className="row g-4">
            {characters.map(character => <Character key={character.id} character={character}/>)}
        </div>
    )
}

export default Content;