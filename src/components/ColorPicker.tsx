import React, { useState } from "react";

const ColorPicker: React.FC = () => {
  const [color, setColor] = useState<string>("#ffffff");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <input
        type="color"
        value={color}
        onChange={handleChange}
        aria-label="color-input"
        className="w-16 h-10 cursor-pointer border rounded"
      />
      <div
        data-testid="color-box"
        className="rounded-xl shadow-lg border transition-all duration-300"
        style={{
          width: 150,
          height: 150,
          background: color,
        }}
      />
      <p className="font-mono text-slate-700 dark:text-slate-200">
        Color actual: <span className="font-bold">{color}</span>
      </p>
    </div>
  );
};

export default ColorPicker;