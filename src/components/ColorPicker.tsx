import React from 'react';

interface ColorPickerProps {
  onColorChange: (color: string) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ onColorChange }) => {
  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onColorChange(event.target.value);
  };

  return (
    <div>
      <h2>Color Picker</h2>
      <input type="color" onChange={handleColorChange} />
    </div>
  );
};

export default ColorPicker;