const Calc = class {
  #xInput
  #yInput
  #output
  xName = 'xInput'
  yName = 'yInput'

  constructor(xInput, yInput, output) {
    this.#xInput = xInput
    this.#yInput = yInput
    this.#output = output
  }

  render(result) {
    this.#output.innerText = String(result)
  }
}

const CalcValue = class {
  #calc
  #x
  #y
  #result

  constructor(calc, x, y) {
    this.#calc = calc
    this.#x = x
    this.#y = y
    this.result = x + y
  }

  copyWith(name, value) {
    const number = parseFloat(value)

    if (isNaN(number) || !isFinite(number)) return this

    if (name === Calc.xName) return new CalcValue(this.calc, number, this.y)

    if (name === Calc.yName) return new CalcValue(this.calc, this.x, number)

    return this
  }

  render() {
    this.#calc.render(this.#result)
  }
}

const initCalc = el => {
  const calc = new Calc(
    el.querySelector('input.calc-x-input'),
    el.querySelector('input.calc-y-input'),
    el.querySelector('span.calc-result')
  )
  const lastValues = new CalcValue(
    calc,
    parseFloat(calc.xInput.value),
    parseFloat(calc.yInput.value)
  )
  const handleCalcEvent = e => {
    const newValues = lastValues,
      target = e.target

    switch (target) {
      case calc.xInput:
        newValues = lastValues.copyWith(Calc.xName)
    }
  }
}
