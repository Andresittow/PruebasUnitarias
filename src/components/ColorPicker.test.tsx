import { render, fireEvent, waitFor } from '@testing-library/react';
import ColorPicker from './ColorPicker';

beforeEach(() => {
  localStorage.clear();
});

describe('ColorPicker', () => {
  it('el color inicial es blanco', () => {
    const { getByTestId } = render(<ColorPicker />);
    const box = getByTestId('color-box');
    expect(box).toHaveStyle('background: #ffffff');
  });

  it('al seleccionar un nuevo color, el div se actualiza', () => {
    const { getByLabelText, getByTestId } = render(<ColorPicker />);
    const input = getByLabelText('color-input') as HTMLInputElement;
    fireEvent.change(input, { target: { value: '#ff0000' } });
    const box = getByTestId('color-box');
    expect(box).toHaveStyle('background: #ff0000');
  });

  it('persiste el color en localStorage y al recargar el componente', async () => {
    localStorage.clear();
    const { getByLabelText, unmount } = render(<ColorPicker />);
    const input = getByLabelText('color-input') as HTMLInputElement;
    fireEvent.change(input, { target: { value: '#00ff00' } });
    // Espera a que localStorage se actualice
    await waitFor(() => {
      expect(localStorage.getItem('color-picker-value')).toBe('#00ff00');
    });
    // Desmonta y vuelve a montar el componente (simula recarga)
    unmount();
    const { getByTestId: getByTestId2 } = render(<ColorPicker />);
    const box2 = getByTestId2('color-box');
    // Acepta tanto formato hexadecimal como rgb
    const style2 = box2.getAttribute('style') || '';
    expect(
      style2.includes('background: #00ff00') || style2.includes('background: rgb(0, 255, 0)')
    ).toBe(true);
  });
});
