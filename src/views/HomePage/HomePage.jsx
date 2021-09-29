import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrendingMovies } from 'service/ApiService';

export default function HomePage() {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    if (trends.length !== 0) {
      return;
    }
    fetchTrendingMovies()
      .then(data => {
        setTrends(data.results);
      })
      .catch(error => console.log(error.message));
  }, [trends]);

  return (
    <>
      {trends && (
        <ul>
          {trends.map(({ id, title }) => (
            <li key={id}>
              <Link to={`/movies/${id}`}>{title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
