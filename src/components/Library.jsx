import React from 'react'
import LibrarySong from './LibrarySong'

const Library = ({ songs, setCurrentSong, audioRef, isPlaying, setSongs, libraryStatus }) => {

    return (
        <div className={`library ${libraryStatus ? "active-library" : ""}`}>
            <h2>Library</h2>
            <div className="library-songs">
                {songs.map((song) => (
                    <LibrarySong
                        audioRef={audioRef}
                        key={song.id}
                        id={song.id}
                        songs={songs}
                        setCurrentSong={setCurrentSong}
                        song={song} 
                        isPlaying={isPlaying}
                        setSongs={setSongs}
                    />
                ))}
            </div>
            <div className="claims">
                <p>All music belongs to ChillHop.</p>
                <p>This product is a non-commercial product made for fun.</p>
                <p>Source: <a href="https://chillhop.com">www.chillhop.com</a></p>
            </div>
        </div>
    )
}

export default Library;
