import { Link } from 'react-router-dom';

function NotFoundScreen(): JSX.Element {
  return (
    <div>
      <h1 style={{marginLeft: '100px'}}>404 Not Found</h1>
      <Link style={{marginLeft: '100px'}} to="/">Перейти на главную страницу</Link>
    </div>
  );
}

export default NotFoundScreen;
