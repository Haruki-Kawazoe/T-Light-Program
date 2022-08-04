function 初期設定 () {
    serial.redirectToUSB()
    radio.setGroup(1)
    basic.showString("This is Traffic Light for micro:bit !!BETA!! ")
}
function 点滅信号 () {
    モード = 2
    led.enable(false)
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    // hokohsya
    pins.digitalWritePin(DigitalPin.P3, 0)
    // hokohsya
    pins.digitalWritePin(DigitalPin.P4, 0)
    while (モード == 2) {
        pins.digitalWritePin(DigitalPin.P0, 2)
        pins.digitalWritePin(DigitalPin.P0, 2)
    }
}
function 最初の確認 () {
    if (pins.digitalReadPin(DigitalPin.P16) == 0) {
        モード切替 = 0
        led.enable(false)
        モード = 1
    } else if (pins.digitalReadPin(DigitalPin.P16) == 1) {
        モード切替 = 1
        led.enable(true)
        if (カスタム起動 == 1) {
            serial.writeLine("Sorry!!No program now. Coming soon!")
            serial.writeLine("nomalstart")
            モード = 1
        }
    }
}
function Please_select_from_below () {
    serial.writeLine("Please select from below")
    serial.writeLine("")
    serial.writeLine("{1} Nomal Traffic Lighit(N)")
    serial.writeLine("{2} Y and R Traffic Lighit(YR)")
    serial.writeLine("{3} All ON Traffic Lighit(A)")
    serial.writeLine("{4} Button Traffic Lighit(B)")
    serial.writeLine("{5} staggered Traffic Lighit(S)")
    serial.writeLine("{6} Custom Traffic Lighit(C)")
}
input.onButtonPressed(Button.B, function () {
	
})
function モード選択 () {
    if (モード切替 == 1) {
        serial.writeLine("Launch mode setup")
        basic.pause(5000)
        Please_select_from_below()
        basic.pause(10000)
        if (serial.readLine() == "1" || serial.readLine() == "N") {
            モード = 1
            basic.showNumber(モード)
            serial.writeLine("Sure")
        } else if (serial.readLine() == "2" || serial.readLine() == "YR") {
            モード = 2
            basic.showNumber(モード)
            serial.writeLine("Sure")
        } else if (serial.readLine() == "3" || serial.readLine() == "A") {
            モード = 3
            basic.showNumber(モード)
            serial.writeLine("Sure")
        } else if (serial.readLine() == "4" || serial.readLine() == "B") {
            モード = 4
            basic.showNumber(モード)
            serial.writeLine("Sure")
        } else if (serial.readLine() == "5" || serial.readLine() == "S") {
            モード = 5
            basic.showNumber(モード)
            serial.writeLine("Sure")
        } else if (serial.readLine() == "6" || serial.readLine() == "C") {
            モード = 6
            serial.writeLine("Sure Please customize")
        } else {
            モード = 1
            serial.writeLine("No input")
        }
        serial.writeLine("now starting!")
        led.enable(false)
    } else if (モード切替 == 0) {
        モード = 1
        serial.writeLine("now starting!")
        led.enable(false)
    } else {
        モード = 1
        serial.writeLine("now starting!")
        led.enable(false)
    }
}
function 普通の信号機南北 () {
    if (普通の信号機 == 1) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        // hokohsya
        pins.digitalWritePin(DigitalPin.P3, 1)
        basic.pause(25000)
        // hokohsya
        for (let index = 0; index < 10; index++) {
            // hokohsya
            pins.digitalWritePin(DigitalPin.P3, 0)
            // hokohsya
            basic.pause(250)
            // hokohsya
            pins.digitalWritePin(DigitalPin.P3, 1)
            // hokohsya
            basic.pause(250)
        }
        // hokohsya
        pins.digitalWritePin(DigitalPin.P3, 0)
        // hokohsya
        pins.digitalWritePin(DigitalPin.P4, 1)
        basic.pause(4000)
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(3000)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(40000)
        pins.digitalWritePin(DigitalPin.P2, 0)
        // hokohsya
        pins.digitalWritePin(DigitalPin.P4, 0)
    }
}
function 初期待機状態 () {
    if (モード == 0) {
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
    }
}
function 普通の信号機東西 () {
    if (普通の信号機 == 1) {
        pins.digitalWritePin(DigitalPin.P10, 1)
        // hokohsya
        pins.digitalWritePin(DigitalPin.P15, 1)
        basic.pause(40000)
        pins.digitalWritePin(DigitalPin.P8, 1)
        pins.digitalWritePin(DigitalPin.P14, 1)
        basic.pause(25000)
        // hokohsya
        for (let index = 0; index < 10; index++) {
            // hokohsya
            pins.digitalWritePin(DigitalPin.P14, 0)
            // hokohsya
            basic.pause(250)
            // hokohsya
            pins.digitalWritePin(DigitalPin.P14, 1)
            // hokohsya
            basic.pause(250)
        }
        // hokohsya
        pins.digitalWritePin(DigitalPin.P14, 0)
        // hokohsya
        pins.digitalWritePin(DigitalPin.P15, 1)
        basic.pause(4000)
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P9, 1)
        basic.pause(3000)
        pins.digitalWritePin(DigitalPin.P9, 0)
        pins.digitalWritePin(DigitalPin.P10, 1)
        basic.pause(40000)
    }
}
function 標準起動 () {
    モード = 1
    led.enable(false)
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    // hokohsya
    pins.digitalWritePin(DigitalPin.P3, 0)
    // hokohsya
    pins.digitalWritePin(DigitalPin.P4, 0)
    普通の信号機 = 1
}
let 普通の信号機 = 0
let モード切替 = 0
let モード = 0
let カスタム起動 = 0
serial.redirectToUSB()
let Nomal_Launch = 0
カスタム起動 = 0
モード = 0
モード切替 = 0
最初の確認()
モード選択()
basic.forever(function () {
	
})
basic.forever(function () {
    if (モード == 1) {
        標準起動()
    } else if (モード == 2) {
    	
    } else if (モード == 3) {
    	
    } else if (モード == 4) {
    	
    } else if (モード == 5) {
    	
    } else if (モード == 6) {
        カスタム起動 = 1
    } else {
        標準起動()
    }
})
