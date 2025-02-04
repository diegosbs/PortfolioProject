import React, { useEffect, useState } from 'react';
import { CareerItem } from '../types';

const Career: React.FC = () => {
  const [career, setCareer] = useState<CareerItem[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/career')
      .then(response => response.json())
      .then((data: CareerItem[]) => setCareer(data))
      .catch(error => console.error('Erro ao buscar dados da carreira:', error));
  }, []);

  return (
    <div className="page career">
      <h1>Carreira</h1>
      {career.length > 0 ? (
        <ul>
          {career.map((item, index) => (
            <li key={index}>
              <h3>{item.Company}</h3>
              <p>{item.Position} ({item.Period})</p>
              <p>{item.Description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
};

export default Career;
