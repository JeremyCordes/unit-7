basic.forever(function () {
    for (let y3 = 0; y3 <= 4; y3++) {
        for (let x3 = 0; x3 <= 4; x3++) {
            led.plot(x3, y3)
            basic.pause(100)
        }
    }
    basic.pause(100)
    for (let y2 = 4; y2 >= 0; y2--) {
        for (let x2 = 4; x2 >= 0; x2--) {
            led.unplot(x2, y2)
            basic.pause(100)
        }
    }
})
