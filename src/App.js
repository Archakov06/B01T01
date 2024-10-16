import React from 'react';

import './styles.css';

export default function App() {
  const [count, setCount] = React.useState(0);

  const onClickPlus = () => {
    setCount(count + 1);
  };

  const onClickMinus = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <div>
        <h2>Счетчик:</h2>
        <h1>{count}</h1>
        <button onClick={onClickMinus} id="minus" className="minus">
          - Минус
        </button>
        <button onClick={onClickPlus} id="plus" className="plus">
          Плюс +
        </button>
      </div>
    </div>
  );
}
