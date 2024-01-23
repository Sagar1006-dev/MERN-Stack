import React from "react";
import { HashRouter as Router, Route, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";

import PhotoContextProvider from "./context/PhotoContext";
import Header from "./components/Header";
import Item from "./components/Item";
import Search from "./components/Search";
import NotFound from "./components/NotFound";

const App = () => {
  const history = createBrowserHistory();

  const handleSubmit = (e, searchInput) => {
    e.preventDefault();
    e.currentTarget.reset();
    let url = `/SnapScout/search/${searchInput}`;
    history.push(url);
  };

  return (
    <PhotoContextProvider>
      <Router history={history}>
        <div className="container">
          <Route
            render={() => (
              <Header handleSubmit={handleSubmit} />
            )}
          />
          <Route
            exact
            path="/SnapScout/"
            render={() => <Redirect to="/SnapScout/mountain" />}
          />
          <Route path="/SnapScout/mountain" render={() => <Item searchTerm="mountain" />} />
          <Route path="/SnapScout/beach" render={() => <Item searchTerm="beach" />} />
          <Route path="/SnapScout/bird" render={() => <Item searchTerm="bird" />} />
          <Route path="/SnapScout/food" render={() => <Item searchTerm="food" />} />
          <Route
            path="/SnapScout/search/:searchInput"
            render={(props) => (
              <Search searchTerm={props.match.params.searchInput} />
            )}
          />
          <Route component={NotFound} />
        </div>
      </Router>
    </PhotoContextProvider>
  );
};

export default App;
