import React, { memo } from 'react';
import { Item, SlowChildProps } from './SlowChild';

const FastChild = memo(({ items, onItemClick }: SlowChildProps) => {
  console.log('🟢 FastChild рендерится!');

  const startTime = performance.now();
  while (performance.now() - startTime < 1000) {
  }

  const totalLength = items.reduce((sum, item) => sum + item.name.length, 0);

  return (
    <div>
      <h3>FastChild - Список ({items.length} элементов, сумма длин: {totalLength})</h3>
      <ul>
        {items.map(item => (
          <li key={item.id} onClick={() => onItemClick(item.id)}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
});

FastChild.displayName = 'FastChild';

export default FastChild;