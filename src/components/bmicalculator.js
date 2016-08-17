import most from 'most'
import {h2, div} from '@cycle/dom'
import isolate from '@cycle/isolate'
import LabeledSlider from './labeledslider'

function BmiCalculator({DOM}) {
  let WeightSlider = LabeledSlider
  let HeightSlider = LabeledSlider

  let weightProps$ = most.of({
    label: `Weight`, unit: `kg`, min: 40, initial: 70, max: 140,
  })
  let heightProps$ = most.of({
    label: `Height`, unit: `cm`, min: 140, initial: 170, max: 210,
  })

  let weightSlider = WeightSlider({DOM, props$: weightProps$})
  let heightSlider = HeightSlider({DOM, props$: heightProps$})

  let bmi$ = most.combine((weight, height) => {
    let heightMeters = height * 0.01
    let bmi = Math.round(weight / (heightMeters * heightMeters))
    return bmi
  },
    weightSlider.value$, heightSlider.value$
  )

  return {
    DOM: most.combine((bmi, weightVTree, heightVTree) =>
      div([
        weightVTree,
        heightVTree,
        h2(`BMI is ${bmi}`),
      ]),
    bmi$, weightSlider.DOM, heightSlider.DOM
  ),
  }
}

export default sources => isolate(BmiCalculator)(sources)
