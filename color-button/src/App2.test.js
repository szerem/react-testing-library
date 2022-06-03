import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";


describe("My test suite", () => {
    it("should meet condition", () => {
      render(<App />);
      const checkbox = screen.getByRole("checkbox");
      const button = screen.getByRole("button");
  
      fireEvent.click(checkbox);
  
      expect(checkbox).toBeChecked();
      expect(button).toBeDisabled();
  
      fireEvent.click(checkbox);
  
      expect(checkbox).not.toBeChecked();
      expect(checkbox).toBeEnabled();
    });
  
    it("should meet condition 1", () => {
      const condition1 = true;
      expect(condition1).toEqual(true);
    });
  
    it.only("should meet condition 2", () => {
      const condition2 = true;
      expect(condition2).toEqual(true);
    });
  
    it("should meet condition 3", () => {
      const condition3 = true;
      expect(condition3).toEqual(true);
    });
  });
  