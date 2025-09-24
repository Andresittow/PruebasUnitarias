import React from 'react';
import CountdownTimer from '../components/CountdownTimer';

const CountdownTimerView: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          ⏳ Contador Regresivo
        </h2>
        <p className="text-gray-500 mb-6">
          Observa cómo el tiempo disminuye en tiempo real.
        </p>
        <div className="border-t pt-4">
          <CountdownTimer />
        </div>
      </div>
    </div>
  );
};

export default CountdownTimerView;
