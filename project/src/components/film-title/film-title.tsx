import React from 'react';

type MainPageProps = {
  filmTitle: string;
  genre: string;
  year: string;
}

function FilmTitleComponent({filmTitle, genre, year}: MainPageProps): JSX.Element {
  return (
    <React.Fragment>
      <h2 className="film-card__title">{filmTitle}</h2>
      <p className="film-card__meta">
        <span className="film-card__genre">{genre}</span>
        <span className="film-card__year">{year}</span>
      </p>
    </React.Fragment>
  );
}

export default FilmTitleComponent;
