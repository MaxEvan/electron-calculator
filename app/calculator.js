const calculator = {
    result: "10",
    currentNumber: null,
    lastButton: null,
    init: function() {
        this.events()
        this.render()
    },
    events: function() {
        let buttons = document.querySelectorAll('.button')
        let that = this

        buttons.forEach(function(x, y) {
            let value = x.getAttribute('data-button')
            let clearButton = document.getElementById('clear')

            if(value){
                x.addEventListener('click', function(event) {
                    if(clearButton.getAttribute('data-button') === 'all-clear' && value !== 'all-clear') {
                        clearButton.setAttribute('data-button', 'clear')
                        clearButton.innerHTML = 'C'
                    }

                    switch(value) {
                        case 'all-clear':
                            that.result = 0
                            that.lastButton = null
                            that.currentNumber = null

                        case 'clear':
                            that.lastButton = null
                            that.currentNumber = null

                        // case 'equals'

                        default:


                    }
                    that.render()
                })
            }
        })
    },
    render: function () {
        let result = document.getElementById('result')
        result.innerHTML = calculator.result
    }
}
