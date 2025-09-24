import { render, fireEvent, cleanup } from "@testing-library/react";
import ColorPicker from "./ColorPicker";

beforeEach(() => {
  localStorage.clear();
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

  it("persiste el color en localStorage y al recargar el componente", () => {
    const { getByLabelText, unmount } = render(<ColorPicker />);
    const input = getByLabelText("color-input") as HTMLInputElement;

    // Cambiar color
    fireEvent.change(input, { target: { value: "#00ff00" } });
    expect(localStorage.getItem("color-picker-value")).toBe("#00ff00");

    // Desmontar y volver a montar (simula reload)
    unmount();
    const { getByTestId } = render(<ColorPicker />);
    const box = getByTestId("color-box");

    expect(box).toHaveStyle("background: #00ff00");
  });
});
