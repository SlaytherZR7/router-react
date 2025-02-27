import { lazy, Suspense } from 'react'
import { Router } from './components/Router'
import { Route } from './components/Route'
import HomePage from './pages/Home'
import AboutPage from './pages/About'
import SearchPage from './pages/Search'
import NotFoundPage from './pages/404'

const LazyHomePage = lazy(() => import('./pages/Home'))
const LazyAboutPage = lazy(() => import('./pages/About'))

const appRoutes = [
  { path: '/', Component: HomePage },
  { path: '/about', Component: AboutPage },
  { path: '/search', Component: SearchPage }
]

function App () {
  return (
    <main>
      <Suspense fallback={null}>
        <Router routes={appRoutes} defaultComponent={NotFoundPage}>
          <Route path='/' Component={LazyHomePage} />
          <Route path='/about' Component={LazyAboutPage} />
        </Router>
      </Suspense>
    </main>
  )
}

export default App
