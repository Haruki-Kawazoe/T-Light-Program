function 初期設定 () {
    led.enable(true)
    serial.redirectToUSB()
    radio.setGroup(1)
    basic.showString("This is Traffic Light for micro:bit !!BETA!! ")
}
function ボタンAが押されたとき () {
    動作開始 = 1
    led.enable(false)
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P3, 0)
    pins.digitalWritePin(DigitalPin.P4, 0)
    while (0 == 0) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        pins.digitalWritePin(DigitalPin.P3, 1)
        basic.pause(25000)
        for (let index = 0; index < 8; index++) {
            pins.digitalWritePin(DigitalPin.P3, 0)
            basic.pause(250)
            pins.digitalWritePin(DigitalPin.P3, 1)
            basic.pause(250)
        }
        pins.digitalWritePin(DigitalPin.P3, 0)
        pins.digitalWritePin(DigitalPin.P4, 1)
        basic.pause(1000)
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(3000)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(30000)
        pins.digitalWritePin(DigitalPin.P4, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
}
input.onButtonPressed(Button.A, function () {
    ボタンAが押されたとき()
})
input.onButtonPressed(Button.B, function () {
	
})
function 初期待機状態 () {
    if (動作開始 == 0) {
        while (0 == 0) {
            basic.showLeds(`
                # # # # #
                . # # # .
                . . # . .
                . . . . .
                . . . . .
                `)
            basic.pause(500)
            basic.showLeds(`
                # # # # #
                . # # # .
                . . . . .
                . . . . .
                . . # . .
                `)
            basic.pause(500)
            basic.showLeds(`
                # # # # #
                . # # . .
                . . . . .
                . . . . .
                . # # . .
                `)
            basic.pause(500)
            basic.showLeds(`
                # # # # #
                . . # . .
                . . . . .
                . . . . .
                . # # # .
                `)
            basic.pause(500)
            basic.showLeds(`
                # # # # #
                . . . . .
                . . . . .
                . . # . .
                . # # # .
                `)
            basic.pause(500)
            basic.showLeds(`
                # # # # .
                . . . . .
                . . . . .
                . # # . .
                . # # # .
                `)
            basic.pause(500)
            basic.showLeds(`
                . # # # .
                . . . . .
                . . . . .
                . # # # .
                . # # # .
                `)
            basic.pause(500)
            basic.showLeds(`
                . # # . .
                . . . . .
                . . . . .
                . # # # .
                # # # # .
                `)
            basic.pause(500)
            basic.showLeds(`
                . . # . .
                . . . . .
                . . . . .
                . # # # .
                # # # # #
                `)
            basic.pause(500)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . # # # .
                # # # # #
                `)
            basic.pause(500)
            for (let index = 0; index < 2; index++) {
                basic.showLeds(`
                    # # # # #
                    # # # # #
                    # # # # #
                    # # # # #
                    # # # # #
                    `)
                basic.pause(100)
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    `)
                basic.pause(100)
            }
            basic.pause(500)
        }
    } else if (動作開始 == 1) {
        led.enable(false)
    }
}
function ボタンBが押されたとき () {
	
}
let 動作開始 = 0
初期設定()
初期待機状態()
basic.forever(function () {
	
})
