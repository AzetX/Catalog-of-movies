import React from 'react';
import FilmsForm from '../components/FindFilmsForm';
import SortFilms from '../components/SortFilms';
import FilmsList from '../components/FilmsList';

export const FilmsPage: React.FC = () => (
  <>
    <FilmsForm />
    <SortFilms />
    <FilmsList />
  </>
);
