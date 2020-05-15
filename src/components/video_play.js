import React from 'react';

const VideoPlay = ({ video }) => { // props를 video 변수 선언해 가져와라. ES6
    if (!video) {
        return <div>Loading...</div>;
    }

    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return(
        <div className='video-play col-md-8'>
            <div className='embed-responsive embed-responsive-16by9'>
                <iframe className='embed-responsive-item' src={url} title='video-play'></iframe>
            </div>
            <div className='details'>
                <div>{video.snippet.title}</div>
                <hr/>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    );
}

export default VideoPlay;