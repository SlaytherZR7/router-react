import { EVENTS } from '../utils/consts'

export function navigate (href) {
  window.history.pushState({}, '', href)
  const navEvent = new Event(EVENTS.PUSHSTATE)
  window.dispatchEvent(navEvent)
}

export function Link ({ target, to, ...props }) {
  const handleClick = (event) => {
    const isMainEvent = event.button === 0
    const isModifiedEvent = event.metaKey || event.altKey || event.ctrlKey || event.shiftKey
    const isManageableEvent = target === undefined || target === '_self'

    if (isMainEvent && !isModifiedEvent && isManageableEvent) {
      event.preventDefault()
      navigate(to)
      window.scrollTo(0, 0)
    }
  }

  return <a onClick={handleClick} href={to} target={target} {...props} />
}
