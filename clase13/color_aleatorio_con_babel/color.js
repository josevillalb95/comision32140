class Color {
	constructor() {}
	randomColor = () => Math.floor(Math.random() * 255);
	generateRGB=() =>{
		return `rgb(${this.randomColor()}, ${this.randomColor()}, ${this.randomColor()})`;
	}
}
const color = new Color();
console.log(color.generateRGB());

// link https://babeljs.io/
