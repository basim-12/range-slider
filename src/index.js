module.exports = myComponent

function myComponent() {
    const el = document.createElement('div') 
    el.classList.add('container')

    const shadow = el.attachShadow({ mode: 'closed' })
    
    input = document.createElement('input')
    input.type = 'range'

    style = document.createElement('style')
    style.textContent = get_theme()

    shadow.append(style, input)
    return el
}

function get_theme() {
    return `
        :host(.container) {
            background-color: green;
        }

        input {
            width: 60%;
        }
    `
}