import Cycle from '@cycle/most-run'
import {makeDOMDriver, button, div, h4, h5, hr} from '@cycle/dom'
import most from 'most'

const componentNames = [
  `helloworld`,
  `counter`,
  `checkbox`,
  `bmicalculator`,
]
const randomComponentName = () => componentNames[
  Math.floor(Math.random() * componentNames.length)]

const drivers = {
  DOM: makeDOMDriver(`#app`),
}

const loadComponent = (componentName, sources) =>
  most.fromPromise(
    System.import(`./components/${componentName}`)
      .then(Component => Component.default(sources).DOM))
  .chain(flattenToComponent => flattenToComponent)

function main(sources) {
  const intent = () => sources.DOM.select(`.component-loader`).events(`click`)
  const model = intent$ => intent$
    .chain(() => most.combine(
      (componentLoader, component) => div([componentLoader, component]),
      most.of(
        div([
          hr(),
          h4(`Click the button below to dynamically load a random component`),
          button(`.component-loader`, `Load component`),
          hr(),
          h5(`Random component:`),
        ])
      ),
      loadComponent(randomComponentName(), sources)
    ))

  const view = model$ => model$.startWith(
    div([
      hr(),
      h4(`Click the button below to dynamically load a random component`),
      button(`.component-loader`, `Load component`),
      hr(),
      h5(`Random component:`),
    ])
  )

  const sinks = {
    DOM: view(model(intent(sources))),
  }
  return sinks
}
Cycle.run(main, drivers)
