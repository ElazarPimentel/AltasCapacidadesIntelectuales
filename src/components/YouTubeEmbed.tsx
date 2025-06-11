'use client';

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

interface YouTubeEmbedProps {
  id: string;
  title: string;
}

export default function YouTubeEmbed({ id, title }: YouTubeEmbedProps) {
  return (
    <div className="video-container">
      <LiteYouTubeEmbed
        id={id}
        title={title}
        poster="maxresdefault"
        noCookie={true}
      />
    </div>
  );
} 