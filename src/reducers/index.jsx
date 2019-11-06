import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { id: 1, title: 'Wasting Love', duration: '4:05' },
        { id: 2, title: '2 minutes to midnight', duration: '3:02' },
        { id: 3, title: 'Erotomania', duration: '6:32' },
    ];
}

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selected: selectedSongReducer,
});