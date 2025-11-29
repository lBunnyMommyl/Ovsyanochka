import React, { useState, useMemo, useCallback } from 'react';
import SlowChild from './components/SlowChild';
import FastChild from './components/FastChild';

interface Item {
  id: number;
  name: string;
}

function App() {
  const [counter, setCounter] = useState(0);
  const [items] = useState<Item[]>(
    // В состоянии лежит 100 разных объектов
    new Array(100)
      .fill(null)
      .map((_, index) => {
        return { id: index, name: `${Math.random()}${Math.random()}` }
      })
  );


  const handleClick = useCallback((id: number) => {
    console.log('Клик по элементу:', id);
  }, []); 
  const memoItems = useMemo(() => items, [items]);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Счётчик: {counter}</h1>
      <button onClick={() => setCounter(c => c + 1)}>Нажми 10 раз быстро!</button>

      {/* <SlowChild items={items} onItemClick={handleClick} /> */}

      <FastChild items={memoItems} onItemClick={handleClick} />
    </div>
  );
}

export default App;