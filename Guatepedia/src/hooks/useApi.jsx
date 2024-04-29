import { useState } from 'react';

const useApi = (link) => {
  const [error, setError] = useState({});
  
  const llamado = async (body,metodo) => {
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
      return data;
    }
    setError(data);
  };

  const llamadowithoutbody = async (metodo) => {
    const fetchOptions = {
      method: metodo,
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const response = await fetch(link, fetchOptions);
    const data = await response.json();
    if (response.ok) {
      return data;
    }
    setError(data);
  }

  return { error, llamado, llamadowithoutbody };
};

export default useApi;

// const { respuesta, error, llamado } = useApi('http://ejemplo.com/api');
//llamado({ campo1: 'valor1', campo2: 'valor2' });
