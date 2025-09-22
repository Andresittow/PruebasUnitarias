// src/components/DigitalClock.test.tsx
import { render, screen, act } from "@testing-library/react";
import DigitalClock from "./DigitalClock";

beforeEach(() => {
  jest.useFakeTimers();
  jest.setSystemTime(new Date("2025-09-22T12:00:00"));
});

afterEach(() => {
  jest.useRealTimers();
});

describe("DigitalClock", () => {
  test("muestra la hora en formato HH:MM:SS", () => {
    render(<DigitalClock />);
    expect(screen.getByText("12:00:00")).toBeInTheDocument();
  });

  test("avanza correctamente con el tiempo", () => {
    render(<DigitalClock />);

    // Avanzar 1 segundo envuelto en act()
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(screen.getByText("12:00:01")).toBeInTheDocument();

    // Avanzar 59 segundos más
    act(() => {
      jest.advanceTimersByTime(59_000);
    });
    expect(screen.getByText("12:01:00")).toBeInTheDocument();
  });
});
