import React from 'react';
import Sidebar from './components/sidebar/sidebar.component';
import DevCards from './components/dev-cards/dev-card.component';
import './global.css';
import './app.css';

function App() {
  return (
    <div id='app'>
        <Sidebar />
        <DevCards />
    </div>
  );
}

export default App;
