import React, { useState } from 'react';
import CalculatorButtons from './CalculatorButtons';
import calculate from '../logic/calculate';

function Calculator() {
  const [calcData, setCalcData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleButtonClick = (buttonName) => {
    setCalcData((prevState) => calculate(prevState, buttonName));
  };
  return (
    <section>
      <div id="calculator-contaienr">
        <div id="display">{calcData.next || calcData.total || '0'}</div>
        <CalculatorButtons handleButtonClick={handleButtonClick} />
      </div>
    </section>
  );
}

export default Calculator;
