import React, { useState, useEffect } from 'react';

const LOCAL_KEY = 'color-picker-value';

const ColorPicker: React.FC = () => {
  const [color, setColor] = useState<string>(() => {
    return localStorage.getItem(LOCAL_KEY) || '#ffffff';
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_KEY, color);
  }, [color]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };

  return (
    <div>
      <input
        type="color"
        value={color}
        onChange={handleChange}
        aria-label="color-input"
      />
      <div
        data-testid="color-box"
        style={{ width: 100, height: 100, background: color, border: '1px solid #ccc' }}
      />
    </div>
  );
};

export default ColorPicker;
