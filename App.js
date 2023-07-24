import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddExercisePage from './pages/AddExercisePage';
import EditExercisePage from './pages/EditExercisePage';
import { useState } from 'react';
import Navigation from './components/Navigation';

/**
 * App function is root of component tree
 * renders exercise tracker by using react-router-dom
 * Navigation component contains links to each of the pages in Routes
 * passes setExerciseToEdit to the HomePage 
 * and exerciseToEdit state as prop to EditExercisePage
 */
function App() {
  const [exerciseToEdit, setExerciseToEdit] = useState([]);

  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <h1>Exercise Tracker</h1>
          <p>Use this app to add, edit, and delete your exercises</p>
        </header>
        <div className="content-wrap">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage setExerciseToEdit={setExerciseToEdit}/>}></Route>
          <Route path="/add-exercise" element={<AddExercisePage />}></Route>
          <Route path="/edit-exercise" element={<EditExercisePage exerciseToEdit={exerciseToEdit} />}></Route>
        </Routes>
        </div>
        <footer>
          <p>© 2023 Devri Anderson</p>
        </footer>
      </Router>
    </div>
  );
}

export default App;
