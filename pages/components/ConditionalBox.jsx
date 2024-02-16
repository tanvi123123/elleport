// ConditionalBox.jsx
import React, { useEffect } from 'react';

const ConditionalBox = ({ name }) => {
  useEffect(() => {
    const condition = true;
    const box = document.getElementById(`conditional-box-${name}`);

    if (condition) {
      box.style.backgroundColor = 'pink';
      box.innerHTML = `${name}: Detected`;
    } else {
      box.style.backgroundColor = 'white';
      box.innerHTML = `${name}: Not detected`;
    }
  }, [name]);

  return (
    <div id={`conditional-box-${name}`} style={{ padding: '10px', border: '1px solid #ccc', display: 'inline-block', margin: '5px' }}>
      {name}: Default Text
    </div>
  );
};

export default ConditionalBox;
😂