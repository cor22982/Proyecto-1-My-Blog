import { useState } from 'react';

const useApi = (link, metodo) => {
  const [respuesta, setRespuesta] = useState({});
  const [error, setError] = useState({});
  
  const llamado = async (body) => {
    const fetchOptions = {
      method: metodo,
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const response = await fetch(link, fetchOptions);
    const data = await response.json();

    if (response.ok) {
      setRespuesta(data);
      return;
    }

    setError(data);
  };

  return { respuesta, error, llamado };
};

export default useApi;

// const { respuesta, error, llamado } = useApi('http://ejemplo.com/api', 'POST');
//llamado({ campo1: 'valor1', campo2: 'valor2' });
