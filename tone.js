Tone.start()
const synth = new Tone.Synth().toDestination()
function playNote(note) {
  synth.triggerAttackRelease(`${note}4`, '8n')
}
document.getElementById(note).style.background = '#33d6a6'
setTimeout(() => {
  document.getElementById(note).style.background = 'white'
}, 200)