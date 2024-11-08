/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Ali Elouasbi
 * Created on: Oct 2024
 * This program turns on neopixels at a certain distance
*/

// Variables
let distanceToObject = 0
let neopixelStrip: neopixel.Strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)

// Setup
basic.showIcon(IconNames.Happy)
basic.clearScreen()

// When button A is pressed
input.onButtonPressed(Button.A, function () {
    distanceToObject = sonar.ping(
        DigitalPin.P1,
        DigitalPin.P2,
        PingUnit.Centimeters
    )
    // Turns on all neopixels Red
    if (distanceToObject < 10) {
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
        neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
        neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
        neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
    } else {
        //turn on all neopixel Green
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
        neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
        neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
        neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Green))
    }

    // Show the colors on the strip
    neopixelStrip.show()
})
