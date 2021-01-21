import React from 'react';

const VideoDetail = ({ video, word }) => {
  return (
    <div className='ui segment video-block'>
      <div className='ui divided items'>
        <div className='video-iframe'>
          <iframe
            title={video.snippet.title}
            width='560'
            height='315'
            src={`https://www.youtube.com/embed/${video.id.videoId}`}
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
        </div>
        <div className='item'>
          <div className='content'>
            <h3 className='header'>{video.snippet.title}</h3>
            <div className='meta'>
              <span className='cinema'>
                {Math.floor(Math.random() * 5999) + 1} vues • {new Date(video.snippet.publishedAt).toDateString()}
              </span>
            </div>
            <div className='description'>{video.snippet.description}</div>
            <div className='extra'>
              <div className='ui pink label'>{word}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
