// components/HelloComponent.js
import { useEffect, useState } from 'react';

const HelloComponent = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/hello')
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return <p>{message}</p>;
};

export default HelloComponent;
