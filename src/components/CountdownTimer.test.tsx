import { render, fireEvent, act } from '@testing-library/react';
import CountdownTimer from './CountdownTimer';

jest.useFakeTimers();

describe('CountdownTimer', () => {
  it('muestra el tiempo inicial correctamente', () => {
    const { getByLabelText, getByTestId } = render(<CountdownTimer />);
    const input = getByLabelText('input-seconds') as HTMLInputElement;
    fireEvent.change(input, { target: { value: '5' } });
    expect(getByTestId('timer-value').textContent).toBe('5');
  });

  it('disminuye en intervalos de un segundo', () => {
    const { getByLabelText, getByText, getByTestId } = render(<CountdownTimer />);
    const input = getByLabelText('input-seconds') as HTMLInputElement;
    fireEvent.change(input, { target: { value: '3' } });
    fireEvent.click(getByText('Iniciar'));
    expect(getByTestId('timer-value').textContent).toBe('3');
    act(() => { jest.advanceTimersByTime(1000); });
    expect(getByTestId('timer-value').textContent).toBe('2');
    act(() => { jest.advanceTimersByTime(1000); });
    expect(getByTestId('timer-value').textContent).toBe('1');
    act(() => { jest.advanceTimersByTime(1000); });
    expect(getByTestId('timer-value').textContent).toBe('0');
  });

  it('se detiene en 0', () => {
    const { getByLabelText, getByText, getByTestId } = render(<CountdownTimer />);
    const input = getByLabelText('input-seconds') as HTMLInputElement;
    fireEvent.change(input, { target: { value: '1' } });
    fireEvent.click(getByText('Iniciar'));
    act(() => { jest.advanceTimersByTime(2000); });
    expect(getByTestId('timer-value').textContent).toBe('0');
  });
});
