import React from 'react';

function Calculator() {
  return (
    <div id="buttons-container">
      <ul id="buttons-list">
        <li>
          <button type="button" className="left-button">
            AC
          </button>
        </li>
        <li>
          <button type="button" className="left-button">
            +/-
          </button>
        </li>
        <li>
          <button type="button" className="left-button">
            %
          </button>
        </li>
        <li>
          <button type="button" className="right-button">
            ÷
          </button>
        </li>
        <li>
          <button type="button" className="left-button">
            7
          </button>
        </li>
        <li>
          <button type="button" className="left-button">
            8
          </button>
        </li>
        <li>
          <button type="button" className="left-button">
            9
          </button>
        </li>
        <li>
          <button type="button" className="right-button">
            x
          </button>
        </li>
        <li>
          <button type="button" className="left-button">
            4
          </button>
        </li>
        <li>
          <button type="button" className="left-button">
            5
          </button>
        </li>
        <li>
          <button type="button" className="left-button">
            6
          </button>
        </li>
        <li>
          <button type="button" className="right-button">
            -
          </button>
        </li>
        <li>
          <button type="button" className="left-button">
            1
          </button>
        </li>
        <li>
          <button type="button" className="left-button">
            2
          </button>
        </li>
        <li>
          <button type="button" className="left-button">
            3
          </button>
        </li>
        <li>
          <button type="button" className="right-button">
            +
          </button>
        </li>
        <li className="button-zero">
          <button type="button" className="left-button">
            0
          </button>
        </li>
        <li>
          <button type="button" className="left-button">
            .
          </button>
        </li>
        <li>
          <button type="button" className="right-button">
            =
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Calculator;
