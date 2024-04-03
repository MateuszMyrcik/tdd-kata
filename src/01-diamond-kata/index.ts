export class Diamond {
  public letter: string;
  public result: string;
  public lines: string[];

  constructor(letter: string) {
    this.letter = letter;
    this.result = letter;
    this.lines = [];
    this.prepareLines();
    this.draw();
  }

  private prepareLines() {
    const alphabet = new Array(26)
      .fill(null)
      .map((_, i) => String.fromCharCode(65 + i));

    const middleLetterIndex = alphabet.findIndex(
      (letter) => letter === this.letter
    );

    const lettersInUse = alphabet.filter((_, i) => i <= middleLetterIndex);
    const lettersWithSpace = lettersInUse.map((letter, index) => {
      if (!index) {
        const edgeSpace = middleLetterIndex;
        console.log(edgeSpace);
        return `${" ".repeat(edgeSpace)}${letter}${" ".repeat(edgeSpace)}`;
      }
      const spaceInside = 2 * index - 1;
      const edgeSpace = (2 * middleLetterIndex - 1 - spaceInside) / 2;

      return index
        ? `${" ".repeat(edgeSpace)}${letter}${" ".repeat(
            spaceInside
          )}${letter}${" ".repeat(edgeSpace)}`
        : letter;
    });

    const descendingLettersWithoutFirst = [...lettersWithSpace]
      .reverse()
      .splice(1);
    const combinedLetters = lettersWithSpace.concat(
      descendingLettersWithoutFirst
    );

    combinedLetters.map((letter, index) => {
      this.lines.push(letter);
    });
  }

  private draw() {
    this.result = this.lines.reduce((acc, line) => acc.concat(`${line}\n`), "");
  }
}
