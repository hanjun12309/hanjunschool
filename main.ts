radio.onReceivedNumber(function (receivedNumber) {
	
})
input.onButtonPressed(Button.A, function () {
    호감도 += randint(0, 3)
    if (10 <= 호감도) {
        for (let index = 0; index < 2; index++) {
            basic.showIcon(IconNames.Heart)
            basic.clearScreen()
        }
    } else {
        for (let index = 0; index < 2; index++) {
            basic.showIcon(IconNames.SmallHeart)
            basic.clearScreen()
        }
    }
    radio.sendNumber(1)
    basic.pause(3000)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(2)
    while (true) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            # . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            # . # . #
            . . . . .
            . . . . .
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (호감도))
    basic.clearScreen()
    basic.pause(100)
})
let 호감도 = 0
호감도 = 0
radio.setGroup(10)
