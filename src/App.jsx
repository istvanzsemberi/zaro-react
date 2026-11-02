import React, { useState } from 'react';
import ColorPanel from './ColorPanel';

function App() {
 
  const szinek = [
    { nev: 'Piros', rgb: 'rgb(255, 0, 0)' },
    { nev: 'Zöld', rgb: 'rgb(0, 255, 0)' },
    { nev: 'Kék', rgb: 'rgb(0, 0, 255)' },
    { nev: 'Sárga', rgb: 'rgb(255, 255, 0)' },
    { nev: 'Lila', rgb: 'rgb(128, 0, 128)' },
    { nev: 'Narancssárga', rgb: 'rgb(255, 165, 0)' }
  ];


  const [valasztottSzin, setValasztottSzin] = useState(szinek[0]);

  const handleSzinValasztas = (event) => {
    const talaltSzin = szinek.find(szin => szin.nev === event.target.value);
    if (talaltSzin) {
      setValasztottSzin(talaltSzin);
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Kedvenc szín választó</h1>
      
      {}
      <label htmlFor="szin-valaszto" style={{ marginRight: '10px' }}>Válassz egy színt:</label>
      <select 
        id="szin-valaszto" 
        value={valasztottSzin.nev} 
        onChange={handleSzinValasztas}
        style={{ padding: '5px', fontSize: '16px' }}
      >
        {szinek.map((szin, index) => (
          <option key={index} value={szin.nev}>
            {szin.nev}
          </option>
        ))}
      </select>

      {}
      <div style={{ marginTop: '20px', fontSize: '18px' }}>
        A választott szín: <strong>{valasztottSzin.nev}</strong> ({valasztottSzin.rgb})
      </div>

      {}
      <ColorPanel szinkod={valasztottSzin.rgb} />
    </div>
  );
}

export default App;