import { useState, useEffect } from "react"
import Pagination from "./components/Pagination"
import Content from "./components/Content"

function App() {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [numPages, setNumPages] = useState(0);

  useEffect(() => {
    obtenerDatos();
  }, [page]);

  const obtenerDatos = async () => {
    await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
          .then(response => response.json())
          .then(data => {
            setCharacters(data.results)
            setLoading(false)
            setNumPages(data.info.pages)
          })
  }

  const selectPage = (page) => {
    setPage(page)
  }

  const previousPage = () => {
    if(page >= 2) {
      setPage(page-1)
    }
  }

  const nextPage = () => {
    if(page <= 41) {
      setPage(page+1)
    }
  }

  return (
    <div className="container-fluid">
      <h1 className="text-center display-1 py-4">Rick and Morty Saludos Gonza</h1>
      <div className="container">
        {loading ? 'Cargando...' : <Content characters={characters} />}
        {loading ? '' : <Pagination numPages={numPages} selectPage={selectPage} previousPage={previousPage} nextPage={nextPage} actualPage={page} />}
      </div>
    </div>
  )
}

export default App
