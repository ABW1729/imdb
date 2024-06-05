import React from 'react';
import { BrowserRouter,Route, Switch } from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MovieList} />
        <Route path="/movie/:id" component={MovieDetail} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
