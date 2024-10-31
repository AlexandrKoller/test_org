export default class Widget {
    constructor(element, vps, validator){
        this.element = element
        this.vps = vps
        this.validator = validator
        this.activeIcon = this.activeIcon.bind(this)
        this.message =  this.message.bind(this)
    }
    createWidget(){
        const iconContainer = document.createElement('div')
        iconContainer.className = 'icon-container'
        for (let index = 0; index < 5;) {
            const div = document.createElement('div')
            div.classList.add('icon')
            const img = document.createElement('img')
            // img.src = require(`../images/s${index}.png`)
            img.alt = 'pay sistem'
            img.classList.add(`s${index}`, 'ps', 'disabled')
            div.append(img)
            iconContainer.append(div)
            index++
        }
        this.element.append(iconContainer)
        const form = document.createElement('form')
        const label = document.createElement('label')
        label.classList.add('label')
        label.textContent = 'Номер карты'
        const input = document.createElement('input')
        input.className = 'card-number'
        input.type = 'tel'
        input.maxLength = 22
        input.syze = '16'
        label.append(input)
        form.append(label)
        const button = document.createElement('button')
        button.className = 'submit'
        button.textContent = 'Ok'
        form.append(button)
        this.element.append(form)
        this.input = input
        this.button = button
        this.input.addEventListener('input', this.activeIcon)
        this.button.addEventListener('click', this.message)
    }
    addSrcIcon() {
        for (let index = 0; index < 5;) {
            const img = this.element.querySelector(`.s${index}`)
            img.src = require(`../images/s${index}.png`)
            index++
        }
    }
    activeIcon() {
        const icons = this.element.querySelectorAll('.ps')
        for (let icon of icons) {
            icon.classList.add('disabled')
        }
        const number = this.input.value
        if (number[0] == 2) {
            this.element.querySelector('.s0').classList.remove('disabled')
        }
        if (number[0] == 3) {
            this.element.querySelector('.s1').classList.remove('disabled')
        }
        if (number[0] == 4) {
            this.element.querySelector('.s2').classList.remove('disabled')
        }
        if (number[0] == 5) {
            this.element.querySelector('.s3').classList.remove('disabled')
        }
        if (number[0] == 6) {
            this.element.querySelector('.s4').classList.remove('disabled')
        }
    }

    message(event) {
         event.preventDefault()
        const number = this.input.value
        const paySystem = this.vps(number[0])
        if (this.element.querySelector('.message') !== null) {
            this.element.lastChild.remove()
        }
        if (this.validator(number)) {
            const span = document.createElement('span')
            span.classList.add('message', 'true')
            span.textContent = `Номер карты ${paySystem} принят`
            this.element.append(span)
        } else {
            const span = document.createElement('span')
            span.classList.add('message', 'false')
            span.textContent = 'Неверный номер'
            this.element.append(span)
        }
    }
}