/* eslint-disable jsx-a11y/anchor-is-valid */
type CardFilmProps = {
  img: string;
  descr: string;
}

function CardFilmComponent({img, descr}: CardFilmProps): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={img} alt={descr} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">{descr}</a>
      </h3>
    </article>
  );
}

export default CardFilmComponent;
