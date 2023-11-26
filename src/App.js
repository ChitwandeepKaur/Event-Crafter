import { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar.js'
import ComponentToShow from './components/ComponentToShow.js';

function App() {
  const [appState, changeAppState] = useState('ListingPage')

  return (
    <div>
      <Sidebar appState={appState} changeAppState = {changeAppState}/>
      <ComponentToShow appState={appState}/>
    </div>
  );
}

export default App;
