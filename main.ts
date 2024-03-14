hummingbird.startHummingbird()
music.setTempo(140)
// Why 30cm? 30 is about the width of a laptop
basic.forever(function () {
    if (hummingbird.getSensor(SensorType.Distance, ThreePort.Two) <= 30) {
        music.play(music.tonePlayable(pins.map(
        30 - hummingbird.getSensor(SensorType.Distance, ThreePort.Two),
        0,
        30,
        131,
        988
        ), music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
    } else {
        music.stopAllSounds()
    }
})
basic.forever(function () {
    music.setTempo(pins.map(
    hummingbird.getSensor(SensorType.Light, ThreePort.One),
    0,
    40,
    150,
    500
    ))
})
