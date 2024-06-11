import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Crud from './components/Crud/Crud'
import Create from './components/Create/Create';
import Update from './components/Update/Update';
import Reading from './components/Reading/Reading';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Crud />} />
        <Route path="/create" element={<Create />} />
        <Route path="/update/:id" element={<Update />} />
        <Route path="/reading/:id" element={<Reading/>} />
      </Routes>
    </div>
  );
}

export default App