import '../App.css'

const Character = ({character}) => {
    return (
        <div className="col">
            <div className="card text-bg-dark border-light mb-3" style={{width: "18rem"}}>
                <img className="card-img-top" src={character.image} alt={character.name}/>
                <div className="card-body">
                    <h5>{character.name}</h5>
                    <div className='status'><p className={character.status}></p>{character.status}</div>
                    <p>Origin: {character.origin.name}</p>
                    <p>Species: {character.species}</p>
                </div>
            </div>
        </div>
    )
}

export default Character