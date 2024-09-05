import React, { useState } from 'react';
import Counter from '../components/Counter';
import ColorPicker from '../components/ColorPicker';
import DisplayArea from '../components/DisplayArea';

const App: React.FC = () => {
  const [parentCount, setParentCount] = useState<number>(0);
  const [selectedColor, setSelectedColor] = useState<string>('#000000');

  const incrementParentCount = () => {
    setParentCount(prevCount => prevCount + 1);
  };

  return (
    <div className="App">
      <h1>Props and State Demo</h1>
      <p>Parent Count: {parentCount}</p>
      <button onClick={incrementParentCount}>Increment Parent Count</button>
      <Counter initialCount={5} onCountChange={setParentCount} />
      <ColorPicker onColorChange={setSelectedColor} />
      <DisplayArea count={parentCount} color={selectedColor} />
    </div>
  );
};

export default App;