import React from 'react';

interface MusicPlayerProps {
  platform: string;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ platform }) => {
  const getEmbedUrl = () => {
    switch (platform) {
      case 'spotify':
        return 'https://open.spotify.com/embed/playlist/37i9dQZF1DX5KpP2LN299J';
      case 'youtube':
        return 'https://www.youtube.com/embed/videoseries?list=RDCLAK5uy_kmPRjHDEQLYbPz1AgxAihk8RKK1_FOyTg';
      case 'soundcloud':
        return 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/charts/top&hiding_related=false&show_comments=false&show_user=true&show_reposts=false&visual=true';
      default:
        return '';
    }
  };

  return (
    <div className="h-full w-full bg-gray-900">
      <iframe
        src={getEmbedUrl()}
        className="w-full h-full border-0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title={`${platform} player`}
      />
    </div>
  );
}

export default MusicPlayer;