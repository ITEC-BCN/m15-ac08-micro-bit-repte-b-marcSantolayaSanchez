input.onButtonPressed(Button.A, function () {
    music.play(music.stringPlayable("C D E F G A B C5 ", 120), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
    music.play(music.stringPlayable("- G E B E - E - ", 120), music.PlaybackMode.UntilDone)
})
