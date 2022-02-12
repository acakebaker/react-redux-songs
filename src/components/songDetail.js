import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
   // Displays when no song is selected.
   if(!song) {
      return (
         <div className='column-right'>
            <h3 className='detail-select'>Select a song.</h3>
         </div>
      );
   };

   // Gets the background image.
   const background = require(`../artwork/${song.artwork}`);

   return (
      <div className='column-right' style={{ backgroundImage: `url(${background})` }} >
         <div className='detail-blur'>
            <div className='detail-content'>
               <img className="detail-image" src={require(`../artwork/${song.artwork}`)} />
               <h2 className='detail-text'>{song.title}</h2>
               <p className='detail-text'><b>{song.artist}</b></p>
               <p className='detail-text'>{song.duration}</p>
            </div>
         </div>
      </div>
   );
};

// Used to get the props from the store. Conventional Naming.
const mapStateToProps = state => {
   return {
      song: state.selectedSongReducer
   };
};

export default connect(mapStateToProps)(SongDetail);