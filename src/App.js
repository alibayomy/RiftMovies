import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './Pages/LoginPage/LoginPage';
import RegisterPage from './Pages/RegisterPage/RegisterPage';
import NavBarComponent from './Componenets/NavBarComponent';
import { BrowserRouter, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import HomePage from './Pages/HomePage/HomePage';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import PagesTitleComponent from './Componenets/PagesTitleComponent';
import SingleMoviePage from './Pages/SingleMoviePage/SingleMoviePage';
import MovieSearchPage from './Pages/MovieSearchPage/MovieSearchPage';
import FavouritesPage from './Pages/Favourits Page/FavouritesPage';
import { useState } from 'react';
import { Provider } from 'react-redux';
import { LangContext } from './Context/LangContext';
function App() {

  const [contextLang, setContextLang] = useState("en")
  return (
    <>
    <LangContext.Provider value={{contextLang, setContextLang}}>
     <BrowserRouter>
     <NavBarComponent></NavBarComponent>
      <Switch>
          <Route exact path={"/"} component={HomePage}></Route>
          <Route exact path={"/loginpage"} component={LoginPage}></Route>
          <Route exact path={"/registerpage"} component={RegisterPage}></Route>
          <Route exact path={"/movie/:id"} component={SingleMoviePage}></Route>
          <Route exact path={'/search/'} component={MovieSearchPage}></Route>
          <Route exact path={'/favorites'} component={FavouritesPage}></Route>
          <Route exact path={"*"} component={ErrorPage}></Route>
      </Switch>
     </BrowserRouter>
     </LangContext.Provider>
    </>
  );
}

export default App;
