import React, { useState } from 'react';
import Counter from './components/Counter';
import ColorPicker from './components/ColorPicker';
import DisplayArea from './components/DisplayArea';
import ComponentDiagramImage from './assets/diagram.png'; // New import
const App: React.FC = () => {
  // State declarations
  const [parentCount, setParentCount] = useState<number>(0);
  const [selectedColor, setSelectedColor] = useState<string>('#000000');

  // Function to increment parent count
  const incrementParentCount = () => {
    setParentCount(prevCount => prevCount + 1);
  };

  return (
    <div className="App">
      <h1>Props and State Demo</h1>
      <p>Parent Count: {parentCount}</p>
      <button onClick={incrementParentCount}>Increment Parent Count</button>

      {/* Counter component with props */}
      <Counter initialCount={5} onCountChange={setParentCount} />

      {/* ColorPicker component with props */}
      <ColorPicker onColorChange={setSelectedColor} />

      {/* DisplayArea component with props */}
      <DisplayArea count={parentCount} color={selectedColor} />


        <img src={ComponentDiagramImage} alt="Component Diagram" />


    </div>
  );
};

export default App;