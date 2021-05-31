import React, { Fragment } from 'react';
import { CategoriaList } from '../components/CategoriaList/CategoriaList';
import { RecetaListHome } from '../components/RecetaList/RecetaListHome';

export function HomeView() {
  return (
    <Fragment>
      <CategoriaList />
      <RecetaListHome />
    </Fragment>
  )
}
