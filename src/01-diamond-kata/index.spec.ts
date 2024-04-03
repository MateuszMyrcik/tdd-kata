import { Diamond } from ".";

describe("Diamond", () => {
  it("Given A, return only A", () => {
    const { result } = new Diamond("A");

    expect(result).toBe("A\n");
  });

  it("Given not A, last row contain return A", () => {
    const { lines } = new Diamond("D");

    expect(lines[lines.length - 1]).toContain("A");
  });

  it("Given not A, row contain valid letter", () => {
    const { lines } = new Diamond("B");

    const notFirstRow = lines[1];

    expect(notFirstRow).toContain("B");
  });

  it("Given not A,second row contain gap between letters", () => {
    const { lines } = new Diamond("B");

    const secondRow = lines[1];

    expect(secondRow).toMatch("B B");
  });

  it("Given not A,middle row contain gap between letters", () => {
    const { lines } = new Diamond("D");

    const middleRow = lines[3];

    expect(middleRow).toMatch("D     D");
  });

  it("Given not A, not middle row contain space around", () => {
    const { lines } = new Diamond("D");

    const notMiddleRow = lines[2];

    expect(notMiddleRow).toBe(" C   C ");
  });

  it("Given not A, row with descending letter exist", () => {
    const { lines } = new Diamond("D");

    const middleRow = lines[4];

    expect(middleRow).toBe(" C   C ");
  });

  it("Given A, first row contain space around", () => {
    const { lines } = new Diamond("E");

    const firstRow = lines[0];

    expect(firstRow).toBe("    A    ");
  });

  it("Given A, last row contain space around", () => {
    const { lines } = new Diamond("E");

    const lastRow = lines[8];

    expect(lastRow).toBe("    A    ");
  });

  it("Given A, draw diamond", () => {
    const { result } = new Diamond("A");

    expect(result).toBe("A\n");
  });

  it("Given B, draw diamond", () => {
    const { result } = new Diamond("B");

    console.log(result);
    expect(result).toBe(" A \nB B\n A \n");
  });

  it("Given D, draw diamond", () => {
    const { result } = new Diamond("D");

    expect(result).toBe(
      "   A   \n" +
        "  B B  \n" +
        " C   C \n" +
        "D     D\n" +
        " C   C \n" +
        "  B B  \n" +
        "   A   \n"
    );
  });
});
