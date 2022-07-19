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
        <Route path="/" >
          <Route index element={<MainPageScreen />} />
          <Route path="/login" element={<SignInScreen />} />
          <Route path="/mylist" element={<MyListScreen />} />
          <Route path="/player/" >
            <Route path=":id" element={<PlayerScreen />} />
          </Route>
          <Route path="/films/">
            <Route path=":id" element={<MoviePageScreen name={filmData.name} genre={filmData.genre} released={filmData.released} />} >
              <Route path="/review" element={<AddReviewScreen />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFoundScreen />} />
        </ Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
