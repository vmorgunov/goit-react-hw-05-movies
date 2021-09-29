import React, { useEffect, useState } from 'react';
import { lazy, Suspense } from 'react';
import {
  Route,
  useLocation,
  useParams,
  useRouteMatch,
  NavLink,
  useHistory,
} from 'react-router-dom';
import { fetchMoviesById } from 'service/ApiService';
import Spinner from 'components/Loader/Loader';
import {
  Container,
  Description,
  Wrap,
  Button,
} from 'views/MoviesDetailsPage/MoviesDetailsPage.styled';
import { StyledArrow } from './MoviesDetailsPage.styled';

const Cast = lazy(() => import('../Cast/Cast' /* webpackChunkName: "cast" */));
const Reviews = lazy(() =>
  import('../Reviews/Reviews' /* webpackChunkName: "reviews" */),
);

export default function MoviesDetailsPage() {
  const [movies, setMovies] = useState('');
  const { moviesId } = useParams();
  const { url } = useRouteMatch();
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    fetchMoviesById(moviesId).then(setMovies);
  }, [moviesId]);

  const { title, overview, vote_average, poster_path, genres } = movies;
  const imageUrl = 'https://image.tmdb.org/t/p/w500/';

  const handleClick = () => {
    history.push(location.state?.from ? location.state.from : '/');
  };

  return (
    <>
      <Button type="button" onClick={handleClick}>
        <StyledArrow />
        Go back
      </Button>

      <Wrap>
        <Container>
          {movies && (
            <>
              <img src={`${imageUrl}${poster_path}`} alt={title} width="400" />
              <Description>
                <h1>{title}</h1>
                <p>User Score: {vote_average}%</p>
                <h2>Overview: </h2>
                <span>{overview}</span>
                <h2>Genres: </h2>
                {genres &&
                  genres.map(({ id, name }) => {
                    return <span key={id}> {name} </span>;
                  })}
              </Description>
            </>
          )}
        </Container>
      </Wrap>
      <h4>Additional information</h4>
      <NavLink to={{ pathname: `${url}/cast` }}>
        <h4>Cast</h4>
      </NavLink>

      <NavLink to={{ pathname: `${url}/reviews` }}>
        <h4>Reviews</h4>
      </NavLink>

      <Suspense fallback={<Spinner />}>
        <Route path="/movies/:moviesId/cast">
          <Cast />
        </Route>
        <Route path="/movies/:moviesId/reviews">
          <Reviews />
        </Route>
      </Suspense>
    </>
  );
}
