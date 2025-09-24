import { render, fireEvent, cleanup } from "@testing-library/react";
import ColorPicker from "./ColorPicker";

beforeEach(() => {
  cleanup();
});

describe("ColorPicker", () => {
  it("el color inicial es blanco", () => {
    const { getByTestId } = render(<ColorPicker />);
    const box = getByTestId("color-box");
    expect(box).toHaveStyle("background: #ffffff");
  });

  it("al seleccionar un nuevo color, el div se actualiza", () => {
    const { getByLabelText, getByTestId } = render(<ColorPicker />);
    const input = getByLabelText("color-input") as HTMLInputElement;

    fireEvent.change(input, { target: { value: "#ff0000" } });

    const box = getByTestId("color-box");
    expect(box).toHaveStyle("background: #ff0000");
  });
});