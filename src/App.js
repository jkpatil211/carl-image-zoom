import './App.css';
import { useState } from 'react';
import ImageViewerTray from './components/ImageViewerTray';

function App() {

  return (
    <div className="App">
      <h2>OpenSeaDragon sync demo</h2>
     
      <ImageViewerTray />
    </div>
  );
}

export default App;
