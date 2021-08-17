input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showIcon(IconNames.Happy)
})
basic.forever(function () {
    basic.showIcon(IconNames.SmallHeart)
})
