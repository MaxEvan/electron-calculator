const calculator = {

    result: '0',

    currentBuffer: '',

    lastButtonPressed: '',

    signs: '+-*/',

    init: function() {
        this.events()
        this.render(this.result)
    },

    events: function() {
        let buttons = document.querySelectorAll('.button')
        let that = this

        buttons.forEach(function(x, y) {
            let hasValue = x.getAttribute('data-value')

            if(hasValue){
                x.addEventListener('click', function(event) {
                    let currentValue = event.target.getAttribute('data-value')

                    switch(currentValue) {
                        case 'clear':
                            that.currentBuffer = ''
                            that.toggleClearButton()
                            that.render('')
                            that.lastButtonPressed = ''
console.log(calculator)
                            break

                        case 'all-clear':
                            that.result = '0'
                            that.currentBuffer = ''
                            that.render(that.result)
                            that.lastButtonPressed = ''
console.log(calculator)
                            break

                        case '.':
                            if(that.currentBuffer === '') {
                                that.currentBuffer += '0'
                            }

                            if(that.lastButtonPressed == '.' && that.currentBuffer.indexOf('.') != -1) {
                                break
                            }

                        case '+':
                        case '-':
                        case '/':
                        case '*':

                        if(that.currentBuffer == '') {
                            return false
                        }

                        if(that.currentBuffer.indexOf(currentValue) != -1) {
                            return false
                        }

                        if(that.signs.indexOf(that.lastButtonPressed) == -1) {
                            that.currentBuffer += currentValue
                        } else {
                            that.currentBuffer = that.currentBuffer.slice(0, that.currentBuffer.length -1) + currentValue
                        }

                        that.lastButtonPressed = currentValue
console.log(calculator)
                        return false

                        case '=':
                            that.result = eval(that.currentBuffer)
                            that.currentBuffer = that.result.toString()
                            that.render(that.result)
                            break

                        default:
                            that.currentBuffer += currentValue
                            that.lastButtonPressed = currentValue

                            if(document.getElementById('clear').getAttribute('data-value') === 'all-clear'){
                                that.toggleClearButton()
                            }

                            that.render(that.currentBuffer)
console.log(calculator)
                    }

                })
            }
        })
    },

    render: function (value) {
        let result = document.getElementById('result')
        result.innerHTML = value
    },

    toggleClearButton: function() {
        let clearButton = document.getElementById('clear')
        let value = clearButton.getAttribute('data-value')

        if(value === 'clear') {
            clearButton.innerHTML = 'AC'
            clearButton.setAttribute('data-value', 'all-clear')
        } else {
            clearButton.innerHTML = 'C'
            clearButton.setAttribute('data-value', 'clear')
        }
    }
}
