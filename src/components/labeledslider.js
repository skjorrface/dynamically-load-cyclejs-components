import most from 'most'
import {div, span, input} from '@cycle/dom'
import isolate from '@cycle/isolate'

function LabeledSlider({DOM, props$}) {
  let initialValue$ = props$.map(props => props.initial).take(1)
  let newValue$ = DOM.select(`.slider`).events(`input`)
    .map(ev => ev.target.value)
  let value$ = most.merge(initialValue$, newValue$)

  let vtree$ = most.combine(
    (props, value) =>
      div(`.labeled-slider`, [
        span(`.label`, [`${props.label} ${value} ${props.unit}`]),
        input(`.slider`, {
          attrs: {type: `range`, min: props.min, max: props.max, value: value},
        }),
      ]),
    props$, value$)

  return {
    DOM: vtree$,
    value$: value$,
  }
}

export default sources => isolate(LabeledSlider)(sources)
