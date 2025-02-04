import React, { useEffect, useState } from 'react';
import { About } from '../types';

const Home: React.FC = () => {
  const [about, setAbout] = useState<About | null>(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/about')
      .then(response => response.json())
      .then((data: About) => setAbout(data))
      .catch(error => console.error('Erro ao buscar dados sobre mim:', error));
  }, []);

  return (
    <div className="page home">
      <h1>Sobre Mim</h1>
      {about ? (
        <div>
          <h2>{about.Name}</h2>
          <p>{about.Title}</p>
          <p>{about.Bio}</p>
        </div>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
};

export default Home;
