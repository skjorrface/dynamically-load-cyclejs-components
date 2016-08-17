import {div, input, p} from '@cycle/dom'
import isolate from '@cycle/isolate'

function Checkbox(sources) {
  let sinks = {
    DOM: sources.DOM.select(`input`).events(`change`)
      .map(ev => ev.target.checked)
      .startWith(false)
      .map(toggled =>
        div([
          input({attrs: {type: `checkbox`}}), `Toggle me`,
          p(toggled ? `ON` : `off`),
        ])
      ),
  }
  return sinks
}
export default sources => isolate(Checkbox)(sources)
