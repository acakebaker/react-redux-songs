import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {
   renderList() {
      const mappedSongs = this.props.songs;
      return mappedSongs.map(song => {
         return (
            <div className='list-divider' key={song.title}>
               <div className='list-title'>{song.title}</div>
               <button className='list-button' onClick={() => this.props.selectSong(song)}>Select</button>
            </div>
         );
      });
   };

   render() {
      return (
         <div className='column-left'>
            {this.renderList()}
         </div>
      );
   };
};

// Used to get the props from the store. Conventional Naming.
const mapStateToProps = state => {
   return { songs: state.songListReducer };
};

export default connect(mapStateToProps, { selectSong })(SongList);