enum RadioMessage {
    message1 = 49434,
    Doorbellreceiver = 60681,
    Yes = 16427,
    No = 48082
}
radio.onReceivedMessage(RadioMessage.Doorbellreceiver, function () {
    music.startMelody(music.builtInMelody(Melodies.Ringtone), MelodyOptions.Once)
    basic.showString("Someone is at the door")
})
let Yes = 0
radio.setGroup(1)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        Yes = 1
        basic.clearScreen()
        basic.showIcon(IconNames.Yes)
        basic.showString("Or")
        basic.showIcon(IconNames.No)
    } else if (input.buttonIsPressed(Button.A) && Yes == 1) {
        Yes = 0
        radio.sendMessage(RadioMessage.Yes)
        basic.clearScreen()
    } else if (input.buttonIsPressed(Button.B)) {
        radio.sendMessage(RadioMessage.No)
        basic.clearScreen()
    } else {
    	
    }
})
