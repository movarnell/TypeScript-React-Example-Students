import React, { useState, useEffect } from 'react';

interface CounterProps {
  initialCount: number;
  onCountChange: (count: number) => void;
}

const Counter: React.FC<CounterProps> = ({ initialCount, onCountChange }) => {
  const [count, setCount] = useState<number>(initialCount);

  useEffect(() => {
    onCountChange(count);
  }, [count, onCountChange]);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <div>
      <h2>Counter Component</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;