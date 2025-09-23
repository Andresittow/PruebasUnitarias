import { render, screen, fireEvent } from "@testing-library/react";
import SearchList from "./SearchList";

const names = ["Andrés", "Kyara", "Juan", "María"];

describe("SearchList", () => {
  test("Muestra todos los elementos al inicio", () => {
    render(<SearchList items={names} />);
    names.forEach((name) => {
      expect(screen.getByText(name)).toBeInTheDocument();
    });
  });

  test("Filtra los nombres correctamente", () => {
    render(<SearchList items={names} />);
    const input = screen.getByPlaceholderText("Escribe un nombre...");
    fireEvent.change(input, { target: { value: "Ky" } });
    expect(screen.getByText("Kyara")).toBeInTheDocument();
    expect(screen.queryByText("Andrés")).not.toBeInTheDocument();
  });

  test("Muestra 'No encontrado' si no hay coincidencias", () => {
    render(<SearchList items={names} />);
    const input = screen.getByPlaceholderText("Escribe un nombre...");
    fireEvent.change(input, { target: { value: "XYZ" } });
    expect(screen.getByText("No encontrado")).toBeInTheDocument();
  });
});
