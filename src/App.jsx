import { Router } from './components/Router'
import HomePage from './pages/Home'
import AboutPage from './pages/About'
import SearchPage from './pages/Search'
import NotFoundPage from './pages/404'

const appRoutes = [
  { path: '/', Component: HomePage },
  { path: '/about', Component: AboutPage },
  { path: '/search', Component: SearchPage }
]

function App () {
  return (
    <main>
      <Router routes={appRoutes} defaultComponent={NotFoundPage} />
    </main>
  )
}

export default App
