import React from "react";
import { Provider } from "react-redux";

import store from "/imports/store";

import Header from "./components/Header/Header";

const App = function(props) {
  const { children } = props;

  return (
    <Provider store={store}>
      <div>
        <Header />
        <div className="ui container">
          {children}
        </div>
      </div>
    </Provider>
  );
};

export default App;
