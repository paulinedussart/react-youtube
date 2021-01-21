import React from 'react';

const VideoDetail = ({ video, word }) => {
  return (
    <div>
      <div className='ui divided items'>
        <div className='item'>
          <div className='content'>
            <h3 clh3ss='header'>{video.snippet.title}</h3>
            <div className='meta'>
              {console.log(new Date(video.snippet.publishedAt))}
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
