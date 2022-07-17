import {Route, BrowserRouter, Routes} from 'react-router-dom';
import MainPageScreen from '../../pages/main-page/main-page';
import AddReviewScreen from '../../pages/add-review/add-review';
import MyListScreen from '../../pages/my-list/my-list';
import NotFoundScreen from '../../pages/not-found/not-found';
import PlayerScreen from '../../pages/player/player';
import SignInScreen from '../../pages/sign-in/sign-in';
import MoviePageScreen from '../../pages/movie-page/movie-page';
import { filmData } from '../../pages/data';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPageScreen />} />
        <Route path="/login" element={<SignInScreen />} />
        <Route path="/mylist" element={<MyListScreen />} />
        <Route path="/films/:id/review" element={<AddReviewScreen />} />
        <Route path="/player/:id" element={<PlayerScreen />} />
        <Route path="/films" element={<MoviePageScreen />}>
          <Route path=":id" element={<MoviePageScreen moovies={filmData} />} />
        </Route>
        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
