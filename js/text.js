class TextJS {
	constructor(){
		this.line = 0;
		this.count = 0;
		this.result = '';
		this.text = [];
		this.textContainer;
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
		}, getRandomInt(getRandomInt(250*2.5)))
	}
}

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}