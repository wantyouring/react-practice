import React from 'react';
import GoogleMap from './components/google_map';

function App() {
  return (
    <div className="App">
      <GoogleMap lat={35.907757} lng={127.766922} zoom={5}/>
    </div>
  );
}

export default App;
