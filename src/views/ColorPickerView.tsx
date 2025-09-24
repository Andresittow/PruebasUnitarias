import React from "react";
import ColorPicker from "../components/ColorPicker";

const ColorPickerView: React.FC = () => {
  return (
    <div className="p-6 max-w-xl mx-auto bg-white dark:bg-slate-800 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-emerald-600 dark:text-emerald-300">
        🎨 Selector de Colores
      </h2>
      <p className="text-sm text-slate-600 dark:text-slate-300 text-center mb-4">
        Selecciona un color para personalizar el fondo de la caja.  
        El valor se guarda automáticamente en <code>localStorage</code>.
      </p>
      <ColorPicker />
    </div>
  );
};

export default ColorPickerView;
