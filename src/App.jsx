import { Router } from './components/Router'
import HomePage from './pages/Home'
import AboutPage from './pages/About'
import SearchPage from './pages/Search'
import NotFoundPage from './pages/404'
import { Route } from './components/Route'

const appRoutes = [
  { path: '/', Component: HomePage },
  { path: '/about', Component: AboutPage },
  { path: '/search', Component: SearchPage }
]

function App () {
  return (
    <main>
      <Router routes={appRoutes} defaultComponent={NotFoundPage}>
        <Route path='/' Component={HomePage} />
        <Route path='/about' Component={AboutPage} />
      </Router>
    </main>
  )
}

export default App
