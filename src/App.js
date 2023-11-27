import { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar.js'
import ComponentToShow from './components/ComponentToShow.js';

function App() {
  const [appState, changeAppState] = useState('ListingPage')

  return (
    <div className='container-fluid'>
      <div className='row'>
      <Sidebar appState={appState} changeAppState = {changeAppState} className='col-lg-6'/>
      <ComponentToShow appState={appState} className='col-lg-6'/>
      </div>
    </div>
  );
}

export default App;
