import React from 'react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ErrorPage from './pages/ErrorPage';
import MainPage from './pages/MainPage';
import AuthPage from './pages/AuthPage'
import RegPage from './pages/RegPage'
import StrPage from './pages/StreamerPage'
import StreamersPage from './pages/Streamers'
import OffersPage from './pages/OffersPage';
import OffPage from './pages/OffPage'

import Footer from './components/Footer';
import Header from './components/Header';

import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

import './App.scss';

function App() {
  return (
    <div className="App flex flex-col h-screen">
      <QueryClientProvider client={ queryClient }>
        <Router>
          <Header />
          <div className="flex-grow">
            <Routes>
              <Route path="/streamers" element={ <StreamersPage /> } />
              <Route path="/offers" element={ <OffersPage /> } />
              <Route path="/offer/:offerID" element={ <OffPage /> } />
              <Route path="/streamer/:streamerID" element={ <StrPage /> } />
              <Route path="/register" element={ <RegPage /> } />
              <Route path="/login" element={ <AuthPage /> } />
              <Route path="/" element={ <MainPage /> } />
              <Route path="*" element={ <ErrorPage /> } />
            </Routes>
          </div>
          <Footer className=" static bottom-0" />
        </Router>
      </QueryClientProvider>
    </div>
  )
}


export default App
