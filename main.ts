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
function 普通の信号機_初期値 () {
    普通の信号_初期値 = [
    0,
    1,
    0,
    0
    ]
}
input.onButtonPressed(Button.A, function () {
	
})
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
        } else if (false) {
        	
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
        a = 1
        serial.writeLine("now starting!")
        led.enable(false)
    }
}
function 初期待機状態 () {
	
}
function 普通の信号機_新 () {
    pins.digitalWritePin(DigitalPin.P2, 0)
    // hokohsya
    pins.digitalWritePin(DigitalPin.P7, 0)
    pins.digitalWritePin(DigitalPin.P0, 1)
    // hokohsya
    pins.digitalWritePin(DigitalPin.P6, 1)
    basic.pause(25000)
    // hokohsya
    for (let index = 0; index < 10; index++) {
        // hokohsya
        pins.digitalWritePin(DigitalPin.P6, 0)
        // hokohsya
        basic.pause(250)
        // hokohsya
        pins.digitalWritePin(DigitalPin.P6, 1)
        // hokohsya
        basic.pause(250)
    }
    // hokohsya
    pins.digitalWritePin(DigitalPin.P6, 0)
    // hokohsya
    pins.digitalWritePin(DigitalPin.P7, 1)
    basic.pause(5000)
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(3000)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
    basic.pause(3000)
    pins.digitalWritePin(DigitalPin.P10, 0)
    // hokohsya
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P8, 1)
    // hokohsya
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
    basic.pause(3000)
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P9, 1)
    basic.pause(3000)
    pins.digitalWritePin(DigitalPin.P9, 0)
    pins.digitalWritePin(DigitalPin.P10, 1)
    basic.pause(3000)
}
function 標準起動 () {
    let P15赤_東西_歩行者用 = 0
    let P14青_東西_歩行者用 = 0
    let P13右折矢印_東西_車両用 = 0
    let P12直進矢印_東西_車両用 = 0
    let P11左折矢印_東西_車両用 = 0
    let P10赤_東西_車両用 = 0
    let P09黄_東西_車両用 = 0
    let P08青_東西_車両用 = 0
    let P07赤_南北_歩行者用 = 0
    let P06青_南北_歩行者用 = 0
    let P05右折矢印_南北_車両用 = 0
    let P04直進矢印_南北_車両用 = 0
    let P03左折矢印_南北_車両用 = 0
    let P02赤_南北_車両用 = 0
    let P01黄_南北_車両用 = 0
    let P00青_南北_車両用 = 0
    led.enable(false)
    pins.digitalWritePin(DigitalPin.P0, P00青_南北_車両用)
    pins.digitalWritePin(DigitalPin.P1, P01黄_南北_車両用)
    pins.digitalWritePin(DigitalPin.P2, P02赤_南北_車両用)
    pins.digitalWritePin(DigitalPin.P3, P03左折矢印_南北_車両用)
    pins.digitalWritePin(DigitalPin.P4, P04直進矢印_南北_車両用)
    pins.digitalWritePin(DigitalPin.P5, P05右折矢印_南北_車両用)
    // hokohsya
    pins.digitalWritePin(DigitalPin.P6, P06青_南北_歩行者用)
    // hokohsya
    pins.digitalWritePin(DigitalPin.P7, P07赤_南北_歩行者用)
    pins.digitalWritePin(DigitalPin.P8, P08青_東西_車両用)
    pins.digitalWritePin(DigitalPin.P9, P09黄_東西_車両用)
    pins.digitalWritePin(DigitalPin.P10, P10赤_東西_車両用)
    pins.digitalWritePin(DigitalPin.P11, P11左折矢印_東西_車両用)
    pins.digitalWritePin(DigitalPin.P12, P12直進矢印_東西_車両用)
    pins.digitalWritePin(DigitalPin.P13, P13右折矢印_東西_車両用)
    // hokohsya
    pins.digitalWritePin(DigitalPin.P14, P14青_東西_歩行者用)
    // hokohsya
    pins.digitalWritePin(DigitalPin.P15, P15赤_東西_歩行者用)
    普通の信号機 = 1
}
let 普通の信号_初期値: number[] = []
let a = 0
let 普通の信号機 = 0
let モード切替 = 0
let モード = 0
let カスタム起動 = 0
serial.redirectToUSB()
let Nomal_Launch = 0
カスタム起動 = 0
モード = 0
モード切替 = 0
普通の信号機 = 0
a = 1
最初の確認()
モード選択()
basic.forever(function () {
    if (a > 0) {
        if (モード == 1) {
            標準起動()
            a = 0
        } else if (モード == 2) {
        	
        } else if (モード == 3) {
        	
        } else if (モード == 4) {
        	
        } else if (モード == 5) {
        	
        } else if (モード == 6) {
            カスタム起動 = 1
        } else {
            標準起動()
        }
    }
})
basic.forever(function () {
    if (普通の信号機 == 1) {
        普通の信号機_新()
    }
})
