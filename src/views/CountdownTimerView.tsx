import React from 'react';
import CountdownTimer from '../components/CountdownTimer';

const CountdownTimerView: React.FC = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Contador Regresivo</h2>
      <CountdownTimer />
    </div>
  );
};

export default CountdownTimerView;
