import React from 'react';

export interface Item {
  id: number;
  name: string;
}

export type SlowChildProps = {
  items: Item[];
  onItemClick: (id: number) => void;
};

const SlowChild = ({ items, onItemClick }: SlowChildProps) => {
  console.log('🔴 SlowChild рендерится!');
  const startTime = performance.now();
  while (performance.now() - startTime < 1000) {
  }

  const totalLength = items.reduce((sum, item) => sum + item.name.length, 0);

  return (
    <div>
      <h3>SlowChild - Список ({items.length} элементов, сумма длин: {totalLength})</h3>
      <ul>
        {items.map(item => (
          <li key={item.id} onClick={() => onItemClick(item.id)}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SlowChild;