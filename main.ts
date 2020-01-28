radio.onReceivedString(function (receivedString) {
    if (receivedString == "red") {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(1000)
        pins.digitalWritePin(DigitalPin.P0, 0)
    } else if (receivedString == "yellow") {
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(1000)
        pins.digitalWritePin(DigitalPin.P1, 0)
    } else if (receivedString == "green") {
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(1000)
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
})
input.onButtonPressed(Button.B, function () {
    channel += 1
    basic.showNumber(channel)
    radio.setGroup(channel)
})
input.onButtonPressed(Button.A, function () {
    channel += -1
    basic.showNumber(channel)
    radio.setGroup(channel)
})
let channel = 0
channel = 1
basic.showNumber(channel)
radio.setGroup(1)
