モード = 0
モード切替 = 0
カスタム起動 = 0
普通の信号機 = 0
def 初期設定():
    serial.redirect_to_usb()
    radio.set_group(1)
    basic.show_string("This is Traffic Light for micro:bit !!BETA!! ")
def 点滅信号():
    global モード
    モード = 2
    led.enable(False)
    pins.digital_write_pin(DigitalPin.P0, 0)
    pins.digital_write_pin(DigitalPin.P1, 0)
    pins.digital_write_pin(DigitalPin.P2, 0)
    # hokohsya
    pins.digital_write_pin(DigitalPin.P3, 0)
    # hokohsya
    pins.digital_write_pin(DigitalPin.P4, 0)
    while モード == 2:
        pins.digital_write_pin(DigitalPin.P0, 2)
        pins.digital_write_pin(DigitalPin.P0, 2)
def 最初の確認():
    global モード切替, モード
    if pins.digital_read_pin(DigitalPin.P16) == 0:
        モード切替 = 0
        led.enable(False)
        モード = 1
    elif pins.digital_read_pin(DigitalPin.P16) == 1:
        モード切替 = 1
        led.enable(True)
        if カスタム起動 == 1:
            serial.write_line("Sorry!!No program now. Coming soon!")
            serial.write_line("nomalstart")
            モード = 1

def on_button_pressed_a():
    pass
input.on_button_pressed(Button.A, on_button_pressed_a)

def Please_select_from_below():
    serial.write_line("Please select from below")
    serial.write_line("")
    serial.write_line("{1} Nomal Traffic Lighit(N)")
    serial.write_line("{2} Y and R Traffic Lighit(YR)")
    serial.write_line("{3} All ON Traffic Lighit(A)")
    serial.write_line("{4} Button Traffic Lighit(B)")
    serial.write_line("{5} staggered Traffic Lighit(S)")
    serial.write_line("{6} Custom Traffic Lighit(C)")
def モード選択():
    global モード
    if モード切替 == 1:
        serial.write_line("Launch mode setup")
        basic.pause(5000)
        Please_select_from_below()
        basic.pause(10000)
        if serial.read_line() == "1" or serial.read_line() == "N":
            モード = 1
            basic.show_number(モード)
            serial.write_line("Sure")
        elif serial.read_line() == "2" or serial.read_line() == "YR":
            モード = 2
            basic.show_number(モード)
            serial.write_line("Sure")
        elif serial.read_line() == "3" or serial.read_line() == "A":
            モード = 3
            basic.show_number(モード)
            serial.write_line("Sure")
        elif serial.read_line() == "4" or serial.read_line() == "B":
            モード = 4
            basic.show_number(モード)
            serial.write_line("Sure")
        elif serial.read_line() == "5" or serial.read_line() == "S":
            モード = 5
            basic.show_number(モード)
            serial.write_line("Sure")
        elif serial.read_line() == "6" or serial.read_line() == "C":
            モード = 6
            serial.write_line("Sure Please customize")
        elif False:
            pass
        else:
            モード = 1
            serial.write_line("No input")
        serial.write_line("now starting!")
        led.enable(False)
    elif モード切替 == 0:
        モード = 1
        serial.write_line("now starting!")
        led.enable(False)
    else:
        モード = 1
        serial.write_line("now starting!")
        led.enable(False)
def 普通の信号機南北():
    pins.digital_write_pin(DigitalPin.P0, 1)
    # hokohsya
    pins.digital_write_pin(DigitalPin.P3, 1)
    basic.pause(25000)
    # hokohsya
    for index in range(10):
        # hokohsya
        pins.digital_write_pin(DigitalPin.P3, 0)
        # hokohsya
        basic.pause(250)
        # hokohsya
        pins.digital_write_pin(DigitalPin.P3, 1)
        # hokohsya
        basic.pause(250)
    # hokohsya
    pins.digital_write_pin(DigitalPin.P3, 0)
    # hokohsya
    pins.digital_write_pin(DigitalPin.P4, 1)
    basic.pause(4000)
    pins.digital_write_pin(DigitalPin.P0, 0)
    pins.digital_write_pin(DigitalPin.P1, 1)
    basic.pause(3000)
    pins.digital_write_pin(DigitalPin.P1, 0)
    pins.digital_write_pin(DigitalPin.P2, 1)
    basic.pause(40000)
    pins.digital_write_pin(DigitalPin.P2, 0)
    # hokohsya
    pins.digital_write_pin(DigitalPin.P4, 0)
def 初期待機状態():
    pass
def 普通の信号機東西():
    pins.digital_write_pin(DigitalPin.P10, 1)
    # hokohsya
    pins.digital_write_pin(DigitalPin.P15, 1)
    basic.pause(40000)
    pins.digital_write_pin(DigitalPin.P8, 1)
    pins.digital_write_pin(DigitalPin.P14, 1)
    basic.pause(25000)
    # hokohsya
    for index2 in range(10):
        # hokohsya
        pins.digital_write_pin(DigitalPin.P14, 0)
        # hokohsya
        basic.pause(250)
        # hokohsya
        pins.digital_write_pin(DigitalPin.P14, 1)
        # hokohsya
        basic.pause(250)
    # hokohsya
    pins.digital_write_pin(DigitalPin.P14, 0)
    # hokohsya
    pins.digital_write_pin(DigitalPin.P15, 1)
    basic.pause(4000)
    pins.digital_write_pin(DigitalPin.P8, 0)
    pins.digital_write_pin(DigitalPin.P9, 1)
    basic.pause(3000)
    pins.digital_write_pin(DigitalPin.P9, 0)
    pins.digital_write_pin(DigitalPin.P10, 1)
    basic.pause(40000)
def 標準起動():
    global 普通の信号機
    led.enable(False)
    pins.digital_write_pin(DigitalPin.P0, 0)
    pins.digital_write_pin(DigitalPin.P1, 0)
    pins.digital_write_pin(DigitalPin.P2, 0)
    pins.digital_write_pin(DigitalPin.P3, 0)
    pins.digital_write_pin(DigitalPin.P4, 0)
    pins.digital_write_pin(DigitalPin.P5, 0)
    # hokohsya
    pins.digital_write_pin(DigitalPin.P6, 0)
    # hokohsya
    pins.digital_write_pin(DigitalPin.P7, 0)
    普通の信号機 = 1

def on_forever():
    global カスタム起動
    if モード == 1:
        標準起動()
    elif モード == 2:
        pass
    elif モード == 3:
        pass
    elif モード == 4:
        pass
    elif モード == 5:
        pass
    elif モード == 6:
        カスタム起動 = 1
    else:
        標準起動()
basic.forever(on_forever)

def on_forever2():
    if 普通の信号機 == 1:
        basic.pause(500)
        普通の信号機東西()
basic.forever(on_forever2)

def on_forever3():
    if 普通の信号機 == 1:
        basic.pause(500)
        普通の信号機南北()
basic.forever(on_forever3)

def on_forever4():
    if 普通の信号機 == 1:
        pass
basic.forever(on_forever4)
