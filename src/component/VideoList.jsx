import React from 'react';
import '../style/VideoItem.css';

const VideoList = ({ videos }) => {
  return (
    <div className='ui divided relaxed list'>
      {videos.map((video) => (
        <VideoItem
          key={video.id.videoId}
          title={video.snippet.title}
          description={video.snippet.description}
          photo={video.snippet.thumbnails.high.url}
        />
      ))}
    </div>
  );
};
export default VideoList;

const VideoItem = ({ title, description, photo }) => {
  return (
    <div id='video-item' className='item'>
      <img aria-hidden='true' className='ui image' src={photo} alt={description} />
      <div id='video-content' className='content '>
        <div className='header'>{title}</div>
        <div className='description'>{description}</div>
      </div>
    </div>
  );
};
