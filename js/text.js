class TextJS {
	constructor(){
		this.line = 0;
		this.count = 0;
		this.volume = .5;
		this.result = '';
		this.text = [];
		this.textContainer;

		this.audio = {};
		this.loadAudioFiles();
	}

	loadAudioFiles(){
		this.audio.space1 = new Audio();
		this.audio.space1.src = '../sounds/space.mp3';
		this.audio.space1.volume = this.volume;

		this.audio.space2 = new Audio();
		this.audio.space2.src = '../sounds/space2.mp3';
		this.audio.space2.volume = this.volume;

		this.audio.k1 = new Audio();
		this.audio.k1.src = '../sounds/k1.mp3';
		this.audio.k1.volume = this.volume;

		this.audio.k2 = new Audio();
		this.audio.k2.src = '../sounds/k2.mp3';
		this.audio.k2.volume = this.volume;

		this.audio.k3 = new Audio();
		this.audio.k3.src = '../sounds/k3.mp3';
		this.audio.k3.volume = this.volume - .25;
	}

	type(textArr, textContainer){
		this.textContainer = $(textContainer);
		this.text = textArr;
		this.typeLine();
	}

	typeLine(){
		let interval = setTimeout(
			() => {
				let letter = this.text[this.line][this.count] == "\n" ? '<br>' : this.text[this.line][this.count];
				this.result += letter;
				this.textContainer.html(this.result + '|');
				if(letter == '<br>' || letter == ' '){
					this.audio['space' + getRandomInt(1, 3)].play();
				}else{
					this.audio['k' + getRandomInt(1, 4)].play();
				}


			this.count++;
			if (this.count >= this.text[this.line].length) {
				this.count = 0;
				this.line++;
				if (this.line == this.text.length) {
					clearTimeout(interval);
					this.textContainer.html(this.result);
					return true;
				}
			}
			this.typeLine();
		}, getRandomInt(85, 600));
	}
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}