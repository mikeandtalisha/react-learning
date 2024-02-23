import React from 'react';
import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom';

import Users from './users/pages/Users';
import UserPlaces from './places/pages/UserPlaces';
import NewPlaces from './places/pages/NewPlaces';
import MainNavigation from './shared/components/Navigation/MainNavigation';

const App = params => {
  return (
    <BrowserRouter>
      <MainNavigation />
      <Routes>
        <Route path="/" element={Users()} exact /> 
        <Route path="/places/new" element={ NewPlaces() } exact/>
        <Route path="/:userId/places" element={<UserPlaces/>} exact/>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
