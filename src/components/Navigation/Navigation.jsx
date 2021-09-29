// import { NavLink } from 'react-router-dom';
import { StyledNavLink } from './Navigation.styled';

export default function Navigation() {
  return (
    <nav>
      <StyledNavLink exact to="/" activeClassName="active">
        Home
      </StyledNavLink>
      <StyledNavLink to="/movies" activeClassName="active">
        Movies
      </StyledNavLink>
    </nav>
  );
}
