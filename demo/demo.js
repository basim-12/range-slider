const rangeSlider = require('..')

const range = rangeSlider({ min: 0, max: 10 })

document.body.innerHTML = `
    <h1> Range Slider </h1>
`

const main = document.createElement('div')
main.classList.add('demo')

const style = document.createElement('style')
style.textContent = `
    .demo {
        padding: 50px;
    }
`
main.append(style, range)

document.body.append(main)