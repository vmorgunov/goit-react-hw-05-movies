import Navigation from 'components/Navigation/Navigation';
import React from 'react';
import { Header } from './AppBar.styled';

export default function AppBar() {
  return (
    <Header>
      <Navigation />
    </Header>
  );
}
