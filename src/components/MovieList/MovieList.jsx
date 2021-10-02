import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function MovieList({ movies }) {
  const location = useLocation();
  return (
    <div>
      <ul>
        {movies &&
          movies.map(({ id, title }) => {
            return (
              <li key={id}>
                <Link
                  to={{
                    pathname: `/movies/${id}`,
                    state: { from: location },
                  }}
                >
                  {title}
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
