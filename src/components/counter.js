import most from 'most'
import {div, button, p} from '@cycle/dom'
import isolate from '@cycle/isolate'

function Counter(sources) {
  let action$ = most.merge(
    sources.DOM.select(`.decrement`).events(`click`).map(() => -1),
    sources.DOM.select(`.increment`).events(`click`).map(() => +1)
  )
  let count$ = action$.scan((x,y) => x + y, 0)
  return {
    DOM: count$.map(count =>
        div([
          button(`.decrement`, `Decrement`),
          button(`.increment`, `Increment`),
          p(`Counter: ${count}`),
        ])
      ),
  }
}

export default sources => isolate(Counter)(sources)
