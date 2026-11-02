import React from 'react';

function ColorPanel({ szinkod }) {
  const panelStilus = {
    backgroundColor: szinkod || '#ffffff', 
    width: '300px',
    height: '150px',
    marginTop: '20px',
    border: '2px solid #333',
    borderRadius: '8px',
    transition: 'background-color 0.3s ease' 
  };

  return <div style={panelStilus}></div>;
}

export default ColorPanel;