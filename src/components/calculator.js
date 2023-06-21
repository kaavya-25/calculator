import React, { useState } from 'react';


const Calculator = () => {
  const [result, setResult] = useState('');

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  const clear = () => {
    setResult('');
  };

  return (
    <div className="container mt-5">
      <div className="calculator card p-4">
        <input type="text" value={result} readOnly className="form-control mb-3" />
        <div className="buttons">
          <div className="row">
            <div className="col">
              <button className="btn btn-primary operator" name="+" onClick={handleClick}>+</button>
            </div>
            <div className="col">
              <button className="btn btn-primary operator" name="-" onClick={handleClick}>-</button>
            </div>
            <div className="col">
              <button className="btn btn-primary operator" name="*" onClick={handleClick}>*</button>
            </div>
            <div className="col">
              <button className="btn btn-primary operator" name="/" onClick={handleClick}>/</button>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <button className="btn btn-light" name="7" onClick={handleClick}>7</button>
            </div>
            <div className="col">
              <button className="btn btn-light" name="8" onClick={handleClick}>8</button>
            </div>
            <div className="col">
              <button className="btn btn-light" name="9" onClick={handleClick}>9</button>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <button className="btn btn-light" name="4" onClick={handleClick}>4</button>
            </div>
            <div className="col">
              <button className="btn btn-light" name="5" onClick={handleClick}>5</button>
            </div>
            <div className="col">
              <button className="btn btn-light" name="6" onClick={handleClick}>6</button>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <button className="btn btn-light" name="1" onClick={handleClick}>1</button>
            </div>
            <div className="col">
              <button className="btn btn-light" name="2" onClick={handleClick}>2</button>
            </div>
            <div className="col">
              <button className="btn btn-light" name="3" onClick={handleClick}>3</button>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <button className="btn btn-light" name="0" onClick={handleClick}>0</button>
            </div>
            <div className="col">
              <button className="btn btn-danger clear" onClick={clear}>Clear</button>
            </div>
            <div className="col">
              <button className="btn btn-success equal" onClick={calculate}>=</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
