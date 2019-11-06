import React from 'react';
import SongList from './SongList'
import SelectedSong from './SelectedSong';

const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <SongList></SongList>
        </div>
        <div className="column eight wide">
          <SelectedSong></SelectedSong>
        </div>
      </div>
    </div>
  );
}

export default App;
