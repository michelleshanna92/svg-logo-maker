const readline = require('readline');
const fs = require('fs');

class LogoMaker {
  constructor() {
    this.text = '';
    this.textColor = '';
    this.shape = '';
    this.shapeColor = '';
  }

  promptText() {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    return new Promise((resolve) => {
      rl.question('Enter up to three characters for the logo text: ', (answer) => {
        this.text = answer;
        rl.close();
        resolve();
      });
    });
  }

  promptTextColor() {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    return new Promise((resolve) => {
      rl.question('Enter the text color (color keyword or hexadecimal number): ', (answer) => {
        this.textColor = answer;
        rl.close();
        resolve();
      });
    });
  }

  promptShape() {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    return new Promise((resolve) => {
      rl.question('Choose a shape for the logo (circle, triangle, square): ', (answer) => {
        this.shape = answer;
        rl.close();
        resolve();
      });
    });
  }

  promptShapeColor() {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    return new Promise((resolve) => {
      rl.question('Enter the shape color (color keyword or hexadecimal number): ', (answer) => {
        this.shapeColor = answer;
        rl.close();
        resolve();
      });
    });
  }

  createLogo() {
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
        <rect width="100%" height="100%" fill="${this.shapeColor}" />
        <text x="50%" y="50%" text-anchor="middle" dominant-baseline="central" fill="${this.textColor}" font-size="30">${this.text}</text>
      </svg>
    `;

    fs.writeFileSync('logo.svg', svg);

    console.log('Generated logo.svg');
  }

  async run() {
    await this.promptText();
    await this.promptTextColor();
    await this.promptShape();
    await this.promptShapeColor();
    this.createLogo();
  }
}

// Run the logo maker
const logoMaker = new LogoMaker();
logoMaker.run();
