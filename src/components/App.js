import React from 'react';
import SongList from './songList';
import SongDetail from './songDetail';
import '../css/main.css';

const App = () => {
  return (
    <div className='container'>
        <SongList />      
        <SongDetail />
    </div>
  );
}

export default App;
