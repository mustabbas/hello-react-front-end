import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore';

import Greeting from './components/Greating';

const App = () => (
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" exact element={<Greeting />} />
      </Routes>
    </Router>
  </Provider>
);

export default App;
