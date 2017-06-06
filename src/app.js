import Tone from 'tone';
const PI = "31415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502"
const E = "27182818284590452353602874713526624977572470936999595749669676277240766303535475945713821785251664274274663919320030599218174135966290435729003342952605956307381"
let key = "CDEFGABCDE";
const randomNum = () => {
	return Math.floor(Math.random() * (5 - 1)) + 1;
}



//schedule a few notes

let iteration;

const synth1 = new Tone.Synth();
const synth2 = new Tone.Synth();
const synth3 = new Tone.Synth();
const synth4 = new Tone.Synth();
function triggerSynth(time){
	//the time is the sample-accurate time of the event
	console.log(PI[Math.floor(time)]);
	console.log(iteration);
	console.log(key[PI[Math.floor(time)]]);
	synth1.triggerAttackRelease(`${key[PI[Math.floor(time)]]}4`, '16n', time + Math.floor(Math.random() * (2 - 1)) + 1);
	// synth2.triggerAttackRelease(`${key[E[Math.floor(time)]]}3`, '16n', time + Math.floor(Math.random() * (2 - 1)) + 1);
}
synth1.toMaster();
synth2.toMaster();
synth3.toMaster()
synth4.toMaster();

for (let i = 1; i < 161; i++) {
	console.log(i);
	Tone.Transport.schedule(function(time){
		console.log(key[PI[i]]);
		synth1.triggerAttackRelease(`${key[PI[i]]}5`, '16n', time + Math.floor(Math.random() * (2 - 1)) + 1);
		synth2.triggerAttackRelease(`${key[E[i]]}4`, '16n', time + Math.floor(Math.random() * (2 - 1)) + 1);
		synth3.triggerAttackRelease(`${key[PI[161 - i]]}5`, '16n', time + Math.floor(Math.random() * (2 - 1)) + 1);
		synth4.triggerAttackRelease(`${key[E[161 - i]]}4`, '16n', time + Math.floor(Math.random() * (2 - 1)) + 1);

	}, i);
}

Tone.Transport.bpm.value = 1400;
Tone.Transport.start('+1');
