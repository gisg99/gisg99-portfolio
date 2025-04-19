import React from 'react';

function SpotifyEmbed() {
  return (
    <div className='w-full'>
      <iframe
        className="rounded-2xl w-full"
        src="https://open.spotify.com/embed/playlist/37i9dQZF1Eple4rii6Dy5e?utm_source=generator"
        width="100%"
        height="352"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title="Spotify Playlist"
      ></iframe>
    </div>
  );
}

export { SpotifyEmbed };