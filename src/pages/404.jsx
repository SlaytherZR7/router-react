import { Link } from '../components/Link'

export default function NotFoundPage () {
  return (
    <>
      <Link to='/'>Go back to home</Link>
      <p>Page not found</p>
      <img src='../../page-not-found.svg' alt='Not found illustration' />
    </>
  )
}
