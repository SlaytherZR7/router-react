import { EVENTS } from '../utils/consts'

export function navigate (href) {
  window.history.pushState({}, '', href)
  const navEvent = new Event(EVENTS.PUSHSTATE)
  window.dispatchEvent(navEvent)
}

export function Link ({ targer, to, ...props }) {}
