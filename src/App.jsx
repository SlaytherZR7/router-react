import { HomePage } from './pages/Home'
import { AboutPage } from './pages/About'
import { SearchPage } from './pages/Search'
import { NotFoundPage } from './pages/404'

const App = () => {
  return (
    <main>
      <HomePage />
      <AboutPage />
      <SearchPage />
      <NotFoundPage />
    </main>
  )
}

export default App
