import React from 'react';

interface DisplayAreaProps {
  count: number;
  color: string;
}

const DisplayArea: React.FC<DisplayAreaProps> = ({ count, color }) => {
  return (
    <div style={{ marginTop: '20px', padding: '20px', border: '1px solid #ccc' }}>
      <h2>Display Area</h2>
      <p style={{ color: color }}>The current count is: {count}</p>
      <div
        style={{
          width: '50px',
          height: '50px',
          backgroundColor: color,
          margin: '10px 0',
        }}
      ></div>
    </div>
  );
};

export default DisplayArea;