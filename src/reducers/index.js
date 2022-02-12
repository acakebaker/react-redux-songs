import { combineReducers } from 'redux';

const songListReducer = () => {
   return [
      { title: 'Heat Waves', artist: 'Glass Animals', duration: '3:59', artwork: 'heatwaves.jpeg' },
      { title: 'Ghost', artist: 'Justin Bieber', duration: '2:33', artwork: 'ghost.jpeg' },
      { title: 'MEMORIES!', artist: '347aidan', duration: '2:18', artwork: 'memories.png' },
      { title: 'Sacrifice', artist: 'The Weeknd', duration: '3:08', artwork: 'sacrifice.jpeg' },
      { title: 'Kill V. Maim', artist: 'Grimes', duration: '4:06', artwork: 'kill-v-maim.jpg' },
      { title: 'Hope', artist: 'XXXTENTACION', duration: '1:50', artwork: 'hope.png' },
      { title: 'City of Gods', artist: 'Fivio Foreign, Kanye West, Alicia Keys', duration: '4:16', artwork: 'city-of-gods.jpeg' },
      { title: '1400 / 999 Freestyle', artist: 'Trippie Redd, Juice Wrld', duration: '2:55', artwork: '1400.png' },
      { title: 'Broadway Girls', artist: 'Lil Durk, Morgan Wallen', duration: '3:05', artwork: 'broadway-girls.jpeg' }
   ];
};

const selectedSongReducer = (selectedSong = null, action) => {
   if(action.type === 'SONG_SELECTED') {
      return action.payload;
   };

   return selectedSong;
};

export default combineReducers({
   songListReducer, 
   selectedSongReducer
});