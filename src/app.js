import Tone from 'tone';

const synth = new Tone.Synth();
synth.toMaster();

const pattern = new Tone.Pattern((time, note) => {
	synth.triggerAttackRelease(note, 0.25);
}, ["C4", "E4", "G4", "A4"]);

//begin at the beginning
pattern.start(0);
Tone.Transport.start();
