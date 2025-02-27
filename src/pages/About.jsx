import { Link } from '../components/Link'

const i18n = {
  es: {
    title: 'Acerca de',
    button: 'Ir al Home',
    description: 'Esta es la página de acerca de.'
  },
  en: {
    title: 'About',
    button: 'Go to Home',
    description: 'This is the about page.'
  }
}

const useI18n = (lang) => {
  return i18n[lang] || i18n.en
}

export default function AboutPage ({ routeParams }) {
  const i18n = useI18n(routeParams.lang ?? 'es')

  return (
    <>
      <h1>{i18n.title}</h1>
      <p>{i18n.description}</p>
      <Link to='/'>{i18n.button}</Link>
    </>
  )
}
