import React from 'react';
import Calculator from './Calculator';

function Child() {
  return (
    <section>
      <div id="calculator-contaienr">
        <div id="display">0</div>
        <Calculator />
      </div>
    </section>
  );
}

export default Child;