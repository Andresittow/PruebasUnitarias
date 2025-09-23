import React from 'react';
import ColorPicker from '../components/ColorPicker';

const ColorPickerView: React.FC = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Selector de Colores</h2>
      <ColorPicker />
    </div>
  );
};

export default ColorPickerView;
