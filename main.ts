let start = 0
let elpsed = 0
input.onButtonPressed(Button.A, function () {
    start = input.runningTime()
})
input.onButtonPressed(Button.B, function () {
    elpsed = input.runningTime() - start
    basic.showNumber(Math.idiv(elpsed, 1000))
})
basic.forever(function () {
	
})
