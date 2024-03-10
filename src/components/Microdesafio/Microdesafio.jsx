import React, { useState, useEffect } from 'react';
import fetchData from './fetchData';

function Loading() {
  const [data, setData] = useState({ status: 'loading', timestamp: '' });

  useEffect(() => {
    const getData = async () => {
      const result = await fetchData();
      setData({ status: result.status, timestamp: result.timestamp });
    };
    getData();
  }, []);
  console.log('data', data);
  return (
    <div style={{ margin: '35px auto', textAlign: 'center' }}>
      <p>
        Status: <strong>{data.status}</strong>
      </p>
      <p>Fecha: {data.timestamp.toLocaleString()}</p>
    </div>
  );
}
export default Loading