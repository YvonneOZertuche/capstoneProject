import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { createStore, compose, applyMiddleware } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import storage from 'redux-persist/lib/storage'  //defaults to localStorage for web
import reducer from './reducers/reducer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import Axios from 'axios'
import thunk from "redux-thunk"

import App from "./App"
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css"
import BaseLayout  from './components/layouts/BaseLayout'
import Register from './components/Register'
import Login from './components/Login'
import SearchPodcast from './components/SearchPodcast'
import AddPodcast from './components/AddPodcast'
import DeletePodcast  from './components/DeletePodcast';
import Logout from './components/Logout'
import CustomSearch from './components/listenNotesTemplates/CustomSearch'
import Tabs from './components/Tabs'
import Menu  from './components/layouts/Menu'


const persistConfig = {
  key: "root",
  storage
}
const persistedReducer = persistReducer(persistConfig, reducer)
// const store = createStore(
//   persistedReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )
let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE || compose;
let store = createStore(reducer, {}, composeEnhancers(applyMiddleware(thunk)))
let persistor = persistStore(store)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  
    <Provider store={store}>
   
      <Router>
        <BaseLayout>
          <Routes>
            <Route path="/" element={<App />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/searchpodcast" element={<SearchPodcast />}></Route>
            <Route path="/logout" element={<Logout />}></Route>
            <Route path="/customsearch" element={<CustomSearch />} />
            <Route path="/tabs" element={<Tabs  />} />
            <Route path="/menu" element={<Menu />} />
            
          </Routes>
        </BaseLayout>
      </Router>

    </Provider>
    
    
  </>
)


