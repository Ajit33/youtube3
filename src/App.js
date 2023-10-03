import React from 'react'
import {AppContext} from "./context/contextApi";
import Feed from './components/Feed';
import Header from './components/Header';
import LeftNav from './components/LeftNav';
import LeftNavMenuitems from './components/LeftNavMenuitems';
import SearchResult from './components/SearchResult';
import SearchReasultVediocard from './components/SearchReasultVediocard';
import SuggestionVedioCrad from './components/SuggestionVedioCrad';
import VedioDetails from './components/VedioDetails';
import Vediocard from './components/Vediocard';
import { BrowserRouter,Route,Routes } from 'react-router-dom';








const App = () => {
  return (
    <div>
      <AppContext>
      <BrowserRouter>
       <div className='flex flex-col h-full'>
        <Header />
        <Routes>
          <Route  path="/" exact  element={<Feed />} />
          <Route  path="/searchResult/:searchQuery"  element={<SearchResult />} />
          <Route  path="/vedio/:id"  element={<VedioDetails />} />
        </Routes>
       </div>
      </BrowserRouter>
      </AppContext>
    </div>
  )
}

export default App

