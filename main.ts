basic.forever(function () {
    for (let x = 0; x <= 4; x++) {
        led.plot(Math.abs(x - 4), 4)
        basic.pause(100)
    }
    for (let x = 0; x <= 4; x++) {
        led.plot(x, 3)
        basic.pause(100)
    }
    for (let x = 0; x <= 4; x++) {
        led.plot(Math.abs(x - 4), 2)
        basic.pause(100)
    }
    for (let x = 0; x <= 4; x++) {
        led.plot(x, 1)
        basic.pause(100)
    }
    for (let x = 0; x <= 4; x++) {
        led.plot(Math.abs(x - 4), 4)
        basic.pause(100)
    }
    basic.clearScreen()
})
