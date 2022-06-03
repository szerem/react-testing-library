test('should first', () => {  });

const { render, screen, fireEvent } = require("@testing-library/react");
const { default: App } = require("./App");

describe("Changing disable button to gray", () => {
  it("Disable button has gray background and revers to red", () => {
    render(<App />);

    const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
    const button = screen.getByRole("button", { name: "Change to blue" });

    //disable button
    fireEvent.click(checkbox);
    expect(button).toHaveStyle("background-color: gray");

    //re-enable button
    fireEvent.click(checkbox);
    expect(button).toHaveStyle("background-color: red");
  });

  it("Clicked disabled button has gray background and revers to blue", () => {
    render(<App />);

    const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
    const button = screen.getByRole("button", { name: "Change to blue" });

    //change button to blue
    fireEvent.click(button);
    
    //disable button
    fireEvent.click(checkbox);
    expect(button).toHaveStyle('background-color: gray');
    
    //re-enable button
    fireEvent.click(checkbox);
    expect(button).toHaveStyle('background-color: blue');
  });
});
