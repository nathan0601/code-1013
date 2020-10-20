basic.forever(function () {
    for (let y = 0; y <= 4; y++) {
        for (let x = 0; x <= 4; x++) {
            led.plot(x, y)
            basic.pause(200)
        }
    }
    basic.pause(200)
    for (let x = 0; x <= 4; x++) {
        led.unplot(Math.abs(x - 4), 4)
        basic.pause(200)
    }
    for (let x2 = 0; x2 <= 4; x2++) {
        led.unplot(x2, 3)
        basic.pause(200)
    }
    for (let x3 = 0; x3 <= 4; x3++) {
        led.unplot(Math.abs(x3 - 4), 2)
        basic.pause(200)
    }
    for (let x4 = 0; x4 <= 4; x4++) {
        led.unplot(x4, 1)
        basic.pause(200)
    }
    for (let x5 = 0; x5 <= 4; x5++) {
        led.unplot(Math.abs(x5 - 4), 0)
        basic.pause(200)
    }
    basic.clearScreen()
})
