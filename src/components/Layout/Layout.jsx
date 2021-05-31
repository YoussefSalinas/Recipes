import React, { Fragment } from 'react';
import { Header } from '../Header/Header';

export function Layout({ children }) {
  return (
    <Fragment>
      <Header />
      <div className="main-content">
        {children}
      </div>
    </Fragment>
  )
}
