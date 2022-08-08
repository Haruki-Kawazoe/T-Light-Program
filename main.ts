function リレー起動 () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 1)
    pins.digitalWritePin(DigitalPin.P3, 1)
    pins.digitalWritePin(DigitalPin.P4, 1)
    pins.digitalWritePin(DigitalPin.P5, 1)
    pins.digitalWritePin(DigitalPin.P6, 1)
    pins.digitalWritePin(DigitalPin.P7, 1)
    pins.digitalWritePin(DigitalPin.P8, 1)
    pins.digitalWritePin(DigitalPin.P9, 1)
    pins.digitalWritePin(DigitalPin.P10, 1)
    pins.digitalWritePin(DigitalPin.P11, 1)
    pins.digitalWritePin(DigitalPin.P12, 1)
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 1)
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P3, 0)
    pins.digitalWritePin(DigitalPin.P4, 0)
    pins.digitalWritePin(DigitalPin.P5, 0)
    pins.digitalWritePin(DigitalPin.P6, 0)
    pins.digitalWritePin(DigitalPin.P7, 0)
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P9, 0)
    pins.digitalWritePin(DigitalPin.P10, 0)
    pins.digitalWritePin(DigitalPin.P11, 0)
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
}
function 初期設定 () {
    serial.redirectToUSB()
    Nomal_Launch = 0
    カスタム起動 = 0
    モード = 0
    モード切替 = 0
    普通の信号機 = 0
    a = 1
    変換_秒 = 1000
    radio.setGroup(1)
    点滅間隔 = 250
}
function 最初の確認 () {
    if (pins.digitalReadPin(DigitalPin.P16) == 0) {
        モード切替 = 0
        led.enable(false)
        a = 1
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
    let 普通の信号_初期値: number[] = []
    東西開始から点滅_待ち時間_歩行者用 = 30
    南北開始から点滅_待ち時間_歩行者用 = 30
    東西点滅回数 = 普通の信号_初期値[19]
    南北点滅回数 = 普通の信号_初期値[20]
    東西歩行者用赤から車両用黄 = 普通の信号_初期値[21]
    南北歩行者用赤から車両用黄 = 普通の信号_初期値[22]
    東西車両用黄から車両用赤 = 普通の信号_初期値[23]
    南北車両用黄から車両用赤 = 普通の信号_初期値[24]
    東西赤から南北青 = 普通の信号_初期値[25]
    南北赤から東西青 = 普通の信号_初期値[26]
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
    a = 1
}
serial.onDataReceived("reset", function () {
    serial.writeLine("now reset!")
    control.reset()
})
function 普通の信号機_新 () {
    P10赤_東西_車両用 = 1
    P14青_東西_歩行者用 = 1
    P00青_南北_車両用 = 1
    P06青_南北_歩行者用 = 1
    basic.pause(南北開始から点滅_待ち時間_歩行者用 * 変換_秒)
    // hokohsya
    for (let index = 0; index < 南北点滅回数; index++) {
        P06青_南北_歩行者用 = 0
        // hokohsya
        basic.pause(点滅間隔)
        P06青_南北_歩行者用 = 1
        // hokohsya
        basic.pause(点滅間隔)
    }
    P06青_南北_歩行者用 = 0
    P07赤_南北_歩行者用 = 1
    basic.pause(南北歩行者用赤から車両用黄 * 変換_秒)
    P00青_南北_車両用 = 0
    P01黄_南北_車両用 = 1
    basic.pause(南北車両用黄から車両用赤 * 変換_秒)
    P01黄_南北_車両用 = 0
    P02赤_南北_車両用 = 1
    basic.pause(南北赤から東西青 * 変換_秒)
    P10赤_東西_車両用 = 0
    P15赤_東西_歩行者用 = 0
    P08青_東西_車両用 = 1
    P14青_東西_歩行者用 = 1
    basic.pause(東西開始から点滅_待ち時間_歩行者用 * 変換_秒)
    // hokohsya
    for (let index = 0; index < 東西点滅回数; index++) {
        P14青_東西_歩行者用 = 0
        // hokohsya
        basic.pause(点滅間隔)
        P14青_東西_歩行者用 = 1
        // hokohsya
        basic.pause(点滅間隔)
    }
    P14青_東西_歩行者用 = 0
    P15赤_東西_歩行者用 = 1
    basic.pause(東西歩行者用赤から車両用黄 * 変換_秒)
    P08青_東西_車両用 = 0
    P09黄_東西_車両用 = 1
    basic.pause(東西車両用黄から車両用赤 * 変換_秒)
    P09黄_東西_車両用 = 0
    P10赤_東西_車両用 = 1
    basic.pause(東西赤から南北青 * 変換_秒)
}
function 標準起動 () {
    led.enable(false)
    普通の信号機_初期値()
    while (モード == 1) {
        普通の信号機_新()
    }
}
let P09黄_東西_車両用 = 0
let P08青_東西_車両用 = 0
let P15赤_東西_歩行者用 = 0
let P02赤_南北_車両用 = 0
let P01黄_南北_車両用 = 0
let P07赤_南北_歩行者用 = 0
let P06青_南北_歩行者用 = 0
let P00青_南北_車両用 = 0
let P14青_東西_歩行者用 = 0
let P10赤_東西_車両用 = 0
let 南北赤から東西青 = 0
let 東西赤から南北青 = 0
let 南北車両用黄から車両用赤 = 0
let 東西車両用黄から車両用赤 = 0
let 南北歩行者用赤から車両用黄 = 0
let 東西歩行者用赤から車両用黄 = 0
let 南北点滅回数 = 0
let 東西点滅回数 = 0
let 南北開始から点滅_待ち時間_歩行者用 = 0
let 東西開始から点滅_待ち時間_歩行者用 = 0
let 点滅間隔 = 0
let 変換_秒 = 0
let a = 0
let 普通の信号機 = 0
let モード切替 = 0
let モード = 0
let カスタム起動 = 0
let Nomal_Launch = 0
初期設定()
最初の確認()
モード選択()
リレー起動()
basic.forever(function () {
    if (a > 0) {
        if (モード == 1) {
            普通の信号機 = 1
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
    if (P00青_南北_車両用 == 1) {
        pins.digitalWritePin(DigitalPin.P0, 1)
    }
})
basic.forever(function () {
    if (P01黄_南北_車両用 == 1) {
        pins.digitalWritePin(DigitalPin.P1, 1)
    }
})
basic.forever(function () {
    if (P02赤_南北_車両用 == 1) {
        pins.digitalWritePin(DigitalPin.P2, 1)
    }
})
basic.forever(function () {
    let P03左折矢印_南北_車両用 = 0
    if (P03左折矢印_南北_車両用 == 1) {
        pins.digitalWritePin(DigitalPin.P3, 1)
    }
})
basic.forever(function () {
    let P04直進矢印_南北_車両用 = 0
    if (P04直進矢印_南北_車両用 == 1) {
        pins.digitalWritePin(DigitalPin.P4, 1)
    }
})
basic.forever(function () {
    let P05右折矢印_南北_車両用 = 0
    if (P05右折矢印_南北_車両用 == 1) {
        pins.digitalWritePin(DigitalPin.P5, 1)
    }
})
basic.forever(function () {
    if (P06青_南北_歩行者用 == 1) {
        pins.digitalWritePin(DigitalPin.P6, 1)
    }
})
basic.forever(function () {
    if (P07赤_南北_歩行者用 == 1) {
        pins.digitalWritePin(DigitalPin.P7, 1)
    }
})
basic.forever(function () {
    if (P08青_東西_車両用 == 1) {
        pins.digitalWritePin(DigitalPin.P8, 1)
    }
})
basic.forever(function () {
    if (P08青_東西_車両用 == 1) {
        pins.digitalWritePin(DigitalPin.P8, 1)
    }
})
basic.forever(function () {
    if (P09黄_東西_車両用 == 1) {
        pins.digitalWritePin(DigitalPin.P9, 1)
    }
})
basic.forever(function () {
    if (P10赤_東西_車両用 == 1) {
        pins.digitalWritePin(DigitalPin.P10, 1)
    }
})
basic.forever(function () {
    let P11左折矢印_東西_車両用 = 0
    if (P11左折矢印_東西_車両用 == 1) {
        pins.digitalWritePin(DigitalPin.P11, 1)
    }
})
basic.forever(function () {
    let P12直進矢印_東西_車両用 = 0
    if (P12直進矢印_東西_車両用 == 1) {
        pins.digitalWritePin(DigitalPin.P12, 1)
    }
})
basic.forever(function () {
    let P13右折矢印_東西_車両用 = 0
    if (P13右折矢印_東西_車両用 == 1) {
        pins.digitalWritePin(DigitalPin.P13, 1)
    }
})
basic.forever(function () {
    if (P15赤_東西_歩行者用 == 1) {
        pins.digitalWritePin(DigitalPin.P15, 1)
    }
})
basic.forever(function () {
    if (P14青_東西_歩行者用 == 1) {
        pins.digitalWritePin(DigitalPin.P14, 1)
    }
})
