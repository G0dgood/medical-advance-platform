import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './Pages/LandingPage/LandingPage';
import { Provider } from 'react-redux';
import { store } from './store/store';






function App() {
  // @ts-ignore
  // const users = JSON.parse(localStorage.getItem("SuperTM"));


  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            {/* <Route path="/register" element={<Register />} /> */}

            {/* <Route path="*" element={<PageNotFound />} /> */}
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;