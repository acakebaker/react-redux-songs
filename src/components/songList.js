import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

const SongList = ({ songs, selectedSong, selectSong }) => {

   console.log(selectedSong);

   return (
      <div className='column-left'>
         {
            songs.map((song) => (
               <div className='list-divider' key={song.title}>
                  <div className='list-title'>{song.title}</div>
                     <button 
                        className={`list-button ${(selectedSong !== null) && (selectedSong.title === song.title) ? 'active' : ''}`} 
                        onClick={() => selectSong(song)}
                     >
                        {(selectedSong !== null) && (selectedSong.title) === song.title ? 'Selected' : 'Select'}
                     </button>
               </div>
            ))
         }
      </div>
   );


}

// Used to get the props from the store. Conventional Naming.
const mapStateToProps = state => {
   console.log(state.selectedSongReducer);
   return {
      songs: state.songListReducer, 
      selectedSong: state.selectedSongReducer
   };
};

export default connect(mapStateToProps, { selectSong })(SongList);