import {div, label, input, hr, h1} from '@cycle/dom'
import isolate from '@cycle/isolate'

function HelloWorld(sources) {
  return {
    DOM: sources.DOM.select(`.myinput`).events(`input`)
      .map(ev => ev.target.value)
      .startWith(``)
      .map(name =>
        div([
          label(`Name:`),
          input(`.myinput`, {attrs: {type: `text`}}),
          hr(),
          h1(`Hello ${name}`),
        ])
      ),
  }
}

export default sources => isolate(HelloWorld)(sources)
