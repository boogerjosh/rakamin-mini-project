import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ProtectedRoute from './middlewares/ProtectedRoute';
import store from './store/configureStore';
import Login from './pages/Auth/Login';
import MainPages from './pages/MainPage/MainPages';

function App() {

    return (
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<MainPages />} exact/>
            </Route>
            <Route path="/login" element={<Login />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    );
}

export default App;
