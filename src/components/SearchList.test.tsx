import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchList from "./SearchList";

const names = ["Andrés", "Kyara", "Juan", "María"];

describe("SearchList", () => {
  test("Muestra todos los elementos al inicio", () => {
    render(<SearchList items={names} />);
    names.forEach((name) => {
      expect(screen.getByText(name)).toBeInTheDocument();
    });
  });

  test("Filtra los nombres correctamente", async () => {
    render(<SearchList items={names} />);
    const input = screen.getByPlaceholderText("Escribe un nombre...");
    await userEvent.type(input, "Ky");
    expect(screen.getByText("Kyara")).toBeInTheDocument();
    expect(screen.queryByText("Andrés")).not.toBeInTheDocument();
  });

  test("Muestra 'No encontrado' si no hay coincidencias", async () => {
    render(<SearchList items={names} />);
    const input = screen.getByPlaceholderText("Escribe un nombre...");
    await userEvent.type(input, "XYZ");
    expect(screen.getByText("No encontrado")).toBeInTheDocument();
  });
});
