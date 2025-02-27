import { useEffect } from 'react'
import { Link } from '../components/Link'

export default function SearchPage ({ routeParams }) {
  useEffect(() => {
    document.title = `Has buscado ${routeParams.query}`
  }, [])

  return (
    <>
      <h1>Search Page</h1>
      <p>Has buscado <strong>{routeParams.query}</strong></p>
      <Link to='/'>Volver al home</Link>
    </>
  )
}
