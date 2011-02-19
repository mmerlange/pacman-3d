
//Script for randomize sound timer

var MinWait = 1.0;
var MaxWait = 10.0;

private var running : boolean = true;

yield RunSound(); //Calling function

function RunSound() {
	while (running) { // really? :P
		var SoundTimer = Random.Range(MinWait, MaxWait);
		yield WaitForSeconds(SoundTimer + audio.clip.length);
		audio.Play();
	}
}