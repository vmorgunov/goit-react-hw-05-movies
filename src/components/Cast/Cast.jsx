import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from 'service/ApiService';
import { List, Item } from './Cast.styled';
import Image from 'images/image.png';

export default function Cast() {
  const [cast, setCast] = useState([]);
  const { moviesId } = useParams();

  useEffect(() => {
    fetchCast(moviesId).then(data => setCast(data.cast));
  }, [moviesId]);

  const imageUrl = 'https://image.tmdb.org/t/p/w500/';

  return (
    <>
      {cast.length !== 0 ? (
        <List>
          {cast.map(({ name, id, profile_path }) => {
            return (
              <Item key={id}>
                <img
                  src={
                    profile_path !== null ? `${imageUrl}${profile_path}` : Image
                  }
                  alt={name}
                  width="200"
                  height="250"
                />
                {name}
              </Item>
            );
          })}
        </List>
      ) : (
        <h4>No information found</h4>
      )}
    </>
  );
}
